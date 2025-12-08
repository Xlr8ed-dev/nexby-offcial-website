import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FlaskConical,
    FileText,
    Globe,
    Presentation,
    UserCheck, // For Talent/Hiring
    ShieldCheck, // For Compliance
    CheckCircle,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Trophy,
    Activity,
    Phone,
    Microscope
} from 'lucide-react';
import PharmaAuditForm from '../components/PharmaAuditForm';

const PHASES = [
    {
        id: 1,
        title: "Phase 1: The Big Ticket",
        headline: "Win the Hospital Tender Before You Even Bid.",
        description: "Institutional sales drive volume, but the paperwork is brutal. Assigning a Senior Regulatory Officer to read a 2,000-page government tender document is a waste of talent.",
        color: "blue",
        icon: FileText,
        points: [
            { title: "Instant BOQ Extraction", desc: "Extracts exact molecules, dosages, and quantities to Excel." },
            { title: "Compliance Check", desc: "Highlights 'USFDA Only' or 'WHO-GMP' requirements." },
            { title: "Price Intelligence", desc: "Suggests optimal bid price based on historical winners." }
        ],
        stat: "We process 50 government tenders a week with zero human error."
    },
    {
        id: 2,
        title: "Phase 2: The Field Force",
        headline: "Let Your MRs Detail Doctors. Let AI Handle the Stockists.",
        description: "Your Medical Representatives are expensive. They should be spending 100% of their time influencing doctors, not counting boxes at a stockist's counter.",
        color: "green",
        icon: Phone,
        points: [
            { title: "The Stock-Taking Agent", desc: "Calls 5,000 stockists/chemists automatically on the 25th." },
            { title: "Smart Conversation", desc: "\"Do you need a refill on Brand X or Brand Y?\"" },
            { title: "ERP Integration", desc: "Orders punched directly; MRs visit only problem accounts." }
        ],
        stat: "MR productivity increased by 40%."
    },
    {
        id: 3,
        title: "Phase 3: The Global Marketplace",
        headline: "Exporting to 50 Countries? Speak 50 Languages.",
        description: "The Pharma supply chain is global. Your buyer in Brazil or your distributor in Germany operates on a different clock and in a different language.",
        color: "indigo",
        icon: Globe,
        points: [
            { title: "The 24/7 Export Desk", desc: "Replies instantly to COA requests at 2 AM IST." },
            { title: "Polyglot Support", desc: "Validates batch numbers and emails COAs in Spanish/Portuguese." },
            { title: "Vendor Compliance", desc: "Passes compliance checks while you sleep." }
        ],
        stat: "30% faster deal closure cycle in LATAM markets."
    },
    {
        id: 4,
        title: "Phase 4: The Showcase",
        headline: "Dominate the Floor at CPHI.",
        description: "You spend a fortune on your stall at CPHI or Arab Health. Don't rely on fishbowls for lead capture. Internet connectivity is unreliable.",
        color: "purple",
        icon: Presentation,
        points: [
            { title: "Offline-First Capture", desc: "Scan badges & cards without internet." },
            { title: "Smart Tagging", desc: "\"Contract Manufacturing\" vs \"Finished Dosage\"." },
            { title: "Instant Compliance", desc: "Sends Product Dossier & EU-GMP certs via WhatsApp instantly." }
        ],
        stat: "Capture leads and send dossiers before they leave the booth."
    },
    {
        id: 5,
        title: "Phase 5: The Talent",
        headline: "Hiring Scientists and Sales Leaders.",
        description: "A bad hire in Quality Control can shut down a plant. A bad hire in Sales can burn a territory. Our Recruiter Agent is configured for Pharma nuances.",
        color: "orange",
        icon: UserCheck,
        points: [
            { title: "Regulatory Affairs (RA)", desc: "Vetting eCTD submissions & USFDA knowledge." },
            { title: "Quality Control (QC)", desc: "Screening for HPLC, GC, and GLP proficiency." },
            { title: "R&D Scientists", desc: "Reviewing publications & formulation expertise." }
        ],
        stat: "Specialized screening for QC, RA, MR, and PM roles."
    },
    {
        id: 6,
        title: "Phase 6: The Watchdog",
        headline: "Zero-Error Compliance.",
        description: "In Pharma, a missed license renewal or a delayed pharmacovigilance report is a disaster. Stay ahead of statutory deadlines.",
        color: "red",
        icon: ShieldCheck,
        points: [
            { title: "Statutory Management", desc: "Automated reminders for Drug Licenses & GMP audits." },
            { title: "Task Tracker", desc: "Assign \"Prepare Dossier for Brazil\" and track to closure." },
            { title: "Auto-Escalation", desc: "Alerts senior management on delayed critical tasks." }
        ],
        stat: "ensure 100% regulatory compliance."
    }
];

