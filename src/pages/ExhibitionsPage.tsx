import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  Brain,
  Zap,
  MessageSquare,
  Cloud,
  MessageCircle,
  Database,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  WifiOff,
  Camera,
  Send,
  Trophy,
  UserCheck,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ExhibitionAuditForm from "../components/ExhibitionAuditForm";
// import AIChatWindow from "../components/AIChatWindow";

const FAQS = [
  {
    question: "Does this work without internet?",
    answer:
      "Yes. The app is built offline-first. You can scan cards, take notes, and tag leads without any signal. Data syncs automatically once you reconnect.",
  },
  {
    question: "How accurate is the business card scanning?",
    answer:
      "We use enterprise-grade OCR that achieves 99% accuracy on standard business cards. It can even parse non-standard layouts and handwriting.",
  },
  {
    question: "Can I customize the follow-up messages?",
    answer:
      "Absolutely. You can create different templates for different tags (e.g., 'VIP', 'Distributor', 'End User'). The AI will also dynamically insert details from your conversation notes.",
  },
  {
    question: "Does it integrate with Salesforce?",
    answer:
      "Yes, we have native bi-directional sync with Salesforce, HubSpot, Zoho, and Pipedrive. Leads appear in your CRM in real-time (or as soon as you sync).",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is encrypted at rest and in transit. We are GDPR compliant and can offer on-premise deployment for highly sensitive government or defense exhibitions.",
  },
];

const ExhibitionsPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      

      <main className="min-h-screen bg-white pt-20">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-purple-600 transition-colors">
                Home
              </a>
            </li>
            <li className="before:content-['/'] before:mx-2">Solutions</li>
            <li className="before:content-['/'] before:mx-2 text-purple-600 font-medium">
              AI for Exhibitions
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-20 md:py-28">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-purple-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                <Sparkles className="text-purple-600" size={20} />
                <span className="text-sm font-bold text-purple-900 uppercase tracking-wide">
                  Solutions for Exhibitions
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                The Booth That
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Never Sleeps.
                </span>
              </h1>
              {/* <h1 className="font-bold text-gray-900 mb-6 text-center leading-tight">
                <span className="block text-5xl sm:text-4xl md:text-7xl lg:text-8xl">
                  The Booth That
                </span>

                <span
                  className="
      block
      text-5xl sm:text-5xl md:text-7xl lg:text-8xl
      bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600
      bg-clip-text text-transparent
    "
                >
                  Never Sleeps.
                </span>
              </h1> */}

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Turn handshake chaos into organized revenue. Nexby’s
                offline-first AI captures, digitizes, and engages booth visitors
                instantly—
                <span className="font-bold text-purple-700">
                  ensuring no lead is ever lost to a lost business card.
                </span>
              </p>

              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Deploy Nexby for Your Next Event
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Philosophy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Trade shows are high-investment, high-chaos environments. You
                spend thousands on the floor space, but your ROI depends on a
                stack of paper business cards that often sit on a desk for
                weeks. By the time your team follows up, the prospect has
                forgotten you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nexby closes this gap. We believe the first follow-up should
                happen <span className="italic">before</span> the visitor leaves
                the building.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We replace manual data entry with{" "}
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  instant AI capture and autonomous engagement
                </span>
                , giving you the "First Mover Advantage" while your competitors
                are still packing up their banners.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Next-generation intelligence for modern exhibitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Capability 1: Offline-First Architecture */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <WifiOff className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Offline-First Architecture
                </h3>
                <p className="text-gray-600 mb-6">
                  Exhibition halls are notorious for dead zones. Nexby is built
                  for the blackout.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="text-purple-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Zero-Dependency Capture:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Scan cards, tag interests, and log notes without a
                        single bar of signal.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cloud
                      className="text-purple-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Auto-Sync:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        The second your device hits a network, every lead, note,
                        and analytic point syncs to the cloud securely.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 2: Intelligent OCR & Context Mapping */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Intelligent OCR & Context Mapping
                </h3>
                <p className="text-gray-600 mb-6">
                  We don’t just scan names; we capture intent.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Brain className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Precision OCR:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Instantly convert business cards into structured digital
                        profiles with near-perfect accuracy.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database
                      className="text-blue-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Smart Requirement Sync:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Tag a visitor’s specific needs and our AI automatically
                        maps it to your relevant product offerings.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Camera className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Photo Capture:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Snap a photo of the visitor or their badge to jog your
                        memory during the post-event review.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 3: Autonomous Nurture Sequences */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Send className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Autonomous Nurture Sequences
                </h3>
                <p className="text-gray-600 mb-4">
                  Speed kills the competition.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="text-green-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Instant Follow-Up:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Nexby sends a personalized WhatsApp or Email to the
                        previous visitor while you shake hands with the next
                        one.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare
                      className="text-green-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Dynamic Content:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        The AI drafts the message based on the tags you
                        selected, ensuring the prospect feels heard, not
                        spammed.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Control & Analytics */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Command Your Floor Team
              </h2>
              <p className="text-xl text-purple-300">
                Enterprise Control & Analytics
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Managing a team of 20 reps across a sprawling expo floor is a
              logistical nightmare. Nexby gives you a God-mode view of your
              ground operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all">
                <Trophy className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">
                  Real-Time Leaderboards
                </h3>
                <p className="text-gray-300">
                  Track which team member is scanning the most leads and closing
                  the most interactions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/50 transition-all">
                <UserCheck className="text-pink-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">
                  Attribution & Accountability
                </h3>
                <p className="text-gray-300">
                  Unique logins ensure every lead is assigned to the specific
                  rep who captured it, simplifying commission and attribution.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                <ShieldCheck className="text-blue-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">GDPR Compliant</h3>
                <p className="text-gray-300">
                  Your data is encrypted at rest and in transit, ensuring you
                  remain compliant even at international EU events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600">Real problems. Real ROI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Use Case 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Mega-Trade Show
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For exhibitors at CES or GITEX handling 1,000+ footfalls a
                  day. Nexby acts as a digital net, capturing volume without
                  sacrificing data depth.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Luxury Real Estate Expo
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  High-value clients expect white-glove service. Use Nexby to
                  instantly catalog specific property preferences and trigger a
                  digital brochure sent via WhatsApp before the client walks to
                  the next stall.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Multi-City Roadshows
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Managing simultaneous events in Mumbai, Dubai, and London?
                  Centralize data from all locations into a single dashboard,
                  giving HQ real-time visibility into global performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Stack Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integration Stack
              </h2>
              <p className="text-xl text-gray-600">
                Your event data shouldn't live in an island.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-purple-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">CRM Sync</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Push clean, enriched lead data directly into Salesforce,
                  HubSpot, or Zoho. No CSV exports required.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-blue-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">
                    Communication
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Native integration with WhatsApp Business API and SMTP for
                  instant outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Exhibition AI
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* Left Side: FAQ Accordion (40%) */}
              <div className="w-full lg:w-[50%] space-y-4">
                {FAQS.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-purple-600" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Right Side: AI Chat Window (60%) */}
              {/* <div className="w-full lg:w-[60%]">
                <AIChatWindow
                  title="Exhibition Assistant Demo"
                  initialMessages={[
                    {
                      id: 1,
                      sender: "ai",
                      text: "Hi! I see you're interested in our offline lead capture. Are you planning for an upcoming trade show?",
                    },
                    {
                      id: 2,
                      sender: "user",
                      text: "Yes, we have a big expo next month.",
                    },
                    {
                      id: 3,
                      sender: "ai",
                      text: "Exciting! One big challenge at expos is bad Wi-Fi. Nexby works 100% offline. Do you usually scan badges or collect business cards?",
                    },
                    { id: 4, sender: "user", text: "Mostly business cards." },
                    {
                      id: 5,
                      sender: "ai",
                      text: "Got it. Our OCR is instant. You just snap a pic, and we extract the name, email, and even job title. We can then auto-send a 'Nice to meet you' email before they even walk away. Want to see how the follow-up works?",
                    },
                  ]}
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="audit-form" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Stop leaving revenue on the expo floor.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Equip your team with the tool that turns visitors into pipeline.
              </p>
            </div>

            <ExhibitionAuditForm formId="exhibition_solutions_audit_form" />
          </div>
        </section>
      </main>
    </>
  );
};

export default ExhibitionsPage;
