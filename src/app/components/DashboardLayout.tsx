import { ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  Search, Bell, User, LogOut, Menu, X,
  LayoutDashboard, Map, Route, Users, BookOpen, 
  MessageSquare, Heart, Calendar, GraduationCap,
  Gift, Briefcase
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  role: string;
  menuItems: Array<{
    icon: ReactNode;
    label: string;
    path: string;
  }>;
}

export function DashboardLayout({ children, role, menuItems }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontSize: `${fontSize}px` }}>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 z-40 ${
          isSidebarOpen ? "w-64" : "w-0 -translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="px-6 py-5 border-b">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-900 block">Sahayak</span>
                <span className="text-xs text-gray-500">{role}</span>
              </div>
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#2563EB]/10 hover:text-[#2563EB] rounded-xl transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors w-full"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Accessibility Controls */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="px-2 py-1 hover:bg-gray-200 rounded"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize(Math.min(20, fontSize + 2))}
                  className="px-2 py-1 hover:bg-gray-200 rounded"
                >
                  A+
                </button>
              </div>

              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

// Menu configurations for each role
export const speciallyAbledMenu = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/specially-abled/dashboard" },
  { icon: <Map size={20} />, label: "OTM Accessibility Map", path: "/specially-abled/otm-map" },
  { icon: <Route size={20} />, label: "Plan Trip", path: "/specially-abled/plan-trip" },
  { icon: <Users size={20} />, label: "Book Assistant", path: "/specially-abled/book-assistant" },
  { icon: <BookOpen size={20} />, label: "Government Schemes", path: "/specially-abled/government-schemes" },
  { icon: <MessageSquare size={20} />, label: "Community", path: "/specially-abled/community" },
  { icon: <User size={20} />, label: "Profile", path: "/specially-abled/profile" },
];

export const seniorCitizenMenu = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/senior-citizen/dashboard" },
  { icon: <Users size={20} />, label: "Book Caretaker", path: "/senior-citizen/book-caretaker" },
  { icon: <Heart size={20} />, label: "Story Sharing", path: "/senior-citizen/story-sharing" },
  { icon: <BookOpen size={20} />, label: "Government Schemes", path: "/senior-citizen/government-schemes" },
  { icon: <MessageSquare size={20} />, label: "Community", path: "/senior-citizen/community" },
  { icon: <User size={20} />, label: "Profile", path: "/senior-citizen/profile" },
];

export const orphanHomeMenu = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/orphan-home/dashboard" },
  { icon: <Gift size={20} />, label: "Manage Donations", path: "/orphan-home/manage-donations" },
  { icon: <GraduationCap size={20} />, label: "Learning Sessions", path: "/orphan-home/learning-sessions" },
  { icon: <BookOpen size={20} />, label: "Government Schemes", path: "/orphan-home/government-schemes" },
  { icon: <MessageSquare size={20} />, label: "Community", path: "/orphan-home/community" },
  { icon: <User size={20} />, label: "Profile", path: "/orphan-home/profile" },
];

export const donorMenu = [
  { icon: <Map size={20} />, label: "Explore Orphanages", path: "/donor/explore-orphanages" },
  { icon: <Gift size={20} />, label: "Donate Items", path: "/donor/donate-items" },
  { icon: <Briefcase size={20} />, label: "Fund Projects", path: "/donor/fund-projects" },
  { icon: <Calendar size={20} />, label: "Sponsor Events", path: "/donor/sponsor-events" },
  { icon: <Heart size={20} />, label: "My Donations", path: "/donor/my-donations" },
  { icon: <User size={20} />, label: "Profile", path: "/donor/profile" },
];
