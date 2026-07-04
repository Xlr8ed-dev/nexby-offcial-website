import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import {
  Bot,
  ShieldCheck,
  FileSearch,
  Smartphone,
  Globe,
  MessageSquare,
  Code2,
  Users,
  Building2,
  Headphones,
  ArrowRight,
  CheckCircle,
  Cpu,
  Fingerprint,
} from "lucide-react";
import AIRecruiterDemoForm from "../components/AIRecruiterDemoForm";
import { stackingCardsData } from "./StackingCard";

const videoUrl = import.meta.env.VITE_HERO_VIDEO_URL;
const youtubeFallback = import.meta.env.VITE_YOUTUBE_FALLBACK;

const AIRecruiterPage = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

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

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0); // default muted
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute (0% <-> 100%)
  const toggleMute = () => {
    if (!videoRef.current) return;

    if (volume === 0) {
      videoRef.current.volume = 1;
      videoRef.current.muted = false;
      setVolume(1);
    } else {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      setVolume(0);
    }
  };

  // Volume Slider Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const newVolume = Number(e.target.value);
    videoRef.current.volume = newVolume;
    videoRef.current.muted = newVolume === 0;
    setVolume(newVolume);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (!videoRef.current) return;
    videoRef.current.requestFullscreen();
  };
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
            <li className="before:content-['/'] before:mx-2">Products</li>
            <li className="before:content-['/'] before:mx-2 text-purple-600 font-medium">
              AI Recruiter
            </li>
          </ol>
        </nav>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                  <Bot className="text-blue-600" size={20} />
                  <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                    Product: AI Recruiter
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  The World’s Most Ruthless{" "}
                  <span className="text-blue-600">(and Fair)</span> Interviewer.
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  An autonomous hiring platform that screens, interviews, and
                  ranks talent at infinite scale. 100% data-driven. 0% bias.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToForm}
                    className="inline-flex items-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Book a Product Demo
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video">
                  {!videoError ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      src={videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controlsList="nodownload noplaybackrate noremoteplayback"
                      disablePictureInPicture
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={youtubeFallback}
                      title="AI Recruiter Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Controls */}
                <div className="absolute bottom-6 right-6 flex items-center gap-4">
                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="bg-black/70 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/90 transition"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  {/* Volume Wrapper */}
                  <div
                    className="relative"
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                  >
                    <button
                      onClick={toggleMute}
                      className="bg-black/70 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/90 transition"
                    >
                      {volume === 0 ? (
                        <VolumeX size={18} />
                      ) : (
                        <Volume2 size={18} />
                      )}
                    </button>

                    {/* Vertical Slider */}
                    {showVolumeSlider && (
                      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-5 rounded-2xl flex flex-col items-center">
                        {/* Slider Wrapper */}
                        <div className="relative h-28 flex items-center">
                          {/* Track Background */}
                          <div className="absolute w-1 h-full bg-gray-500/40 rounded-full"></div>

                          {/* Filled Volume */}
                          <div
                            className="absolute w-1 bg-white rounded-full bottom-0"
                            style={{ height: `${volume * 100}%` }}
                          ></div>

                          {/* Range Input (Invisible but functional) */}
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="absolute h-28 w-6 opacity-0 cursor-pointer"
                            style={{ writingMode: "vertical-rl" }}
                          />
                        </div>

                        {/* Percentage */}
                        <span className="text-white text-xs mt-3">
                          {Math.round(volume * 100)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={handleFullscreen}
                    className="bg-black/70 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/90 transition"
                  >
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Candidate Experience meets Recruiter Intelligence.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nexby Recruiter is a bi-directional platform designed to remove
                friction for candidates while providing military-grade filtering
                for employers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* For Candidates */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For Candidates (Mobile & Web)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A seamless, app-free interview experience. Candidates receive
                  a link, click, and start the interview instantly on their
                  browser. No downloads required.
                </p>
              </div>

              {/* For Hiring Managers */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For Hiring Managers (Command Dashboard)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A central war room to post jobs, configure interview logic,
                  view proctoring logs, and stack-rank candidates based on AI
                  scores.
                </p>
              </div>
            </div>

            {/* Dashboard Visual Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-96 flex items-center justify-center">
              <img
                src="/images/ai-recruiter-dashboard.png"
                alt="Command Dashboard"
                className="w-full h-full object-cover"
              loading="lazy" />
            </div>
          </div>
        </section>

        {/* Core Features - Vertical Stacking Cards */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 md:pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Core Features
              </h2>
              <p className="text-xl text-gray-600">
                Intelligent automation at every step of the hiring funnel
              </p>
            </div>

            <div className="space-y-8">
              {/* Feature 1: Adaptive AI Interviewer */}

              {stackingCardsData.map((card, index) => (
                <motion.div
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  key={card.id}
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
                  <div className="h-[45vh] flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className={`w-full h-full object-cover object-[50%_80%] ${
                        card.imageObject ?? ""
                      }`}
                    loading="lazy" />
                  </div>

                  <div className="p-8 md:p-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4 md:mb-2">
                      <card.badge.icon className="text-blue-600" size={20} />
                      <span className="text-sm font-bold text-blue-900 uppercase">
                        {card.badge.text}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-2">
                      {card.titles.primary}
                    </h3>

                    <p className="text-xl font-bold text-blue-700 mb-6 md:mb-2">
                      {card.titles.secondary}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6 md:mb-2 md:text-sm">
                      {card.description}
                    </p>

                    <ul className="space-y-4 md:space-y-2 md:text-sm">
                      {card.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <point.icon
                            className="text-blue-600 shrink-0 mt-1"
                            size={20}
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
              ))}
              <div className="h-[100px]"></div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Smartphone className="text-blue-400" />
                  Candidate Accessibility
                </h3>
                <ul className="space-y-6">
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-blue-300">
                      Browser-Based
                    </h4>
                    <p className="text-gray-300">
                      Works on Chrome, Safari, Edge, and Firefox.
                    </p>
                  </li>
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-blue-300">
                      Device Agnostic
                    </h4>
                    <p className="text-gray-300">
                      Optimized for Mobile (iOS/Android), Tablet, and Desktop.
                    </p>
                  </li>
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-blue-300">
                      Bandwidth
                    </h4>
                    <p className="text-gray-300">
                      Low-latency mode for candidates in areas with poor
                      internet connectivity.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Cpu className="text-purple-400" />
                  The Integration Ecosystem
                </h3>
                <p className="text-gray-300 mb-8">
                  Your ATS is your system of record. We are your system of
                  action.
                </p>
                <ul className="space-y-6">
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-purple-300">
                      ATS Sync
                    </h4>
                    <p className="text-gray-300">
                      Bi-directional integration with Greenhouse, Lever,
                      Workday, and SAP SuccessFactors.
                    </p>
                  </li>
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-purple-300">
                      Communication
                    </h4>
                    <p className="text-gray-300">
                      Auto-trigger interview links via WhatsApp Business API and
                      Email.
                    </p>
                  </li>
                  <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-lg mb-2 text-purple-300">
                      Calendar
                    </h4>
                    <p className="text-gray-300">
                      Auto-schedule final human rounds via Google
                      Calendar/Outlook.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applicability */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Industry Applicability
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <Code2 className="text-blue-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">
                  IT Services & Consulting
                </h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Use Case
                  </span>
                  <p className="font-medium">Bulk Campus Hiring</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Benefit
                  </span>
                  <p className="text-gray-600">
                    Screen 5,000 graduates in a single weekend with standardized
                    coding tests.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <Building2 className="text-blue-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">
                  Banking & Finance (BFSI)
                </h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Use Case
                  </span>
                  <p className="font-medium">Frontline Sales Hiring</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Benefit
                  </span>
                  <p className="text-gray-600">
                    Assess communication skills and language fluency for
                    thousands of branch banking applicants.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <Headphones className="text-blue-600 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4">
                  BPO & Customer Support
                </h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Use Case
                  </span>
                  <p className="font-medium">Voice & Accent Training</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase">
                    Benefit
                  </span>
                  <p className="text-gray-600">
                    AI evaluates pronunciation, grammar, and rate of speech
                    automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg italic mb-6">
                  "With Nexby, we slashed our tech hiring time by 60%. The
                  proctored coding evaluations gave us confidence in candidate
                  quality before we even met them."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Talent Acquisition Lead</p>
                    <p className="text-blue-300 text-sm">
                      Tier-1 IT Consultancy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg italic mb-6">
                  "The fake candidate detection saved us from multiple bad hires
                  during our bulk campus drives. It’s a firewall for our HR
                  team."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <p className="font-bold">HR Head</p>
                    <p className="text-blue-300 text-sm">
                      Leading Private Bank
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg italic mb-6">
                  "We now spend time only with serious contenders. The adaptive
                  interview model mirrors our real consulting case rounds."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Partner</p>
                    <p className="text-blue-300 text-sm">
                      Global Management Consultancy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form Section */}
        <div ref={formRef}>
          <AIRecruiterDemoForm />
        </div>
      </main>
    </>
  );
};

export default AIRecruiterPage;
