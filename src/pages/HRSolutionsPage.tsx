import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Brain,
  Zap,
  Shield,
  Lock,
  Database,
  TrendingUp,
  Globe,
  ArrowRight,
  FileText,
  Code,
  GraduationCap,
  Clock,
  DollarSign,
  CheckCircle,
  Linkedin,
  Briefcase,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import RecruitmentAuditForm from "../components/RecruitmentAuditForm";
import AIChatWindow from "../components/AIChatWindow";

const FAQS = [
  {
    question: "Can candidates cheat during the AI interview?",
    answer:
      "No. Nexby employs military-grade proctoring. We monitor tab switching, detect secondary voices, analyze eye movement patterns, and flag suspicious behavior in real-time. If a candidate uses ChatGPT or a proxy, they are instantly flagged.",
  },
  {
    question: "How technical can the interviews get?",
    answer:
      "Extremely. Our AI can conduct deep-dive technical vivas, ask candidates to write and explain code, and debug scenarios in real-time. It goes far beyond multiple-choice questions to assess actual problem-solving ability.",
  },
  {
    question: "Will this replace my human recruiters?",
    answer:
      "No, it supercharges them. Nexby handles the repetitive L1 screening—the thousands of resumes and initial phone screens—so your recruiters can focus purely on closing the top 5% of candidates.",
  },
  {
    question: "Does it integrate with our ATS (Greenhouse, Lever, etc.)?",
    answer:
      "Yes. We push qualified candidates and their interview transcripts directly into your existing ATS. You don't need to change your workflow; we just make it faster.",
  },
  {
    question: "Is the AI evaluation fair and unbiased?",
    answer:
      "Absolutely. The AI evaluates purely based on the candidate's responses and the job criteria. It is blind to gender, ethnicity, accent, and background, ensuring a 100% meritocratic screening process.",
  },
];

