import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";

export default function SAProfile() {
  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account settings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#2563EB] to-[#10B981] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              JD
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
            <p className="text-gray-600 mb-6">Member since Feb 2026</p>
            <button className="w-full py-2 border-2 border-[#2563EB] text-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
              <Edit size={18} />
              Edit Profile
            </button>
          </div>

          {/* Details */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="text-[#2563EB]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium text-gray-900">John Doe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#10B981]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-medium text-gray-900">john.doe@example.com</p>
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
                  <p className="font-medium text-gray-900">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