const SUCCESS_STORIES = [
    {
        title: "API Manufacturer (Export Focus)",
        challenge: "Selling bulk drugs to Latin America. Language barriers delayed deals and response times were slow due to timezones.",
        solution: "Deployed Nexby's Multi-lingual AI Agent to handle initial inquiries in Spanish and Portuguese.",
        result: "30% faster deal closure cycle in LATAM markets."
    },
    {
        title: "Surgical Consumables Giant",
        challenge: "Managing stock across 2,000 distributors nationwide. MRs were wasting days on low-value stock-taking calls.",
        solution: "Used Nexby's AI TeleCaller to automate primary order taking at month-end.",
        result: "MR productivity increased by 40% as they focused purely on hospital networking."
    }
];

const PharmaPage = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>AI for Pharma & Life Sciences - Nexby Solutions</title>
                <meta name="description" content="The world’s first AI Operating System for the Life Sciences supply chain. Automate tenders, stockist calls, export sales, and scientific hiring." />
            </Helmet>

            <div className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="relative bg-teal-950 text-white py-20 lg:py-28 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* Fallback gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950"></div>
                        <img
                            src="/images/pharma-hero.png"
                            alt="Pharmaceutical supply chain and laboratory abstract"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-6">
                                    <FlaskConical className="text-teal-400" size={20} />
                                    <span className="text-sm font-bold text-teal-100 uppercase tracking-wide">Industry Solutions</span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    Precision in the Lab.<br />
                                    Intelligence in the <span className="text-teal-400">Field.</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                                    The world’s first AI Operating System for the Life Sciences supply chain. From analyzing hospital tenders to automating stockist calls and hiring QC experts.
                                </p>

                                <a
                                    href="#audit"
                                    className="inline-flex items-center gap-2 h-14 bg-teal-600 hover:bg-teal-500 text-white rounded-full px-8 font-bold text-lg shadow-lg hover:shadow-teal-500/25 transition-all transform hover:scale-105"
                                >
                                    Schedule a Pharma Audit
                                    <ArrowRight size={20} />
                                </a>
                            </div>

                            {/* Right Side: Live Interface Metric Card (Pharma Themed) */}
                            <div className="hidden lg:block relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="font-mono text-sm text-teal-200">NEXBY_PHARMA_OPS_V2.1</span>
                                        </div>
                                        <Activity className="text-teal-400" size={18} />
                                    </div>

                                    <div className="space-y-4">
                                        {/* Item 1: Tender Processing */}
                                        <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="text-purple-400" size={16} />
                                                    <span className="text-sm font-bold text-white">Govt Tender Analysis</span>
                                                </div>
                                                <span className="text-xs text-purple-300 bg-purple-500/10 px-2 py-1 rounded">Processing</span>
                                            </div>
                                            <p className="text-xs text-slate-400 mb-2">Extracting molecules & dosages from 'MoH_Tender_2025.pdf'...</p>
                                            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-purple-500 h-full w-[60%]"></div>
                                            </div>
                                        </div>

                                        {/* Item 2: Stockist Call */}
                                        <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="text-green-400" size={16} />
                                                    <span className="text-sm font-bold text-white">Stockist TeleCaller</span>
                                                </div>
                                                <span className="text-xs text-green-300 bg-green-500/10 px-2 py-1 rounded">Live</span>
                                            </div>
                                            <p className="text-xs text-slate-300 italic">
                                                "Calling ABC Pharma Distributors... Order taken: 50 boxes of Para-500."
                                            </p>
                                        </div>

                                        {/* Item 3: Export Inquiry */}
                                        <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="text-blue-400" size={16} />
                                                    <span className="text-sm font-bold text-white">Export Inquiry (Mexico)</span>
                                                </div>
                                                <span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded">Replied</span>
                                            </div>
                                            <p className="text-xs text-slate-400">
                                                Sent COA for Batch #B-2024-X1 (Spanish) via Email.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-500 font-mono">
                                        <span>COMPLIANCE_CHECK: PASSED</span>
                                        <span>USFDA_DB: SYNCED</span>
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
                                <Microscope size={200} />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 relative z-10">
                                "Chemistry has Evolved. Why hasn't your Sales Process?"
                            </h2>

                            <div className="prose prose-lg text-slate-700 relative z-10">
                                <p className="mb-6">
                                    I am an Engineer by training.
                                </p>
                                <p className="mb-6">
                                    When I look at the Pharmaceutical industry, I see a contradiction. In the R&D labs, you are using the most advanced technology on earth. But in the sales office, I see Medical Representatives (MRs) filling out manual daily reports. I see Regulatory teams drowning in paper tenders. I see Export Managers losing deals because of timezone delays.
                                </p>
                                <p className="mb-6">
                                    I don't claim to know chemistry. But I know <strong>Systems Engineering</strong>.
                                </p>
                                <p className="font-medium text-slate-900">
                                    Nexby applies the rigorous logic of software architecture to the chaotic reality of Pharma sales and operations. We automate the 'busy work'—the stock-taking calls, the resume screening, the tender reading—so your scientific talent can focus on what they do best: saving lives and growing the business.
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

                {/* Solutions Lifecycle (Horizontal Scroll) */}
                <section className="py-20 bg-slate-100 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Operational Architecture</h2>
                            <p className="text-xl text-slate-600">From institutional tenders to global compliance.</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <ChevronLeft size={24} className="text-slate-600" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <ChevronRight size={24} className="text-slate-600" />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 scrollbar-hide items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {PHASES.map((phase) => (
                            <div
                                key={phase.id}
                                className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] snap-center bg-white rounded-3xl p-8 shadow-xl border border-slate-200 flex flex-col h-auto relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-${phase.color}-600`}>
                                    <phase.icon size={180} />
                                </div>

                                <div className={`inline-block bg-${phase.color}-100 text-${phase.color}-800 px-4 py-1 rounded-full text-sm font-bold mb-6 w-fit`}>
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
                                            <CheckCircle className={`text-${phase.color}-600 shrink-0 mt-1`} size={20} />
                                            <div>
                                                <span className="font-bold text-slate-900">{point.title}:</span> <span className="text-slate-600 text-sm">{point.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`bg-${phase.color}-50 border-l-4 border-${phase.color}-500 p-4 rounded-r-lg relative z-10`}>
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
                            <h2 className="text-4xl font-bold mb-6">Trusted by Life Sciences Leaders</h2>
                            <p className="text-xl text-slate-400">Real results from the lab to the market.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {SUCCESS_STORIES.map((story, i) => (
                                <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-teal-500/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-teal-500/20 rounded-lg">
                                            <Trophy className="text-teal-400" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold">{story.title}</h3>
                                    </div>

                                    <div className="space-y-6 text-slate-300">
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">The Challenge</p>
                                            <p>{story.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-1">The Solution</p>
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
                                Innovate your operations.
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                                Let’s analyze your current Tender or Sales process. No sales pitch, just a process audit.
                            </p>
                            <a href="#" className="text-teal-600 font-bold underline hover:text-teal-700">Download CPHI Lead Gen Case Study</a>
                        </div>

                        <PharmaAuditForm />
                    </div>
                </section>
            </div>
        </>
    );
};

export default PharmaPage;
