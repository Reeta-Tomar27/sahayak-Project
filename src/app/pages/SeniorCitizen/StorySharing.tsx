import { DashboardLayout, seniorCitizenMenu } from "../../components/DashboardLayout";
import { Search, Heart, MessageCircle, FileText, Mic, Video } from "lucide-react";
import { useState } from "react";

export default function StorySharing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  const stories = [
    { title: "My 50 Years of Teaching", author: "Ramesh Kumar", type: "Text", likes: 234, comments: 45, time: "2 days ago" },
    { title: "Journey Through Independence", author: "Lakshmi Devi", type: "Voice", likes: 189, comments: 32, time: "5 days ago" },
    { title: "Life in the 1960s", author: "Suresh Patel", type: "Video", likes: 567, comments: 89, time: "1 week ago" },
    { title: "Lessons from a Lifetime", author: "Meena Sharma", type: "Text", likes: 423, comments: 67, time: "2 weeks ago" },
  ];

  return (
    <DashboardLayout role="Senior Citizen" menuItems={seniorCitizenMenu}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Story Sharing</h1>
            <p className="text-gray-600">Share your experiences and inspire others</p>
          </div>
          <button className="px-6 py-3 bg-[#F59E0B] text-white rounded-xl hover:bg-[#D97706] transition-colors font-semibold">
            Share Story
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories by title, author, or topic..."
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>
        </div>

        {/* Upload Story Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Share Your Story</h2>
          
          {/* Tab Selection */}
          <div className="flex gap-4 mb-6 border-b">
            <button
              onClick={() => setActiveTab("text")}
              className={`pb-3 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === "text"
                  ? "border-[#2563EB] text-[#2563EB]"
                  : "border-transparent text-gray-500"
              }`}
            >
              <FileText size={20} className="inline mr-2" />
              Text Story
            </button>
            <button
              onClick={() => setActiveTab("voice")}
              className={`pb-3 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === "voice"
                  ? "border-[#10B981] text-[#10B981]"
                  : "border-transparent text-gray-500"
              }`}
            >
              <Mic size={20} className="inline mr-2" />
              Voice Recording
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`pb-3 px-4 font-semibold transition-colors border-b-2 ${
                activeTab === "video"
                  ? "border-[#F59E0B] text-[#F59E0B]"
                  : "border-transparent text-gray-500"
              }`}
            >
              <Video size={20} className="inline mr-2" />
              Video Story
            </button>
          </div>

          {/* Upload Area */}
          {activeTab === "text" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Story title..."
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <textarea
                placeholder="Write your story here..."
                rows={6}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button className="px-8 py-3 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold">
                Publish Story
              </button>
            </div>
          )}

          {activeTab === "voice" && (
            <div className="text-center py-12 border-2 border-dashed rounded-xl">
              <Mic size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Click to start recording</p>
              <button className="px-8 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold">
                Start Recording
              </button>
            </div>
          )}

          {activeTab === "video" && (
            <div className="text-center py-12 border-2 border-dashed rounded-xl">
              <Video size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Upload or record your video story</p>
              <button className="px-8 py-3 bg-[#F59E0B] text-white rounded-xl hover:bg-[#D97706] transition-colors font-semibold">
                Upload Video
              </button>
            </div>
          )}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-600">By {story.author}</p>
                </div>
                <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded-lg">
                  {story.type}
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Heart size={18} className="text-red-500" />
                  <span>{story.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  <span>{story.comments}</span>
                </div>
                <span>{story.time}</span>
              </div>
              <button className="w-full py-2 border-2 border-[#F59E0B] text-[#F59E0B] rounded-xl hover:bg-[#F59E0B] hover:text-white transition-colors font-semibold">
                Read Story
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
