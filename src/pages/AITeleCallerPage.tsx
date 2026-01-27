import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Mic,
  Activity,
  Globe,
  MessageSquare,
  Phone,
  BarChart3,
  ShieldCheck,
  Server,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react";
import AITeleCallerDemoForm from "../components/AITeleCallerDemoForm";
import { capabilitiesData } from "./ProductAiData";

const AITeleCallerPage = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const colorMap = {
    indigo: {
      border: "border-indigo-200",
      hover: "hover:shadow-indigo-200/50",
      bg: "bg-indigo-100",
      text: "text-indigo-600",
      dark: "text-indigo-900",
      gradient: "from-indigo-100 to-purple-100",
    },
    green: {
      border: "border-green-200",
      hover: "hover:shadow-green-200/50",
      bg: "bg-green-100",
      text: "text-green-600",
      dark: "text-green-900",
      gradient: "from-green-100 to-emerald-100",
    },
    purple: {
      border: "border-purple-200",
      hover: "hover:shadow-purple-200/50",
      bg: "bg-purple-100",
      text: "text-purple-600",
      dark: "text-purple-900",
      gradient: "from-purple-100 to-pink-100",
    },
  } as const;

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  useEffect(() => {
    if (!cardRefs.current.length) return;

    const observer = new ResizeObserver(() => {
      const heights = cardRefs.current.map(
        (el) => el?.getBoundingClientRect().height || 0,
      );
      setMaxHeight(Math.max(...heights));
    });

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>AI TeleCaller - Enterprise Voice Agents | Nexby</title>
        <meta
          name="description"
          content="Deploy enterprise-grade voice agents that handle millions of calls with sub-second latency and perfect context. Indistinguishable from human."
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
              AI TeleCaller
            </li>
          </ol>
        </nav>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-indigo-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                  <Mic className="text-indigo-600" size={20} />
                  <span className="text-sm font-bold text-indigo-900 uppercase tracking-wide">
                    Product: AI TeleCaller
                  </span>
                </div>

                {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  The Voice of Your Brand.{" "}
                  <span className="text-indigo-600">
                    Indistinguishable from Human.
                  </span>
                </h1> */}
                <h1
                  className="
    font-bold text-gray-900 mb-6 leading-tight
    text-[2.25rem]
    sm:text-5xl
    md:text-7xl
  "
                >
                  {/* LINE 1 */}
                  <span className="block">
                    The Voice of{" "}
                    <span className="block sm:inline">Your Brand.</span>
                  </span>

                  {/* LINE 2 (HIGHLIGHT) */}
                  <span
                    className="
      block mt-2 text-indigo-600 leading-snug
    "
                  >
                    <span className="block sm:inline">Indistinguishable</span>{" "}
                    <span className="block sm:inline">from Human.</span>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Deploy enterprise-grade voice agents that handle millions of
                  calls with sub-second latency and perfect context. We don't
                  give you a "builder tool." We deliver a fully architected,
                  battle-tested voice operation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Request a Voice Demo
                    <ArrowRight size={20} />
                  </button>
                  <button className="inline-flex items-center gap-2 h-14 bg-white text-indigo-900 border-2 border-indigo-100 hover:border-indigo-300 rounded-full px-8 font-bold text-lg transition-all">
                    <Play size={20} className="fill-current" />
                    Listen to Samples
                  </button>
                </div>
              </div>

              {/* <div className="relative">
                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
                  <div className="text-center p-8 relative z-10">
                    <Activity
                      className="text-indigo-400 mx-auto mb-4 animate-bounce"
                      size={80}
                    />
                    <p className="text-indigo-200 font-medium">
                      3D Audio Waveform Visualization
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      Reacting in real-time to conversation
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="relative">
                <div
                  className="
      bg-slate-900 rounded-2xl sm:rounded-3xl
      overflow-hidden shadow-2xl border-4 border-white
      aspect-[4/3] sm:aspect-video
      flex items-center justify-center relative
    "
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse" />

                  <div className="text-center px-4 py-6 sm:p-8 relative z-10">
                    {/* MOBILE ICON */}
                    <Activity
                      className="text-indigo-400 mx-auto mb-3 animate-bounce sm:hidden"
                      size={48}
                    />

                    {/* DESKTOP ICON */}
                    <Activity
                      className="text-indigo-400 mx-auto mb-4 animate-bounce hidden sm:block"
                      size={80}
                    />

                    <p className="text-indigo-200 font-medium text-sm sm:text-base">
                      3D Audio Waveform Visualization
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">
                      Reacting in real-time to conversation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Nexby Advantage */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Why "Build-It-Yourself" Fails at Scale.
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                The market is flooded with "No-Code Voice Builders." They look
                easy, but they break under pressure. Handling interruptions,
                accents, background noise, and complex emotional nuance requires
                deep engineering, not drag-and-drop widgets.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-indigo-300">
                  The Nexby Difference
                </h3>
                <p className="text-lg text-white">
                  At Nexby,{" "}
                  <strong>we do not ask you to build your own bot.</strong> Our
                  linguistic engineers and voice architects build it for you. We
                  ingest your call recordings, study your top performers, and
                  code a bespoke neural agent that mimics your best employee,
                  not a robot.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className="
      bg-slate-900 rounded-2xl sm:rounded-3xl
      p-6 sm:p-12 md:p-16
      text-white text-center
    "
            >
              {/* Heading */}
              <h2
                className="
        text-2xl sm:text-3xl md:text-5xl
        font-bold mb-5 sm:mb-8
        leading-snug
      "
              >
                Why "Build-It-Yourself"
                <br className="sm:hidden" />
                Fails at Scale.
              </h2>

              {/* Description */}
              <p
                className="
        text-base sm:text-lg md:text-xl
        text-gray-300
        max-w-4xl mx-auto
        leading-relaxed
        mb-8 sm:mb-12
      "
              >
                The market is flooded with “No-Code Voice Builders.” They look
                easy, but they break under pressure. Handling interruptions,
                accents, background noise, and emotional nuance requires deep
                engineering — not drag-and-drop widgets.
              </p>

              {/* Highlight Card */}
              <div
                className="
        bg-white/10 backdrop-blur-sm
        rounded-xl sm:rounded-2xl
        p-5 sm:p-6 md:p-8
        border border-white/20
        max-w-3xl mx-auto
      "
              >
                <h3
                  className="
          text-lg sm:text-xl md:text-2xl
          font-bold mb-3 sm:mb-4
          text-indigo-300
        "
                >
                  The Nexby Difference
                </h3>

                <p
                  className="
          text-sm sm:text-base md:text-lg
          text-white
          leading-relaxed
        "
                >
                  At Nexby,{" "}
                  <strong>we do not ask you to build your own bot.</strong>
                  Our linguistic engineers and voice architects build it for
                  you. We ingest your call recordings, study your top
                  performers, and code a bespoke neural agent that mimics your
                  best employee — not a robot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Core Capabilities & Interface Tour
              </h2>
              <p className="text-xl text-gray-600">
                Engineered for the most demanding enterprise environments
              </p>
            </div>

            <div className="space-y-8">
              {/* Capability 1: Human-Parity Voice Engine */}
              {capabilitiesData.map((cap, index) => {
                const color = colorMap[cap.accent];
                const HeroIcon = cap.hero.icon;

                return (
                  // <motion.div
                  //   ref={(el) => {
                  //     if (el) cardRefs.current[index] = el;
                  //   }}

                  //   style={{
                  //     height: maxHeight ? `${maxHeight}px` : "auto",
                  //   }}
                  //   key={cap.id}
                  //   initial={{ opacity: 0, y: 50 }}
                  //   whileInView={{ opacity: 1, y: 0 }}
                  //   viewport={{ once: true, margin: "-100px" }}
                  //   transition={{ duration: 0.6, delay: index * 0.1 }}
                  //   className={`sticky top-24 md:top-20 bg-white rounded-3xl overflow-hidden hover:shadow-blue-200/50 transition-shadow duration-300`}
                  // >
                  <motion.div
                    ref={(el) => {
                      if (el) cardRefs.current[index] = el;
                    }}
                    key={cap.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{
                      height: isMobile
                        ? "auto"
                        : maxHeight
                          ? `${maxHeight}px`
                          : "auto",
                    }}
                    className={`
    ${isMobile ? "" : "sticky top-20"}
    bg-white rounded-3xl overflow-hidden
    hover:shadow-blue-200/50 transition-shadow duration-300
  `}
                  >
                    {/* HERO */}
                    <div
                      className={`h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${color.gradient}`}
                    >
                      {/* <div className="text-center">
                        {HeroIcon && (
                          <HeroIcon
                            size={64}
                            className={`${color.text} mx-auto mb-3 ${
                              cap.hero.animate ? "animate-bounce" : ""
                            }`}
                          />
                        )}
                        <p className="text-gray-600 font-medium">
                          {cap.hero.subtitle}
                        </p>
                      </div> */}
                      <div className="text-center">
                        {cap.id === 2 ? (
                          /* 🔹 Infographic: Call → WhatsApp */
                          // <div className="relative flex items-center justify-center">
                          //   <div className="w-56 h-56 rounded-full border-2 border-dashed border-green-300 flex items-center justify-center">
                          //     <div className="flex flex-col items-center gap-3">
                          //       <Phone size={36} className="text-green-500" />
                          //       <ArrowRight
                          //         size={24}
                          //         className="text-gray-300 rotate-90"
                          //       />
                          //       <MessageSquare
                          //         size={36}
                          //         className="text-green-500"
                          //       />
                          //     </div>
                          //   </div>
                          // </div>
                          <div className="relative flex items-center justify-center">
                            <div
                              className="
      w-40 h-40 sm:w-56 sm:h-56
      rounded-full
      border-2 border-dashed border-green-300
      flex items-center justify-center
    "
                            >
                              <div className="flex flex-col items-center gap-2 sm:gap-3">
                                {/* Phone */}
                                <div className="scale-75 sm:scale-100">
                                  <Phone size={36} className="text-green-500" />
                                </div>

                                {/* Arrow */}
                                <div className="scale-75 sm:scale-100">
                                  <ArrowRight
                                    size={24}
                                    className="text-gray-300 rotate-90"
                                  />
                                </div>

                                {/* Message */}
                                <div className="scale-75 sm:scale-100">
                                  <MessageSquare
                                    size={36}
                                    className="text-green-500"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : cap.id === 3 ? (
                          /* 🔹 Language Map / Code-Switching Demo */
                          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                            {["Hindi", "Marathi", "Tamil", "English"].map(
                              (lang) => (
                                <div
                                  key={lang}
                                  className="rounded-xl backdrop-blur px-4 py-3 text-sm font-semibold text-gray-800"
                                >
                                  {lang}
                                </div>
                              ),
                            )}
                          </div>
                        ) : (
                          /* 🔹 Default Hero Icon */
                          HeroIcon && (
                            <HeroIcon
                              size={64}
                              className={`${color.text} mx-auto mb-3 ${
                                cap.hero.animate ? "animate-bounce" : ""
                              }`}
                            />
                          )
                        )}

                        <p className="text-gray-600 font-medium mt-6">
                          {cap.hero.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 md:p-6">
                      <div
                        className={`inline-flex items-center gap-2 ${color.bg} rounded-full px-4 py-2 mb-4 md:mb-2`}
                      >
                        <cap.badge.icon size={20} className={color.text} />
                        <span
                          className={`text-sm font-bold uppercase ${color.dark}`}
                        >
                          {cap.badge.text}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-2">
                        {cap.title}
                      </h3>

                      <p
                        className={`text-xl font-bold mb-6 md:mb-2 ${color.text}`}
                      >
                        {cap.subtitle}
                      </p>

                      <ul className="space-y-4 md:text-sm md:mb-2">
                        {cap.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <point.icon
                              size={20}
                              className={`${color.text} shrink-0 mt-1`}
                            />
                            <div>
                              <span className="font-bold text-gray-900">
                                {point.title}:
                              </span>{" "}
                              <span className="text-gray-700">
                                {point.description}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Control */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The "Live Monitor" Dashboard
              </h2>
              <p className="text-xl text-gray-600">
                10,000 Concurrent Calls. One View.
              </p>
            </div>

            {/* <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-[16/9] flex items-center justify-center mb-12">
              <div className="text-center">
                <BarChart3 className="text-indigo-500 mx-auto mb-4" size={80} />
                <p className="text-slate-400 font-medium text-lg">
                  High-Fidelity Command Center Dashboard
                </p>
                <p className="text-slate-600 mt-2">
                  Live Call Volume | Sentiment Heatmap | Live Listen
                </p>
              </div>
            </div> */}
            <div
              className="
    bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800
    flex items-center justify-center mb-12
    aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]
  "
            >
              <div className="text-center px-6 py-8 md:py-0">
                <BarChart3
                  className="text-indigo-500 mx-auto mb-3 md:mb-4"
                  size={56}
                />

                <p className="text-slate-300 font-medium text-base sm:text-lg md:text-lg">
                  High-Fidelity Command Center Dashboard
                </p>

                <p className="text-slate-500 text-sm sm:text-base mt-1 md:mt-2">
                  Live Call Volume | Sentiment Heatmap | Live Listen
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <Activity className="text-indigo-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Sentiment Heatmap</h3>
                <p className="text-gray-600">
                  See live calls color-coded by sentiment (Red = Angry, Green =
                  Happy). Click to listen in real-time.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <ShieldCheck className="text-indigo-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Compliance Audit</h3>
                <p className="text-gray-600">
                  Auto-flag calls where mandatory disclosures were missed
                  (though our AI never misses them).
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <BarChart3 className="text-indigo-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">
                  Conversation Intelligence
                </h3>
                <p className="text-gray-600">
                  Extract trending objections. Understand why 40% of customers
                  are saying "No" today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">
                  Debt Collections (BFSI)
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Challenge
                    </span>
                    <p className="text-gray-300">
                      High agent attrition and emotional burnout.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Solution
                    </span>
                    <p className="text-gray-300">
                      Nexby handles early-stage delinquency calls with empathy
                      and persistence. Negotiates payment plans instantly.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Impact
                    </span>
                    <p className="font-bold text-white text-lg">
                      30% increase in debt recovery rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">
                  Inbound Customer Service
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Challenge
                    </span>
                    <p className="text-gray-300">
                      Long hold times and repetitive queries.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Solution
                    </span>
                    <p className="text-gray-300">
                      An "Infinite Capacity" receptionist. Resolve FAQs or route
                      complex queries to specific departments.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Impact
                    </span>
                    <p className="font-bold text-white text-lg">
                      Zero hold time during peak hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Lead Qualification</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Challenge
                    </span>
                    <p className="text-gray-300">
                      Wasting time calling junk leads.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Solution
                    </span>
                    <p className="text-gray-300">
                      Nexby calls 10,000 leads in an hour, qualifies them, and
                      patches only hot leads to sales.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-300 uppercase">
                      Impact
                    </span>
                    <p className="font-bold text-white text-lg">
                      Sales team spends 100% of time closing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Server className="text-indigo-600" />
                  Deployment Models
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <span className="font-bold text-gray-900">Cloud:</span>
                      <span className="text-gray-700">
                        {" "}
                        Secure, elastic scaling on AWS/GCP.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        On-Premise:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        For Banks and Government. We deploy the Voice LLM within
                        your private VPC.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Telephony:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Pre-integrated with Twilio, Exotel, Tata Communications,
                        and Genesys.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-indigo-600" />
                  Compliance
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <span className="font-bold text-gray-900">
                      ISO 27001 Certified
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <span className="font-bold text-gray-900">
                      GDPR & HIPAA Compliant
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        PII Redaction:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Auto-redacts credit card numbers and names from call
                        recordings.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg italic text-gray-700 mb-6">
                  "We scaled our collections outreach from 5,000 to 50,000 calls
                  a day without hiring a single new agent. The 'Hinglish'
                  fluency is better than our outsourced BPO."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">VP of Operations</p>
                    <p className="text-indigo-600 text-sm">
                      Leading Fintech Unicorn
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg italic text-gray-700 mb-6">
                  "The barge-in capability is the game changer. Customers
                  actually think they are talking to a person. Our CSAT scores
                  went up by 15%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Head of CX</p>
                    <p className="text-indigo-600 text-sm">E-Commerce Giant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white text-center border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Scale your voice operations. <br />
              <span className="text-indigo-600">Not your call center.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let us build your best performing agent. Live in 4 weeks.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full px-10 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Request a Voice Demo
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex items-center gap-2 h-14 bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-full px-10 font-bold text-lg transition-all">
                <Play size={20} className="fill-current" />
                Listen to Call Samples
              </button>
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <div ref={formRef}>
          <AITeleCallerDemoForm />
        </div>
      </div>
    </>
  );
};

export default AITeleCallerPage;
