import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { TrendingUp, Target, Clock } from "lucide-react";

export default function FundProjects() {
  const projects = [
    { title: "New Computer Lab", orphanage: "Sunrise Home", goal: 500000, raised: 320000, donors: 45, deadline: "30 days left", image: "💻" },
    { title: "Library Expansion", orphanage: "Hope Foundation", goal: 300000, raised: 245000, donors: 38, deadline: "15 days left", image: "📚" },
    { title: "Playground Development", orphanage: "Care Center", goal: 400000, raised: 180000, donors: 28, deadline: "45 days left", image: "⚽" },
    { title: "Medical Equipment", orphanage: "Future Home", goal: 600000, raised: 520000, donors: 62, deadline: "20 days left", image: "🏥" },
  ];

  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fund Projects</h1>
          <p className="text-gray-600">Support specific development projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const percentage = (project.raised / project.goal) * 100;
            
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/20 to-[#F59E0B]/20 rounded-2xl flex items-center justify-center text-3xl">
                    {project.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.orphanage}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold text-gray-900">{percentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#2563EB] to-[#10B981] h-3 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Target size={16} />
                      <span>Goal</span>
                    </div>
                    <p className="font-semibold text-gray-900">₹{(project.goal / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <TrendingUp size={16} />
                      <span>Raised</span>
                    </div>
                    <p className="font-semibold text-[#10B981]">₹{(project.raised / 1000).toFixed(0)}K</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-600">{project.donors} donors</span>
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    <Clock size={16} />
                    <span className="font-semibold">{project.deadline}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold">
                  Fund This Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
