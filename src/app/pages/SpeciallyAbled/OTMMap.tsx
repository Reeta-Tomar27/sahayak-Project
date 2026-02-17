import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { Search, MapPin, Plus, Filter } from "lucide-react";
import { useState } from "react";

export default function OTMMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Places" },
    { id: "restaurant", label: "Restaurants" },
    { id: "hospital", label: "Hospitals" },
    { id: "mall", label: "Shopping Malls" },
    { id: "park", label: "Parks" },
  ];

  const locations = [
    { name: "Central Mall", category: "mall", rating: 4.8, features: ["Wheelchair Access", "Accessible Restrooms", "Ramps"], distance: "1.2 km" },
    { name: "City Hospital", category: "hospital", rating: 4.9, features: ["Wheelchair Access", "Accessible Parking", "Elevators"], distance: "2.5 km" },
    { name: "Garden Restaurant", category: "restaurant", rating: 4.6, features: ["Wheelchair Access", "Braille Menu", "Wide Entrance"], distance: "0.8 km" },
    { name: "Marine Park", category: "park", rating: 4.7, features: ["Paved Pathways", "Accessible Restrooms", "Ramps"], distance: "3.2 km" },
  ];

  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">OTM Accessibility Map</h1>
          <p className="text-gray-600">Discover accessible places near you</p>
        </div>

        <div className="flex gap-6">
          {/* Left Filter Panel */}
          <div className="w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Filter size={20} />
              Filters
            </h3>

            {/* Location Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Location
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter location..."
                  className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Accessibility Features */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Features
              </label>
              <div className="space-y-2">
                {["Wheelchair Access", "Accessible Restrooms", "Ramps", "Elevators", "Braille Menu"].map((feature) => (
                  <label key={feature} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Map Area */}
          <div className="flex-1 space-y-6">
            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-96 relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="text-[#2563EB] mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700">Interactive Map View</p>
                  <p className="text-sm text-gray-500 mt-2">Map showing accessible locations</p>
                </div>
              </div>

              {/* Floating Add Button */}
              <button className="absolute bottom-8 right-8 w-14 h-14 bg-[#2563EB] text-white rounded-full shadow-lg hover:bg-[#1e40af] transition-colors flex items-center justify-center">
                <Plus size={24} />
              </button>
            </div>

            {/* Location List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Accessible Places</h3>
              <div className="space-y-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="p-4 border rounded-xl hover:border-[#2563EB] transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{location.name}</h4>
                        <p className="text-sm text-gray-500">{location.distance} away</p>
                      </div>
                      <div className="flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-lg">
                        <span className="font-semibold">{location.rating}</span>
                        <span className="text-xs">★</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature, fidx) => (
                        <span key={fidx} className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded-lg">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
