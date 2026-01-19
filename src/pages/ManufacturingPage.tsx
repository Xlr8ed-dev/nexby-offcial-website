import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Factory,
  FileText,
  Presentation,
  Globe,
  Share2,
  HardHat,
  Wrench,
  CheckCircle,
  ArrowRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Search,
  AlertTriangle,
  MessageSquare,
  Activity,
} from "lucide-react";
import ManufacturingAuditForm from "../components/ManufacturingAuditForm";

const PHASES = [
  {
    id: 1,
    title: "Phase 1: The Contract",
    headline: "Stop Burning Senior Engineers on Paperwork.",
    description:
      "Responding to a Tender or RFP is high-stakes poker. You typically assign your most expensive technical resources to read 1,000+ pages of documentation just to find the 'Scope of Work'.",
    color: "blue",
    icon: FileText,
    points: [
      {
        title: "Bill of Quantities (BOQ)",
        desc: "Extracted automatically from PDF to Excel.",
      },
      {
        title: "Risk Detection",
        desc: "Highlights 'Liquidated Damages' & penalty clauses.",
      },
      {
        title: "Go/No-Go",
        desc: "Compares requirements against your capability matrix.",
      },
    ],
    stat: "Reduced tender analysis time from 10 days to 4 hours.",
  },
  {
    id: 2,
    title: "Phase 2: The Showcase",
    headline: "The ROI of a 50x50 Stall.",
    description:
      "You spend millions shipping heavy machinery to trade shows. Don't let the leads vanish in a fishbowl of business cards.",
    color: "purple",
    icon: Presentation,
    points: [
      {
        title: "Offline-First Capture",
        desc: "Scan cards & tag technical requirements offline.",
      },
      {
        title: "Technical Follow-up",
        desc: "WhatsApp specific datasheet instantly.",
      },
      { title: "Lead Recovery", desc: "No more lost business cards." },
    ],
    stat: "Instant follow-up before the visitor leaves the hall.",
  },
  {
    id: 3,
    title: "Phase 3: The Global Export",
    headline: "Sell in Spanish While You Sleep in Mumbai.",
    description:
      "Your factory runs on local time, but revenue runs on global time. Overcome timezones and language barriers in export sales.",
    color: "indigo",
    icon: Globe,
    points: [
      {
        title: "The 24/7 Sales Desk",
        desc: "Instant replies to global inquiries at 3 AM.",
      },
      {
        title: "Native-Language Fluency",
        desc: "Fluent in Spanish, French, German, Portuguese.",
      },
      {
        title: "Technical Translation",
        desc: "Answers technical queries in the buyer's language.",
      },
    ],
    stat: "Zero lost leads due to language barriers.",
  },
  {
    id: 4,
    title: "Phase 4: The Network",
    headline: "Manage Your Dealers. Nurture Buyers.",
    description:
      "Manufacturing sales is a long game involving multiple stakeholders. Keep your distributor network active and qualified.",
    color: "cyan",
    icon: Share2,
    points: [
      {
        title: "B2B Nurture Agent",
        desc: "Automated check-ins for stock orders.",
      },
      {
        title: "Lead Qualification",
        desc: "Filters 'Fleet Procurement' from single units.",
      },
      {
        title: "Dealer Visibility",
        desc: "Track dealer engagement and stock levels.",
      },
    ],
    stat: "Routes only high-value leads to your Sales Director.",
  },
  {
    id: 5,
    title: "Phase 5: The Talent",
    headline: "Hiring Engineers, Not Just Employees.",
    description:
      "A bad hire on the assembly line costs safety. Our Recruiter Agent is configured for technical precision screening.",
    color: "orange",
    icon: HardHat,
    points: [
      {
        title: "Design Engineers",
        desc: "Vetting SolidWorks, AutoCAD, CATIA skills.",
      },
      {
        title: "Plant Managers",
        desc: "Screening Six Sigma & Man-Management.",
      },
      {
        title: "Skilled Technicians",
        desc: "Verifying ITI/Diploma & safety tracks.",
      },
    ],
    stat: "Specific screening for 5 critical manufacturing profiles.",
  },
  {
    id: 6,
    title: "Phase 6: The Aftermarket",
    headline: "Zero Downtime Support.",
    description:
      "When a machine goes down, your customer loses money. They can't wait for a callback. Instant L1 Support.",
    color: "red",
    icon: Wrench,
    points: [
      {
        title: "Technical Support Agent",
        desc: "Lives on your customer portal.",
      },
      {
        title: "Manual Ingestion",
        desc: "Reads your Technical Manuals to identify errors.",
      },
      {
        title: "Instant Solves",
        desc: "Guides operators on fixes (e.g. 'Pressure Valve Leak').",
      },
    ],
    stat: "Triggers Spare Part orders automatically.",
  },
];

