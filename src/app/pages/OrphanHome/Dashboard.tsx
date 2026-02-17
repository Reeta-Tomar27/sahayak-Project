import { DashboardLayout, orphanHomeMenu } from "../../components/DashboardLayout";
import { Gift, Users, TrendingUp, Calendar } from "lucide-react";

export default function OrphanHomeDashboard() {
  return (
    <DashboardLayout role="Orphan Home" menuItems={orphanHomeMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                <Gift className="text-[#F59E0B]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+23%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹2.5L</h3>
            <p className="text-sm text-gray-600">Total Donations</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Users className="text-[#2563EB]" size={24} />
              </div>
              <span className="text-sm text-blue-600 font-semibold">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">68</h3>
            <p className="text-sm text-gray-600">Active Donors</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-[#10B981]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+5</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
            <p className="text-sm text-gray-600">Learning Sessions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#8B5CF6]" size={24} />
              </div>
              <span className="text-sm text-purple-600 font-semibold">Growing</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">45</h3>
            <p className="text-sm text-gray-600">Children Supported</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Manage Donations</h3>
            <p className="text-white/80 mb-4">Track and organize contributions</p>
            <button className="px-6 py-2 bg-white text-[#F59E0B] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              View All
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Learning Sessions</h3>
            <p className="text-white/80 mb-4">Schedule educational activities</p>
            <button className="px-6 py-2 bg-white text-[#10B981] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Schedule
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Connect with Donors</h3>
            <p className="text-white/80 mb-4">Build meaningful partnerships</p>
            <button className="px-6 py-2 bg-white text-[#2563EB] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Explore
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "New donation received", detail: "₹25,000 from Rajesh Kumar", time: "2 hours ago" },
              { action: "Learning session completed", detail: "Mathematics - Grade 5", time: "1 day ago" },
              { action: "New donor registered", detail: "Priya Sharma joined", time: "2 days ago" },
              { action: "Government scheme approved", detail: "Educational Support Grant", time: "3 days ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.detail}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
