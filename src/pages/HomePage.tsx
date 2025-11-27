import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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

interface Product {
    id: number;
    name: string;
    description: string;
    benefits: string[];
}

interface ChatMessage {
    role: 'user' | 'ai';
    text: string;
}

// --- Data ---

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Nexby SalesFlow",
        description: "Autonomous AI agents that handle lead qualification and follow-ups.",
        benefits: [
            "Increases lead conversion by 40%",
            "Automates 90% of initial outreach",
            "Seamless CRM integration"
        ]
    },
    {
        id: 2,
        name: "Nexby TalentScout",
        description: "AI-driven candidate sourcing and initial screening interviews.",
        benefits: [
            "Reduces time-to-hire by 15 days",
            "Bias-free candidate screening",
            "Automated interview scheduling"
        ]
    },
    {
        id: 3,
        name: "Nexby OpsGuard",
        description: "Predictive maintenance and workflow optimization for operations.",
        benefits: [
            "Predicts equipment failure",
            "Optimizes resource allocation",
            "Real-time anomaly detection"
        ]
    }
];

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

const ProductSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="products" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Ecosystem</h2>
                    <div className="h-1 w-20 bg-black"></div>
                </div>

                <div className="flex flex-col lg:flex-row h-[500px] border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
                    {/* Left 60% - Slider Images */}
                    <div className="w-full lg:w-[60%] relative bg-gray-100 p-10 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Abstract representation of product */}
                                <div className="w-full h-full relative">
                                    <div className={`absolute inset-0 opacity-30 ${activeIndex === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' : activeIndex === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' : 'bg-gradient-to-br from-green-400 to-green-600'
                                        }`}></div>
                                    <img
                                        src={`https://source.unsplash.com/random/800x600?technology,abstract&sig=${activeIndex}`}
                                        className="w-full h-full object-cover mix-blend-overlay"
                                        alt="Product visual"
                                        onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")}
                                    />
                                    <div className="absolute bottom-10 left-10 text-6xl font-bold text-white/20 select-none">
                                        0{activeIndex + 1}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                            {PRODUCTS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-black' : 'w-2 bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right 40% - Info */}
                    <div className="w-full lg:w-[40%] p-12 bg-white flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <h3 className="text-3xl font-bold mb-4">{PRODUCTS[activeIndex].name}</h3>
                                <p className="text-gray-600 mb-8 text-lg">{PRODUCTS[activeIndex].description}</p>

                                <div className="space-y-4">
                                    {PRODUCTS[activeIndex].benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${activeIndex === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200' : activeIndex === 1 ? 'bg-gradient-to-br from-purple-100 to-purple-200' : 'bg-gradient-to-br from-green-100 to-green-200'}`}>
                                                <CheckCircle size={14} className={`${activeIndex === 0 ? 'text-blue-600' : activeIndex === 1 ? 'text-purple-600' : 'text-green-600'}`} />
                                            </div>
                                            <span className="font-medium text-gray-800">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`mt-10 flex items-center gap-2 font-semibold hover:gap-4 transition-all group px-6 py-3 rounded-full ${activeIndex === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800' : activeIndex === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800' : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'} shadow-lg`}>
                                    Explore Product <ArrowRight size={20} />
                                </button>
                            </motion.div>
                        </AnimatePresence>
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
            <StatsSection />
            <ProductSlider />
            <ContactForm formId="home_page_contact_form" />
        </>
    );
};

export default HomePage;
