import { Link } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Users, Heart, Home } from "lucide-react";

export default function RoleSelection() {
  const roles = [
    {
      id: "specially-abled",
      title: "Specially-Abled",
      description:
        "Explore schemes like Disability Pension, Accessible India, and Scholarships.",
      icon: Users,
      color: "bg-[#2563EB]",
      lightColor: "bg-[#2563EB]/10",
      textColor: "text-[#2563EB]",
    },
    {
      id: "senior-citizen",
      title: "Senior Citizen",
      description:
        "Discover healthcare, pension, and specialized welfare programs for the elderly.",
      icon: Heart,
      color: "bg-[#10B981]",
      lightColor: "bg-[#10B981]/10",
      textColor: "text-[#10B981]",
    },
    {
      id: "orphan-home",
      title: "Orphan Home",
      description:
        "Find institutional support, grants, and child welfare schemes.",
      icon: Home,
      color: "bg-[#F59E0B]",
      lightColor: "bg-[#F59E0B]/10",
      textColor: "text-[#F59E0B]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="pt-32 pb-20 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Schemes
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your category to explore relevant welfare programs,
            financial aid, and support initiatives provided by the government.
          </p>
        </div>

        {/* GRID FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <Link
                key={role.id}
                to={`/government-schemes/${role.id}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all group flex flex-col h-full"
              >
                <div
                  className={`w-14 h-14 ${role.lightColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={role.textColor} size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {role.title}
                </h3>

                <p className="text-gray-600 flex-grow">
                  {role.description}
                </p>

                <div
                  className={`mt-6 inline-flex items-center gap-2 ${role.textColor} font-semibold group-hover:gap-3 transition-all`}
                >
                  View Schemes →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}