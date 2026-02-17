import { DashboardLayout, seniorCitizenMenu } from "../../components/DashboardLayout";
import { MessageSquare, ThumbsUp, MessageCircle } from "lucide-react";

export default function SCCommunity() {
  const discussions = [
    { title: "Healthy living tips for seniors", author: "Ramesh K.", replies: 34, likes: 67, time: "1 hour ago" },
    { title: "Best exercises for joint health", author: "Lakshmi D.", replies: 28, likes: 52, time: "4 hours ago" },
    { title: "Pension scheme clarifications", author: "Suresh P.", replies: 45, likes: 89, time: "1 day ago" },
    { title: "Organizing community meetups", author: "Meena S.", replies: 19, likes: 38, time: "2 days ago" },
  ];

  return (
    <DashboardLayout role="Senior Citizen" menuItems={seniorCitizenMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
            <p className="text-gray-600">Connect with fellow senior citizens</p>
          </div>
          <button className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold">
            New Discussion
          </button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-[#10B981]" size={24} />
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
