import React, { useRef } from "react";

import { BarChart3, TrendingUp, Shield, Users, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";
import CallAnalyserForm from "../components/CallAnalyserForm";

const CallAnalyserPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            Call Analyser
          </li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="text-purple-400" size={20} />
                <span className="text-sm font-bold text-purple-100 uppercase tracking-wide">
                  Product &gt; Call Analyser
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The End of the
                <br />
                <span className="text-purple-400">
                  "Black Box" Call Center.
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your QAs listen to 1% of your calls. We audit the other 99%.
                Turn every conversation into structured data, actionable
                coaching, and forensic insights.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 font-bold text-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Request a Forensic Audit
                  <Shield size={20} />
                </button>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 h-14 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 font-bold text-lg backdrop-blur-sm transition-all"
                >
                  See a Sample Scorecard
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-sm font-mono text-gray-300">
                      REC-20394-X
                    </span>
                  </div>
                  <span className="text-xs text-red-400 font-mono border border-red-500/30 px-2 py-1 rounded">
                    Compliance Risk
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">
                      AG
                    </div>
                    <div className="flex-1 bg-white/5 rounded p-2 text-xs text-gray-300">
                      ...regarding the cancellation policy...
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs">
                      CU
                    </div>
                    <div className="flex-1 bg-white/5 rounded p-2 text-xs text-gray-300">
                      Is there a fee if I cancel early?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">
                      AG
                    </div>
                    <div className="flex-1 bg-red-900/20 border border-red-500/30 rounded p-2 text-xs text-gray-300 relative">
                      No, absolutely not.{" "}
                      <span className="absolute -right-2 -top-2 bg-red-500 text-white text-[10px] px-1 rounded">
                        FALSE CLAIM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                    Empathy: 8/10
                  </div>
                  <div className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded border border-red-500/30">
                    Compliance: FAIL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              You Can't Fix What You{" "}
              <span className="text-red-600">Can't Hear.</span>
            </h2>
            <p className="text-xl text-slate-600">
              The standard industry practice for Quality Assurance is broken. A
              human auditor randomly selects 5 calls a day, listens at 2x speed,
              and fills out a subjective checklist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                The "1% Problem"
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This means{" "}
                <span className="text-red-600 font-semibold">
                  98% of your customer interactions go unheard.
                </span>
              </p>
              <ul className="space-y-3">
                {[
                  "Missed compliance violations.",
                  "Missed upsell opportunities.",
                  "Missed rude behavior.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                The Nexby Solution
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nexby Call Analyser destroys this model. We ingest{" "}
                <strong className="text-purple-600">100% of your calls</strong>,
                transcribing and scoring every second against your specific
                playbook.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">
                    Industry Standard
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    1-2%
                  </div>
                  <div className="text-xs text-red-500">Risk Prone</div>
                </div>
                <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-600 font-semibold mb-1">
                    Nexby Standard
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-green-600 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Forensic Audit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities with Vertical Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Capability 1: Automated Scorecard */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                1. The Automated Scorecard
              </h3>
              <p className="font-medium text-purple-600 mb-4">
                An unbiased auditor for every agent.
              </p>
              <p className="text-slate-600 mb-4">
                Stop relying on subjective feedback. Our AI acts as a neutral
                referee, scoring every call based on parameters you define.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Pitch Analysis:</strong> Did the agent stick to the
                    script?
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Objection Handling:</strong> Did they use the
                    approved rebuttal?
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Empathy Meter:</strong> Detects tone of voice and
                    sentiment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Capability 2: Instant Improvement Loops */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                2. Instant Improvement Loops
              </h3>
              <p className="font-medium text-yellow-600 mb-4">
                Feedback while the memory is fresh.
              </p>
              <p className="text-slate-600 mb-4">
                Waiting for a monthly review to fix a bad habit is too late. Get
                instant, actionable feedback.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Instant Feedback:</strong> Minutes after a call
                    ends, agents see exactly what they did wrong.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Micro-Coaching:</strong> Suggests specific training
                    modules based on errors.
                  </span>
                </li>
              </ul>
            </div>

            {/* Capability 3: Market Intelligence */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                3. Market Intelligence
              </h3>
              <p className="font-medium text-green-600 mb-4">
                Voice of Customer insights.
              </p>
              <p className="text-slate-600 mb-4">
                Your call recordings are a goldmine of product feedback and
                competitive intelligence.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Trend Extraction:</strong> AI aggregates complaints
                    to show you spiking topics.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Competitor Recon:</strong> Track how often customers
                    mention your competitors.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Build Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The "Custom-Build" Promise
            </h2>
            <p className="text-xl text-slate-600">
              Generic AI fails. We build <em>Your</em> Auditor.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-purple-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Bespoke Calibration
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We don't just plug in an API. We sit with your Quality Head,
                learn your specific audit parameters (e.g., "Did they mention
                RERA compliance?"), and custom-train the model to detect{" "}
                <em>your</em> criteria.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Scenario Modeling
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We build specific logic for Sales, Collections, Support, and
                Retention teams. A Real Estate sales call is nothing like a
                Banking support call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applicability */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Industry Applicability
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: "Collections (BFSI)",
                audit: "Threat Compliance",
                feature:
                  "Instantly flags any call where the agent used threatening language or violated RB/regulatory collection guidelines.",
              },
              {
                industry: "E-Commerce Support",
                audit: "Resolution Time",
                feature:
                  "Analyzes calls with long silences to identify gaps in agent knowledge or slow system tools.",
              },
              {
                industry: "High-Ticket Sales",
                audit: "Value Selling",
                feature:
                  "Measures the ratio of 'Price Talk' vs. 'Value Talk.' Helps reps shift focus from cost to ROI.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.industry}
                </h3>
                <div className="inline-block bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full mb-4 border border-purple-200">
                  Audit Point:{" "}
                  <span className="font-semibold">{item.audit}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Plug & Play Audit. We integrate with your existing telephony and CRM
            layers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              "Dialpad",
              "Twilio",
              "Avaya",
              "Genesys",
              "Asterisk",
              "Salesforce",
              "HubSpot",
            ].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-lg text-lg font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Pushes the "Call Score" and "Summary" directly into the CRM activity
            log.
          </p>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 relative">
              <div className="text-4xl text-purple-500 font-serif absolute top-4 left-4">
                "
              </div>
              <p className="text-lg text-slate-600 mb-6 mt-4 relative z-10 italic leading-relaxed">
                We used to audit 4 calls per agent per month. Now we audit 100%.
                We identified a compliance risk in our pitch that human auditors
                missed for years.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    Compliance Head
                  </div>
                  <div className="text-sm text-slate-500">
                    Leading Insurance Firm
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 relative">
              <div className="text-4xl text-purple-500 font-serif absolute top-4 left-4">
                "
              </div>
              <p className="text-lg text-slate-600 mb-6 mt-4 relative z-10 italic leading-relaxed">
                Our sales conversion jumped 18% just by identifying the one
                common objection that was killing deals and training the team on
                how to answer it.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Sales Director</div>
                  <div className="text-sm text-slate-500">EdTech Unicorn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Uncover the hidden risks in your calls.
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Let us run a sample audit on 50 of your past recordings.
            </p>
          </div>
          <div ref={formRef}>
            <CallAnalyserForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallAnalyserPage;
