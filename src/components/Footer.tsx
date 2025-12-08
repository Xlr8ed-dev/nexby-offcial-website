import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    Mail,
    MapPin,
    Phone,
    Linkedin,
    Youtube,
    Instagram,
    Target,
    CheckCircle,
    Building2,
    Factory,
    Stethoscope,
    Code2,
    Landmark
} from 'lucide-react';

const Footer = () => {
    // Structured data for organization (SEO)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nexby AI Solutions Private Limited",
        "alternateName": "Nexby AI",
        "url": "https://nexby.ai",
        "logo": "https://nexby.ai/logo.png",
        "description": "Enterprise AI automation company specializing in autonomous AI agents for sales, recruitment, exhibitions, and operations. Trusted by 300+ businesses across Real Estate, Manufacturing, Pharmaceuticals, Technology, and Government sectors.",
        "foundingDate": "2023",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "15, Khatau Building, 44 Bank Street",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+91-98920-48816",
                "contactType": "sales",
                "email": "hello@nexby.ai",
                "availableLanguage": ["English", "Hindi"]
            },
            {
                "@type": "ContactPoint",
                "telephone": "+91-98920-48816",
                "contactType": "customer support",
                "email": "support@nexby.ai"
            }
        ],
        "sameAs": [
            "https://linkedin.com/company/nexby-ai/",
            "https://www.youtube.com/@NexbyAISolutions",
            "https://www.instagram.com/nexby.ai/"
        ],
        "areaServed": ["India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
        "knowsAbout": [
            "AI Recruiting Software",
            "AI Sales Automation",
            "Trade Show Lead Capture",
            "Voice AI Agents",
            "Enterprise AI Solutions",
            "HR Tech",
            "SalesTech"
        ]
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12 mt-0" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Main Navigation Grid */}
                <nav aria-label="Footer Navigation" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

                    {/* Column 1: Solutions */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">AI Solutions</h4>
                        <ul className="space-y-2.5" role="list">
                            <li>
                                <Link to="/solutions/sales" className="hover:text-indigo-400 transition-colors text-sm" title="AI Sales Automation Solutions">
                                    AI for Sales
                                </Link>
                            </li>
                            <li>
                                <Link to="/solutions/recruitment" className="hover:text-indigo-400 transition-colors text-sm" title="AI Recruitment & HR Automation">
                                    AI for Recruitment
                                </Link>
                            </li>
                            <li>
                                <Link to="/solutions/exhibitions" className="hover:text-indigo-400 transition-colors text-sm" title="AI for Trade Shows & Exhibitions">
                                    AI for Exhibitions
                                </Link>
                            </li>
                            <li>
                                <Link to="/solutions/operations" className="hover:text-indigo-400 transition-colors text-sm" title="AI Operations & Support Automation">
                                    AI for Operations
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Products</h4>
                        <ul className="space-y-2.5" role="list">
                            <li>
                                <Link to="/products/ai-recruiter" className="hover:text-indigo-400 transition-colors text-sm" title="AI Recruiter - Autonomous Hiring Platform">
                                    AI Recruiter
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/ai-telecaller" className="hover:text-indigo-400 transition-colors text-sm" title="AI TeleCaller - Voice AI Sales Agent">
                                    AI TeleCaller
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/salesx" className="hover:text-indigo-400 transition-colors text-sm" title="SalesX - AI-Powered Sales Platform">
                                    SalesX
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/expo-insight" className="hover:text-indigo-400 transition-colors text-sm" title="Expo Insight - Trade Show Lead Management">
                                    Expo Insight
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/call-analyser" className="hover:text-indigo-400 transition-colors text-sm" title="Call Analyser - AI Call Analytics">
                                    Call Analyser
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/support-assist" className="hover:text-indigo-400 transition-colors text-sm" title="Support Assist - AI Customer Support">
                                    Support Assist
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Industries */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Industries</h4>
                        <ul className="space-y-2.5" role="list">
                            <li>
                                <Link to="/industries/real-estate" className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1.5" title="AI Solutions for Real Estate">
                                    <Building2 size={12} className="text-indigo-400" />
                                    Real Estate
                                </Link>
                            </li>
                            <li>
                                <Link to="/industries/manufacturing" className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1.5" title="AI Solutions for Manufacturing">
                                    <Factory size={12} className="text-indigo-400" />
                                    Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link to="/industries/pharma" className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1.5" title="AI Solutions for Pharmaceuticals">
                                    <Stethoscope size={12} className="text-indigo-400" />
                                    Pharmaceuticals
                                </Link>
                            </li>
                            <li>
                                <Link to="/industries/tech-saas" className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1.5" title="AI Solutions for Tech & SaaS">
                                    <Code2 size={12} className="text-indigo-400" />
                                    Tech & SaaS
                                </Link>
                            </li>
                            <li>
                                <Link to="/government/ai-call-assistant" className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1.5" title="AI Solutions for Government">
                                    <Landmark size={12} className="text-indigo-400" />
                                    Government
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Government Solutions */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Government AI</h4>
                        <ul className="space-y-2.5" role="list">
                            <li>
                                <Link to="/government/ai-call-assistant" className="hover:text-indigo-400 transition-colors text-sm" title="AI Call Assistant for Government">
                                    AI Call Assistant
                                </Link>
                            </li>
                            <li>
                                <Link to="/government/tender-query" className="hover:text-indigo-400 transition-colors text-sm" title="AI RFP & Tender Query Automation">
                                    AI RFP Analyser
                                </Link>
                            </li>
                            <li>
                                <Link to="/government/citizen-interface" className="hover:text-indigo-400 transition-colors text-sm" title="AI Citizen Interface Chatbots">
                                    AI Chatbots
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/exam-pilot" className="hover:text-indigo-400 transition-colors text-sm" title="ExamPilot - University Exam AI">
                                    ExamPilot
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Company</h4>
                        <ul className="space-y-2.5" role="list">
                            <li>
                                <Link to="/about" className="hover:text-indigo-400 transition-colors text-sm" title="About Nexby AI Solutions">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-indigo-400 transition-colors text-sm" title="Careers at Nexby AI">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/partnerships" className="hover:text-indigo-400 transition-colors text-sm" title="Partner with Nexby AI">
                                    Partnerships
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-indigo-400 transition-colors text-sm" title="Contact Nexby AI">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-5">
                            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                                <Target size={14} />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-xs">Nexby AI Solutions</p>
                                <p className="text-gray-500 text-[10px]">Private Limited</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 6: Contact & Social */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-4">Connect</h4>
                        <address className="not-italic space-y-2.5 text-sm" itemScope itemType="https://schema.org/LocalBusiness">
                            <p>
                                <a href="mailto:hello@nexby.ai" className="hover:text-indigo-400 transition-colors flex items-center gap-2" itemProp="email">
                                    <Mail size={13} className="shrink-0 text-indigo-400" />
                                    hello@nexby.ai
                                </a>
                            </p>
                            <p>
                                <a href="tel:+919892048816" className="hover:text-indigo-400 transition-colors flex items-center gap-2" itemProp="telephone">
                                    <Phone size={13} className="shrink-0 text-indigo-400" />
                                    +91 98920 48816
                                </a>
                            </p>
                            <p className="flex items-start gap-2 text-xs text-gray-400" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <MapPin size={13} className="shrink-0 mt-0.5 text-indigo-400" />
                                <span>
                                    <span itemProp="streetAddress">15, Khatau Building, 44 Bank Street</span><br />
                                    <span itemProp="addressLocality">Mumbai</span> - <span itemProp="postalCode">400001</span>, <span itemProp="addressCountry">India</span>
                                </span>
                            </p>
                        </address>

                        {/* Social Links */}
                        <div className="flex gap-2.5 mt-4" aria-label="Social Media Links">
                            <a
                                href="https://linkedin.com/company/nexby-ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-indigo-600 text-white p-2 rounded-lg transition-all transform hover:scale-110"
                                aria-label="Follow Nexby AI on LinkedIn"
                                title="Nexby AI LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="https://www.youtube.com/@NexbyAISolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-red-600 text-white p-2 rounded-lg transition-all transform hover:scale-110"
                                aria-label="Subscribe to Nexby AI on YouTube"
                                title="Nexby AI YouTube"
                            >
                                <Youtube size={16} />
                            </a>
                            <a
                                href="https://www.instagram.com/nexby.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-pink-600 text-white p-2 rounded-lg transition-all transform hover:scale-110"
                                aria-label="Follow Nexby AI on Instagram"
                                title="Nexby AI Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Company Description & Trust Badge */}
                <div className="pt-8 mt-4 border-t border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Company Description - SEO Rich Content */}
                        <div className="lg:col-span-2 text-gray-300 text-sm leading-relaxed">
                            <h3 className="text-white font-bold text-lg mb-3">About Nexby AI Solutions</h3>
                            <p className="mb-3">
                                <strong className="text-white">Nexby AI Solutions</strong> is India's leading <strong className="text-indigo-400">enterprise AI automation company</strong> specializing in <strong className="text-indigo-400">autonomous AI agents</strong> for sales, recruitment, exhibitions, and customer support. Our production-grade AI systems deliver measurable ROI across <strong className="text-indigo-400">Real Estate, Manufacturing, Pharmaceuticals, Technology, Banking, Government, and BPO sectors</strong>.
                            </p>
                            <p className="mb-3">
                                Our flagship products—<strong className="text-indigo-400">AI Recruiter</strong> for autonomous hiring, <strong className="text-indigo-400">AI TeleCaller</strong> for voice-based sales automation, <strong className="text-indigo-400">SalesX</strong> for omnichannel sales intelligence, <strong className="text-indigo-400">Expo Insight</strong> for trade show lead capture, and <strong className="text-indigo-400">Call Analyser</strong> for conversation intelligence—transform business operations with <strong className="text-indigo-400">90% time reduction</strong> and <strong className="text-indigo-400">40% conversion improvement</strong>.
                            </p>
                            <p className="text-gray-400 text-xs">
                                Trusted by <strong>300+ enterprises</strong> across India, GCC (UAE, Saudi Arabia, Qatar, Kuwait), and global markets for <strong>AI-powered sales automation</strong>, <strong>intelligent recruitment</strong>, and <strong>customer experience transformation</strong>.
                            </p>
                        </div>

                        {/* Trust Badge */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 rounded-full p-2.5">
                                        <CheckCircle className="text-white" size={28} />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-2xl font-bold">300+</p>
                                        <p className="text-xs font-medium">Enterprises Trust Nexby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Legal Links */}
                <div className="pt-6 mt-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2025 Nexby AI Solutions Private Limited. All rights reserved. CIN: U72900MH2023PTC123456</p>
                        <div className="flex items-center gap-4">
                            <span>Made with ❤️ in Mumbai, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
