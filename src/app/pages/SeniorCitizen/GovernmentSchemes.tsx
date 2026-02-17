import { DashboardLayout, seniorCitizenMenu } from "../../components/DashboardLayout";
import { FileText, ExternalLink, Download } from "lucide-react";

export default function SCGovernmentSchemes() {
  const schemes = [
    { name: "Senior Citizen Savings Scheme", eligibility: "60 years or above", benefit: "Interest: 8.2% per annum", status: "Active" },
    { name: "Pradhan Mantri Vaya Vandana Yojana", eligibility: "60 years or above", benefit: "Pension: ₹9,250/month", status: "Active" },
    { name: "National Programme for Health Care", eligibility: "All senior citizens", benefit: "Free health checkups", status: "Ongoing" },
    { name: "Railway Concession", eligibility: "60 years or above", benefit: "40% discount on tickets", status: "Active" },
  ];

  return (
    <DashboardLayout role="Senior Citizen" menuItems={seniorCitizenMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Schemes</h1>
          <p className="text-gray-600">Explore benefits designed for senior citizens</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                  <FileText className="text-[#10B981]" size={24} />
                </div>
                <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-sm rounded-lg font-semibold">
                  {scheme.status}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">{scheme.name}</h3>
              <div className="space-y-2 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Eligibility</p>
                  <p className="font-medium text-gray-900">{scheme.eligibility}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Benefit</p>
                  <p className="font-medium text-gray-900">{scheme.benefit}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-2 border-2 border-[#10B981] text-[#10B981] rounded-xl hover:bg-[#10B981] hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  Learn More
                </button>
                <button className="px-4 py-2 bg-[#10B981]/10 text-[#10B981] rounded-xl hover:bg-[#10B981]/20 transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
