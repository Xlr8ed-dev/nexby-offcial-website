import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle,
    BarChart3,
    Users,
    Send,
    Lock
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

// --- Types ---

interface ChatMessage {
    role: 'user' | 'ai';
    text: string;
}

// --- Components ---

const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        // Reset displayed text
        setDisplayedText('');
        let i = 0;

        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50); // Typing speed

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block font-light text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded leading-normal">
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const HeroSection = () => {
    return (
        <section className="h-screen pt-24 flex flex-col md:flex-row overflow-hidden gap-0 md:gap-4 px-0 md:px-4">
            {/* Left 70% */}
            <div className="relative w-full md:w-[70%] h-[60vh] md:h-full bg-gray-900 overflow-hidden group md:rounded-3xl">
                <div className="absolute inset-0 z-0">
                    {/* Simulated Image Background */}
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="AI Network"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-12 md:px-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {/* Updated Text: Simpler, CEO-friendly */}
                        <TypewriterText text="Automate Your Growth. Without the Headcount." />
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-xl mt-4 backdrop-blur-sm p-2 rounded">
                        Deploy custom AI agents for Sales and Recruitment. Practical, profitable, and live in weeks.
                    </p>
                </div>
            </div>

            {/* Right 30% */}
            <div className="w-full md:w-[30%] h-[40vh] md:h-full flex flex-col bg-white md:rounded-3xl overflow-hidden shadow-xl gap-4 p-4">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative flex-1 flex flex-col justify-center p-8 overflow-hidden cursor-pointer group rounded-2xl"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                            alt="Sales Background"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 to-blue-100/70 hover:from-blue-100/60 hover:to-blue-200/60 transition-all"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <BarChart3 className="text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">AI for Sales</h3>
                        <p className="text-gray-600 text-sm font-medium">Your best salesperson, available 24/7 to qualify and close leads.</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative flex-1 flex flex-col justify-center p-8 overflow-hidden cursor-pointer group rounded-2xl"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                            alt="HR Background"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-50/70 to-purple-100/70 hover:from-purple-100/60 hover:to-purple-200/60 transition-all"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <Users className="text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">AI for HR</h3>
                        <p className="text-gray-600 text-sm font-medium">Interview 1,000 candidates in a day. Hire the top 1% faster.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ScrollAnimationSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform the X: Scale down as we scroll through the container
    const scale = useTransform(scrollYProgress, [0, 0.4], [100, 1]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

    return (
        <div ref={ref} className="h-screen relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden flex flex-col items-center">
            {/* Animated gradient background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* The Sticky Container for the X Animation */}
            <div className="sticky top-1/4 w-full flex flex-col items-center justify-center h-96">
                <motion.div
                    style={{ scale, y }}
                    className="z-20 font-bold leading-none bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl"
                >
                    X
                </motion.div>

                {/* The Text that reveals as X shrinks */}
                <motion.div
                    style={{ opacity }}
                    className="mt-12 text-center max-w-2xl px-4 z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                        The Multiplier Effect
                    </h2>
                    <p className="text-xl text-gray-700 font-medium">
                        Where human potential meets artificial precision.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const ChatSection = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'ai', text: "Hi. I am the Nexby Demo Bot. I can help you understand if your business is ready for AI. What's your biggest bottleneck right now?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [interactionCount, setInteractionCount] = useState(0);
    const [isGated, setIsGated] = useState(false);
    const [inputVal, setInputVal] = useState("");

    const MAX_INTERACTIONS = 3;

    const handleSend = (text: string) => {
        if (!text.trim() || isGated) return;

        setMessages(prev => [...prev, { role: 'user', text }]);
        setIsTyping(true);
        setInputVal("");

        // Logic to gate after interactions
        if (interactionCount >= MAX_INTERACTIONS - 1) {
            setTimeout(() => {
                setIsTyping(false);
                setIsGated(true);
                setMessages(prev => [...prev, {
                    role: 'ai',
                    text: "You're asking the right questions. It sounds like there is a real opportunity to optimize here, but I need to know more about your specific workflow to give a valid recommendation."
                }]);
            }, 1500);
            return;
        }

        setInteractionCount(prev => prev + 1);

        // Mock API latency & Responses
        setTimeout(() => {
            let responseText = "";
            const t = text.toLowerCase();
            if (t.includes("sales") || t.includes("lead")) responseText = "We often see that. Our SalesFlow agent connects to your CRM and engages leads instantly. It usually increases conversion by 40% within the first quarter. How many leads do you process monthly?";
            else if (t.includes("hir") || t.includes("talent") || t.includes("candid")) responseText = "Recruitment volume is a perfect use case. TalentScout can screen resumes and conduct first-round voice interviews 24/7. Would saving 20 hours/week per recruiter help your team?";
            else if (t.includes("cost") || t.includes("price")) responseText = "We structure pricing based on ROI. Most clients pay for the system out of the efficiency gains in month 3. Are you looking to reduce costs or increase capacity?";
            else responseText = "That is a specific challenge. Our custom architectures are designed exactly for that kind of operational complexity. Tell me a bit more about your team size?";

            setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">See transparency in action</h2>
                    <p className="text-gray-500">Ask us anything. No forms required to chat.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 min-h-[500px] flex flex-col relative">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 border-b border-blue-700 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="ml-4 text-sm font-medium text-white">Nexby Intelligent Assistant</span>
                        <span className="ml-auto text-xs text-blue-100">{interactionCount}/{MAX_INTERACTIONS} Free Interactions</span>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-white pb-32">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base shadow-md ${msg.role === 'user'
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-bl-none border border-gray-200'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                        <div ref={(el) => el?.scrollIntoView({ behavior: "smooth" })}></div>
                    </div>

                    {/* Gated Overlay */}
                    {isGated && (
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-white/80 backdrop-blur-md flex flex-col items-center justify-center p-6 z-20 border-t border-gray-200">
                            <Lock className="text-black mb-2" size={24} />
                            <h3 className="font-bold text-lg mb-2 text-center">Let's turn this conversation into a plan.</h3>
                            <p className="text-sm text-gray-600 mb-4 text-center max-w-md">
                                We've scratched the surface. To give you a specific technical roadmap, we need to understand your stack properly.
                            </p>
                            <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                                Request Strategy Call
                            </a>
                        </div>
                    )}

                    {/* Input/Prompt Area */}
                    {!isGated && (
                        <div className="p-6 border-t border-gray-100 bg-gray-50 absolute bottom-0 w-full z-10">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button onClick={() => handleSend("How can you help with Sales?")} className="text-xs md:text-sm bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 px-3 py-1.5 rounded-full hover:from-blue-100 hover:to-blue-200 hover:border-blue-500 hover:text-blue-700 transition-all font-medium">
                                    📈 Sales followups
                                </button>
                                <button onClick={() => handleSend("How fast can we hire?")} className="text-xs md:text-sm bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 px-3 py-1.5 rounded-full hover:from-purple-100 hover:to-purple-200 hover:border-purple-500 hover:text-purple-700 transition-all font-medium">
                                    👥 Hiring speed
                                </button>
                                <button onClick={() => handleSend("Is this expensive?")} className="text-xs md:text-sm bg-gradient-to-r from-pink-50 to-pink-100 border-2 border-pink-300 px-3 py-1.5 rounded-full hover:from-pink-100 hover:to-pink-200 hover:border-pink-500 hover:text-pink-700 transition-all font-medium">
                                    💰 Cost vs ROI
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend(inputVal)}
                                    placeholder="Type your question..."
                                    className="w-full p-4 pr-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                                <button
                                    onClick={() => handleSend(inputVal)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const StatsSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-8">
                        <span className="text-green-600 font-bold tracking-widest text-sm uppercase">
                            Proven Journeys
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            We've helped 300+ businesses design and deploy AI in the real world.
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
                            From exhibitions and sales funnels to recruitment desks and operations command centers — Nexby AI ships systems that stick, not experiments that die in slides.
                        </p>
                    </div>

                    {/* Right Stats Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-200 h-full flex flex-col justify-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">300+</div>
                            <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-4">
                                Businesses Onboarded
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Across India, GCC and global markets. Delivering scalable AI architectures.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-blue-200 h-full flex flex-col justify-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">&lt; 6 Mo</div>
                            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                                Avg. Payback Period
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Most clients recover their AI investment inside two quarters through efficiency gains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Solutions Overview Section
const SolutionsOverview = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Enterprise AI Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Industry-specific AI infrastructure designed to solve real-world operational challenges
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI for Sales */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <BarChart3 className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI for Sales</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Deploy autonomous AI Sales Agents that qualify, nurture, and close leads across voice and text channels. Zero latency, infinite scale.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-purple-600" size={18} />
                                <span className="text-gray-700">Omnichannel deployment (Voice, WhatsApp, Email, Web)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-purple-600" size={18} />
                                <span className="text-gray-700">Dynamic conversation flow with objection handling</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-purple-600" size={18} />
                                <span className="text-gray-700">CRM integration with instant lead sync</span>
                            </div>
                        </div>
                        <a
                            href="/solutions/sales"
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Sales AI <ArrowRight size={20} />
                        </a>
                    </motion.div>

                    {/* AI for Recruitment */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                            <Users className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI for Recruitment</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Hire the top 1% automatically with AI-powered screening, adaptive interviews, and proctored evaluations. 90% reduction in time-to-hire.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-blue-600" size={18} />
                                <span className="text-gray-700">Adaptive voice & video interviews with technical vivas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-blue-600" size={18} />
                                <span className="text-gray-700">Military-grade proctoring (lip-sync, tab monitoring)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-blue-600" size={18} />
                                <span className="text-gray-700">Multi-lingual support across 30+ languages</span>
                            </div>
                        </div>
                        <a
                            href="/solutions/recruitment"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Recruitment AI <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Products Showcase Section
const ProductsShowcase = () => {
    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Product Suite
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Purpose-built AI platforms for specific business functions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* AI Recruiter */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Recruiter</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Autonomous hiring platform that screens, interviews, and ranks talent at infinite scale. 100% data-driven, 0% bias.
                        </p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                                <Lock className="text-blue-600" size={16} />
                                <span className="text-gray-600">Fake candidate detection</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="text-blue-600" size={16} />
                                <span className="text-gray-600">Proctored technical assessments</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <BarChart3 className="text-blue-600" size={16} />
                                <span className="text-gray-600">ATS integration ready</span>
                            </div>
                        </div>
                        <a
                            href="/products/ai-recruiter"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                        >
                            Learn More <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* AI TeleCaller */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <Send className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">AI TeleCaller</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Enterprise voice agents that handle qualification calls, objections, and appointment booking with human-level nuance.
                        </p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                                <Lock className="text-purple-600" size={16} />
                                <span className="text-gray-600">Ultra-low latency voice synthesis</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="text-purple-600" size={16} />
                                <span className="text-gray-600">Dynamic objection handling</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <BarChart3 className="text-purple-600" size={16} />
                                <span className="text-gray-600">Calendar integration</span>
                            </div>
                        </div>
                        <a
                            href="/products/ai-telecaller"
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all"
                        >
                            Learn More <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Expo Insight */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                            <BarChart3 className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Expo Insight</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            The operating system for trade shows. Offline-first mobile app & powerful analytics dashboard for exhibitions.
                        </p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                                <Lock className="text-green-600" size={16} />
                                <span className="text-gray-600">Military-grade OCR scanning</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="text-green-600" size={16} />
                                <span className="text-gray-600">100% offline capable</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <BarChart3 className="text-green-600" size={16} />
                                <span className="text-gray-600">Real-time lead analytics</span>
                            </div>
                        </div>
                        <a
                            href="/products/expo-insight"
                            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-4 transition-all"
                        >
                            Learn More <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Industry Expertise Section
const IndustryExpertise = () => {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Industry Expertise
                    </h2>
                    <p className="text-xl text-purple-300">
                        Proven deployments across highly regulated and complex sectors
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Real Estate</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lead qualification, revival campaigns, and walk-in generation
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            B2B sales enablement and technical buyer engagement
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Government</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Emergency response systems and citizen service automation
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Technology</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Campus hiring, technical screening, and mass recruitment
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Banking & Finance</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Frontline sales hiring and compliance-ready deployments
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Pharmaceuticals</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Medical conference lead capture with HIPAA compliance
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">BPO & Support</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Voice accent evaluation and communication skills assessment
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <h3 className="text-xl font-bold mb-3">Luxury & Retail</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            High-value client engagement and exhibition lead management
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Technology Stack Section
const TechnologyStack = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Enterprise-Grade Technology
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Built on cutting-edge AI infrastructure with flexible deployment options
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <Lock className="text-purple-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Deployment</h3>
                        <p className="text-gray-600">
                            Rapid scaling on secure, global infrastructure with 99.9% uptime SLA
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Lock className="text-blue-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">On-Premise / Air-Gapped</h3>
                        <p className="text-gray-600">
                            Deploy LLM within your private infrastructure. Your data never leaves your perimeter
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <Lock className="text-green-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Ready</h3>
                        <p className="text-gray-600">
                            Built to adhere to GDPR, TCPA, HIPAA and regional data sovereignty standards
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Integration Ecosystem</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Send className="text-purple-600" size={20} />
                                Communication
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• WhatsApp Business API</li>
                                <li>• Twilio, Exotel (Voice)</li>
                                <li>• Facebook Messenger</li>
                                <li>• Custom SIP Trunks</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <BarChart3 className="text-blue-600" size={20} />
                                CRM & ATS
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Salesforce, HubSpot, Zoho</li>
                                <li>• Greenhouse, Lever, Workday</li>
                                <li>• SAP SuccessFactors</li>
                                <li>• Pipedrive, Dynamics 365</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="text-green-600" size={20} />
                                Calendar & Collaboration
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Google Calendar</li>
                                <li>• Microsoft Outlook</li>
                                <li>• Calendly</li>
                                <li>• Slack Integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Why Choose Nexby Section
const WhyChooseNexby = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Nexby
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We don't build experiments. We ship production-grade AI systems that stick.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                        <div className="text-3xl font-bold text-purple-600 mb-4">300+</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Businesses Onboarded</h3>
                        <p className="text-gray-600">
                            Across India, GCC, and global markets with scalable AI architectures
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                        <div className="text-3xl font-bold text-blue-600 mb-4">&lt; 6 Mo</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Avg. Payback Period</h3>
                        <p className="text-gray-600">
                            Most clients recover AI investment inside two quarters through efficiency gains
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                        <div className="text-3xl font-bold text-green-600 mb-4">90%</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Time Reduction</h3>
                        <p className="text-gray-600">
                            From 140 hours to 13 minutes per hire in recruitment use cases
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                        <div className="text-3xl font-bold text-orange-600 mb-4">40%</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Conversion Increase</h3>
                        <p className="text-gray-600">
                            Average improvement in sales conversion within first quarter
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border-2 border-cyan-200">
                        <div className="text-3xl font-bold text-cyan-600 mb-4">Zero</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Dropped Calls</h3>
                        <p className="text-gray-600">
                            100% call pickup rate in government emergency response deployments
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
                        <div className="text-3xl font-bold text-pink-600 mb-4">24/7</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Always Available</h3>
                        <p className="text-gray-600">
                            AI agents work round the clock across all time zones
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomePage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Nexby AI Solutions - Automate Your Growth with AI Agents for Sales & Recruitment</title>
                <meta name="description" content="Deploy custom AI agents for Sales and Recruitment. Nexby AI delivers practical, profitable automation solutions live in weeks. Transform your business efficiency with cutting-edge AI technology." />
                <meta name="keywords" content="AI automation, AI sales agents, AI recruitment, business automation, AI solutions, TalentScout, SalesFlow, enterprise AI, Mumbai AI company" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Nexby AI Solutions - Automate Your Growth" />
                <meta property="og:description" content="Deploy custom AI agents for Sales and Recruitment. Practical, profitable, and live in weeks." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nexby.ai/" />

                {/* Organization Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Nexby AI Solutions Private Limited",
                        "url": "https://nexby.ai",
                        "logo": "https://nexby.ai/logo.png",
                        "description": "Leading AI automation solutions for recruitment, sales, and business operations",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "15, Khatau Building, 44 Bank Street",
                            "addressLocality": "Mumbai",
                            "addressRegion": "Maharashtra",
                            "postalCode": "400001",
                            "addressCountry": "IN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-98920-48816",
                            "contactType": "Customer Service",
                            "email": "hello@nexby.ai"
                        },
                        "sameAs": [
                            "https://linkedin.com/company/nexby-ai/",
                            "https://www.youtube.com/@NexbyAISolutions",
                            "https://www.instagram.com/nexby.ai/"
                        ]
                    })}
                </script>
            </Helmet>
            <HeroSection />
            <ScrollAnimationSection />
            <SolutionsOverview />
            <ChatSection />
            <ProductsShowcase />
            <StatsSection />
            <IndustryExpertise />
            <TechnologyStack />
            <WhyChooseNexby />
            <ContactForm formId="home_page_contact_form" />
        </>
    );
};

export default HomePage;
