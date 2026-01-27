import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Clock,
  Zap,
  MessageCircle,
  Shield,
  ArrowRight,
  Play,
  Calculator,
  CheckCircle,
  XCircle,
  Activity,
  Database,
} from "lucide-react";
import SalesXAuditForm from "../components/SalesXAuditForm";

const SalesXPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>SalesX - Autonomous AI Sales Agents | Nexby</title>
        <meta
          name="description"
          content="Stop losing revenue to slow follow-ups. Nexby SalesX contacts every lead within 10 seconds, nurtures them with human-like empathy, and books meetings 24/7."
        />
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
            <li className="before:content-['/'] before:mx-2">Products</li>
            <li className="before:content-['/'] before:mx-2 text-purple-600 font-medium">
              SalesX
            </li>
          </ol>
        </nav>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <Zap className="text-yellow-400" size={20} />
                  <span className="text-sm font-bold text-blue-100 uppercase tracking-wide">
                    Product &gt; Nexby SalesX
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Autonomous AI Sales Agents That{" "}
                  <span className="text-blue-400">Eliminate Lead Leakage.</span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Stop losing revenue to slow follow-ups. Nexby SalesX contacts
                  every lead within 10 seconds, nurtures them with human-like
                  empathy, and books meetings 24/7. It never sleeps, never
                  forgets, and never has a "bad day."
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-bold text-lg shadow-lg transition-all transform hover:scale-105">
                    Calculate My ROI
                    <Calculator size={20} />
                  </button>
                  <button className="inline-flex items-center gap-2 h-14 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 font-bold text-lg backdrop-blur-sm transition-all">
                    Hear Sample Conversations
                    <Play size={20} />
                  </button>
                </div>
              </div>

              {/* Hero Visual Placeholder */}
              <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Live Demo
                </div>
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-slate-900/50 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-slate-700">
                    <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center mb-4">
                      <Clock className="text-red-500" size={32} />
                    </div>
                    <h3 className="text-white font-bold mb-1">5+ Minutes</h3>
                    <p className="text-slate-400 text-sm">
                      Lead turns "Blue/Cold"
                    </p>
                  </div>
                  <div className="bg-blue-900/20 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-blue-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 relative z-10">
                      <CheckCircle className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-white font-bold mb-1 relative z-10">
                      10 Seconds
                    </h3>
                    <p className="text-blue-200 text-sm relative z-10">
                      Lead "Green/Booked"
                    </p>
                  </div>
                </div>
                <div className="mt-6 bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400">
                  <p>&gt; Incoming Lead Detected...</p>
                  <p>&gt; Initiating Call (0.5s)...</p>
                  <p>&gt; Connection Established.</p>
                  <p>&gt; "Hi John, saw you downloaded the guide..."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                You Are Losing{" "}
                <span className="text-red-600">80% of Your Leads</span> in the
                First 5 Minutes.
              </h2>
              <p className="text-xl text-slate-600">
                The math is unforgiving. If you don't respond to a lead within 5
                minutes, the odds of contact drop by 100x.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      The Latency Trap
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Your human team is busy, on lunch, or sleeping when the
                      lead comes in. By the time they call back 4 hours later,
                      the prospect has moved on or bought from a competitor.
                    </p>
                  </div>
                </div>

                {/* Latency Trap Infographic */}
                <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 text-center">
                    Contact Probability vs. Time
                  </h4>
                  <div className="relative h-32 flex items-end justify-between gap-2 px-2">
                    {/* 5 Mins */}
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="text-xs font-bold text-green-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        100%
                      </div>
                      <div className="w-full bg-green-500 rounded-t-md h-24 relative group-hover:bg-green-600 transition-colors"></div>
                      <div className="text-[10px] font-bold text-slate-500">
                        5 min
                      </div>
                    </div>
                    {/* 10 Mins */}
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="text-xs font-bold text-yellow-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        60%
                      </div>
                      <div className="w-full bg-yellow-400 rounded-t-md h-14 relative group-hover:bg-yellow-500 transition-colors"></div>
                      <div className="text-[10px] font-bold text-slate-500">
                        10 min
                      </div>
                    </div>
                    {/* 30 Mins */}
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="text-xs font-bold text-orange-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        20%
                      </div>
                      <div className="w-full bg-orange-400 rounded-t-md h-6 relative group-hover:bg-orange-500 transition-colors"></div>
                      <div className="text-[10px] font-bold text-slate-500">
                        30 min
                      </div>
                    </div>
                    {/* 4 Hours */}
                    <div className="w-full flex flex-col items-center gap-2 group">
                      <div className="text-xs font-bold text-red-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        &lt;1%
                      </div>
                      <div className="w-full bg-red-500 rounded-t-md h-1 relative group-hover:bg-red-600 transition-colors"></div>
                      <div className="text-[10px] font-bold text-slate-500">
                        4 hrs
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                      <Activity size={12} />
                      Odds drop by 100x
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <XCircle className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      The Persistence Paradox
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      There is a fine line between <em>persuasive</em> and{" "}
                      <em>annoying</em>. Humans often cross it, spam-calling out
                      of desperation until the customer blocks the number. Or
                      worse, they give up after one try.
                    </p>
                  </div>
                </div>

                {/* Persistence Paradox Infographic */}
                <div className="bg-white rounded-xl border border-orange-100 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-slate-100">
                    {/* Human Approach */}
                    <div className="p-4 bg-red-50/30">
                      <div className="text-xs font-bold text-red-500 uppercase mb-3 text-center">
                        Human Approach
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <span>Call 1: No Answer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <span>Call 2: No Answer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <span>Call 3: "Stop calling!"</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded text-center">
                          Result: Blocked
                        </div>
                      </div>
                    </div>
                    {/* AI Approach */}
                    <div className="p-4 bg-green-50/30">
                      <div className="text-xs font-bold text-green-600 uppercase mb-3 text-center">
                        SalesX Approach
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Call 1: No Answer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span>WhatsApp: "Free to chat?"</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>Email: Value Add</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded text-center">
                          Result: Meeting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
                  The Solution
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Human Empathy.
                  <br />
                  <span className="text-blue-600">Machine Consistency.</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Human performance is biological. It fluctuates with mood,
                  health, fatigue, and motivation. AI performance is
                  mathematical. It is absolute.
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm border border-slate-100 h-fit">
                      <Shield className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Immune to Rejection
                      </h4>
                      <p className="text-slate-600">
                        A human sales rep gets demoralized after 10 rejections.
                        SalesX maintains the exact same energy and tone on the
                        10,000th call as it did on the 1st.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm border border-slate-100 h-fit">
                      <Activity className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        The Perfect Follow-Up Cadence
                      </h4>
                      <p className="text-slate-600">
                        SalesX knows exactly when to nudge. It doesn't spam; it
                        strategizes. It spaces out touchpoints across WhatsApp,
                        Email, and Voice to remain "top of mind" without
                        becoming a nuisance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                {/* Abstract representation of consistency */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100"
                      >
                        <div className="w-2 h-12 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                        <div className="text-green-600 font-bold text-sm">
                          100% Energy
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center text-sm text-slate-400 font-mono">
                    Consistency Index: 99.99%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Core Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  1. Instant Speed-to-Lead
                </h3>
                <p className="font-medium text-blue-600 mb-4">
                  First to Call. First to Close.
                </p>
                <p className="text-slate-600 mb-4">
                  The moment a form is filled on your website, SalesX triggers.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Sub-Second Reaction:</strong> The phone rings
                      while the prospect is still looking at your "Thank You"
                      page.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Contextual Greeting:</strong> "Hi John, I saw you
                      just downloaded our pricing guide..."
                    </span>
                  </li>
                </ul>
              </div>

              {/* Capability 2 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <BrainCircuitIcon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  2. Intelligent Nurturing
                </h3>
                <p className="font-medium text-purple-600 mb-4">
                  We Know When to Back Off.
                </p>
                <p className="text-slate-600 mb-4">
                  Brute force dialing destroys brand reputation. SalesX uses
                  "Smart Nurture Loops."
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Channel Hopping:</strong> No answer? Send
                      WhatsApp. Read but no reply? Wait 24h then Email.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Respectful Persistence:</strong> Detects "busy"
                      signals and automatically reschedules.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Capability 3 */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  3. Dynamic Conversation
                </h3>
                <p className="font-medium text-green-600 mb-4">
                  No Scripts. Just Conversation.
                </p>
                <p className="text-slate-600 mb-4">
                  Decision trees make customers hang up. Nexby SalesX uses
                  advanced LLMs for fluid conversations.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Handling Interruptions:</strong> Handles mumbling
                      and topic changes without breaking character.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      className="text-green-500 mt-1 shrink-0"
                    />
                    <span>
                      <strong>Qualification Logic:</strong> Filters out
                      tire-kickers so closers only talk to serious buyers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Funnel Visual */}
            <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">
                The SalesX Funnel Effect
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-auto">
                  <div className="text-3xl font-bold text-slate-400 mb-2">
                    1000
                  </div>
                  <div className="text-sm text-slate-500">Raw Leads</div>
                </div>
                <ArrowRight
                  className="rotate-90 md:rotate-0 text-blue-500"
                  size={32}
                />
                <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/50 w-full md:w-auto shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    SalesX
                  </div>
                  <div className="text-sm text-blue-200">
                    Filters & Qualifies
                  </div>
                </div>
                <ArrowRight
                  className="rotate-90 md:rotate-0 text-green-500"
                  size={32}
                />
                <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/50 w-full md:w-auto shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    50
                  </div>
                  <div className="text-sm text-green-200">
                    Qualified Appointments
                  </div>
                </div>
                <ArrowRight
                  className="rotate-90 md:rotate-0 text-white"
                  size={32}
                />
                <div className="bg-white text-slate-900 p-6 rounded-xl border border-white w-full md:w-auto">
                  <div className="text-3xl font-bold mb-2">Closers</div>
                  <div className="text-sm text-slate-600">Close Deals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Technical Specifications
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Activity className="text-blue-600" />
                      The "Smart-Switch" Architecture
                    </h3>
                    <p className="text-slate-600 mb-4">
                      We don't just blast calls. We orchestrate them.
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-blue-500 mt-1" />
                        <span>
                          <strong>Activity Detection:</strong> Detects
                          voicemails vs. live humans instantly. Leaves a message
                          on voicemail, pitches to humans.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-blue-500 mt-1" />
                        <span>
                          <strong>Local Presence:</strong> Automatically
                          displays a local area code to increase pick-up rates.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Database className="text-blue-600" />
                      Integration Ecosystem
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-blue-500 mt-1" />
                        <span>
                          <strong>CRM Write-Back:</strong> Bi-directional sync
                          with Salesforce, HubSpot, Zoho, and LeadSquared.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-blue-500 mt-1" />
                        <span>
                          <strong>Calendar Sync:</strong> Books meetings
                          directly onto your AE's Google or Outlook calendar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 flex items-center justify-center">
                {/* Integration Logos Placeholder */}
                <div className="grid grid-cols-2 gap-8 opacity-60">
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    Salesforce
                  </div>
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    HubSpot
                  </div>
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    Zoho
                  </div>
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    LeadSquared
                  </div>
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    Google
                  </div>
                  <div className="flex items-center justify-center font-bold text-2xl text-slate-400">
                    Outlook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applicability */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industry Applicability
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Real Estate
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Scenario
                    </p>
                    <p className="text-slate-700">
                      A lead inquires about a property at 11 PM.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-blue-500 uppercase mb-1">
                      Nexby Action
                    </p>
                    <p className="text-blue-800">
                      Instantly sends a WhatsApp with the brochure and schedules
                      a voice call for 10 AM the next day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Insurance
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Scenario
                    </p>
                    <p className="text-slate-700">
                      A customer drops off halfway through a policy application.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-blue-500 uppercase mb-1">
                      Nexby Action
                    </p>
                    <p className="text-blue-800">
                      Calls to ask, "I saw you got stuck at the documentation
                      stage. Can I help you clarify the ID requirements?"
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Automotive
                </h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Scenario
                    </p>
                    <p className="text-slate-700">
                      5,000 old leads from 6 months ago.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-xs font-bold text-blue-500 uppercase mb-1">
                      Nexby Action
                    </p>
                    <p className="text-blue-800">
                      Launches a "Service Camp" campaign to reactivate them
                      without burning out the human staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                <div className="text-6xl text-blue-500 absolute top-4 left-4 opacity-20">
                  "
                </div>
                <p className="text-lg text-slate-300 mb-6 relative z-10 italic">
                  "Our connection rate went from 12% to 45% because Nexby calls
                  instantly. The AI is consistent, polite, and never sounds
                  tired—even at 8 PM."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    E
                  </div>
                  <div>
                    <p className="font-bold">VP of Sales</p>
                    <p className="text-sm text-slate-400">EdTech Unicorn</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                <div className="text-6xl text-blue-500 absolute top-4 left-4 opacity-20">
                  "
                </div>
                <p className="text-lg text-slate-300 mb-6 relative z-10 italic">
                  "We used to have 3 people just filtering junk leads. Now
                  SalesX does it. Our closers are happier because they only talk
                  to people who actually have a budget."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold">
                    W
                  </div>
                  <div>
                    <p className="font-bold">Director</p>
                    <p className="text-sm text-slate-400">
                      Wealth Management Firm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Guessing. Start Closing.
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See how much revenue you are losing to latency.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              {/* Form is strictly required, remove buttons */}
            </div>

            <SalesXAuditForm />
          </div>
        </section>
      </div>
    </>
  );
};

// Helper component for BrainCircuit icon since it wasn't imported initially but used
const BrainCircuitIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M9 13a4.5 4.5 0 0 0 3-4" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M12 13h4" />
    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
    <path d="M12 8h8" />
    <path d="M16 8V5a2 2 0 0 1 2-2" />
    <circle cx="16" cy="13" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="5" r="2" />
  </svg>
);

export default SalesXPage;
