import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Zap, Box, TrendingUp, Target } from 'lucide-react';

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>About Nexby | The Architects of the Autonomous Enterprise</title>
                <meta name="description" content="We don't just build software. We engineer the digital workforce that will power the next decade of business." />
            </Helmet>

            <div className="bg-white min-h-screen">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 md:py-40 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                The Architects of the Autonomous Enterprise.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                We don't just build software. We engineer the digital workforce that will power the next decade of business.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    To democratize access to enterprise-grade AI agents, empowering businesses of all sizes with autonomous intelligence that drives real ROI. We bridge the gap between "AI Hype" and "Business Value."
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl border border-purple-100">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    A world where humans are free from mundane tasks, focusing instead on strategy, creativity, and meaningful relationships. We're building the Hybrid Workforce where your headcount isn't limited by your payroll.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Origin Story */}
                <section className="bg-gray-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">Engineering Discipline. Industry DNA.</h2>
                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    Nexby was born from a collision of two worlds.
                                </p>
                                <p>
                                    Our founder, <span className="text-white font-semibold">Archit Jain</span>, spent 12 years as a Software Engineer, architecting enterprise-grade systems for global giants. He lived by one rule: <span className="text-blue-400 font-semibold">Technology must generate ROI, or it is useless.</span>
                                </p>
                                <p>
                                    But he didn't apply this to just any industry. He returned to his roots. Coming from a family of builders and real estate developers, he watched the chaotic reality of the industry—the pressure of launch days, the disconnect between sales and site, and the pain of adopting "generic" software.
                                </p>
                                <p>
                                    Nexby exists to bridge that gap. We apply the rigorous standards of Silicon Valley engineering to the messy, human reality of Sales, Recruitment, and Operations.
                                </p>
                                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-white mt-8">
                                    "We don't build software to make you a 'tech company.' We build it to make you a more profitable business."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section className="py-20 max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">A World Without Drudgery.</h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    We believe that humans were not born to copy-paste data from Excel to CRM.
                                </p>
                                <p>
                                    We envision a future where the "Mundane" is outsourced to silicon, leaving humans free to focus on the "Magnificent"—<span className="font-semibold text-gray-900">Strategy, Creativity, and Relationships.</span>
                                </p>
                                <p>
                                    We are entering the era of the <span className="font-semibold text-gray-900">Hybrid Workforce</span>. In this future, your headcount isn't limited by your payroll. You will hire digital teammates as easily as you subscribe to Netflix.
                                </p>
                            </div>
                        </div>
                        <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Vision of future workforce"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Values - The Nexby Standard */}
                <section className="bg-black text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values (The Nexby Standard)</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Glass-Box AI */}
                            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-all">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="text-blue-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">1. Glass-Box AI (Transparency)</h3>
                                <p className="text-gray-400 mb-4">
                                    We reject "Black Box" algorithms. You should know exactly why an agent qualified a lead or screened a candidate. Our systems are auditable, explainable, and designed for trust.
                                </p>
                                <p className="text-blue-400 italic font-medium">
                                    "We don't ask for blind trust. We give you the flashlight."
                                </p>
                            </div>

                            {/* Radical Efficiency */}
                            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-all">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-6">
                                    <Zap className="text-purple-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">2. Radical Efficiency</h3>
                                <p className="text-gray-400 mb-4">
                                    We measure success in minutes saved and revenue generated. If it doesn't move the needle on your P&L, we don't build it.
                                </p>
                                <p className="text-purple-400 italic font-medium">
                                    "We are allergic to latency."
                                </p>
                            </div>

                            {/* Service-as-a-Software */}
                            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-900 transition-all">
                                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-6">
                                    <Box className="text-green-500" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">3. Service-as-a-Software</h3>
                                <p className="text-gray-400 mb-4">
                                    We are not a vendor who hands you a login and disappears. We are an R&D partner. We deploy, we calibrate, and we obsess over your uptime.
                                </p>
                                <p className="text-green-400 italic font-medium">
                                    "We don't sell licenses. We sell outcomes."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership - The Trendsetters */}
                <section className="py-20 max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">The Trendsetters.</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Archit Jain */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="h-64 bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                    alt="Archit Jain"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-1">Archit Jain</h3>
                                <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
                                <p className="text-gray-600">
                                    The architect behind the vision. Archit leads with a <span className="font-semibold text-gray-900">"Builder First"</span> mentality, ensuring that every line of code serves a business purpose.
                                </p>
                            </div>
                        </div>

                        {/* Paritosh Chavan */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="h-64 bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                                    alt="Paritosh Chavan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-1">Paritosh Chavan</h3>
                                <p className="text-blue-600 font-medium mb-4">Product Manager</p>
                                <p className="text-gray-600">
                                    The guardian of the roadmap. Paritosh translates complex client pain points into elegant, scalable product features.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Are Different - The "Flex" */}
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">We Answer to You, Not to VCs.</h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                            Nexby is a proud, bootstrapped, and profitable engine of innovation.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">We don't have a 'Runway'</h3>
                                <p className="text-gray-600">
                                    We aren't going to disappear when the VC funding dries up. We are sustained by customer revenue, which means our only boss is you.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="text-purple-600" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">We don't do 'Science Experiments'</h3>
                                <p className="text-gray-600">
                                    We don't build cool tech looking for a problem. We find the bleeding neck, and we build the tourniquet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUsPage;
