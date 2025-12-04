import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ExpoDemoForm from '../components/ExpoDemoForm';
import {
    Sparkles,
    Camera,
    Tag,
    Send,
    BarChart3,
    Smartphone,
    Monitor,
    Zap,
    WifiOff,
    Building2,
    Factory,
    Pill,
    CheckCircle,
    ArrowRight,
    Users,
    TrendingUp
} from 'lucide-react';

const ExpoInsightPage = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Expo Insight - Trade Show Lead Management | Nexby</title>
                <meta name="description" content="The Operating System for Trade Shows. Offline-first mobile app and powerful analytics dashboard. Stop collecting business cards; start collecting data." />
                <meta name="keywords" content="trade show app, expo management, lead capture, OCR business cards, offline mobile app, event analytics, exhibition software" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Expo Insight - Trade Show Lead Management | Nexby" />
                <meta property="og:description" content="The Operating System for Trade Shows. Offline-first mobile app and powerful analytics dashboard." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nexby.ai/products/expo-insight" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://nexby.ai/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Products",
                            "item": "https://nexby.ai/products"
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Expo Insight",
                            "item": "https://nexby.ai/products/expo-insight"
                        }]
                    })}
                </script>

                {/* Product Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Nexby Expo Insight",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "iOS 15.0+, Android 10.0+",
                        "description": "Dual-platform solution for trade show lead management with offline-first mobile app and web analytics dashboard",
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "price": "Contact for pricing",
                            "priceCurrency": "USD"
                        }
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-white pt-20">
                {/* Breadcrumb Navigation */}
                <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li>
                            <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
                        </li>
                        <li className="before:content-['/'] before:mx-2">Products</li>
                        <li className="before:content-['/'] before:mx-2 text-purple-600 font-medium">Expo Insight</li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-20 md:py-28">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-purple-300 rounded-full px-4 py-2 mb-6 shadow-lg">
                                <Sparkles className="text-purple-600" size={20} />
                                <span className="text-sm font-bold text-purple-900 uppercase tracking-wide">Product: Expo Insight</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                The Operating System for
                                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"> Trade Shows.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
                                An offline-first mobile app for the floor. A powerful analytics dashboard for the war room.
                            </p>

                            <p className="text-2xl md:text-3xl font-bold text-purple-700 mb-8">
                                Stop collecting business cards; start collecting data.
                            </p>

                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center gap-2 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full px-8 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                            >
                                Book a Product Demo
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Platform Overview Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Two Interfaces. One Mission.
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Expo Insight is a dual-platform solution designed for the specific chaotic reality of exhibition grounds.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            {/* Mobile App */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Smartphone className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Mobile App (iOS & Android)
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Built for the frontline. It works completely offline, ensuring your sales reps can scan, tag, and engage visitors even in dead zones.
                                </p>
                                <div className="flex items-center gap-2 text-purple-700 font-semibold">
                                    <WifiOff size={20} />
                                    <span>100% Offline Capable</span>
                                </div>
                            </div>

                            {/* Web Dashboard */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Monitor className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    The Web Dashboard
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Built for leadership. A centralized command center to monitor global event performance, manage team access, and export clean data to your CRM.
                                </p>
                                <div className="flex items-center gap-2 text-blue-700 font-semibold">
                                    <BarChart3 size={20} />
                                    <span>Real-Time Analytics</span>
                                </div>
                            </div>
                        </div>

                        {/* Platform Visual Placeholder */}
                        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-8 mb-4">
                                        <Smartphone className="text-purple-600" size={64} />
                                        <Monitor className="text-blue-600" size={80} />
                                    </div>
                                    <p className="text-gray-500 font-medium">Side-by-side mockup: iPhone + MacBook Dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features Section - Vertical Stacking Cards */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Core Features & Interface Tour
                            </h2>
                            <p className="text-xl text-gray-600">
                                Every feature engineered for speed and precision
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Feature 1: OCR & Offline Capture */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="sticky top-24 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-200 hover:shadow-purple-200/50 transition-shadow duration-300"
                            >
                                {/* Screenshot/Visual */}
                                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <Camera className="text-purple-600 mx-auto mb-3" size={64} />
                                        <p className="text-gray-600 font-medium">Mobile UI: Card Scanning Demo</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
                                        <Camera className="text-purple-600" size={20} />
                                        <span className="text-sm font-bold text-purple-900 uppercase">Feature 1</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Military-Grade OCR & Offline Capture
                                    </h3>
                                    <p className="text-xl font-bold text-purple-700 mb-6">
                                        Capture Speed: &lt; 3 Seconds.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Manual data entry is the enemy of ROI. Our proprietary OCR engine extracts name, designation, company, and contact details from business cards with 99% accuracy.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Zap className="text-purple-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Point & Shoot:</span>
                                                <span className="text-gray-700"> No shutter lag. No "hold steady" warnings. Just scan and move.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <WifiOff className="text-purple-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Offline Cache:</span>
                                                <span className="text-gray-700"> Data is stored locally on the device and auto-syncs the moment connectivity is restored.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Camera className="text-purple-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Photo Context:</span>
                                                <span className="text-gray-700"> Snap a picture of the visitor or their badge to aid visual memory during follow-ups.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Feature 2: Smart-Tag System */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="sticky top-28 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200 hover:shadow-blue-200/50 transition-shadow duration-300"
                            >
                                {/* Screenshot/Visual */}
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <Tag className="text-blue-600 mx-auto mb-3" size={64} />
                                        <p className="text-gray-600 font-medium">Tag Selection & Voice Notes UI</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                                        <Tag className="text-blue-600" size={20} />
                                        <span className="text-sm font-bold text-blue-900 uppercase">Feature 2</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        The "Smart-Tag" System
                                    </h3>
                                    <p className="text-xl font-bold text-blue-700 mb-6">
                                        Structure Unstructured Data.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A name without context is just a contact. A name with context is a lead.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">One-Tap Tagging:</span>
                                                <span className="text-gray-700"> Customize tags pre-event (e.g., "Interested in Enterprise", "Budget Approved", "Urgent"). Reps simply tap to categorize.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Sparkles className="text-blue-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Voice Notes:</span>
                                                <span className="text-gray-700"> Dictate a quick summary of the conversation immediately after the handshake. The AI transcribes and attaches it to the lead profile.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Feature 3: Instant Engagement Engine */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="sticky top-32 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-green-200 hover:shadow-green-200/50 transition-shadow duration-300"
                            >
                                {/* Screenshot/Visual */}
                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <Send className="text-green-600 mx-auto mb-3" size={64} />
                                        <p className="text-gray-600 font-medium">"Message Sent" Success Screen</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
                                        <Send className="text-green-600" size={20} />
                                        <span className="text-sm font-bold text-green-900 uppercase">Feature 3</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Instant Engagement Engine
                                    </h3>
                                    <p className="text-xl font-bold text-green-700 mb-6">
                                        Strike Before They Leave the Booth.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The "First Mover Advantage" is automated.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Send className="text-green-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">WhatsApp Integration:</span>
                                                <span className="text-gray-700"> Trigger a pre-templated, personalized WhatsApp greeting instantly upon scanning.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Zap className="text-green-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Smart Email Follow-up:</span>
                                                <span className="text-gray-700"> The app constructs a draft email based on the tags selected (e.g., attaching the "Enterprise Brochure" if the "Enterprise" tag was clicked).</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Face-to-Face Validation:</span>
                                                <span className="text-gray-700"> Show the visitor the message has been sent while you are still talking to them.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Feature 4: Ground Control Dashboard */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="sticky top-36 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200 hover:shadow-orange-200/50 transition-shadow duration-300"
                            >
                                {/* Screenshot/Visual */}
                                <div className="bg-gradient-to-br from-orange-100 to-red-100 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <BarChart3 className="text-orange-600 mx-auto mb-3" size={64} />
                                        <p className="text-gray-600 font-medium">Web Dashboard with Analytics</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
                                        <BarChart3 className="text-orange-600" size={20} />
                                        <span className="text-sm font-bold text-orange-900 uppercase">Feature 4</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Ground Control Dashboard
                                    </h3>
                                    <p className="text-xl font-bold text-orange-700 mb-6">
                                        Visibility Beyond the Booth.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        While your team scans, you strategize. The web dashboard gives you a live feed of floor activity.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Users className="text-orange-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Live Leaderboards:</span>
                                                <span className="text-gray-700"> Gamify the event. See which rep is scanning the most leads in real-time.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp className="text-orange-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Traffic Heatmaps:</span>
                                                <span className="text-gray-700"> Understand peak hours and visitor demographics.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <ArrowRight className="text-orange-600 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="font-bold text-gray-900">Data Export:</span>
                                                <span className="text-gray-700"> One-click CSV export or direct API push to Salesforce/HubSpot.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Technical Specifications Section */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Technical Specifications & Integrations
                            </h2>
                            <p className="text-xl text-purple-300">
                                Built for reliability and scalability
                            </p>
                        </div>

                        {/* Mobile Compatibility */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 text-center">Mobile Compatibility</h3>
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center">
                                    <Smartphone className="text-purple-400 mx-auto mb-4" size={40} />
                                    <h4 className="font-bold text-lg mb-2">iOS</h4>
                                    <p className="text-gray-300">v15.0 and above</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 text-center">
                                    <Smartphone className="text-blue-400 mx-auto mb-4" size={40} />
                                    <h4 className="font-bold text-lg mb-2">Android</h4>
                                    <p className="text-gray-300">v10.0 and above</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
                                    <WifiOff className="text-green-400 mx-auto mb-4" size={40} />
                                    <h4 className="font-bold text-lg mb-2">Offline Mode</h4>
                                    <p className="text-gray-300">Full read/write capability</p>
                                </div>
                            </div>
                        </div>

                        {/* Integration Ecosystem */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-center">The Integration Ecosystem</h3>
                            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                                We don't trap your data. We pipe it where it needs to go.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                                    <h4 className="font-bold text-xl mb-4 text-purple-300">Communication</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-purple-400" size={16} />
                                            <span>WhatsApp Business API</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-purple-400" size={16} />
                                            <span>Gmail</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-purple-400" size={16} />
                                            <span>Outlook</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-purple-400" size={16} />
                                            <span>Exchange</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
                                    <h4 className="font-bold text-xl mb-4 text-blue-300">CRM</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-400" size={16} />
                                            <span>Salesforce</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-400" size={16} />
                                            <span>HubSpot</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-400" size={16} />
                                            <span>Zoho CRM</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-400" size={16} />
                                            <span>Pipedrive</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-400" size={16} />
                                            <span>Microsoft Dynamics 365</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                                    <h4 className="font-bold text-xl mb-4 text-green-300">Marketing</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-green-400" size={16} />
                                            <span>Mailchimp</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-green-400" size={16} />
                                            <span>Marketo</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-green-400" size={16} />
                                            <span>ActiveCampaign</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Applicability Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Industry Applicability
                            </h2>
                            <p className="text-xl text-gray-600">
                                Tailored solutions for diverse sectors
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Real Estate & Luxury */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <Building2 className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Real Estate & Luxury
                                </h3>
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-purple-700 uppercase mb-1">Use Case</p>
                                    <p className="text-gray-700">Instant brochure delivery.</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-purple-700 uppercase mb-1">Benefit</p>
                                    <p className="text-gray-700">High-value clients receive floor plans immediately via WhatsApp.</p>
                                </div>
                            </div>

                            {/* Manufacturing & Engineering */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <Factory className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Manufacturing & Engineering
                                </h3>
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-blue-700 uppercase mb-1">Use Case</p>
                                    <p className="text-gray-700">Technical spec sharing.</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-blue-700 uppercase mb-1">Benefit</p>
                                    <p className="text-gray-700">Tag visitors by machine interest; auto-send specific technical datasheets.</p>
                                </div>
                            </div>

                            {/* Pharmaceuticals */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                                    <Pill className="text-white" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Pharmaceuticals
                                </h3>
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-green-700 uppercase mb-1">Use Case</p>
                                    <p className="text-gray-700">Compliance & Doctor Database.</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-green-700 uppercase mb-1">Benefit</p>
                                    <p className="text-gray-700">Secure, HIPAA-compliant capture of practitioner details during medical conferences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Success Stories Section */}
                <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Client Success Stories
                            </h2>
                            <p className="text-xl text-gray-600">
                                Trusted by industry leaders
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* PrismTech */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                            >
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <Sparkles className="text-purple-600" size={24} />
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed mb-6">
                                        "The AI Exhibitor app transformed the way we collect and manage leads. The CRM sync saved us hours of post-event cleanup."
                                    </p>
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-bold text-gray-900">Talent Acquisition Lead</p>
                                        <p className="text-purple-600 font-semibold">PrismTech Consulting</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Axis Realty */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                            >
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Building2 className="text-blue-600" size={24} />
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed mb-6">
                                        "We used to rely on handwritten notes. Now we track every visitor and follow up automatically. A game-changer for real estate expos."
                                    </p>
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-bold text-gray-900">Sales Director</p>
                                        <p className="text-blue-600 font-semibold">Axis Realty Group</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CredoBank */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                            >
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <CheckCircle className="text-green-600" size={24} />
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed mb-6">
                                        "Security was our top concern. Seamless lead capture with built-in compliance checks made us confident."
                                    </p>
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="font-bold text-gray-900">Compliance Head</p>
                                        <p className="text-green-600 font-semibold">CredoBank Corp</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA / Demo Form Section */}
                <div ref={formRef}>
                    <ExpoDemoForm />
                </div>
            </div>
        </>
    );
};

export default ExpoInsightPage;
