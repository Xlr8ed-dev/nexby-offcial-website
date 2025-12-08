import {
    FileText,
    MessageSquare,
    Shield,
    Database,
    Zap,
    History,
    FileCheck,
    AlertTriangle,
    ArrowRight,
    Server,
    Mic,
    CheckCircle
} from 'lucide-react';
import TenderQueryAuditForm from '../components/TenderQueryAuditForm';

const TenderQueryAutomationPage = () => {
    return (
        <div className="font-sans text-slate-900 bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                                <Database size={12} /> Pre-Bid Automation Suite
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                                The End of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                                    Procurement Paralysis.
                                </span>
                            </h1>
                            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                                Transform your Pre-Bid ecosystem from a chaotic email inbox into a structured, AI-driven command center. Nexby automates query ingestion, drafts legally consistent replies, and deflects redundant vendor questions instantly.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#inquiry" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                                    Request Technical Proposal <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-xl">
                            {/* Hero Visual: Split Screen Concept */}
                            <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group min-h-[400px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-teal-900/20"></div>

                                {/* Left Side: Mobile Vendor View */}
                                <div className="absolute top-8 left-8 bottom-8 w-1/3 bg-white rounded-xl shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0 z-10 p-4 border border-slate-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                                        <Mic size={16} className="text-blue-500" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-blue-50 p-2 rounded-lg rounded-tl-none text-[10px] text-blue-900 leading-tight">
                                            "Is a Joint Venture allowed for this tender?"
                                        </div>
                                        <div className="bg-slate-100 p-2 rounded-lg rounded-tr-none text-[10px] text-slate-700 leading-tight">
                                            Checking RFP Page 42... Yes, Max 2 partners allowed.
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <div className="inline-block px-2 py-1 bg-green-100 text-green-700 text-[8px] font-bold rounded-full">QUERY DEFLECTED</div>
                                    </div>
                                </div>

                                {/* Right Side: Officer Dashboard */}
                                <div className="absolute top-12 right-8 bottom-12 left-1/3 bg-slate-900 rounded-l-xl border-l border-t border-b border-slate-600 shadow-2xl p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-xs font-mono text-slate-400">ADMIN CONSOLE</div>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="p-3 bg-slate-800 rounded border border-slate-700">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="text-xs text-slate-300">Pending Approval</div>
                                                <div className="text-[10px] text-blue-400">AI Draft Ready</div>
                                            </div>
                                            <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-slate-800 rounded border border-slate-700">
                                            <div className="text-xs text-slate-300 mb-1">Historical Precedent</div>
                                            <div className="text-[10px] text-slate-500 italic">"Matches 2023 Expressway Tender Response..."</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Reality: Death by Email */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Manual Pre-Bid Management is Failing.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            For a nodal agency handling infrastructure projects, the "Pre-Bid" phase is the biggest bottleneck.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "Format Chaos",
                                desc: "Vendors submit queries via email, in Excel, PDF, or body text. Officers waste days just copy-pasting these into a standard 'Query-Response' format."
                            },
                            {
                                icon: MessageSquare,
                                title: "The 'Lazy Bidder' Syndrome",
                                desc: "40% of queries raised are redundant. The answer is already in the RFP, but the bidder hasn't read it. Officers forced to type 'Refer to Clause 4.1' hundreds of times."
                            },
                            {
                                icon: AlertTriangle,
                                title: "Inconsistent Responses",
                                desc: "An officer in Division A might allow a specific Joint Venture condition, while Division B rejects it. This inconsistency invites litigation."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                    <item.icon className="text-slate-900 group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-slate-900 rounded-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="font-bold text-lg">Nexby’s AI Procurement Engine</p>
                            <p className="text-slate-400 text-sm">Eliminates these inefficiencies by enforcing structure and automating intelligence.</p>
                        </div>
                        <ArrowRight className="text-blue-500 hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Core Capabilities - Authority */}
            <section className="py-24 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px bg-blue-500 w-12"></div>
                            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">For The Authority</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core Capabilities: Ministries / PSUs.</h2>
                    </div>

                    <div className="space-y-12">
                        {/* Capability 1 */}
                        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 hover:border-blue-500/30 transition-all">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                        <Zap className="text-blue-400" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Unified Ingestion & Auto-Formatting</h3>
                                    <h4 className="text-lg text-blue-400 mb-4">Stop Copy-Pasting from Emails.</h4>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        Nexby acts as a structured gateway. Whether a vendor sends an email, uploads Excel, or uses voice, our AI parses it into the mandatory <strong>Standard Query Format (Clause No | Page No | Query | Response)</strong>.
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Auto-Deduplication of identical queries</li>
                                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Multi-channel ingestion (Email, Portal, Voice)</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full bg-slate-950 rounded-xl p-6 border border-slate-700 font-mono text-xs text-slate-400">
                                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="ml-auto">Output Preview</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-green-400">Scanning email attachments...</div>
                                        <div><span className="text-blue-400">Found:</span> 5 distinct queries.</div>
                                        <div><span className="text-purple-400">Action:</span> Reformatted to Table 4.1.</div>
                                        <div className="bg-slate-900 p-2 rounded text-slate-300 mt-2">
                                            | Clause 4 | p.22 | Question: BG Validity? |
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Capability 2 & 3 Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500/30 transition-all">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                                    <History className="text-purple-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">The "Historical Brain" (RAG)</h3>
                                <p className="text-slate-400 mb-4">
                                    Your department has answered thousands of queries. Why start from scratch?
                                </p>
                                <ul className="space-y-4 text-sm text-slate-500">
                                    <li className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                                        <strong className="text-white block mb-1">Past Precedent Search</strong>
                                        "In the 2023 Expressway Tender, we rejected a similar request regarding Turnover."
                                    </li>
                                    <li className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                                        <strong className="text-white block mb-1">Draft Auto-Generation</strong>
                                        AI drafts legally sound responses citing specific SBD clauses.
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-teal-500/30 transition-all">
                                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="text-teal-400" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Conformance & Risk Shield</h3>
                                <p className="text-slate-400 mb-4">
                                    The Automated Auditor before you publish.
                                </p>
                                <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
                                        <AlertTriangle size={16} /> Conflict Detected
                                    </div>
                                    <p className="text-xs text-red-300/80">
                                        "Warning: This draft reply contradicts Ministry Circular dated 12/05/2024 regarding Bid Security."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities - Bidder */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px bg-slate-900 w-12"></div>
                            <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">For The Bidder</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Vendor Portal Capabilities.</h2>
                        <p className="text-lg text-slate-600">Empower vendors to self-service, reducing officer load.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <MessageSquare className="text-blue-600" /> Bidder Copilot
                            </h3>
                            <p className="text-slate-600 mb-6">
                                "Talk to the RFP". Vendors can upload the 500-page document and ask questions.
                            </p>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Vendor Query</p>
                                    <p className="text-slate-900 italic font-medium">"What is the penalty for delay?"</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">AI Answer (Strict Source-of-Truth)</p>
                                    <p className="text-slate-700 text-sm">"According to Clause 12.5, penalty is 0.5% per week of delay."</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <FileCheck className="text-blue-600" /> Structured Submission
                            </h3>
                            <p className="text-slate-600 mb-6">
                                No More "Bad Format" Rejections.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                                    <div>
                                        <strong className="block text-slate-900">Voice-to-Formal Query</strong>
                                        <p className="text-sm text-slate-500">Site engineers can dictate queries via mobile app.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                                    <div>
                                        <strong className="block text-slate-900">Auto-Formalization</strong>
                                        <p className="text-sm text-slate-500">Transcribed and reformatted into professional tender language.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-12">Technical Architecture (Sovereign & Secure)</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <FileText className="mx-auto text-slate-400 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Document Ingestion</h4>
                            <p className="text-sm text-slate-500">OCR for scanned PDFs, supporting multi-column government gazette layouts.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <Server className="mx-auto text-slate-400 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Sovereign Hosting</h4>
                            <p className="text-sm text-slate-500">Full Data Localization. Containerized for State Data Center (SDC) / NIC Cloud deployment.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <Shield className="mx-auto text-slate-400 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Statutory Compliance</h4>
                            <p className="text-sm text-slate-500">Fully compliant with IT Act 2000 & DPDP Act 2023 guidelines for sensitive data processing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <Database className="mx-auto text-slate-400 mb-4" />
                            <h4 className="font-bold text-slate-900 mb-2">Integration</h4>
                            <p className="text-sm text-slate-500">Native APIs for GeM, CPP Portal, and e-Office.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-6">CASE STUDY: HIGHWAY AUTHORITY</div>
                            <h2 className="text-3xl font-bold mb-8">Accelerating National Infrastructure.</h2>

                            <div className="grid md:grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">2,300</div>
                                    <div className="text-sm text-slate-400">Queries Processed</div>
                                    <p className="mt-2 text-xs text-slate-500">AI parsed & deduplicated emails into 450 unique line items.</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-2">800+</div>
                                    <div className="text-sm text-slate-400">Queries Deflected</div>
                                    <p className="mt-2 text-xs text-slate-500">Vendor Chatbot answered trivial questions automatically.</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-green-400 mb-2">4 Days</div>
                                    <div className="text-sm text-slate-400">Time to Corrigendum</div>
                                    <p className="mt-2 text-xs text-slate-500">Down from 21 days manually.</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Modernize Your Pre-Bid Ecosystem.</h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Move from "Email Chaos" to "AI Command." Request a technical demonstration for your Ministry.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <TenderQueryAuditForm />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default TenderQueryAutomationPage;
