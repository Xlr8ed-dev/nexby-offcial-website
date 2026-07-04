import { useEffect } from "react";

import {
  Shield,
  ScanFace,
  Eye,
  MonitorX,
  FileCheck,
  Wifi,
  Globe,
  Lock,
  Server,
  Users,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import ExamPilotForm from "../components/ExamPilotForm";

const UniversityExamPage = () => {
  useEffect(() => {
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
            <li
              className="
    relative before:content-['/'] before:mx-2
    text-purple-600 font-medium
    max-w-[160px] sm:max-w-none
    truncate
  "
            >
              University Exam Portal
            </li>
          </ol>
        </nav>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-32 md:py-48">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Centered Text Content */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-indigo-400/30 rounded-full px-4 py-2 mb-6 shadow-lg">
                <Shield className="text-indigo-300" size={18} />
                <span className="text-sm font-bold text-indigo-100 uppercase tracking-widest">
                  Solutions &gt; Use Case
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The Sanctity of the
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Exam Hall. Now Online.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Conduct massive-scale university examinations with AI-grade
                security.{" "}
                <span className="font-bold text-cyan-300">
                  Biometric verification. Forensic analysis. Zero cheating.
                </span>
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("pilot-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Secure Your Next Semester
              </button>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-20 md:py-32 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                {/* Header Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs font-mono text-gray-400">
                      Nexby AI Proctor Dashboard — Live Session
                    </span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                  {/* Live Feed Preview */}
                  <div className="md:col-span-2 bg-slate-900 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-green-400">
                          LIVE
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500">
                        Student ID: 2024-ENG-1847
                      </span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-slate-700">
                      <div className="text-center">
                        <Eye className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                        <p className="text-slate-500 text-sm">
                          Live Webcam Stream
                        </p>
                        <p className="text-slate-600 text-xs mt-1">
                          Behavioral analysis active
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status Panel */}
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="text-green-400" size={20} />
                        <h4 className="text-green-200 font-bold text-sm">
                          Identity Verified
                        </h4>
                      </div>
                      <p className="text-green-300/70 text-xs">
                        Face match: 99.8% confidence
                      </p>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="text-yellow-400" size={20} />
                        <h4 className="text-yellow-200 font-bold text-sm">
                          Gaze Alert
                        </h4>
                      </div>
                      <p className="text-yellow-300/70 text-xs">
                        Eyes off-screen for 3.2s
                      </p>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="text-green-400" size={20} />
                        <h4 className="text-green-200 font-bold text-sm">
                          Environment Clear
                        </h4>
                      </div>
                      <p className="text-green-300/70 text-xs">
                        No unauthorized devices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Distance Learning. Zero-Distance Supervision.
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                The credibility of a university degree rests on the integrity of
                its examinations. Traditional online exams are plagued by
                impersonation, screen-sharing, and pre-written answers.
              </p>
              <p className="font-medium text-indigo-900 text-xl">
                We don't just provide a "test platform." We provide a{" "}
                <span className="text-indigo-600 font-bold">
                  Digital Examination Center.
                </span>
              </p>
              <p className="mt-4">
                Nexby AI brings an end-to-end examination ecosystem that secures
                the three pillars of assessment:{" "}
                <span className="font-bold text-gray-900">
                  Identity, Environment, and Content.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Phase 1: Pre-Exam */}
        <section className="py-24 md:py-32 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <ScanFace className="text-indigo-600 w-16 h-16 mb-4" />
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80')] bg-cover"></div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">
                        ID Card Match
                      </p>
                      <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-green-500 w-[99.8%]"></div>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                    <span className="text-gray-600">AnyDesk / TeamViewer</span>
                    <span className="text-red-500 font-bold">Blocked</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="uppercase tracking-wide text-indigo-600 font-bold text-sm mb-2">
                Phase 1: Pre-Exam (The Iron-Clad Entry)
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Only the Right Candidate Enters.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Impersonation is the #1 threat in distance exams. We eliminate
                it before the first question is loaded.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <ScanFace size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Biometric Sync</h4>
                    <p className="text-gray-600 text-sm">
                      AI compares government ID against live face capture in
                      real-time with 99.8% accuracy.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <MonitorX size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      360° Room Scanning
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Students must pan their camera to detect unauthorized
                      people or open books.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Device Hygiene</h4>
                    <p className="text-gray-600 text-sm">
                      Scans for and forces closure of remote-access software
                      like AnyDesk.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 2: During Exam */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="uppercase tracking-wide text-indigo-600 font-bold text-sm mb-2">
                Phase 2: During Exam (Active Proctoring)
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The AI Invigilator That Never Blinks.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our{" "}
                <span className="font-semibold text-gray-900">
                  Secure Browser Environment
                </span>{" "}
                locks the computer. No new tabs. No copy-paste. No external
                apps.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Behavioral Biometrics
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tracks eye movement and head orientation. Flags repeated
                      look-aways or talking.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      The "Rolling Code" Defense
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Unique dynamic codes displayed every 3 mins must be
                      written on physical answer sheets to prevent pre-writing.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Multi-Object Detection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Auto-pauses exam if a second face appears in the frame.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-indigo-500"></div>
                <div className="text-center mb-8 mt-2">
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Active Proctoring Session
                  </span>
                </div>

                {/* Rolling Code Visualization */}
                <div className="bg-slate-800 rounded-xl p-6 mb-4 text-center border border-slate-700">
                  <p className="text-gray-400 text-xs uppercase mb-2">
                    Current Security Code
                  </p>
                  <div className="text-4xl font-mono font-bold text-white tracking-widest">
                    A7X-99
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-indigo-500 w-2/3 animate-[pulse_3s_infinite]"></div>
                  </div>
                  <p className="text-indigo-400 text-xs mt-2">
                    Refreshing in 45s
                  </p>
                </div>

                <p className="text-center text-gray-500 text-sm">
                  Student must write "A7X-99" on answer sheet now.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Post-Exam */}
        <section className="py-24 md:py-32 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-green-500 font-bold text-lg mb-1">
                    Clean
                  </div>
                  <div className="text-gray-500 text-sm">Trust Score: High</div>
                  <div className="h-2 bg-green-100 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[95%]"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-red-500 font-bold text-lg mb-1">
                    Flagged
                  </div>
                  <div className="text-gray-500 text-sm">Audio Detected</div>
                  <div className="h-2 bg-red-100 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[75%]"></div>
                  </div>
                </div>
                <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-900">
                      Plagiarism Scan
                    </span>
                    <span className="text-xs text-gray-500">Processing...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[60%]"></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Checking against 1M+ online sources
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="uppercase tracking-wide text-indigo-600 font-bold text-sm mb-2">
                Phase 3: Post-Exam (Forensic Evaluation)
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Grading with Speed and Precision.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Administrative burnout leads to grading errors. We automate the
                drudgery.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Instant MCQ Scoring
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Objective answers graded instantly for immediate results.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <FileCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Plagiarism Detection
                    </h4>
                    <p className="text-gray-600 text-sm">
                      AI scans descriptive answers against millions of sources.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Risk Assessment Reports
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Admins receive a "Trust Score" (Green/Red) based on
                      behavioral flags.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admin Command Center */}
        <section className="py-24 md:py-32 bg-indigo-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Admin Command Center
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto">
                Total Control for the Controller of Examinations (CoE). Manage
                the complexity of a university ecosystem from a single
                dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <Server className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">
                  Question Bank Management
                </h3>
                <p className="text-gray-300 text-sm">
                  Bulk upload via Excel. Randomize questions so no two students
                  get the same sequence.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <Users className="text-pink-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
                <p className="text-gray-300 text-sm">
                  Grant specific permissions to paper setters, evaluators, and
                  department heads.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <FileCheck className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Audit Trails</h3>
                <p className="text-gray-300 text-sm">
                  Every click, login, and grade change is logged. Full
                  traceability of manual score changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Nexby & Technical Specifications */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Why Nexby */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Why Nexby AI?
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-indigo-50 p-3 rounded-xl h-fit">
                      <Globe className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        Sovereign AI
                      </h4>
                      <p className="text-gray-600">
                        Our models are deployed securely, ensuring student data
                        never leaves your mandated geography.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-indigo-50 p-3 rounded-xl h-fit">
                      <Wifi className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        Low-Bandwidth Engineering
                      </h4>
                      <p className="text-gray-600">
                        Optimized to run on low-latency networks (2G/3G),
                        ensuring rural students can take exams without
                        disconnection.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-indigo-50 p-3 rounded-xl h-fit">
                      <Shield className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        Enterprise Security
                      </h4>
                      <p className="text-gray-600">
                        ISO 27001 compliant architecture ensuring end-to-end
                        encryption for question papers and answer sheets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Architecture</span>
                    <span className="font-bold text-gray-900 text-right">
                      Cloud-Native (100k+ concurrent)
                    </span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Network Tolerance</span>
                    <span className="font-bold text-gray-900 text-right">
                      Optimized for 2G/3G
                    </span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Browser Support</span>
                    <span className="font-bold text-gray-900 text-right">
                      Chrome, Edge, Firefox, Safari
                    </span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Security</span>
                    <span className="font-bold text-gray-900 text-right">
                      End-to-End Encryption (E2EE)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="pilot-form"
          className="py-24 md:py-32 bg-slate-50 border-t border-gray-200"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Secure Your Next Semester.
              </h2>
              <p className="text-lg text-gray-600">
                Ready to modernize your examinations?
              </p>
            </div>
            <ExamPilotForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default UniversityExamPage;
