import { DashboardLayout, speciallyAbledMenu } from "../../components/DashboardLayout";
import { MessageSquare, ThumbsUp, MessageCircle, Send } from "lucide-react";

export default function SACommunity() {
  const discussions = [
    { title: "Best wheelchair-accessible restaurants in Mumbai", author: "Priya K.", replies: 24, likes: 45, time: "2 hours ago" },
    { title: "Tips for traveling with mobility aids", author: "Rajesh M.", replies: 18, likes: 32, time: "5 hours ago" },
    { title: "Accessible gym recommendations", author: "Anjali S.", replies: 12, likes: 28, time: "1 day ago" },
    { title: "Government scheme application help", author: "Vikram R.", replies: 35, likes: 52, time: "2 days ago" },
  ];

  return (
    <DashboardLayout role="Specially-Abled" menuItems={speciallyAbledMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
            <p className="text-gray-600">Connect with others and share experiences</p>
          </div>
          <button className="px-6 py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold">
            New Discussion
          </button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-[#2563EB]" size={24} />
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
