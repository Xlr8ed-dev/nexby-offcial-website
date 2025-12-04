import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
    Fingerprint
} from 'lucide-react';
import AIRecruiterDemoForm from '../components/AIRecruiterDemoForm';

const AIRecruiterPage = () => {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>AI Recruiter - Autonomous Hiring Platform | Nexby</title>
                <meta name="description" content="The World’s Most Ruthless (and Fair) Interviewer. An autonomous hiring platform that screens, interviews, and ranks talent at infinite scale." />
            </Helmet>

            <div className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                                    <Bot className="text-blue-600" size={20} />
                                    <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">Product: AI Recruiter</span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                    The World’s Most Ruthless <span className="text-blue-600">(and Fair)</span> Interviewer.
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                    An autonomous hiring platform that screens, interviews, and ranks talent at infinite scale. 100% data-driven. 0% bias.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={scrollToForm}
                                        className="inline-flex items-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                                    >
                                        Book a Product Demo
                                        <ArrowRight size={20} />
                                    </button>
                                    <button className="inline-flex items-center gap-2 h-14 bg-white text-blue-900 border-2 border-blue-100 hover:border-blue-300 rounded-full px-8 font-bold text-lg transition-all">
                                        Download Feature Sheet
                                    </button>
                                </div>
                            </div>

                            {/* Hero Visual Placeholder */}
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video flex items-center justify-center">
                                    <img
                                        src="/images/ai-recruiter-hero.png"
                                        alt="AI Recruiter Interface"
                                        className="w-full h-full object-cover"
                                    />
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
                                Nexby Recruiter is a bi-directional platform designed to remove friction for candidates while providing military-grade filtering for employers.
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
                                    A seamless, app-free interview experience. Candidates receive a link, click, and start the interview instantly on their browser. No downloads required.
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
                                    A central war room to post jobs, configure interview logic, view proctoring logs, and stack-rank candidates based on AI scores.
                                </p>
                            </div>
                        </div>

                        {/* Dashboard Visual Placeholder */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-96 flex items-center justify-center">
                            <img
                                src="/images/ai-recruiter-dashboard.png"
                                alt="Command Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Features - Vertical Stacking Cards */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="sticky top-24 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200 hover:shadow-blue-200/50 transition-shadow duration-300"
                            >
                                <div className="h-96 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/images/ai-interviewer.png"
                                        alt="AI Interviewer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                                        <Bot className="text-blue-600" size={20} />
                                        <span className="text-sm font-bold text-blue-900 uppercase">Adaptive AI Interviewer</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        It Digs Deeper.
                                    </h3>
                                    <p className="text-xl font-bold text-blue-700 mb-6">
                                        Static forms are dead.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our AI agent conducts dynamic, conversational voice and video interviews.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <MessageSquare className="text-blue-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Contextual Follow-ups:</span>
                                                <span className="text-gray-700"> If a candidate gives a vague answer, the AI asks specific follow-up questions to probe for depth.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Code2 className="text-blue-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Code & Case Study:</span>
                                                <span className="text-gray-700"> For technical roles, it presents coding challenges or case scenarios that must be solved in real-time.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Globe className="text-blue-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Multi-Lingual:</span>
                                                <span className="text-gray-700"> Interview a candidate in Tokyo in Japanese and review the transcript in English in New York.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Feature 2: The Integrity Layer */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="sticky top-28 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-red-200 hover:shadow-red-200/50 transition-shadow duration-300"
                            >
                                <div className="h-96 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/images/integrity-report.png"
                                        alt="Integrity Report"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
                                        <ShieldCheck className="text-red-600" size={20} />
                                        <span className="text-sm font-bold text-red-900 uppercase">The Integrity Layer</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Trust, Verified.
                                    </h3>
                                    <p className="text-xl font-bold text-red-700 mb-6">
                                        Nexby acts as your digital proctor.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        In the age of ChatGPT and proxy interviewers, you need a defense system.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Fingerprint className="text-red-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Lip-Sync Detection:</span>
                                                <span className="text-gray-700"> Algorithms analyze audio-visual synchronization to ensure the person speaking is the person on screen.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Globe className="text-red-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Tab-Switch Monitoring:</span>
                                                <span className="text-gray-700"> Flags candidates who switch tabs to search for answers during technical assessments.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Users className="text-red-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Object Detection:</span>
                                                <span className="text-gray-700"> Detects if a second person enters the frame or is whispering answers.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Feature 3: Automated Resume Intelligence */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="sticky top-32 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-green-200 hover:shadow-green-200/50 transition-shadow duration-300"
                            >
                                <div className="h-96 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/images/resume-funnel.png"
                                        alt="Resume Funnel"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
                                        <FileSearch className="text-green-600" size={20} />
                                        <span className="text-sm font-bold text-green-900 uppercase">Automated Resume Intelligence</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Beyond Keyword Matching.
                                    </h3>
                                    <p className="text-xl font-bold text-green-700 mb-6">
                                        We analyze semantic relevance.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We don't just Ctrl+F your resume database.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Cpu className="text-green-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">DNA Matching:</span>
                                                <span className="text-gray-700"> The AI reads the core DNA of the Job Description and matches it against candidate profiles, scoring them on a 0-100 fit scale.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Instant Reject:</span>
                                                <span className="text-gray-700"> Automatically filter out candidates who don't meet non-negotiable criteria (visa status, years of experience) before they enter the funnel.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
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
                                        <h4 className="font-bold text-lg mb-2 text-blue-300">Browser-Based</h4>
                                        <p className="text-gray-300">Works on Chrome, Safari, Edge, and Firefox.</p>
                                    </li>
                                    <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="font-bold text-lg mb-2 text-blue-300">Device Agnostic</h4>
                                        <p className="text-gray-300">Optimized for Mobile (iOS/Android), Tablet, and Desktop.</p>
                                    </li>
                                    <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="font-bold text-lg mb-2 text-blue-300">Bandwidth</h4>
                                        <p className="text-gray-300">Low-latency mode for candidates in areas with poor internet connectivity.</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                    <Cpu className="text-purple-400" />
                                    The Integration Ecosystem
                                </h3>
                                <p className="text-gray-300 mb-8">
                                    Your ATS is your system of record. We are your system of action.
                                </p>
                                <ul className="space-y-6">
                                    <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="font-bold text-lg mb-2 text-purple-300">ATS Sync</h4>
                                        <p className="text-gray-300">Bi-directional integration with Greenhouse, Lever, Workday, and SAP SuccessFactors.</p>
                                    </li>
                                    <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="font-bold text-lg mb-2 text-purple-300">Communication</h4>
                                        <p className="text-gray-300">Auto-trigger interview links via WhatsApp Business API and Email.</p>
                                    </li>
                                    <li className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <h4 className="font-bold text-lg mb-2 text-purple-300">Calendar</h4>
                                        <p className="text-gray-300">Auto-schedule final human rounds via Google Calendar/Outlook.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Applicability */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16">Industry Applicability</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                                <Code2 className="text-blue-600 mb-6" size={40} />
                                <h3 className="text-xl font-bold mb-4">IT Services & Consulting</h3>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-blue-600 uppercase">Use Case</span>
                                    <p className="font-medium">Bulk Campus Hiring</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase">Benefit</span>
                                    <p className="text-gray-600">Screen 5,000 graduates in a single weekend with standardized coding tests.</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                                <Building2 className="text-blue-600 mb-6" size={40} />
                                <h3 className="text-xl font-bold mb-4">Banking & Finance (BFSI)</h3>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-blue-600 uppercase">Use Case</span>
                                    <p className="font-medium">Frontline Sales Hiring</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase">Benefit</span>
                                    <p className="text-gray-600">Assess communication skills and language fluency for thousands of branch banking applicants.</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                                <Headphones className="text-blue-600 mb-6" size={40} />
                                <h3 className="text-xl font-bold mb-4">BPO & Customer Support</h3>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-blue-600 uppercase">Use Case</span>
                                    <p className="font-medium">Voice & Accent Training</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase">Benefit</span>
                                    <p className="text-gray-600">AI evaluates pronunciation, grammar, and rate of speech automatically.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Success Stories */}
                <section className="py-20 bg-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16">Client Success Stories</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <p className="text-lg italic mb-6">"With Nexby, we slashed our tech hiring time by 60%. The proctored coding evaluations gave us confidence in candidate quality before we even met them."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Code2 size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Talent Acquisition Lead</p>
                                        <p className="text-blue-300 text-sm">Tier-1 IT Consultancy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <p className="text-lg italic mb-6">"The fake candidate detection saved us from multiple bad hires during our bulk campus drives. It’s a firewall for our HR team."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold">HR Head</p>
                                        <p className="text-blue-300 text-sm">Leading Private Bank</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <p className="text-lg italic mb-6">"We now spend time only with serious contenders. The adaptive interview model mirrors our real consulting case rounds."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Partner</p>
                                        <p className="text-blue-300 text-sm">Global Management Consultancy</p>
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
            </div>
        </>
    );
};

export default AIRecruiterPage;
