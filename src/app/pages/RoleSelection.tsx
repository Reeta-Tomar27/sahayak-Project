import { Link } from "react-router";
import { Users, Heart, Home, Gift, User, Briefcase } from "lucide-react";

const roles = [
  {
    icon: <Users size={48} />,
    title: "Specially-Abled Individual",
    description: "Access OTM maps, plan trips, and book assistants",
    color: "#2563EB",
    path: "/signup?role=specially-abled",
  },
  {
    icon: <Heart size={48} />,
    title: "Senior Citizen",
    description: "Book caretakers, share stories, and connect",
    color: "#10B981",
    path: "/signup?role=senior-citizen",
  },
  {
    icon: <Home size={48} />,
    title: "Orphan Home",
    description: "Manage donations and organize learning sessions",
    color: "#F59E0B",
    path: "/signup?role=orphan-home",
  },
  {
    icon: <Gift size={48} />,
    title: "Donor / Volunteer",
    description: "Explore opportunities and make contributions",
    color: "#8B5CF6",
    path: "/signup?role=donor",
  },
  {
    icon: <User size={48} />,
    title: "Caretaker",
    description: "Offer professional care services",
    color: "#EC4899",
    path: "/signup?role=caretaker",
  },
  {
    icon: <Briefcase size={48} />,
    title: "Government Partner",
    description: "Coordinate schemes and support programs",
    color: "#06B6D4",
    path: "/signup?role=government",
  },
];

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center py-16 px-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">Sahayak</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Role</h1>
          <p className="text-xl text-gray-600">Select the role that best describes you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <Link
              key={idx}
              to={role.path}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#2563EB] hover:shadow-xl transition-all group"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${role.color}20`, color: role.color }}
              >
                {role.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{role.title}</h3>
              <p className="text-gray-600 mb-6">{role.description}</p>
              <button
                className="w-full py-3 border-2 rounded-xl font-semibold transition-all group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB]"
                style={{ borderColor: role.color, color: role.color }}
              >
                Continue
              </button>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#2563EB] font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
