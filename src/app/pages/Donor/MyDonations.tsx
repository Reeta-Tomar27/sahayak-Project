import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { Download, CheckCircle, Clock } from "lucide-react";

export default function MyDonations() {
  const donations = [
    { id: "DON-2026-045", type: "Money", recipient: "Sunrise Home", amount: "₹25,000", date: "Feb 15, 2026", status: "Completed", receipt: true },
    { id: "DON-2026-042", type: "Items", recipient: "Hope Foundation", amount: "Books (50)", date: "Feb 10, 2026", status: "Delivered", receipt: true },
    { id: "DON-2026-038", type: "Project", recipient: "Care Center - Computer Lab", amount: "₹50,000", date: "Feb 5, 2026", status: "Completed", receipt: true },
    { id: "DON-2026-035", type: "Event", recipient: "Future Home - Sports Day", amount: "₹15,000", date: "Feb 1, 2026", status: "Processing", receipt: false },
    { id: "DON-2026-031", type: "Money", recipient: "Sunrise Home", amount: "₹10,000", date: "Jan 25, 2026", status: "Completed", receipt: true },
  ];

  const stats = {
    totalDonations: "₹1,25,000",
    thisMonth: "₹50,000",
    organizations: 4,
    impact: 120,
  };

  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Donations</h1>
          <p className="text-gray-600">Track your contribution history</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] p-6 rounded-2xl text-white">
            <p className="text-white/80 text-sm mb-2">Total Donated</p>
            <p className="text-3xl font-bold">{stats.totalDonations}</p>
          </div>
          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] p-6 rounded-2xl text-white">
            <p className="text-white/80 text-sm mb-2">This Month</p>
            <p className="text-3xl font-bold">{stats.thisMonth}</p>
          </div>
          <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-6 rounded-2xl text-white">
            <p className="text-white/80 text-sm mb-2">Organizations</p>
            <p className="text-3xl font-bold">{stats.organizations}</p>
          </div>
          <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-6 rounded-2xl text-white">
            <p className="text-white/80 text-sm mb-2">Lives Impacted</p>
            <p className="text-3xl font-bold">{stats.impact}+</p>
          </div>
        </div>

        {/* Donation History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Donation History</h2>
            <button className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-[#2563EB] transition-colors flex items-center gap-2 text-sm font-semibold">
              <Download size={18} />
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Recipient</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{donation.id}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded-lg">
                        {donation.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{donation.recipient}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{donation.amount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{donation.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs rounded-lg font-semibold flex items-center gap-1 w-fit ${
                        donation.status === "Completed" || donation.status === "Delivered"
                          ? "bg-[#10B981]/10 text-[#10B981]"
                          : "bg-[#F59E0B]/10 text-[#F59E0B]"
                      }`}>
                        {donation.status === "Completed" || donation.status === "Delivered" ? (
                          <CheckCircle size={14} />
                        ) : (
                          <Clock size={14} />
                        )}
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {donation.receipt ? (
                        <button className="text-[#2563EB] hover:underline text-sm font-semibold flex items-center gap-1">
                          <Download size={16} />
                          Download
                        </button>
                      ) : (
                        <span className="text-sm text-gray-400">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Impact</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#2563EB]/5 rounded-xl">
              <span className="text-gray-700">Children supported through education</span>
              <span className="font-bold text-gray-900">45 students</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#10B981]/5 rounded-xl">
              <span className="text-gray-700">Items donated</span>
              <span className="font-bold text-gray-900">150+ items</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F59E0B]/5 rounded-xl">
              <span className="text-gray-700">Events sponsored</span>
              <span className="font-bold text-gray-900">3 events</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
