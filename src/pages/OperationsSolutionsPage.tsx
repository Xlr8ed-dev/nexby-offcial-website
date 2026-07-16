import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Bot,
  Brain,
  Zap,
  MessageSquare,
  Shield,
  Lock,
  Settings,
  Database,
  ArrowRight,
  Users,
  Headphones,
  CheckCircle,
  Server,
  Workflow,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import OperationsAuditForm from "../components/OperationsAuditForm";
// import AIChatWindow from "../components/AIChatWindow";

const FAQS = [
  {
    question: "Can the AI handle complex technical issues?",
    answer:
      "The agent is designed to handle 70-80% of routine L1/L2 queries (password resets, access requests, FAQs). For complex issues requiring deep debugging or physical intervention, it gathers all necessary context (logs, screenshots) and intelligently routes the ticket to the right human engineer.",
  },
  {
    question: "How long does it take to train on our data?",
    answer:
      "It's almost instant. We connect to your existing knowledge bases (Confluence, Notion, SharePoint) via API. The AI ingests and indexes your documentation in minutes. Fine-tuning for your specific tone and workflows typically takes 3-5 days.",
  },
  {
    question: "Is our internal data secure?",
    answer:
      "Absolutely. We offer enterprise-grade security with role-based access control. We can also deploy the LLM within your private cloud (VPC) or on-premise, ensuring your sensitive data never leaves your environment.",
  },
  {
    question: "Does it integrate with our existing ticketing system?",
    answer:
      "Yes. We have native bi-directional integrations with Jira Service Management, ServiceNow, Zendesk, and Freshdesk. The AI can create, update, resolve, and categorize tickets just like a human agent.",
  },
  {
    question: "What if the AI gives the wrong answer?",
    answer:
      "We use RAG (Retrieval-Augmented Generation) which grounds the AI in your actual documentation. If the AI is not confident or cannot find the answer in your docs, it is programmed to say 'I don't know' and escalate to a human, rather than hallucinating an answer.",
  },
];

