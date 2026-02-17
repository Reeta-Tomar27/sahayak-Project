import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";

export default function DonorProfile() {
  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account settings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              RK
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Rajesh Kumar</h3>
            <p className="text-gray-600 mb-2">Generous Donor</p>
            <p className="text-sm text-gray-500 mb-6">Member since Feb 2026</p>
            <button className="w-full py-2 border-2 border-[#2563EB] text-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
              <Edit size={18} />
              Edit Profile
            </button>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="text-[#2563EB]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium text-gray-900">Rajesh Kumar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#10B981]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-medium text-gray-900">rajesh.kumar@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#F59E0B]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-medium text-gray-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#8B5CF6]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Badge */}
        <div className="bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Contribution Badge</h2>
          <div className="flex items-center gap-6">
            <div className="text-6xl">🏆</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Gold Contributor</h3>
              <p className="text-white/80 mb-4">You've donated over ₹1,00,000 and impacted 100+ lives</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-white/80">Total Donated</p>
                  <p className="font-semibold">₹1,25,000</p>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-white/80">Lives Impacted</p>
                  <p className="font-semibold">120+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