const SUCCESS_STORIES = [
  {
    title: "Surgical Instrument Manufacturer (Export)",
    challenge:
      "Selling precision instruments to European hospitals. The sales team struggled with technical queries in French and German.",
    solution:
      "Deployed a Multi-lingual AI Support Agent to handle Tier-1 technical queries from EU distributors.",
    result:
      "40% increase in response speed for export inquiries; Zero lost leads due to language barriers.",
  },
  {
    title: "Electric Wire & Cable Giant",
    challenge:
      "Responding to massive government tenders and RFPs globally. Senior engineers were drowning in paperwork.",
    solution:
      "Used Nexby's RFP Analyzer to structure complex tender documents and the TeleCaller to manage 500+ domestic dealers.",
    result: "Reduced tender analysis time from 7 days to 24 hours.",
  },
];

const ManufacturingPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>AI for Manufacturing - Nexby Solutions</title>
        <meta
          name="description"
          content="Automate your manufacturing operations. From RFP analysis and export sales to hiring skilled engineers. The first AI designed for the shop floor."
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Fallback gradient if image fails or while loading */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
            <img
              src="/images/manufacturing-hero.png"
              alt="Robotic arm and digital dashboard"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2 mb-6">
                  <Factory className="text-blue-400" size={20} />
                  <span className="text-sm font-bold text-blue-100 uppercase tracking-wide">
                    Industry Solutions
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  From the Shop Floor
                  <br />
                  to the Sales Floor.
                  <br />
                  <span className="text-blue-400">Automated.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Manufacturing is about precision. Your operations should be
                  too. We deploy AI agents that read technical RFPs, manage
                  global export sales, and hire skilled engineers.
                </p>

                <a
                  href="#audit"
                  className="inline-flex items-center gap-2 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105"
                >
                  Schedule Industrial Audit
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Right Side: Live Interface Metric Card */}
              <div className="hidden lg:block relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="font-mono text-sm text-blue-200">
                        NEXBY_INDUSTRIAL_AGENT_V4.2
                      </span>
                    </div>
                    <Activity className="text-blue-400" size={18} />
                  </div>

                  <div className="space-y-4">
                    {/* Item 1: BOQ Extraction */}
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Search className="text-purple-400" size={16} />
                          <span className="text-sm font-bold text-white">
                            Analyzing RFP Doc
                          </span>
                        </div>
                        <span className="text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                          Processing
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">
                        Extracting Bill of Quantities (BOQ) from
                        'Tender_NTPC_2025.pdf'...
                      </p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full w-[75%]"></div>
                      </div>
                    </div>

                    {/* Item 2: Risk Alert */}
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="text-amber-400" size={16} />
                          <span className="text-sm font-bold text-white">
                            Risk Detected
                          </span>
                        </div>
                        <span className="text-xs text-amber-300 bg-amber-500/10 px-2 py-1 rounded">
                          Clause 4.2
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 bg-red-900/20 p-2 rounded border border-red-500/20">
                        "Liquidated Damages: 5% per week delay."
                      </p>
                    </div>

                    {/* Item 3: Live Sales */}
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="text-green-400" size={16} />
                          <span className="text-sm font-bold text-white">
                            Export Inquiry (Brazil)
                          </span>
                        </div>
                        <span className="text-xs text-green-300 bg-green-500/10 px-2 py-1 rounded">
                          Active
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 italic">
                        "Auto-translating query from Portuguese to English..."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-500 font-mono">
                    <span>SYSTEM_STATUS: OPTIMAL</span>
                    <span>LATENCY: 24ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Note */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Briefcase size={200} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 relative z-10">
                "Systems Thinking. Applied to Business."
              </h2>

              <div className="prose prose-lg text-slate-700 relative z-10">
                <p className="mb-6">I am an Engineer by training.</p>
                <p className="mb-6">
                  In software, we obsess over 'optimization'—how to make a
                  system run faster with fewer resources. When I look at the
                  Manufacturing sector, I see the most sophisticated machinery
                  in the world on the factory floor, but the most archaic
                  processes in the front office.
                </p>
                <p className="mb-6">
                  I see senior engineers wasting weeks reading 500-page tender
                  documents just to extract a BOQ. I see sales directors losing
                  visibility into their dealer networks. I see HR teams
                  struggling to verify technical certifications.
                </p>
                <p className="font-medium text-slate-900">
                  Nexby brings the discipline of{" "}
                  <strong>Software Engineering</strong> to your{" "}
                  <strong>Business Operations</strong>. We don't just patch
                  holes; we re-architect the workflow. We treat your RFPs, your
                  leads, and your support tickets as data streams that can be
                  automated, optimized, and scaled.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div>
                  <p className="font-bold text-slate-900">Archit Jain</p>
                  <p className="text-slate-500 text-sm">Founder, Nexby</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Lifecycle */}
        <section className="py-20 bg-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Complete Operational Architecture
              </h2>
              <p className="text-xl text-slate-600">
                Re-engineering your workflow from contract to support.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ChevronLeft size={24} className="text-slate-600" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ChevronRight size={24} className="text-slate-600" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 scrollbar-hide items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PHASES.map((phase) => (
              <div
                key={phase.id}
                className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] snap-center bg-white rounded-3xl p-8 shadow-xl border border-slate-200 flex flex-col h-auto relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-${phase.color}-600`}
                >
                  <phase.icon size={180} />
                </div>

                <div
                  className={`inline-block bg-${phase.color}-100 text-${phase.color}-800 px-4 py-1 rounded-full text-sm font-bold mb-6 w-fit`}
                >
                  {phase.title}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                  {phase.headline}
                </h3>

                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed">
                  {phase.description}
                </p>

                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {phase.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle
                        className={`text-${phase.color}-600 shrink-0 mt-1`}
                        size={20}
                      />
                      <div>
                        <span className="font-bold text-slate-900">
                          {point.title}:
                        </span>{" "}
                        <span className="text-slate-600 text-sm">
                          {point.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className={`bg-${phase.color}-50 border-l-4 border-${phase.color}-500 p-4 rounded-r-lg relative z-10`}
                >
                  <p className={`font-bold text-${phase.color}-900 text-sm`}>
                    {phase.stat}
                  </p>
                </div>
              </div>
            ))}
            <div className="min-w-[20px] md:min-w-[50px] shrink-0"></div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Powering the Global Supply Chain
              </h2>
              <p className="text-xl text-slate-400">
                Real results from the heavy industry sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SUCCESS_STORIES.map((story, i) => (
                <div
                  key={i}
                  className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Trophy className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{story.title}</h3>
                  </div>

                  <div className="space-y-6 text-slate-300">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">
                        The Challenge
                      </p>
                      <p>{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">
                        The Solution
                      </p>
                      <p>{story.solution}</p>
                    </div>
                    <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                      <p className="text-green-400 font-bold">{story.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Audit Section */}
        <section id="audit" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Re-engineer your workflow.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Let’s test our RFP Analyzer on one of your past tenders. See the
                speed for yourself.
              </p>
              <a
                href="#"
                className="text-blue-600 font-bold underline hover:text-blue-700"
              >
                Download RFP Solution Case Study
              </a>
            </div>

            <ManufacturingAuditForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManufacturingPage;
