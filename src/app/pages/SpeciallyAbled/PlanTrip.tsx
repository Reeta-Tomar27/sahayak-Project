import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";

export default function PlanTrip() {
  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Plan Trip</h1>
          <p className="text-gray-600">Get accessible route suggestions</p>
        </div>

        {/* Trip Planner Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Trip Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <input
                type="text"
                placeholder="Starting location"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <input
                type="text"
                placeholder="Destination"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>
          <button className="mt-6 px-8 py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors flex items-center gap-2">
            Find Accessible Routes <ArrowRight size={20} />
          </button>
        </div>

        {/* Suggested Routes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Suggested Routes</h2>
          <div className="space-y-4">
            {[
              { name: "Route 1: Via Central Road", time: "25 mins", features: ["Ramps available", "Wide sidewalks", "2 rest stops"] },
              { name: "Route 2: Via Marine Drive", time: "32 mins", features: ["Scenic route", "Accessible restrooms", "4 rest stops"] },
              { name: "Route 3: Via Highway", time: "20 mins", features: ["Fast route", "Limited accessibility"] },
            ].map((route, idx) => (
              <div key={idx} className="p-6 border-2 rounded-xl hover:border-[#2563EB] transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{route.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span>{route.time}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {route.features.map((feature, fidx) => (
                    <span key={fidx} className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-sm rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
