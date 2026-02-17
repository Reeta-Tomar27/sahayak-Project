import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { TrendingUp, Users, MapPin, Calendar } from "lucide-react";

export default function SpeciallyAbledDashboard() {
  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-[#2563EB]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">156</h3>
            <p className="text-sm text-gray-600">Accessible Places</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                <Users className="text-[#10B981]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+8%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24</h3>
            <p className="text-sm text-gray-600">Available Assistants</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-[#F59E0B]" size={24} />
              </div>
              <span className="text-sm text-blue-600 font-semibold">5 Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
            <p className="text-sm text-gray-600">Upcoming Trips</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#8B5CF6]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">98%</h3>
            <p className="text-sm text-gray-600">Community Score</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Tagged new accessible location", location: "Central Mall, Mumbai", time: "2 hours ago" },
              { action: "Completed trip", location: "Marine Drive to Worli", time: "1 day ago" },
              { action: "Booked assistant", location: "Dr. Sharma - Feb 18, 2026", time: "2 days ago" },
              { action: "Joined community discussion", location: "Best wheelchair-friendly restaurants", time: "3 days ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.location}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Explore OTM Map</h3>
            <p className="text-white/80 mb-4">Find accessible places near you</p>
            <button className="px-6 py-2 bg-white text-[#2563EB] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Open Map
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Plan a Trip</h3>
            <p className="text-white/80 mb-4">Get accessible route suggestions</p>
            <button className="px-6 py-2 bg-white text-[#10B981] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Plan Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Book Assistant</h3>
            <p className="text-white/80 mb-4">Connect with care professionals</p>
            <button className="px-6 py-2 bg-white text-[#F59E0B] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
