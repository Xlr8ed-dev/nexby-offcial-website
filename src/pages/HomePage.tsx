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
                        <TypewriterText text="Automate Your Growth. Without the Headcount." />
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-4 backdrop-blur-sm bg-black/30 p-4 rounded-xl">
                        We don't build "chatbots." We engineer autonomous AI workforces. Deploy specialized agents for Sales, Recruitment, and Operations that work 24/7, speak 12 languages, and never take a sick day.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                            Verify Eligibility
                        </a>
                        <a href="#transparency" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                            See Transparency Demo
                        </a>
                    </div>
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
                        <p className="text-gray-600 text-sm font-medium">Calls 10,000 leads in 24 hours. Never misses a follow-up.</p>
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
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">AI for Recruitment</h3>
                        <p className="text-gray-600 text-sm font-medium">Screens 5,000 resumes. Conducts proctored interviews 24/7.</p>
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
                    className="mt-12 text-center max-w-3xl px-4 z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                        The Multiplier Effect.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Traditional scaling requires linear hiring: More revenue = More people.<br />
                        <span className="font-bold text-gray-900">Nexby breaks this equation.</span>
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-200 shadow-lg">
                            <p className="text-gray-600 text-sm">1 Recruiter + Nexby =</p>
                            <p className="text-3xl font-bold text-blue-600">50</p>
                            <p className="text-gray-700 font-medium">Interviews/Day</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-200 shadow-lg">
                            <p className="text-gray-600 text-sm">1 Sales Rep + Nexby =</p>
                            <p className="text-3xl font-bold text-purple-600">1,000</p>
                            <p className="text-gray-700 font-medium">Calls/Day</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200 shadow-lg">
                            <p className="text-gray-600 text-sm">1 Support Analyst + Nexby =</p>
                            <p className="text-3xl font-bold text-pink-600">Zero</p>
                            <p className="text-gray-700 font-medium">Backlog</p>
                        </div>
                    </div>
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
            if (t.includes("cold") || t.includes("sales") || t.includes("lead")) responseText = "Cold leads need speed and persistence. SalesX connects to your CRM and engages leads within 60 seconds of form submission. It handles objections, books meetings, and follows up automatically. Clients see 40% higher conversion in Q1.";
            else if (t.includes("java") || t.includes("developer") || t.includes("screen") || t.includes("hir")) responseText = "Absolutely. Our Recruiter Agent runs adaptive technical vivas — it asks follow-up questions based on answers, tests for conceptual depth, and flags plagiarism attempts. We screen 5,000 resumes in hours, not weeks.";
            else if (t.includes("spanish") || t.includes("language") || t.includes("speak")) responseText = "Yes! We support 12 languages including Spanish, German, Hindi, and Arabic. The voice synthesis is ultra-low latency, so conversations feel natural. Perfect for global sales and multilingual support teams.";
            else if (t.includes("cost") || t.includes("price")) responseText = "We structure pricing based on ROI. Most clients pay for the system out of the efficiency gains in month 3. Are you looking to reduce costs or increase capacity?";
            else responseText = "That is a specific challenge. Our custom agent architectures are designed exactly for that kind of operational complexity. Tell me a bit more about your team size?";

            setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <section id="transparency" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Don't Trust the Hype. Trust the Code.</h2>
                    <p className="text-gray-500">Ask our Agent anything. See how it handles objections, context, and empathy in real-time. No forms required to chat.</p>
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
                                <button onClick={() => handleSend("How do you handle cold leads?")} className="text-xs md:text-sm bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 px-3 py-1.5 rounded-full hover:from-blue-100 hover:to-blue-200 hover:border-blue-500 hover:text-blue-700 transition-all font-medium">
                                    🧊 How do you handle cold leads?
                                </button>
                                <button onClick={() => handleSend("Can you screen for Java developers?")} className="text-xs md:text-sm bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 px-3 py-1.5 rounded-full hover:from-purple-100 hover:to-purple-200 hover:border-purple-500 hover:text-purple-700 transition-all font-medium">
                                    💻 Can you screen for Java developers?
                                </button>
                                <button onClick={() => handleSend("Do you speak Spanish?")} className="text-xs md:text-sm bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 px-3 py-1.5 rounded-full hover:from-green-100 hover:to-green-200 hover:border-green-500 hover:text-green-700 transition-all font-medium">
                                    🌍 Do you speak Spanish?
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
                    <div className="grid sm:grid-cols-1 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-200">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">300+</div>
                            <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-4">
                                Businesses Onboarded
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                India, GCC, and Global markets. Scalable AI architectures that work.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">&lt; 6 Months</div>
                            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                                Avg. Payback Period
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Most clients recover their AI investment inside two quarters through efficiency gains.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-200">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">₹500 Cr+</div>
                            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-4">
                                Pipeline Generated
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Qualified pipeline generated for clients through AI-powered outreach and lead capture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



