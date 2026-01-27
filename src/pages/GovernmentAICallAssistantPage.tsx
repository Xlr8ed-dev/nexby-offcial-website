import {
  Shield,
  Zap,
  Lock,
  Server,
  Activity,
  Mic,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import GovernmentAuditForm from "../components/GovernmentAuditForm";

const GovernmentAICallAssistantPage = () => {
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
            Government AI Call Assistant
          </li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc535b5fa12?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Shield size={12} /> Restricted Access Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Mission-Critical Voice AI. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Deployed Behind Your Firewall.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                An on-premise, acoustically resilient Voice Agent engineered for
                emergency response and citizen services. Powered by a
                purpose-built 2B Parameter Small Language Model (SLM) for
                sub-second latency and absolute data sovereignty.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#inquiry"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  Request Official Briefing <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-4 text-sm text-slate-400 px-4 py-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-teal-400" />{" "}
                    Air-Gapped Ready
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle size={14} className="text-teal-400" /> DPDP
                    Compliant
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              {/* Technical Visualization Placeholder */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group">
                <img
                  src="/images/sovereign-server.png"
                  alt="Sovereign AI Server Rack"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-slate-900/90 backdrop-blur-sm border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">
                        Model Status
                      </p>
                      <p className="text-green-400 font-mono font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>{" "}
                        ONLINE (LOCAL)
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-widest text-right">
                        Latency
                      </p>
                      <p className="text-white font-mono font-bold">12ms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Context */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              When Milliseconds Define Outcomes.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Public safety infrastructure cannot rely on public cloud APIs. In
              an emergency response center (PSAP/112/911), three constraints
              break standard AI models:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Acoustic Chaos",
                desc: "Distress calls are filled with heavy breathing, background traffic, screaming, and poor network audio.",
              },
              {
                icon: Lock,
                title: "Data Sovereignty",
                desc: "Citizen data cannot traverse cross-border servers. It must comply strictly with local IT Acts and Data Localization norms.",
              },
              {
                icon: Zap,
                title: "Zero Latency",
                desc: "A 2-second lag in cloud processing is unacceptable during a rescue operation. Responses must be instant.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon
                    className="text-slate-900 group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-900 rounded-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-lg">
                Nexby’s Sovereign AI Architecture
              </p>
              <p className="text-slate-400 text-sm">
                Solves this by moving intelligence from the cloud to the edge.
              </p>
            </div>
            <ArrowRight className="text-blue-500 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Core Engineering Capabilities */}

      {/* Core Engineering Capabilities - Dark Mode Redesign */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-blue-500 w-12"></div>
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
                Classified Tech Specs
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Advanced Engineering Modules.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Deployed within your secure perimeter. Three pillars of our
              sovereign architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capability 1: Small Model Advantage (Large Card) */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-2">
                    <Cpu size={12} />
                    <span>2B PARAMETER SLM</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    The "Small Model" Advantage.
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Generic 70B+ parameter LLMs are too slow and open for
                    government work. Our purpose-built 2B SLM delivers
                    <span className="text-white font-bold">
                      {" "}
                      85% lower compute overhead
                    </span>{" "}
                    while maintaining hyper-local dialect accuracy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-slate-500 text-xs font-mono uppercase mb-1">
                        Inference Cost
                      </p>
                      <p className="text-green-400 font-bold text-xl">-90%</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-slate-500 text-xs font-mono uppercase mb-1">
                        Latency
                      </p>
                      <p className="text-blue-400 font-bold text-xl">
                        &lt;600ms
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full bg-slate-950 rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
                  {/* Abstract Visualization of Model Weights */}
                  <div className="grid grid-cols-6 gap-2 opacity-30">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded-sm ${i % 3 === 0 ? "bg-blue-500" : "bg-slate-700"} animate-pulse`}
                        style={{ animationDelay: `${i * 50}ms` }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Cpu className="text-blue-500 mx-auto mb-2" size={48} />
                      <p className="text-xs font-mono text-blue-300">
                        NEURAL ENGINE ACTIVE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability 2: Acoustic Forensics */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-500">
              <div className="p-8 h-full flex flex-col">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
                  <Mic size={12} />
                  <span>BIO-ACOUSTICS</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Acoustic Forensics.
                </h3>
                <p className="text-slate-400 mb-8 flex-1">
                  Hardened for distress environments. Detects 'Panic' markers in
                  voice pitch and removes background siren noise in real-time.
                </p>
                <div className="mt-auto h-24 flex items-end justify-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 bg-purple-500/50 rounded-t-sm group-hover:bg-purple-500 transition-colors"
                      style={{ height: `${30 + Math.random() * 70}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capability 3: Data Sovereignty */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-500">
              <div className="p-8 h-full flex flex-col">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-6">
                  <Lock size={12} />
                  <span>AIR-GAPPED SDC</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Absolute Sovereignty.
                </h3>
                <p className="text-slate-400 mb-8 flex-1">
                  No SaaS APIs. No cloud egress. The entire training and
                  inference loop happens locally within your State Data Center.
                </p>
                <div className="mt-auto p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Server size={18} className="text-teal-500" />
                    <div className="text-xs">
                      <p className="text-slate-300 font-bold">Local Host</p>
                      <p className="text-slate-600">192.168.x.x</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-red-900/20 border border-red-900/50 rounded text-[10px] text-red-500 font-mono">
                    OFFLINE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Stack.</h2>
            <p className="text-slate-400">
              Technical specifications for IT Coordinators.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Model Architecture",
                desc: "Quantized Transformer-based SLM (Int8 precision) for rapid inference.",
              },
              {
                title: "Containerization",
                desc: "Docker/Kubernetes orchestration for auto-scaling within private clouds.",
              },
              {
                title: "ASR Pipeline",
                desc: "Hybrid CTC-Attention architecture optimized for noisy, 8kHz telephony audio.",
              },
              {
                title: "Security",
                desc: "Role-Based Access Control (RBAC) with AES-256 encryption for data at rest.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-700 p-6 rounded-xl hover:border-blue-500 transition-colors"
              >
                <h4 className="font-bold text-lg mb-3 text-blue-400">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Case Study: Emergency Response
                </h3>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Deployed for Critical Infrastructure.
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      The Challenge
                    </p>
                    <p className="text-slate-600 text-sm">
                      A State Emergency Response Center facing high call
                      abandonment rates during monsoon floods. Callers were
                      panicking, background noise was high (rain/wind).
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">
                      The Solution
                    </p>
                    <p className="text-slate-600 text-sm">
                      Nexby deployed a locally hosted 2B model trained on the
                      local dialect.
                    </p>
                  </div>
                  {/* <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        &lt;600ms
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Latency
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">92%</p>
                      <p className="text-xs text-slate-500 font-medium">
                        Intent Recog.
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">100%</p>
                      <p className="text-xs text-slate-500 font-medium">
                        Data Local
                      </p>
                    </div>
                  </div> */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
                    <div className="text-center sm:text-left">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        &lt;600ms
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Latency
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        92%
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Intent Recog.
                      </p>
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        100%
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Data Local
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-slate-200">
                {/* Placeholder for Map or Control Room Image */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <Activity className="text-slate-600" size={64} />
                </div>
              </div>
            </div>
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
                Evaluate Sovereign AI for Your Department.
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Due to the sensitive nature of this technology, we require
                official verification for pilot deployments.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <Shield size={24} className="text-blue-500" />
                  <div>
                    <p className="font-bold">Encrypted Channel</p>
                    <p className="text-xs text-slate-400">
                      All submissions are processed via secure, encrypted
                      protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <GovernmentAuditForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentAICallAssistantPage;