const OperationsSolutionsPage = () => {
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
      

      <main className="min-h-screen bg-white pt-20">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li className="before:content-['/'] before:mx-2">Solutions</li>
            <li className="before:content-['/'] before:mx-2 text-blue-600 font-medium">
              AI for Operations
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 py-20 md:py-28">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                <Bot className="text-blue-600" size={20} />
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                  Solutions for Operations
                </span>
              </div>

              {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                The Ticket Queue Ends Here.
              </h1> */}
              <h1 className="font-bold text-gray-900 mb-6 leading-tight text-center">
                <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                  The Ticket Queue
                </span>
                <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                  Ends Here.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Automate 70% of L1 and L2 support requests instantly. Nexby’s
                Support AI Agent lives inside your ticketing system, learns from
                your knowledge base, and resolves issues without human
                intervention.
              </p>

              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Automate Your Ops
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              The Philosophy
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Modern support teams are drowning in repetition. Your most
                expensive engineers and support staff are wasting hours on
                "password resets," "status checks," and "policy questions." This
                isn't just inefficient; it's a morale killer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nexby believes that support shouldn't be a queue—it should be an
                answer. We deploy{" "}
                <span className="font-bold text-blue-700">
                  cognitive agents
                </span>{" "}
                that act as the first line of defense, absorbing the noise so
                your humans can focus on the complex, high-value problems that
                actually require empathy and judgment.
              </p>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Intelligent automation that goes beyond simple chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1. The Tier-1 Defender
                </h3>
                <p className="text-gray-600 mb-6">
                  Stop the flood before it reaches your team.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Instant Deflection:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Intercepts incoming queries via chat, email, or Slack.
                        Resolves routine L1/L2 issues in seconds.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Bot className="text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Dynamic Diagnostics:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Asks clarifying questions to diagnose the root cause
                        before offering a solution, mimicking a skilled analyst.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 2 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-indigo-200 hover:border-indigo-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Deep Knowledge Integration (RAG)
                </h3>
                <p className="text-gray-600 mb-6">
                  Your documentation is your brain. We just activate it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Database
                      className="text-indigo-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Unified Intelligence:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Connects directly to Confluence, Notion, SharePoint, or
                        Google Drive.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare
                      className="text-indigo-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Contextual Answers:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Reads documents, extracts relevant paragraphs, and
                        summarizes answers in plain language. No more PDF links.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Capability 3 */}
              <div className="group bg-white rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Action, Not Just Talk
                </h3>
                <p className="text-gray-600 mb-4">
                  A support agent that can't fix things is just a glorified
                  search bar. Nexby takes action.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Workflow
                      className="text-cyan-600 shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <span className="font-bold text-gray-900">
                        Autonomous Execution:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Password resets, license provisioning, and ticket
                        categorization happen automatically via API hooks.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="text-cyan-600 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Smart Handoff:
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        Creates tickets, categorizes them, and summarizes
                        conversations for human agents if it can't solve the
                        issue.
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
                Operational Resilience
              </h2>
              <p className="text-xl text-blue-300">
                Whether you are running an internal IT helpdesk or a customer
                support center, uptime and security are non-negotiable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/50 transition-all">
                <Lock className="text-blue-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
                <p className="text-gray-300">
                  The AI respects your existing permission structures. It won't
                  reveal sensitive HR policy data to a junior developer.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                <CheckCircle className="text-cyan-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Audit Trails</h3>
                <p className="text-gray-300">
                  Every automated action and conversation is logged, ensuring
                  full visibility and accountability for compliance audits.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border-2 border-indigo-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-500/50 transition-all">
                <Clock className="text-indigo-400 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-300">
                  Your operations center never goes offline, ensuring continuity
                  across global shifts.
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
                Real-world applications of Nexby Operations AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Use Case 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Server className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    The Internal IT Helpdesk
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "I can't connect to the VPN." "I need a Jira license." Nexby
                  handles these thousands of monthly requests automatically,
                  freeing up your IT staff to work on infrastructure and
                  security projects.
                </p>
              </div>

              {/* Use Case 2 */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Headphones className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Customer Support (B2B/B2C)
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Reduce your Average Handle Time (AHT) dramatically. The agent
                  handles order status inquiries, refund eligibility checks, and
                  basic troubleshooting, leaving your agents free to handle VIP
                  escalations.
                </p>
              </div>

              {/* Use Case 3 */}
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    HR Operations
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "What is the maternity leave policy?" "How do I claim LTA?"
                  Automate the repetitive employee service queries while
                  maintaining a private, secure environment for sensitive HR
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Stack Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integration Stack
              </h2>
              <p className="text-xl text-gray-600">
                We sit comfortably within your existing ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Workflow className="text-blue-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">
                    Ticketing & ITSM
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Jira Service Management, ServiceNow, Zendesk, Freshdesk
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-indigo-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">
                    Knowledge Bases
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Confluence, Notion, SharePoint, Google Workspace
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="text-cyan-600" size={28} />
                  <h3 className="text-lg font-bold text-gray-900">
                    Communication
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Slack, Microsoft Teams, Email, Web Widget
                </p>
              </div>
            </div>
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
                Common questions about our Operations AI
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
                        <ChevronUp className="text-blue-600" size={20} />
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
                                    title="Operations Support Demo"
                                    initialMessages={[
                                        { id: 1, sender: 'ai', text: "Hi there! I'm the Nexby Support Agent. I see you're looking into automating your helpdesk. What's your current ticket volume like?" },
                                        { id: 2, sender: 'user', text: "We get about 2000 tickets a month." },
                                        { id: 3, sender: 'ai', text: "Got it. At that volume, we typically see about 60-70% of tickets being repetitive L1 queries like password resets or access requests. Does that sound familiar?" },
                                        { id: 4, sender: 'user', text: "Exactly. It's draining my team." },
                                        { id: 5, sender: 'ai', text: "I can help with that. I can integrate with your Jira or ServiceNow and handle those requests instantly, 24/7. Would you like to see how I handle a password reset?" }
                                    ]}
                                />
                            </div> */}
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section id="audit-form" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Unclog your support pipeline.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let Nexby handle the noise, so your team can handle the signal.
              </p>
            </div>

            <OperationsAuditForm formId="operations_solutions_audit_form" />
          </div>
        </section>
      </main>
    </>
  );
};

export default OperationsSolutionsPage;
