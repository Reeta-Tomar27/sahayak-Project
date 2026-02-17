import { Link } from "react-router";
import { Heart, Users, Home, TrendingUp, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Chatbot } from "../components/Chatbot";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Chatbot />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Building Bridges of <span className="text-[#2563EB]">Support</span> and <span className="text-[#10B981]">Hope</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A unified ecosystem connecting specially-abled individuals, senior citizens, orphan homes, and generous donors to create lasting impact.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/role-selection"
                  className="px-8 py-4 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors flex items-center gap-2 shadow-lg"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Heart size={120} className="text-[#2563EB] mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-gray-700">Together We Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Support Ecosystem</h2>
            <p className="text-xl text-gray-600">Role-based platforms designed for your specific needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-gray-200 hover:border-[#2563EB] transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-[#2563EB]" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Support</h3>
              <p className="text-gray-600 mb-6">
                OTM accessibility maps, trip planning, assistant booking, and community support for specially-abled individuals.
              </p>
              <Link to="/role-selection" className="text-[#2563EB] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-gray-200 hover:border-[#10B981] transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-[#10B981]" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Senior Care</h3>
              <p className="text-gray-600 mb-6">
                Caretaker booking, story sharing platform, government schemes, and dedicated community for senior citizens.
              </p>
              <Link to="/role-selection" className="text-[#10B981] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-gray-200 hover:border-[#F59E0B] transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6">
                <Home className="text-[#F59E0B]" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Orphan Support</h3>
              <p className="text-gray-600 mb-6">
                Connect donors with orphan homes, manage donations, organize learning sessions, and access government benefits.
              </p>
              <Link to="/role-selection" className="text-[#F59E0B] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact" className="py-20 px-8 bg-[#2563EB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/80">Making a difference, one connection at a time</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Lives Impacted" },
              { number: "2,500+", label: "Active Volunteers" },
              { number: "₹5Cr+", label: "Donations Managed" },
              { number: "200+", label: "Partner Organizations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Your Role", desc: "Select from specially-abled, senior citizen, orphan home, or donor" },
              { step: "2", title: "Create Account", desc: "Quick and easy registration process" },
              { step: "3", title: "Start Making Impact", desc: "Access role-specific tools and community" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">Stories from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "Specially-Abled User", text: "The OTM map feature has transformed how I navigate the city. I feel more independent now." },
              { name: "Rajesh Kumar", role: "Donor", text: "Finally, a transparent platform where I can see exactly where my contributions are making a difference." },
              { name: "Lakshmi Orphanage", role: "Orphan Home", text: "Managing donations and connecting with supporters has never been easier. Thank you, Sahayak!" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-semibold">Sahayak</span>
          </div>
          <p className="text-gray-400 mb-8">
            Building bridges of support and hope for a better tomorrow
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Sahayak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