// The Autonomous Suite Section
const ProductsShowcase = () => {
    return (
        <section id="products" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Pick Your Digital Employee.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The Autonomous Suite — purpose-built agents that work 24/7.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* SalesX */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 hover:shadow-xl hover:border-purple-400 transition-all">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                            <Send className="text-white" size={28} />
                        </div>
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">The Revenue Engine</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-1">SalesX</h3>
                        <p className="text-gray-500 text-sm mb-4">Role: Autonomous SDR & Closer</p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Calls 10,000 leads in 24 hours. Handles Voice, WhatsApp, and Email simultaneously.
                        </p>
                        <a
                            href="/products/salesx"
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore SalesX <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Recruiter Agent */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                            <Users className="text-white" size={28} />
                        </div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">The Talent Scout</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-1">Recruiter Agent</h3>
                        <p className="text-gray-500 text-sm mb-4">Role: Technical Interviewer</p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Screens 5,000 resumes and conducts proctored video interviews to find the top 1% talent.
                        </p>
                        <a
                            href="/products/ai-recruiter"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Recruiter <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Expo Insight */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-green-200 hover:shadow-xl hover:border-green-400 transition-all">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                            <BarChart3 className="text-white" size={28} />
                        </div>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">The Event Manager</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-1">Expo Insight</h3>
                        <p className="text-gray-500 text-sm mb-4">Role: Offline Lead Capture</p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Scans badges offline, tags intent, and sends WhatsApp brochures before the visitor leaves the stall.
                        </p>
                        <a
                            href="/products/expo-insight"
                            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Expo <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Support Assist */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-orange-200 hover:shadow-xl hover:border-orange-400 transition-all">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                            <CheckCircle className="text-white" size={28} />
                        </div>
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">The Ops Analyst</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-1">Support Assist</h3>
                        <p className="text-gray-500 text-sm mb-4">Role: L1/L2 Support Automation</p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Resolves 70% of tickets by reading your internal documentation. Zero hallucinations.
                        </p>
                        <a
                            href="/products/support-assist"
                            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-4 transition-all"
                        >
                            Explore Support <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Sovereign AI */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-slate-300 hover:shadow-xl hover:border-slate-500 transition-all lg:col-span-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center shrink-0">
                                <Lock className="text-white" size={28} />
                            </div>
                            <div className="flex-1">
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">For Government</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-1">Sovereign AI</h3>
                                <p className="text-gray-500 text-sm mb-4">Role: Secure Citizen Interface</p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    On-premise deployment for data localization. Powering emergency response and tender automation.
                                </p>
                                <a
                                    href="/solutions/government/ai-call-assistant"
                                    className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:gap-4 transition-all"
                                >
                                    Explore Government <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Vertical Intelligence Section (Industries)
const IndustryExpertise = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Vertical Intelligence.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We don't believe in "One AI Fits All." Our models are fine-tuned on industry-specific datasets.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Real Estate */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Developers</h3>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Use Case</p>
                            <p className="text-gray-700">Turning dead databases into site visits.</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Result</p>
                            <p className="text-2xl font-bold text-purple-600">₹40 Cr</p>
                            <p className="text-gray-700">Fresh bookings for a Mumbai Developer.</p>
                        </div>
                        <a
                            href="/solutions/real-estate"
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all"
                        >
                            Learn More <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Manufacturing */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing & Industrial</h3>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Use Case</p>
                            <p className="text-gray-700">Reading 500-page Tender RFPs automatically.</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Result</p>
                            <p className="text-2xl font-bold text-blue-600">10 days → 4 hours</p>
                            <p className="text-gray-700">Reduced tender analysis time.</p>
                        </div>
                        <a
                            href="/solutions/manufacturing"
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                        >
                            Learn More <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Pharmaceuticals */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:shadow-xl transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pharmaceuticals</h3>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Use Case</p>
                            <p className="text-gray-700">Managing Stockist orders and Export queries in Spanish/German.</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">The Result</p>
                            <p className="text-2xl font-bold text-green-600">40%</p>
                            <p className="text-gray-700">Increase in field force efficiency.</p>
                        </div>
                        <a
                            href="/solutions/pharma"
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

// Partner Ecosystem Section
const PartnerSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            You Sell the Vision.<br />We Build the Intelligence.
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Are you a Digital Agency, System Integrator, or Consultant? Stop leaving revenue on the table. Partner with Nexby to offer end-to-end AI automation to your clients.
                        </p>
                        <a
                            href="/partnerships"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
                        >
                            Join Partner Program <ArrowRight size={20} />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-purple-300">For Agencies</h3>
                            <p className="text-gray-300">
                                Bundle "SalesX" with your lead gen services. Offer AI-powered outreach as a premium add-on.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-green-300">For Fabricators</h3>
                            <p className="text-gray-300">
                                Bundle "Expo Insight" with your stall designs. Give exhibitors instant lead capture tech.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-blue-300">For Consultants</h3>
                            <p className="text-gray-300">
                                Refer deals and earn recurring revenue. We handle the tech, you keep the relationship.
                            </p>
                        </div>
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
            <ChatSection />
            <ProductsShowcase />
            <StatsSection />
            <IndustryExpertise />
            <PartnerSection />
        </>
    );
};

export default HomePage;
