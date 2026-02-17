import { DashboardLayout, seniorCitizenMenu } from "../../components/DashboardLayout";
import { Heart, Users, Calendar, MessageSquare } from "lucide-react";

export default function SeniorCitizenDashboard() {
  return (
    <DashboardLayout role="Senior Citizen" menuItems={seniorCitizenMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                <Users className="text-[#10B981]" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">Available</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">18</h3>
            <p className="text-sm text-gray-600">Caretakers Online</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-[#2563EB]" size={24} />
              </div>
              <span className="text-sm text-blue-600 font-semibold">Next Visit</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
            <p className="text-sm text-gray-600">Upcoming Appointments</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
                <Heart className="text-[#F59E0B]" size={24} />
              </div>
              <span className="text-sm text-orange-600 font-semibold">+15</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">42</h3>
            <p className="text-sm text-gray-600">Stories Shared</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="text-[#8B5CF6]" size={24} />
              </div>
              <span className="text-sm text-purple-600 font-semibold">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">156</h3>
            <p className="text-sm text-gray-600">Community Members</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Book Caretaker</h3>
            <p className="text-white/80 mb-4">Find professional care support</p>
            <button className="px-6 py-2 bg-white text-[#10B981] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Book Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Share Your Story</h3>
            <p className="text-white/80 mb-4">Inspire others with your experiences</p>
            <button className="px-6 py-2 bg-white text-[#F59E0B] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              Share Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-white/80 mb-4">Connect with fellow seniors</p>
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
              { action: "Shared a story", detail: "My journey through life", time: "3 hours ago" },
              { action: "Booked caretaker", detail: "Dr. Priya Sharma - Feb 18", time: "1 day ago" },
              { action: "Joined discussion", detail: "Healthy living tips", time: "2 days ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2"></div>
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