const HRSolutionsPage = () => {
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
      <Helmet>
        <title>
          AI for Recruitment - Autonomous Hiring Agents | Nexby Solutions
        </title>
        <meta
          name="description"
          content="Hire the top 1% automatically. Nexby's Recruiter AI Agent screens, interviews, and ranks talent with human-level nuance and machine-level speed."
        />
        <meta
          name="keywords"
          content="AI recruitment, autonomous hiring, AI interviewer, resume screening AI, automated talent intelligence, proctored interviews, technical screening AI"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="AI for Recruitment - Autonomous Hiring Agents | Nexby"
        />
        <meta
          property="og:description"
          content="Hire the top 1% automatically. Screen, interview, and rank talent with human-level nuance."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nexby.ai/solutions/recruitment"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nexby.ai/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Solutions",
                item: "https://nexby.ai/solutions",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI for Recruitment",
                item: "https://nexby.ai/solutions/recruitment",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-20">
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
              AI for Recruitment
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
                  Solutions for Recruitment
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hire the Top 1%.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Automatically.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                From job description to final interview in minutes, not months.
                Nexby’s Recruiter AI Agent screens, interviews, and ranks{" "}
                <span className="font-bold text-purple-700">
                  your existing talent pipeline
                </span>{" "}
                with human-level nuance and machine-level speed.
              </p>

              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Your Pilot
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Smart Link Integration Section */}
        <section className="py-10 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-purple-400 uppercase tracking-widest mb-8">
              Universal Smart Link Integration
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* LinkedIn */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">
                  LinkedIn
                </span>
              </div>

              {/* Naukri */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Briefcase className="text-green-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">Naukri</span>
              </div>

              {/* Indeed */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Search className="text-blue-300" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">Indeed</span>
              </div>

              {/* Career Page */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                  <Globe className="text-purple-400" size={24} />
                </div>
                <span className="font-semibold text-white text-lg">
                  Career Page
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
                  Traditional hiring is broken.
                </span>{" "}
                It’s a 140-hour marathon of resume scanning, scheduling tag, and
                repetitive screening calls that results in a single hire. We
                reimagined this process as a 13-minute sprint.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nexby isn't just an ATS filter; it is an{" "}
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Automated Talent Intelligence (ATI)
                </span>{" "}
                system.{" "}
                <span className="font-bold text-gray-900">
                  We are not a staffing agency.
                </span>{" "}
                We don't source candidates; we scientifically filter the ones
                you already have. We conduct adaptive, proctored interviews that
                assess competency, intent, and cultural fit before your team
                ever picks up the phone.
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
                Next-generation intelligence for modern hiring teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Autonomous Interviewer
                </h3>
                <p className="text-gray-600 mb-6">
                  Your new best recruiter works 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="text-purple-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Adaptive Interviews:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Unlike static forms, our AI adapts to the candidate’s
                        answers. If a candidate claims expert-level coding
                        skills, the AI digs deeper with complex technical
                        scenarios.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe
                      className="text-purple-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Multi-Lingual Fluency:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Screen candidates in over 30 languages instantly,
                        breaking down global hiring barriers.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp
                      className="text-purple-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Linear & Non-Linear Paths:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Whether it’s a structured behavioral round or an
                        open-ended case study, the agent manages the flow
                        perfectly.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 2 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Precision Screening & Resume Intelligence
                </h3>
                <p className="text-gray-600 mb-6">Stop drowning in PDFs.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Brain className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Contextual Matching:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        We go beyond "Ctrl+F." The system analyzes resumes
                        against the core DNA of the role, rejecting unfit
                        profiles instantly and ranking the rest by relevance.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles
                      className="text-blue-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Universal Smart Link Integration:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Paste your Nexby Smart Link on LinkedIn, Naukri, Indeed,
                        or your Career Page. Candidates click, get screened, and
                        you get the results.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 3 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Fortress-Level Integrity
                </h3>
                <p className="text-gray-600 mb-4">
                  In a world of digital proxies and lip-sync frauds, Nexby is
                  your shield.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lock className="text-green-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Fake Candidate Detection:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Our proprietary anti-cheating layer flags suspicious
                        audio patterns, lip-sync mismatches, and tab-switching
                        during assessments.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Proctored Evaluations:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Ensure the code written or the answer given is 100%
                        authentic.
                      </span>
                    </div>
                  </li>
                </ul>
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
                Scale Without Compromise.
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Whether you are hiring 50 specialists or 5,000 graduates, Nexby’s
              architecture handles the load without cracking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all">
                <Brain className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Bias-Free Engine</h3>
                <p className="text-gray-300">
                  Our algorithms are tuned to evaluate skill and merit only,
                  removing unconscious human bias from the L1 screening layer.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-pink-500/50 transition-all">
                <Shield className="text-pink-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Data Sovereignty</h3>
                <p className="text-gray-300">
                  Candidate data is stored with strict adherence to GDPR and
                  regional privacy laws.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                <Database className="text-blue-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Lifetime Data Access</h3>
                <p className="text-gray-300">
                  Revisit interview recordings, transcripts, and scores anytime.
                  Your talent pool remains an active asset, not a dead database.
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
              <p className="text-xl text-gray-600">
                Real problems. Real Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Use Case 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Campus Blitz
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Screening 10,000 graduates? It used to take a month. Nexby
                  does it in an afternoon. Filter by aptitude, conduct mass
                  proctored tests, and present the top 50 to your hiring
                  managers.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Technical Deep-Dive
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For IT Services and Engineering, resume keywords can be
                  misleading. Our AI conducts rigorous technical vivas, asking
                  code-specific logic questions to separate coders from
                  copy-pasters.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Global Expansion
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Hiring a sales team in Japan or Brazil? You don't need local
                  recruiters immediately. Our multi-lingual agent conducts the
                  first rounds in native languages, ensuring you only fly in for
                  the final handshake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact in Numbers Section */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Impact in Numbers
              </h2>
              <p className="text-xl text-purple-300">
                Measurable results from Day 1
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Metric 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-purple-500/50">
                  <Clock className="text-purple-400" size={32} />
                </div>
                <h3 className="text-5xl font-bold mb-2 text-white">90%</h3>
                <p className="text-lg text-purple-300 font-medium mb-4 uppercase tracking-wider">
                  Reduction in Time-to-Hire
                </p>
                <p className="text-gray-400">
                  From 140 hours to 13 minutes per hire.
                </p>
              </div>

              {/* Metric 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-500/50">
                  <DollarSign className="text-blue-400" size={32} />
                </div>
                <h3 className="text-5xl font-bold mb-2 text-white">60%</h3>
                <p className="text-lg text-blue-300 font-medium mb-4 uppercase tracking-wider">
                  Reduction in Hiring Costs
                </p>
                <p className="text-gray-400">
                  Significantly lower cost per hire for tech roles.
                </p>
              </div>

              {/* Metric 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:bg-white/10 transition-all text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto border border-green-500/50">
                  <Shield className="text-green-400" size={32} />
                </div>
                <h3 className="text-5xl font-bold mb-2 text-white">Zero</h3>
                <p className="text-lg text-green-300 font-medium mb-4 uppercase tracking-wider">
                  Bad Hires due to Fraud
                </p>
                <p className="text-gray-400">
                  Eliminate proxy candidates and interview fraud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="audit-form" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your dream team is waiting.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integrate Nexby into your job posts today and identify your top
                3 candidates automatically.
              </p>
            </div>

            <RecruitmentAuditForm formId="hr_solutions_audit_form" />
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
                Everything you need to know about autonomous hiring
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
                                    title="Recruitment Assistant Demo"
                                    initialMessages={[
                                        { id: 1, sender: 'ai', text: "Hi there! I'm the Nexby Recruiter Agent. I see you applied for the Senior Frontend Engineer role. Ready for a quick technical screening?" },
                                        { id: 2, sender: 'user', text: "Yes, I'm ready." },
                                        { id: 3, sender: 'ai', text: "Great. Looking at your resume, you mentioned extensive experience with React performance optimization. Can you describe a specific challenging memory leak you debugged recently?" },
                                        { id: 4, sender: 'user', text: "Sure. We had a dashboard that was crashing due to uncleaned event listeners in a useEffect hook..." },
                                        { id: 5, sender: 'ai', text: "That's a classic issue. How did you verify the fix? Did you use the Chrome DevTools Memory tab or a specific profiler?" }
                                    ]}
                                />
                            </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HRSolutionsPage;
