import { Link, useParams } from "react-router";
import { Navbar } from "../../components/Navbar";
import { FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { ALL_SCHEMES_LIST } from "../../data/schemesData";

export default function SchemesList() {
  const { role } = useParams<{ role: string }>();

  // Mock data tailored to the role
  const allSchemes = ALL_SCHEMES_LIST;

  const schemes = allSchemes[role || "specially-abled"] || [];
  
  const roleTitles: Record<string, string> = {
    "specially-abled": "Specially-Abled Schemes",
    "senior-citizen": "Senior Citizen Schemes",
    "orphan-home": "Orphan Home Schemes",
    "donor": "Donor & Volunteer Incentives"
  };

  const title = roleTitles[role || "specially-abled"] || "Government Schemes";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <Link to="/government-schemes" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2563EB] mb-8 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Categories
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-lg text-gray-600">Browse the list of available government schemes and benefits.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                  <FileText className="text-[#2563EB]" size={28} />
                </div>
                <span className={`px-4 py-1.5 text-sm rounded-lg font-semibold ${
                  scheme.status === "Active" ? "bg-[#10B981]/10 text-[#10B981]" : "bg-[#F59E0B]/10 text-[#F59E0B]"
                }`}>
                  {scheme.status}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-xl mb-4">{scheme.name}</h3>
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">Eligibility</span>
                  <span className="text-gray-900">{scheme.eligibility}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">Key Benefit</span>
                  <span className="text-gray-900">{scheme.benefit}</span>
                </div>
              </div>
              <Link 
                to={`/government-schemes/${role}/${scheme.id}`}
                className="w-full py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold flex items-center justify-center gap-2"
              >
                View Details <ArrowRight size={18} />
              </Link>
            </div>
          ))}
          {schemes.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No schemes currently listed for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
