import { DashboardLayout, orphanHomeMenu } from "../../components/DashboardLayout";
import { MessageSquare, ThumbsUp, MessageCircle } from "lucide-react";

export default function OHCommunity() {
  const discussions = [
    { title: "Best practices for child education", author: "Sunrise Home", replies: 28, likes: 54, time: "3 hours ago" },
    { title: "Organizing fundraising events", author: "Hope Foundation", replies: 42, likes: 87, time: "1 day ago" },
    { title: "Connecting with donors effectively", author: "Care Center", replies: 35, likes: 69, time: "2 days ago" },
    { title: "Managing learning programs", author: "Future Home", replies: 21, likes: 43, time: "3 days ago" },
  ];

  return (
    <DashboardLayout role="Orphan Home" menuItems={orphanHomeMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
            <p className="text-gray-600">Connect with other orphan homes</p>
          </div>
          <button className="px-6 py-3 bg-[#F59E0B] text-white rounded-xl hover:bg-[#D97706] transition-colors font-semibold">
            New Discussion
          </button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-[#F59E0B]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{discussion.title}</h3>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span>By {discussion.author}</span>
                    <span>{discussion.time}</span>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <ThumbsUp size={18} className="text-gray-400" />
                      <span className="text-sm font-semibold text-gray-700">{discussion.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={18} className="text-gray-400" />
                      <span className="text-sm font-semibold text-gray-700">{discussion.replies} replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
