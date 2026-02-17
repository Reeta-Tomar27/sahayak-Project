import { DashboardLayout, donorMenu } from "../../components/DashboardLayout";
import { Package, Upload } from "lucide-react";

export default function DonateItems() {
  const categories = [
    { name: "Educational Materials", icon: "📚", description: "Books, stationery, learning aids" },
    { name: "Clothing", icon: "👕", description: "Clothes for all age groups" },
    { name: "Food Items", icon: "🍎", description: "Non-perishable food supplies" },
    { name: "Toys & Games", icon: "🎮", description: "Educational toys and games" },
    { name: "Sports Equipment", icon: "⚽", description: "Sports gear and equipment" },
    { name: "Medical Supplies", icon: "💊", description: "First aid and health items" },
  ];

  return (
    <DashboardLayout role="Donor" menuItems={donorMenu}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Donate Items</h1>
          <p className="text-gray-600">Contribute physical items to orphan homes</p>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Item Donation Form</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Orphanage
                </label>
                <select className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
                  <option>Select an orphanage</option>
                  <option>Sunrise Home - Bangalore</option>
                  <option>Hope Foundation - Mumbai</option>
                  <option>Care Center - Delhi</option>
                  <option>Future Home - Chennai</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Category
                </label>
                <select className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
                  <option>Select category</option>
                  <option>Educational Materials</option>
                  <option>Clothing</option>
                  <option>Food Items</option>
                  <option>Toys & Games</option>
                  <option>Sports Equipment</option>
                  <option>Medical Supplies</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item Description
              </label>
              <textarea
                placeholder="Describe the items you wish to donate..."
                rows={4}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Number of items"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition
                </label>
                <select className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
                  <option>New</option>
                  <option>Like New</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Photos (Optional)
              </label>
              <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-[#2563EB] transition-colors cursor-pointer">
                <Upload size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <button className="w-full py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold">
              Submit Donation
            </button>
          </div>
        </div>

        {/* Category Guide */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What Can You Donate?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
