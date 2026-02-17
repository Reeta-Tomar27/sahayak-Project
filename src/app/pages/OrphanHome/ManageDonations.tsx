import { DashboardLayout, orphanHomeMenu } from "../../components/DashboardLayout";
import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";

export default function ManageDonations() {
  const [searchQuery, setSearchQuery] = useState("");

  const donations = [
    { id: "DON-001", donor: "Rajesh Kumar", amount: "₹25,000", type: "Money", date: "Feb 15, 2026", status: "Received" },
    { id: "DON-002", donor: "Priya Sharma", amount: "Books (50)", type: "Items", date: "Feb 14, 2026", status: "Received" },
    { id: "DON-003", donor: "Suresh Patel", amount: "₹10,000", type: "Money", date: "Feb 13, 2026", status: "Pending" },
    { id: "DON-004", donor: "Lakshmi Devi", amount: "Clothes (100)", type: "Items", date: "Feb 12, 2026", status: "Received" },
    { id: "DON-005", donor: "Vikram Singh", amount: "₹50,000", type: "Money", date: "Feb 10, 2026", status: "Received" },
  ];

  return (
    <DashboardLayout role="Orphan Home" menuItems={orphanHomeMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Donations</h1>
            <p className="text-gray-600">Track and organize all contributions</p>
          </div>
          <button className="px-6 py-3 bg-[#F59E0B] text-white rounded-xl hover:bg-[#D97706] transition-colors font-semibold flex items-center gap-2">
            <Download size={20} />
            Export Report
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by donor name, ID, or amount..."
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-[#2563EB] transition-colors flex items-center gap-2">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Total Received</p>
            <p className="text-3xl font-bold text-gray-900">₹2.5L</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">This Month</p>
            <p className="text-3xl font-bold text-gray-900">₹85K</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Active Donors</p>
            <p className="text-3xl font-bold text-gray-900">68</p>
          </div>
        </div>

        {/* Donations Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Donor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount/Items</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{donation.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{donation.donor}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{donation.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs rounded-lg ${
                        donation.type === "Money"
                          ? "bg-[#10B981]/10 text-[#10B981]"
                          : "bg-[#2563EB]/10 text-[#2563EB]"
                      }`}>
                        {donation.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{donation.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs rounded-lg font-semibold ${
                        donation.status === "Received"
                          ? "bg-[#10B981]/10 text-[#10B981]"
                          : "bg-[#F59E0B]/10 text-[#F59E0B]"
                      }`}>
                        {donation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
