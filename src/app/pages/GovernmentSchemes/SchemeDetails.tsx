import { Link, useParams } from "react-router";
import { Navbar } from "../../components/Navbar";
import { ArrowLeft, ArrowRight, CheckCircle, Info, FileCheck, ExternalLink, Activity, PlayCircle } from "lucide-react";
import { SCHEME_DETAILS, ALL_SCHEMES_LIST } from "../../data/schemesData";

export default function SchemeDetails() {
  const { role, schemeId } = useParams<{ role: string; schemeId: string }>();

  // Fetch scheme details based on schemeId, or fallback to a default mock
  const fallbackDetails = {
    id: schemeId,
    name: "Detailed Welfare Scheme Title",
    description: "This scheme provides comprehensive support and financial assistance to eligible individuals.",
    status: "Active",
    eligibility: ["Must be a resident of India.", "Requires relevant certification."],
    benefits: ["Financial aid directly transferred to the bank account.", "Free access to healthcare."],
    documents: ["Aadhar Card", "Income Certificate", "Bank account details"],
    applicationProcess: ["Visit the official portal.", "Fill out the application form.", "Submit the form."],
    trackingTitle: "Application Tracking",
    tracking: ["Track status via the online portal using application ID."],
    youtubeLinks: ["How to apply tutorial", "Scheme overview video"]
  };

  const schemeDetails = schemeId ? SCHEME_DETAILS[schemeId] || fallbackDetails : fallbackDetails;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="pt-32 pb-20 px-8 max-w-4xl mx-auto">
        <Link to={`/government-schemes/${role}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2563EB] mb-8 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Schemes
        </Link>

        {/* Header section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1.5 bg-[#10B981]/10 text-[#10B981] text-sm rounded-lg font-semibold">
              {schemeDetails.status}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{schemeDetails.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 whitespace-pre-wrap">
            {schemeDetails.description}
          </p>
          <div className="flex gap-4">
            {schemeDetails.applyUrl ? (
              <a 
                href={schemeDetails.applyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold flex items-center gap-2 shadow-sm"
              >
                Apply Now <ExternalLink size={20} />
              </a>
            ) : (
              <button className="px-8 py-4 bg-[#2563EB] text-white rounded-xl hover:bg-[#1e40af] transition-colors font-semibold flex items-center gap-2 shadow-sm">
                Apply Now <ExternalLink size={20} />
              </button>
            )}
            <button className="px-8 py-4 bg-white text-[#2563EB] border-2 border-[#2563EB] rounded-xl hover:bg-[#2563EB] hover:text-white transition-colors font-semibold">
              Save for Later
            </button>
          </div>
        </div>

        {/* Content sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-[#2563EB]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Eligibility Criteria</h2>
            </div>
            <ul className="space-y-4">
              {schemeDetails.eligibility.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                <Info className="text-[#10B981]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Key Benefits</h2>
            </div>
            <ul className="space-y-4">
              {schemeDetails.benefits.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                <FileCheck className="text-[#F59E0B]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Required Documents</h2>
            </div>
            <ul className="space-y-4">
              {schemeDetails.documents.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="text-[#8B5CF6]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">How to Apply</h2>
            </div>
            <ol className="space-y-4">
              {schemeDetails.applicationProcess.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-4 text-gray-700">
                  <span className="text-sm font-bold text-[#8B5CF6] mt-0.5">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Content sections row 3 for additional sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#EC4899]/10 rounded-lg flex items-center justify-center">
                <Activity className="text-[#EC4899]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{schemeDetails.trackingTitle}</h2>
            </div>
            <ul className="space-y-4">
              {schemeDetails.tracking.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#EF4444]/10 rounded-lg flex items-center justify-center">
                <PlayCircle className="text-[#EF4444]" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">YouTube Helpful Links</h2>
            </div>
            <ul className="space-y-4">
              {schemeDetails.youtubeLinks.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <PlayCircle className="text-[#EF4444] mt-0.5 flex-shrink-0" size={18} />
                  <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(item)}`} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Panel */}
        {schemeDetails.videoUrl && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mt-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <PlayCircle className="text-red-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Featured Video Guide</h2>
            </div>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src={schemeDetails.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
