import { DashboardLayout, seniorCitizenMenu } from "../../components/DashboardLayout";
import { Search, Star, Calendar, Award } from "lucide-react";
import { useState } from "react";

export default function BookCaretaker() {
  const [searchQuery, setSearchQuery] = useState("");

  const caretakers = [
    { name: "Dr. Meena Patel", specialty: "Elder Care Specialist", rating: 4.9, experience: "12 years", availability: "Available Today", certifications: ["Certified Nurse", "Elder Care"], image: "👩‍⚕️" },
    { name: "Suresh Kumar", specialty: "Personal Care Assistant", rating: 4.8, experience: "8 years", availability: "Available Tomorrow", certifications: ["First Aid", "CPR"], image: "👨‍⚕️" },
    { name: "Lakshmi Reddy", specialty: "Medical Caretaker", rating: 4.9, experience: "15 years", availability: "Available Today", certifications: ["RN License", "Geriatric Care"], image: "👩‍⚕️" },
    { name: "Ramesh Singh", specialty: "Companion Caretaker", rating: 4.7, experience: "6 years", availability: "Available in 2 days", certifications: ["CPR", "Elder Care"], image: "👨‍⚕️" },
  ];

  return (
    <DashboardLayout role="Senior Citizen" menuItems={seniorCitizenMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Caretaker</h1>
          <p className="text-gray-600">Find professional care support</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, specialty, or location..."
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        {/* Caretakers Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caretakers.map((caretaker, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10B981]/20 to-[#2563EB]/20 rounded-2xl flex items-center justify-center text-3xl">
                  {caretaker.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{caretaker.name}</h3>
                  <p className="text-gray-600">{caretaker.specialty}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] px-2 py-1 rounded-lg">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-semibold">{caretaker.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{caretaker.experience} exp</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span>{caretaker.availability}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caretaker.certifications.map((cert, cidx) => (
                    <span key={cidx} className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded-lg flex items-center gap-1">
                      <Award size={12} />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
