import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sparkles,
  Brain,
  Zap,
  MessageSquare,
  Shield,
  Lock,
  Cloud,
  Phone,
  MessageCircle,
  Database,
  TrendingUp,
  Globe,
  ArrowRight,
  Building2,
  Factory,
  Landmark,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SalesAuditForm from "../components/SalesAuditForm";
// import AIChatWindow from "../components/AIChatWindow";

const FAQS = [
  {
    question: "How does the AI handle objections?",
    answer:
      "Our AI is trained on top-tier sales methodologies (Sandler, SPIN). It acknowledges the objection, empathizes, and pivots to value, just like a senior SDR. It doesn't just read a script; it negotiates.",
  },
  {
    question: "Can it book meetings directly on my calendar?",
    answer:
      "Yes. The AI integrates with Google Calendar, Outlook, and Calendly. It negotiates a time with the lead and sends the invite instantly.",
  },
  {
    question: "Does it sound robotic?",
    answer:
      "Not at all. We use ultra-low latency voice synthesis with natural pauses, filler words ('um', 'uh'), and intonation changes. Most leads don't realize they are talking to an AI until the end.",
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer:
      "It gracefully handles the unknown by noting the question and promising a follow-up from a human specialist, or it can transfer the call to a human agent in real-time if you choose.",
  },
  {
    question: "Is it compliant with TCPA and other regulations?",
    answer:
      "Yes. Nexby is built with compliance first. We support DNC list checking, call recording consent, and permissible calling hours configuration.",
  },
];

