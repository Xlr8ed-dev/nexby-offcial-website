import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Building2,
  Users,
  HardHat,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  LayoutDashboard,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import RealEstateAuditForm from "../components/RealEstateAuditForm";

const PHASES = [
  {
    id: 1,
    title: "Phase 1: The Foundation",
    headline: "Build the Team That Builds the Tower.",
    description:
      "Before you pour the first slab, you need the right people. Our Recruiter Agent specializes in the 5 pillars of a Developer's office.",
    color: "blue",
    icon: Users,
    points: [
      { title: "Sales Closers", desc: "Tested for aggression & closing." },
      { title: "Site Engineers", desc: "Vetted for technical norms." },
      { title: "Liaison Officers", desc: "Evaluated for RERA knowledge." },
      { title: "CRM Executives", desc: "Screened for empathy." },
      { title: "Architects", desc: "Portfolio reviewed automatically." },
    ],
    stat: "You only interview the top 5%. We reject the rest.",
  },
  {
    id: 2,
    title: "Phase 2: The Launch",
    headline: "Don't Let the Expo Chaos Cost You Revenue.",
    description:
      "Launch day is mayhem. Thousands of leads, endless walk-ins, and lost data. Capture every opportunity.",
    color: "purple",
    icon: LayoutDashboard,
    points: [
      {
        title: "The Expo Force",
        desc: "Offline app captures visitor data & tags budget.",
      },
      {
        title: "Database Resurrection",
        desc: "AI calls 50k cold leads in 24 hours.",
      },
      {
        title: "Instant Brochure",
        desc: "WhatsApp sent before they leave the stall.",
      },
    ],
    stat: "50k Dead Leads → 500 Hot Site Visits in 24 hours.",
  },
  {
    id: 3,
    title: "Phase 3: The Velocity",
    headline: "The Follow-Up That Never Sleeps.",
    description:
      "Your Sales Managers are human. They get tired. Nexby does not. Omnichannel nurturing via WhatsApp, Email, and Voice.",
    color: "green",
    icon: MessageCircle,
    points: [
      {
        title: "Omnichannel Attack",
        desc: "Nurture via WhatsApp, Email, Voice.",
      },
      {
        title: "WhatsApp Voice Call",
        desc: "Triggered instantly on interest.",
      },
      { title: "Zero Drop-Off", desc: "Every lead touched 7 times in 7 days." },
    ],
    stat: "If they are buying, they are buying from you.",
  },
  {
    id: 4,
    title: "Phase 4: The Handholding",
    headline: "Silence the 'Slab Status' Calls.",
    description:
      "Post-sales anxiety is real. Deploy an AI Support Agent on your portal to answer status queries instantly.",
    color: "orange",
    icon: HardHat,
    points: [
      {
        title: "The Support Agent",
        desc: "Answers 'What is the status?' instantly.",
      },
      {
        title: "Photo Updates",
        desc: "Sends latest site photos automatically.",
      },
      { title: "Payment Plans", desc: "Explains milestones to customers." },
    ],
    stat: "Reduces friction for your collection team.",
  },
  {
    id: 5,
    title: "Phase 5: The Governance",
    headline: "The Compliance Watchdog.",
    description:
      "In Real Estate, a missed deadline is a massive penalty. Our Task Management System ensures nothing slips.",
    color: "red",
    icon: AlertTriangle,
    points: [
      { title: "Statutory Autopilot", desc: "Automated GST & RERA tasks." },
      {
        title: "One-Time Tasks",
        desc: "Track 'Land Title Search' to closure.",
      },
      {
        title: "Escalation Matrix",
        desc: "Missed deadlines alert the Director.",
      },
    ],
    stat: "Zero compliance penalties guaranteed.",
  },
];

const RealEstatePage = () => {
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
        <title>AI for Real Estate - Nexby Solutions</title>
        <meta
          name="description"
          content="The only AI platform built by a family of builders, for builders. Automate hiring, sales, and operations for your real estate business."
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
            <li className="before:content-['/'] before:mx-2">Solutions</li>
            <li className="before:content-['/'] before:mx-2 text-purple-600 font-medium">
              Real Estate
            </li>
          </ol>
        </nav>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="text-blue-400" size={20} />
                <span className="text-sm font-bold text-blue-100 uppercase tracking-wide">
                  Industry Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Real Estate is in Our DNA.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI is Just Our Tool.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                We don't just write code; we understand concrete, compliance,
                and closing ratios. The only AI platform built by a family of
                builders, for builders.
              </p>

              <a
                href="#strategy-call"
                className="inline-flex items-center gap-2 h-14 bg-white text-slate-900 hover:bg-blue-50 rounded-full px-8 font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Schedule a Strategy Call
                <ArrowRight size={20} />
              </a>
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
                "Engineering Discipline. Real Estate DNA."
              </h2>

              <div className="prose prose-lg text-slate-700 relative z-10">
                <p className="mb-6">I am a technologist by trade.</p>
                <p className="mb-6">
                  For the last 12 years, I have worked as a Software Engineer,
                  architecting enterprise-grade systems that solve complex
                  business problems for global clients. My career has been
                  defined by one rule:{" "}
                  <strong>
                    Technology must generate ROI, or it is useless.
                  </strong>
                </p>
                <p className="mb-6">
                  But I didn't choose to build solutions for Real Estate by
                  accident.
                </p>
                <p className="mb-6">
                  I come from a family of builders. I grew up watching the
                  specific, chaotic reality of this industry—the pressure of
                  launch days, the disconnect between sales and site, and the
                  pain of adopting 'generic' software that wasn't built for the
                  way you actually work.
                </p>
                <p className="mb-6">
                  I founded Nexby to bridge that gap. I applied the rigorous
                  standards of my engineering career to the specific problems I
                  watched my family face.
                </p>
                <p className="font-medium text-slate-900">
                  We don't build software to make you a 'tech company.' We build
                  it to make you a more profitable Real Estate company.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div>
                  <p className="font-bold text-slate-900">Archit Jain</p>
                  <p className="text-slate-500 text-sm">
                    Founder, Nexby AI Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scrolling Lifecycle Section */}
        <section className="py-20 bg-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                The Project Lifecycle
              </h2>
              <p className="text-xl text-slate-600">
                From hiring to handover, we have you covered.
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

            {/* Spacer for end of scroll */}
            <div className="min-w-[20px] md:min-w-[50px] shrink-0"></div>
          </div>
        </section>

        {/* No-Nonsense Guarantee */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Don't Charge for "Effort." We Charge for Impact.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Most tech vendors invoice you for licenses even if the software
              sits unused. We are different. We sit with your team, we train
              them, and we ensure the system is actually delivering ROI. If it
              doesn't work, we don't deserve your business.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="strategy-call" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Your next tower needs a digital foundation.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Let’s discuss your current project pipeline. No sales pitch,
                just a builder-to-builder conversation.
              </p>
            </div>

            <RealEstateAuditForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstatePage;
