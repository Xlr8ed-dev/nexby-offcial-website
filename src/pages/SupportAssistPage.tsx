import React, { useRef } from "react";
import {
  Check,
  Headphones,
  Shield,
  Brain,
  Zap,
  Database,
  Link as LinkIcon,
  Users,
  Building2,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import SupportAuditForm from "../components/SupportAuditForm";

const SupportAssistPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formRef = useRef<HTMLDivElement>(null);
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
            Support Assist
          </li>
        </ol>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 md:py-28 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Headphones className="text-blue-400" size={20} />
                <span className="text-sm font-bold text-blue-100 uppercase tracking-wide">
                  Product &gt; Support Assist
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Zero-Touch Resolution.
                <br />
                <span className="text-blue-400">Zero Wait Time.</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                An LLM-powered support agent that lives inside your helpdesk. It
                reads your documentation, understands your policies, and
                resolves 70% of L1/L2 tickets without a human ever touching a
                keyboard.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  // onClick={() =>
                  //   document
                  //     .getElementById("audit-form")
                  //     ?.scrollIntoView({ behavior: "smooth" })
                  // }
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 font-bold text-lg shadow-lg transition-all transform hover:scale-105"
                >
                  Automate Your Ops
                  <Zap size={20} />
                </button>
                {/* <Link
                  to="#"
                  className="inline-flex items-center gap-2 h-14 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 font-bold text-lg backdrop-blur-sm transition-all"
                >
                  See Live Deflection Demo
                </Link> */}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-gray-300">
                      Ticket Dashboard
                    </span>
                  </div>
                  <span className="text-xs text-green-400 font-mono border border-green-500/30 px-2 py-1 rounded animate-pulse">
                    Auto-Resolving
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center bg-white/5 rounded p-3">
                    <div className="text-xs text-gray-300">
                      Inbox: 500+ unread
                    </div>
                    <div className="text-red-400 text-xs">●</div>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full animate-pulse"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center bg-green-900/20 border border-green-500/30 rounded p-3">
                    <div className="text-xs text-gray-300">
                      Auto-Resolved by Nexby
                    </div>
                    <div className="text-green-400 text-lg font-bold">350</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  70% deflection rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              A Support Analyst That{" "}
              <span className="text-blue-600">Never Sleeps.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nexby Support Assist is not a chatbot that gives generic "Please
              check our FAQ" links. It is a{" "}
              <strong>Tier-1 Support Engineer</strong> built on a specialized
              LLM architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Sales vs. Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                While our Sales Agent is configured for <em>persuasion</em>,
                Support Assist is configured for{" "}
                <strong className="text-blue-600">Accuracy and Empathy</strong>.
                It is rigorously trained to avoid hallucinations—because you
                can't afford an AI inventing a refund policy that doesn't exist.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Zero Hallucinations
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Aggressive guardrails ensure the AI never invents features or
                promises timelines that aren't in your knowledge base. Every
                response is grounded in your actual documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features with Vertical Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Core Features &amp; Interface Tour
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Three pillars that make Support Assist a true support engineer.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: The Deflection Shield */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                1. The Deflection Shield (L1/L2 Automation)
              </h3>
              <p className="font-medium text-blue-600 mb-4">
                Stop the Repetition.
              </p>
              <p className="text-slate-600 mb-4">
                Your human agents shouldn't be answering "How do I reset my
                password?" for the 50th time today.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Instant Intercept:</strong> The agent sits on your
                    Web Widget, Slack, or Email. It intercepts queries before
                    they become tickets.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Diagnostic Logic:</strong> It doesn't just answer;
                    it troubleshoots.{" "}
                    <em>
                      "I see you are getting Error 404. Have you tried clearing
                      your cache? Here is how."
                    </em>
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>The 70% Rule:</strong> We aim to automate 70% of
                    routine volume, leaving only the complex, novel issues for
                    your human staff.
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 2: Deep Knowledge Retrieval */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                2. Deep Knowledge Retrieval (RAG)
              </h3>
              <p className="font-medium text-purple-600 mb-4">
                It Reads Your Manuals (So You Don't Have To).
              </p>
              <p className="text-slate-600 mb-4">
                Support Assist is built on{" "}
                <strong>Retrieval-Augmented Generation (RAG)</strong>{" "}
                technology.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Unified Brain:</strong> Connect it to Confluence,
                    Notion, SharePoint, Google Drive, or PDF repositories.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Precise Extraction:</strong> It doesn't dump a
                    50-page document on the user. It reads the page, finds the
                    specific paragraph about "MacOS Installation," and
                    summarizes the steps in plain English.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Always Updated:</strong> Update a policy in Notion?
                    The Agent learns it instantly. No retraining required.
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 3: Actionable Hooks */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                3. Actionable Hooks (The "Hands")
              </h3>
              <p className="font-medium text-green-600 mb-4">
                It Doesn't Just Talk. It Fixes.
              </p>
              <p className="text-slate-600 mb-4">
                A support bot that can't <em>do</em> anything is just a search
                bar. Nexby performs actions via API.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Identity Verification:</strong> "Please verify your
                    OTP before I process this request."
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>System Actions:</strong> It can trigger password
                    resets, unlock accounts, check order status in Shopify, or
                    issue license keys directly.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <strong>Smart Escalation:</strong> If it can't solve the
                    issue, it creates a Jira/Zendesk ticket, categorizes it
                    correctly (e.g., "Priority: High, Tag: Server Down"), and
                    summarizes the chat for the human engineer.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support-Specific Configuration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The "Support-Specific" Configuration
            </h2>
            <p className="text-xl text-slate-600">Architected for Trust.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-red-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Hallucination Control
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Aggressive guardrails ensure the AI never invents features or
                promises timelines that aren't in your knowledge base.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Tone Modulation
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Trained to remain calm and apologetic even when the customer is
                irate. It de-escalates tension before handing off to a human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Lives Inside Your Stack.
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            We don't replace your ITSM; we supercharge it.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Database className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Ticketing</h4>
              <p className="text-sm text-slate-600">
                Native integration with Jira Service Management, Zendesk,
                Freshdesk, and ServiceNow.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="text-purple-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-3">
                Knowledge Sources
              </h4>
              <p className="text-sm text-slate-600">
                Confluence, Notion, SharePoint, Google Workspace.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <LinkIcon className="text-green-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-3">Channels</h4>
              <p className="text-sm text-slate-600">
                Slack (for internal IT), Microsoft Teams, WhatsApp, Web Widget,
                Email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Internal IT Helpdesk
              </h3>
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-500 mb-2">
                  Scenario:
                </div>
                <p className="text-sm text-slate-600 italic">
                  "How do I connect to the VPN?"
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  Nexby Action:
                </div>
                <p className="text-sm text-slate-600">
                  Pulls the VPN guide from Confluence, detects the user's OS
                  (Windows), and provides the specific steps.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Customer Support (SaaS)
              </h3>
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-500 mb-2">
                  Scenario:
                </div>
                <p className="text-sm text-slate-600 italic">
                  "Why did my payment fail?"
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-purple-600 mb-2">
                  Nexby Action:
                </div>
                <p className="text-sm text-slate-600">
                  Pings the Stripe API, sees "Insufficient Funds," and explains
                  the error to the user politely with a link to update the card.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                HR Operations
              </h3>
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-500 mb-2">
                  Scenario:
                </div>
                <p className="text-sm text-slate-600 italic">
                  "What is my leave balance?"
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-green-600 mb-2">
                  Nexby Action:
                </div>
                <p className="text-sm text-slate-600">
                  Authenticates the user, queries the HRMS database, and replies
                  privately: "You have 12 days of privilege leave remaining."
                </p>
              </div>
            </div>
          </div>
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
              <div className="text-4xl text-blue-500 font-serif absolute top-4 left-4">
                "
              </div>
              <p className="text-lg text-slate-600 mb-6 mt-4 relative z-10 italic leading-relaxed">
                Our ticket volume grew by 200%, but our headcount stayed flat.
                Nexby handles all the 'Tier 1' noise—password resets, status
                checks, FAQs. My engineers finally have time to build.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">CTO</div>
                  <div className="text-sm text-slate-500">
                    Logistics Tech Platform
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 relative">
              <div className="text-4xl text-blue-500 font-serif absolute top-4 left-4">
                "
              </div>
              <p className="text-lg text-slate-600 mb-6 mt-4 relative z-10 italic leading-relaxed">
                The RAG accuracy is scary good. It found a policy clause in a
                PDF that even our senior HR manager had forgotten about.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">HR Director</div>
                  <div className="text-sm text-slate-500">
                    Manufacturing Giant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          {/* <SupportAuditForm formId="support-page-bottom" /> */}
          <div ref={formRef}>
            <SupportAuditForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportAssistPage;
