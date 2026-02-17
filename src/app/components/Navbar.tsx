import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Sahayak</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-[#2563EB] transition-colors">About</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#2563EB] transition-colors">How It Works</a>
            <a href="#impact" className="text-gray-600 hover:text-[#2563EB] transition-colors">Impact</a>
            <Link to="/login" className="text-gray-600 hover:text-[#2563EB] transition-colors">Login</Link>
            <Link 
              to="/role-selection" 
              className="px-6 py-2 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
