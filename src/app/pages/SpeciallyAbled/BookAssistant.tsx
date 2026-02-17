import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { Search, Star, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export default function BookAssistant() {
  const [searchQuery, setSearchQuery] = useState("");

  const assistants = [
    { name: "Dr. Priya Sharma", specialty: "Mobility Support", rating: 4.9, experience: "8 years", availability: "Available Today", image: "👩‍⚕️" },
    { name: "Rajesh Kumar", specialty: "Personal Care", rating: 4.8, experience: "5 years", availability: "Available Tomorrow", image: "👨‍⚕️" },
    { name: "Anjali Desai", specialty: "Medical Assistance", rating: 4.9, experience: "10 years", availability: "Available Today", image: "👩‍⚕️" },
    { name: "Vikram Singh", specialty: "Mobility Support", rating: 4.7, experience: "6 years", availability: "Available in 2 days", image: "👨‍⚕️" },
  ];

  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Assistant</h1>
          <p className="text-gray-600">Connect with care professionals</p>
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

        {/* Assistants Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {assistants.map((assistant, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-2xl flex items-center justify-center text-3xl">
                  {assistant.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{assistant.name}</h3>
                  <p className="text-gray-600">{assistant.specialty}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] px-2 py-1 rounded-lg">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-semibold">{assistant.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{assistant.experience} exp</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{assistant.availability}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
