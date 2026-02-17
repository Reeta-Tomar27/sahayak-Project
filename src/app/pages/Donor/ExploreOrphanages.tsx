import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { Search, MapPin, Users, Heart, Filter } from "lucide-react";
import { useState } from "react";

export default function ExploreOrphanages() {
  const [searchQuery, setSearchQuery] = useState("");

  const orphanages = [
    { name: "Sunrise Home", location: "Bangalore, Karnataka", children: 45, needs: "Educational Materials", image: "🏠", verified: true },
    { name: "Hope Foundation", location: "Mumbai, Maharashtra", children: 60, needs: "Food & Clothing", image: "🏡", verified: true },
    { name: "Care Center", location: "Delhi, India", children: 38, needs: "Medical Support", image: "🏘️", verified: true },
    { name: "Future Home", location: "Chennai, Tamil Nadu", children: 52, needs: "Learning Resources", image: "🏠", verified: true },
  ];

  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Orphanages</h1>
          <p className="text-gray-600">Find and support orphan homes</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, location, or need..."
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
            <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-[#2563EB] transition-colors flex items-center gap-2">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        {/* Orphanage Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {orphanages.map((orphanage, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-2xl flex items-center justify-center text-3xl">
                  {orphanage.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{orphanage.name}</h3>
                    {orphanage.verified && (
                      <span className="px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-xs rounded-lg font-semibold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{orphanage.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users size={18} className="text-gray-400" />
                  <span className="text-gray-900 font-medium">{orphanage.children} children</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart size={18} className="text-red-500" />
                  <span className="text-gray-900">Current Need: <span className="font-medium">{orphanage.needs}</span></span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold">
                  Donate Now
                </button>
                <button className="px-4 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
