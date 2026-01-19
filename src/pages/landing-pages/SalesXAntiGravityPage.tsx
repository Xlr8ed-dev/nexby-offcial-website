import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Rocket,
    Zap,
    Clock,
    TrendingUp,
    Briefcase,
    ArrowRight
} from 'lucide-react';

const SalesXAntiGravityPage = () => {
    const painRef = useRef(null);
    const painInView = useInView(painRef, { once: true, amount: 0.3 });

    const solutionRef = useRef(null);
    const solutionInView = useInView(solutionRef, { once: true, amount: 0.3 });

    const proofRef = useRef(null);
    const proofInView = useInView(proofRef, { once: true, amount: 0.3 });

    const ctaRef = useRef(null);
    const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

    return (
        <>
            <Helmet>
                <title>SalesX Anti-Gravity | Nexby</title>
                <meta name="description" content="Stop letting manual tasks weigh you down. Activate Anti-Gravity mode with Nexby SalesX and lift your revenue effortlessly." />
            </Helmet>

            <div className="min-h-screen bg-[#0B0D17] text-white font-sans overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">

                {/* 1. Hero Section (The Disruption) */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                                <Rocket size={16} />
                                <span className="uppercase tracking-wider">Launch Sequence Initiated</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                                Is Gravity Crushing Your <span className="text-blue-500">Sales Pipeline?</span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                                Stop letting manual tasks weigh you down. Activate <span className="text-white font-bold">Anti-Gravity mode</span> with Nexby SalesX.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_rgba(37,99,235,0.9)] hover:scale-105 active:scale-95">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Defy Gravity - Get a Demo
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                                <button className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-lg rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95">
                                    <span className="group-hover:text-blue-400 transition-colors duration-300">See It Fly</span>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
                        >
                            {/* Visual Metaphor: Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative z-20 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-white/10 shadow-2xl w-full max-w-md transform rotate-[-2deg]"
                            >
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                                            <Zap size={20} fill="currentColor" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Status</div>
                                            <div className="font-bold text-green-400">Zero-G Mode Active</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-mono font-bold text-white">
                                        98<span className="text-blue-500">%</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                                        <span className="text-gray-400 text-sm">Lead Response Time</span>
                                        <span className="text-white font-mono font-bold">&lt; 10s</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                                        <span className="text-gray-400 text-sm">Manual Data Entry</span>
                                        <span className="text-white font-mono font-bold">0 hrs</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                                        <span className="text-gray-400 text-sm">Follow-ups/Day</span>
                                        <span className="text-white font-mono font-bold">Unlimited</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* "Heavy" Elements Falling Away */}
                            <motion.div
                                animate={{ y: [0, 20, 0], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ repeat: Infinity, duration: 6, delay: 1 }}
                                className="absolute -bottom-10 right-10 bg-red-900/20 p-4 rounded-xl border border-red-500/20 backdrop-blur-sm transform rotate-12 rotate-y-[20deg]"
                            >
                                <div className="text-red-400 text-xs font-bold uppercase mb-1">Gravity Warning</div>
                                <div className="text-red-200 text-sm">Missed Calls: 50+</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 30, 0], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ repeat: Infinity, duration: 7, delay: 2 }}
                                className="absolute bottom-20 -left-4 bg-gray-800/40 p-3 rounded-xl border border-gray-600/30 backdrop-blur-sm transform -rotate-12 blur-[1px]"
                            >
                                <div className="text-gray-400 text-xs">Unread Emails</div>
                                <div className="text-white font-bold">1,243</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. The Pain Point (The "Painfully Correct" Reality) */}
                <section ref={painRef} className="py-24 bg-[#0F111F] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17] via-transparent to-transparent opacity-50"></div>
                    <motion.div
                        className="max-w-7xl mx-auto px-6 relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={painInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="relative z-10 grid gap-6">
                                    <div className="bg-[#16192E] p-6 rounded-2xl border border-white/5 shadow-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                                <Clock size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-white">The Time Anchor</h3>
                                                <p className="text-sm text-gray-400">3 hours/day on data entry</p>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-red-500"></div>
                                        </div>
                                    </div>

                                    <div className="bg-[#16192E] p-6 rounded-2xl border border-white/5 shadow-xl opacity-80 translate-x-4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
                                                <Briefcase size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-white">The Capacity Ceiling</h3>
                                                <p className="text-sm text-gray-400">Max 50 calls/rep per day</p>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-orange-500"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F111F] z-20 pointer-events-none lg:hidden"></div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    Your Team Isn't Lazy.<br />
                                    <span className="text-gray-400">They're Just Heavy.</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    They are carrying the weight of 500 unread emails, missed follow-ups, and the crushing pressure to "just sell more."
                                </p>
                                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                    While they struggle to lift this load, your leads drift away to lighter, faster competitors. Gravity is expensive.
                                </p>
                                <div className="flex items-start gap-4">
                                    <div className="w-1 bg-gradient-to-b from-red-500 to-transparent h-20 rounded-full"></div>
                                    <p className="text-sm text-gray-500 italic">
                                        "The heaviest thing in sales isn't the quota. It's the manual work required to hit it."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 3. The Solution (The Anti-Gravity Engine) */}
                <section ref={solutionRef} className="py-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent"></div>

                    <motion.div
                        className="max-w-7xl mx-auto px-6 relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Anti-Gravity Engine</span>
                            </h2>
                            <p className="text-xl text-gray-400">
                                Remove the friction. Accelerate the process. Watch your revenue rise.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                className="group bg-[#121422] p-8 rounded-3xl border border-white/5 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.3)] relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <Rocket size={120} />
                                </div>
                                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <Zap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Zero-G Prospecting</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    No manual lifting. SalesX identifies, qualifies, and engages leads automatically. Your team only steps in for the close.
                                </p>
                            </motion.div>

                            <motion.div
                                className="group bg-[#121422] p-8 rounded-3xl border border-white/5 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <Clock size={120} />
                                </div>
                                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <Clock size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Light Speed Engagement</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    Respond in seconds, not hours. We hit leads while they are <span className="text-purple-400 font-semibold">hot</span>, increasing conversion rates by up to 400%.
                                </p>
                            </motion.div>

                            <motion.div
                                className="group bg-[#121422] p-8 rounded-3xl border border-white/5 hover:border-green-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,197,94,0.3)] relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <TrendingUp size={120} />
                                </div>
                                <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <TrendingUp size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Perpetual Motion</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    Sales never stop. Even when you sleep, SalesX is nurturing, booking, and moving deals forward 24/7/365.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* 4. Social Proof (The Flight Data) */}
                <section ref={proofRef} className="py-20 border-y border-white/5 bg-[#0D0F1A] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">Flight Data</h2>
                                <p className="text-gray-400">See who else is flying high with Nexby.</p>
                            </div>
                            <div className="flex items-center gap-2 text-green-400 bg-green-900/10 px-4 py-2 rounded-full border border-green-900/30">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="font-mono font-bold text-sm">SYSTEMS NOMINAL</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                className="group bg-[#141726] p-8 rounded-2xl border border-white/5 hover:border-yellow-500/20 hover:shadow-[0_10px_40px_rgba(234,179,8,0.1)] transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                animate={proofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />)}
                                </div>
                                <p className="text-lg text-gray-300 italic mb-6 group-hover:text-white transition-colors duration-300">
                                    "We cut the anchor of manual outreach. Our SDRs used to make 40 calls a day. Now SalesX makes 1,000, and our team just takes the booked meetings."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-white">Sarah Jenkins</div>
                                        <div className="text-sm text-gray-500">VP of Sales, TechFlow</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="group bg-[#141726] p-8 rounded-2xl border border-white/5 hover:border-yellow-500/20 hover:shadow-[0_10px_40px_rgba(234,179,8,0.1)] transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                animate={proofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />)}
                                </div>
                                <p className="text-lg text-gray-300 italic mb-6 group-hover:text-white transition-colors duration-300">
                                    "The speed is terrifyingly good. A lead submits a form, and SalesX is talking to them before they even close the tab. That's anti-gravity."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-white">David Chen</div>
                                        <div className="text-sm text-gray-500">Founder, ScaleUp Inc.</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. Final CTA (The Launchpad) */}
                <section ref={ctaRef} className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/5"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D17] via-transparent to-[#0B0D17]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready for <span className="text-blue-500">Lift-Off?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12">
                            Leave the heavy lifting to us. Start your 14-day Anti-Gravity trial today.
                        </p>

                        <motion.div
                            className="bg-[#16192E] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto backdrop-blur-sm"
                            initial={{ opacity: 0, y: 30 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("Launch sequence initiated!"); }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                        <input type="text" className="w-full bg-[#0B0D17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-white/20" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                        <input type="text" className="w-full bg-[#0B0D17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-white/20" placeholder="Rocket Corp" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                                    <input type="email" className="w-full bg-[#0B0D17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-white/20" placeholder="john@rocket.com" />
                                </div>
                                <button type="submit" className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] active:scale-95">
                                    <span>Activate SalesX Now</span>
                                    <Rocket size={20} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    No credit card required for demo. Systems loaded and ready.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </section>

                <footer className="py-8 bg-[#0B0D17] border-t border-white/5 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nexby AI. All systems go.</p>
                </footer>
            </div >
        </>
    );
};

export default SalesXAntiGravityPage;
