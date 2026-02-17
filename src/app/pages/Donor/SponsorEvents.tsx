import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { Calendar, MapPin, Users, IndianRupee } from "lucide-react";

export default function SponsorEvents() {
  const events = [
    { title: "Annual Sports Day", orphanage: "Sunrise Home", date: "March 5, 2026", location: "Bangalore", participants: 45, budget: "₹50,000", image: "🏆" },
    { title: "Children's Day Celebration", orphanage: "Hope Foundation", date: "March 10, 2026", location: "Mumbai", participants: 60, budget: "₹75,000", image: "🎉" },
    { title: "Art & Craft Exhibition", orphanage: "Care Center", date: "March 15, 2026", location: "Delhi", participants: 38, budget: "₹35,000", image: "🎨" },
    { title: "Science Fair", orphanage: "Future Home", date: "March 20, 2026", location: "Chennai", participants: 52, budget: "₹60,000", image: "🔬" },
  ];

  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sponsor Events</h1>
          <p className="text-gray-600">Support special events and celebrations</p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B]/20 to-[#10B981]/20 rounded-2xl flex items-center justify-center text-3xl">
                  {event.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.orphanage}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={18} className="text-gray-400" />
                  <span className="text-gray-900">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-gray-400" />
                  <span className="text-gray-900">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users size={18} className="text-gray-400" />
                  <span className="text-gray-900">{event.participants} participants expected</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <IndianRupee size={18} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">Budget: {event.budget}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-[#F59E0B] text-white rounded-xl hover:bg-[#D97706] transition-colors font-semibold">
                  Sponsor Event
                </button>
                <button className="px-4 py-3 border-2 border-[#F59E0B] text-[#F59E0B] rounded-xl hover:bg-[#F59E0B] hover:text-white transition-colors font-semibold">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Sponsorship Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 rounded-xl hover:border-[#F59E0B] transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="font-semibold text-gray-900 mb-2">Bronze Sponsor</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">₹10,000</p>
              <p className="text-sm text-gray-600">Logo on materials</p>
            </div>
            <div className="text-center p-6 border-2 border-[#F59E0B] rounded-xl">
              <div className="text-4xl mb-3">🥈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Silver Sponsor</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">₹25,000</p>
              <p className="text-sm text-gray-600">Logo + Social media mention</p>
            </div>
            <div className="text-center p-6 border-2 rounded-xl hover:border-[#F59E0B] transition-colors cursor-pointer">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="font-semibold text-gray-900 mb-2">Gold Sponsor</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">₹50,000</p>
              <p className="text-sm text-gray-600">All benefits + Stage presence</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