const SalesSolutionsPage = () => {
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
              AI for Sales
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
                  Solutions for Sales
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your Top Performer.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Now Scalable to Infinity.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Deploy autonomous AI Sales Agents that qualify, nurture, and
                close leads across voice and text.{" "}
                <span className="font-bold text-purple-700">
                  Zero latency. Zero missed opportunities.
                </span>
              </p>

              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Get Your Free Sales Audit
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Operating Channels Section */}
        <section className="py-10 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-purple-400 uppercase tracking-widest mb-8">
              Deploy Agents Across Any Channel
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Phone */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">
                  Phone Call
                </span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <MessageCircle className="text-green-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">
                  WhatsApp
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <MessageSquare className="text-orange-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">Email</span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Globe className="text-purple-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">
                  Website
                </span>
              </div>
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
                <span className="font-bold text-purple-700">
                  Speed is the currency of modern sales.
                </span>{" "}
                The average lead goes cold in 5 minutes. While your competitors
                are waiting for their SDRs to clock in, Nexby is already having
                a conversation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't build basic "chatbots" that follow decision trees. We
                build{" "}
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Cognitive Sales Agents
                </span>
                —LLM-powered digital employees trained on your company's DNA,
                capable of handling complex negotiations with the nuance of a
                human and the speed of a machine.
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
                Next-generation intelligence for modern sales teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Fluid Intelligence, Not Scripts
                </h3>
                <p className="text-gray-600 mb-6">
                  Forget "Press 1 for Sales." Our agents utilize dynamic LLM
                  architectures to understand intent, context, and sentiment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="text-purple-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Dynamic Personality:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        The agent adapts its tone to the user—professional for
                        banking clients, empathetic for healthcare, or
                        persuasive for retail.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database
                      className="text-purple-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Context Retention:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        It remembers what was said 10 messages ago, ensuring a
                        coherent, human-like dialogue.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 2 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Omnichannel Dominance
                </h3>
                <p className="text-gray-600 mb-6">
                  Your customers are everywhere. So is Nexby.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Phone className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Voice & Telephony:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Natural, conversational voice AI that handles inbound
                        queries and outbound qualification calls.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle
                      className="text-blue-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Text Ecosystem:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Seamless integration with WhatsApp, Facebook Messenger,
                        Email, and Website Chat.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Unified Context:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        A conversation started on WhatsApp can be finished over
                        a voice call without missing a beat.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 3 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trained on Your Truth
                </h3>
                <p className="text-gray-600 mb-4">
                  We ingest your sales playbooks, technical documentation,
                  website data, and past call transcripts. The result is an
                  agent that knows your product better than your newest
                  hire—from Day 1.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <p className="text-sm font-medium text-green-900">
                    ✓ Your brand voice, your objection handling, your closing
                    techniques—scaled infinitely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Deployment & Security */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Enterprise Deployment & Security
              </h2>
              <p className="text-xl text-purple-300">
                Architected for the Highly Regulated
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              We understand that for Government, Banking, and Defense, "Cloud"
              isn't always the answer. Nexby offers flexible deployment models
              designed for uncompromising security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all">
                <Cloud className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Cloud Deployment</h3>
                <p className="text-gray-300">
                  Rapid scaling on secure, global infrastructure.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/50 transition-all">
                <Lock className="text-pink-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">
                  On-Premise / Air-Gapped
                </h3>
                <p className="text-gray-300">
                  For sensitive projects, we deploy the LLM directly within your
                  private infrastructure. Your data never leaves your perimeter.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                <Shield className="text-blue-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
                <p className="text-gray-300">
                  Built to adhere to strict data sovereignty and privacy
                  standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Impact Section */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Proven Impact
              </h2>
              <p className="text-xl text-purple-300">
                Real results from industries that demand precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Real Estate Case Study */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 border border-purple-500/50">
                  <Building2 className="text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real Estate</h3>
                <p className="text-sm text-purple-300 font-medium mb-4 uppercase tracking-wider">
                  Lead Qualification & Revival
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We deployed AI agents to handle end-to-end lead qualification,
                  including cold calling old databases.
                </p>
                <div className="bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-white font-bold text-lg">
                    +8% New Walk-ins
                  </p>
                  <p className="text-sm text-gray-400">
                    Generated purely from reviving dormant leads in their old
                    dataset.
                  </p>
                </div>
              </div>

              {/* Manufacturing Case Study */}
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/50">
                  <Factory className="text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Manufacturing</h3>
                <p className="text-sm text-blue-300 font-medium mb-4 uppercase tracking-wider">
                  B2B Sales Enablement
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  For a heavy equipment manufacturer, our agents engaged
                  technical buyers to qualify intent before passing to sales
                  engineers.
                </p>
                <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-white font-bold text-lg">
                    More Qualified Meetings
                  </p>
                  <p className="text-sm text-gray-400">
                    Sales team stopped chasing bad leads and focused only on
                    high-intent buyers.
                  </p>
                </div>
              </div>

              {/* Government Case Study */}
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 border border-green-500/50">
                  <Landmark className="text-green-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Government</h3>
                <p className="text-sm text-green-300 font-medium mb-4 uppercase tracking-wider">
                  Emergency Response
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Built an emergency call center voice agent capable of
                  understanding regional languages and accents in noisy
                  environments.
                </p>
                <div className="bg-green-500/10 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-white font-bold text-lg">
                    100% Call Pickup Rate
                  </p>
                  <p className="text-sm text-gray-400">
                    Zero dropped calls. Critical info logged and instantly
                    relayed to emergency teams.
                  </p>
                </div>
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
                    The Inbound Filter
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Stop wasting senior AE time on tire-kickers. Nexby engages
                  every inbound lead instantly, answers FAQs, handles
                  objections, and books meetings only for qualified prospects.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Outbound Resurrection
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Have a database of 10,000 cold leads? Nexby's Voice Bot can
                  call them all in a single afternoon to re-engage interest,
                  update details, and revive dormant opportunities.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The 24/7 Concierge
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For global organizations, the sun never sets. Your AI agent
                  handles support and sales inquiries across all time zones,
                  ensuring you are making money while your HQ sleeps.
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
                We don't replace your stack; we supercharge it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-purple-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">Messaging</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  WhatsApp Business API, Messenger, Slack
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-blue-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">Voice</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Twilio, Exotel, Custom SIP Trunks
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-green-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">CRM</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Salesforce, HubSpot, Zoho, Pipedrive (Bi-directional sync)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our AI Sales Agents
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              
              <div className="w-full lg:w-[40%] space-y-4">
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

            
               <div className="w-full lg:w-[60%]">
                                <AIChatWindow
                                    title="Sales Assistant Demo"
                                    initialMessages={[
                                        { id: 1, sender: 'ai', text: "Hi! I noticed you downloaded our whitepaper on AI Sales. Did you find the section on automated follow-ups useful?" },
                                        { id: 2, sender: 'user', text: "Yes, but I'm worried about integration." },
                                        { id: 3, sender: 'ai', text: "Completely understandable. We integrate natively with Salesforce, HubSpot, and Pipedrive. It takes about 15 minutes to set up. What CRM are you currently using?" },
                                        { id: 4, sender: 'user', text: "We use HubSpot." },
                                        { id: 5, sender: 'ai', text: "Perfect! That's our deepest integration. We can sync contacts, deals, and even call logs automatically. Would you like to see a 2-minute video of how that looks?" }
                                    ]}
                                />
                            </div>
            </div>
          </div>
        </section> */}

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our AI Sales Agents
              </p>
            </div>

            {/* Center the FAQ */}
            <div className="flex flex-col items-center">
              {/* FAQ Accordion */}
              <div className="w-full lg:w-[50%] mx-auto space-y-4">
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
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="audit-form" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Stop Losing Revenue to Latency
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We will analyze your current lead flow and show you exactly
                where AI can increase conversion.
              </p>
            </div>

            <SalesAuditForm formId="sales_solutions_audit_form" />
          </div>
        </section>
      </main>
    </>
  );
};

export default SalesSolutionsPage;
