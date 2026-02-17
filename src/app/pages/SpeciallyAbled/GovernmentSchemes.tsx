import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { FileText, ExternalLink, Download } from "lucide-react";

export default function SAGovernmentSchemes() {
  const schemes = [
    { name: "Disability Pension Scheme", eligibility: "40% disability or above", benefit: "₹1,500/month", status: "Active" },
    { name: "Accessible India Campaign", eligibility: "All specially-abled", benefit: "Infrastructure support", status: "Ongoing" },
    { name: "Scholarship for Students", eligibility: "Students with disabilities", benefit: "Up to ₹50,000/year", status: "Active" },
    { name: "Employment Support Scheme", eligibility: "Job seekers", benefit: "Skill training & placement", status: "Active" },
  ];

  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Schemes</h1>
          <p className="text-gray-600">Explore available benefits and programs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                  <FileText className="text-[#2563EB]" size={24} />
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
                <button className="flex-1 py-2 border-2 border-[#2563EB] text-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  Learn More
                </button>
                <button className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-xl hover:bg-[#2563EB]/20 transition-colors">
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
