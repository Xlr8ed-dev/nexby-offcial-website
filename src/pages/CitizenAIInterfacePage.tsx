import {
  Shield,
  MessageCircle,
  Globe,
  Mic,
  Zap,
  Users,
  Bell,
  FileText,
  ArrowRight,
  CheckCircle,
  Lock,
  Building2,
  Database,
  Scan,
} from "lucide-react";
import CitizenAIInterfaceForm from "../components/CitizenAIInterfaceForm";

const CitizenAIInterfacePage = () => {
  return (
    <div className="min-h-screen pt-20 bg-white font-sans text-slate-900">
      {/* Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="/" className="hover:text-purple-600 transition-colors">
              Home
            </a>
          </li>
          <li className="before:content-['/'] before:mx-2">Solutions</li>
          <li
            className="relative before:content-['/'] before:mx-2
    text-purple-600 font-medium
    max-w-[160px] sm:max-w-none
    truncate"
          >
            Citizen AI Interface
          </li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-700 text-green-300 text-xs font-bold uppercase tracking-wider mb-6">
                <MessageCircle size={12} /> WhatsApp First Governance
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Governance at the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Speed of Chat.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Bridge the digital divide. Deploy Generative AI Chatbots on
                WhatsApp and Government Portals to deliver services, schemes,
                and support in 12+ regional languages. No forms. No queues. Just
                conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inquiry"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
                >
                  Request Pilot Access <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-4 text-sm text-slate-400 px-4 py-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-teal-400" /> Digital
                    India Aligned
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-teal-400" /> 12+
                    Languages
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              {/* Visual Placeholder: Chat Interface */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group">
                <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 flex items-center px-4 space-x-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-8 pt-16 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold">
                      Gov
                    </div>
                    <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200">
                      Namaste! How can I help you today?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold">
                      You
                    </div>
                    <div className="bg-green-700 p-3 rounded-2xl rounded-tr-none text-sm text-white">
                      I need to apply for a caste certificate.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold">
                      Gov
                    </div>
                    <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200">
                      Sure. Please upload a photo of your father's school
                      leaving certificate.
                    </div>
                  </div>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy: "The Last Mile Problem" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                <Users size={12} /> The Philosophy
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Portals are for Admins. <br />
                <span className="text-blue-600">Chat is for Citizens.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Governments have built incredible Digital Public Infrastructure
                (DPI). Yet, millions of citizens still stand in queues. Why?
                <br />
                <br />
                Nexby creates a <strong>Conversational Layer</strong> over your
                digital infrastructure. We turn complex portals into simple
                WhatsApp conversations, ensuring that digital governance reaches
                the last citizen in the remotest village.
              </p>
            </div>
            <div className="flex-1 grid gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-red-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Literacy Barriers
                </h3>
                <p className="text-slate-600">
                  Complex forms and English-heavy portals alienate
                  non-tech-savvy citizens.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                  <Scan size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Navigation Fatigue
                </h3>
                <p className="text-slate-600">
                  Finding a specific GR or Scheme eligibility criteria on a
                  massive portal is like finding a needle in a haystack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Capabilities */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Three Modes of Access.
            </h2>
            <p className="text-lg text-slate-400">
              Meeting citizens exactly where they are—on their phones, on your
              site, or using their voice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp Jan-Sahayak */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-green-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageCircle size={100} />
              </div>
              <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp Jan-Sahayak</h3>
              <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-4">
                The Gov Office in Pocket
              </h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                With 500M+ users, WhatsApp is the default OS. We bring services
                there.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Download Certificates (Caste, Income)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Book Hospital Appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-green-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Pay Utility Bills in Chat</span>
                </li>
              </ul>
            </div>

            {/* Intelligent Web Assistant */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={100} />
              </div>
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Intelligent Web Assistant
              </h3>
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4">
                Stop "Search & Scroll"
              </h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Transform your Ministry’s website from a static library into an
                active helpdesk.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Contextual Navigation ("I lost my license")</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Document Explainer for GRs & PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Instant Eligibility Check</span>
                </li>
              </ul>
            </div>

            {/* Voice-First Governance */}
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mic size={100} />
              </div>
              <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Mic size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Voice-First (Bhasha-Setu)
              </h3>
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4">
                Literacy No Barrier
              </h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                For the 30% of the population that cannot type, we offer
                Voice-to-Action.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Speak to Submit (Local Dialect)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Audio Replies & Instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={16}
                    className="text-purple-500 shrink-0 mt-0.5"
                  />{" "}
                  <span>Works on low-end phones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Superiority */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical Superiority
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                <Lock size={24} />
              </div>
              <h3 className="text-2xl font-bold">Sovereign & Secure</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <div className="mt-1">
                  <Database size={18} className="text-teal-500" />
                </div>
                <div>
                  <strong className="text-white">Data Localization:</strong>{" "}
                  Processed and stored within government-approved State Data
                  Centers (SDC).
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <Shield size={18} className="text-teal-500" />
                </div>
                <div>
                  <strong className="text-white">PII Redaction:</strong>{" "}
                  Automatically masks Aadhaar, Mobile numbers before logging.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <CheckCircle size={18} className="text-teal-500" />
                </div>
                <div>
                  <strong className="text-white">Hallucination Control:</strong>{" "}
                  Strict adherence to approved documents only. No opinions.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold">
                Proactive Governance Engine
              </h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <div className="mt-1">
                  <Bell size={18} className="text-orange-500" />
                </div>
                <div>
                  <strong className="text-white">Targeted Nudges:</strong> "Dear
                  Citizen, your vehicle insurance expires in 3 days. Click here
                  to renew."
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <Shield size={18} className="text-orange-500" />
                </div>
                <div>
                  <strong className="text-white">Disaster Alerts:</strong>{" "}
                  Real-time heavy rainfall alerts and emergency helpline
                  numbers.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <MessageCircle size={18} className="text-orange-500" />
                </div>
                <div>
                  <strong className="text-white">Feedback Loops:</strong>{" "}
                  Automated satisfaction surveys after service delivery.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Transforming Every Department.
            </h2>
            <p className="text-lg text-slate-600">
              Real-world applications of Conversational AI in governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Municipal Corporations",
                subtitle: "Civic Grievances",
                icon: Building2,
                desc: "Citizen sends photo of pothole. AI categorizes it, raises ERP ticket, and sends tracking ID.",
              },
              {
                title: "Public Distribution",
                subtitle: "Ration / PDS",
                icon: Users,
                desc: "Enter Ration Card number -> AI tells grain entitlement (5kg Rice) and nearest shop location.",
              },
              {
                title: "Transport Dept",
                subtitle: "RTO Services",
                icon: FileText, // Changed from Bus to FileText as typical RTO work is licensing
                desc: "Learner's License Exam prep quiz bot and instant duplicate license application guidance.",
              },
              {
                title: "Tourism Ministry",
                subtitle: "Visitor Experience",
                icon: Globe,
                desc: "Multi-lingual 'Virtual Guide' suggests itineraries, books monuments, and gives audio tours.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {item.subtitle}
                </h4>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inquiry" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Build the Future of Citizen Engagement.
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Move from "File-based" to "Dialog-based" governance. Request a
                pilot for your department.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <Shield size={24} className="text-green-500" />
                  <div>
                    <p className="font-bold">Official Gov Partners Only</p>
                    <p className="text-xs text-slate-400">
                      We prioritize requests from government domains (.gov /
                      .nic).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <CitizenAIInterfaceForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CitizenAIInterfacePage;
