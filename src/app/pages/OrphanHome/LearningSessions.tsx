import { DashboardLayout, orphanHomeMenu } from "../../components/DashboardLayout";
import { Calendar, Clock, Users, Plus } from "lucide-react";

export default function LearningSessions() {
  const sessions = [
    { title: "Mathematics - Grade 5", instructor: "Mrs. Sharma", time: "10:00 AM - 11:00 AM", date: "Feb 16, 2026", students: 12, status: "Scheduled" },
    { title: "English Literature", instructor: "Mr. Patel", time: "11:30 AM - 12:30 PM", date: "Feb 16, 2026", students: 15, status: "Scheduled" },
    { title: "Science Experiments", instructor: "Dr. Kumar", time: "2:00 PM - 3:00 PM", date: "Feb 17, 2026", students: 10, status: "Scheduled" },
    { title: "Art & Craft", instructor: "Ms. Reddy", time: "3:30 PM - 4:30 PM", date: "Feb 17, 2026", students: 18, status: "Completed" },
  ];

  return (
    <DashboardLayout role="Orphan Home" menuItems={orphanHomeMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Sessions</h1>
            <p className="text-gray-600">Schedule and manage educational activities</p>
          </div>
          <button className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold flex items-center gap-2">
            <Plus size={20} />
            Schedule Session
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Total Sessions</p>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">This Week</p>
            <p className="text-3xl font-bold text-gray-900">8</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Students Enrolled</p>
            <p className="text-3xl font-bold text-gray-900">45</p>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map((session, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{session.title}</h3>
                  <p className="text-gray-600">Instructor: {session.instructor}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-lg font-semibold ${
                  session.status === "Scheduled"
                    ? "bg-[#2563EB]/10 text-[#2563EB]"
                    : "bg-[#10B981]/10 text-[#10B981]"
                }`}>
                  {session.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={18} />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={18} />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={18} />
                  <span>{session.students} students</span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-2 border-2 border-[#10B981] text-[#10B981] rounded-xl hover:bg-[#10B981] hover:text-white transition-colors font-semibold">
                  View Details
                </button>
                <button className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-xl hover:bg-[#2563EB]/20 transition-colors font-semibold">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
