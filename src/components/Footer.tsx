import { Link } from 'react-router-dom';
import {
    Mail,
    MapPin,
    Phone,
    Linkedin,
    Youtube,
    Instagram,
    Target,
    CheckCircle
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12 mt-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

                    {/* Column 1: Solutions */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/solutions/sales"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI for Sales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/solutions/recruitment"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI for Recruitment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/solutions/exhibitions"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI for Exhibitions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/solutions/operations"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI for Operations
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Products</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/products/ai-recruiter"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI Recruiter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/ai-telecaller"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    AI TeleCaller
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/expo-insight"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    Expo Insight
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-1 text-left"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-start gap-2 mt-6">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg shrink-0">
                                <Target size={16} />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Nexby AI Solutions</p>
                                <p className="text-gray-400 text-xs">Private Limited</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact Details */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:hello@nexby.ai"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail size={14} className="shrink-0" />
                                    hello@nexby.ai
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@nexby.ai"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail size={14} className="shrink-0" />
                                    support@nexby.ai
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone size={14} className="shrink-0 mt-0.5 text-indigo-400" />
                                <a href="tel:+919892048816" className="text-gray-300 hover:text-indigo-400 transition-colors">
                                    +91 98920 48816
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="shrink-0 mt-0.5 text-indigo-400" />
                                <div>
                                    <p className="text-gray-300 text-xs leading-relaxed">
                                        15, Khatau Building<br />
                                        44 Bank Street<br />
                                        Mumbai - 400001, India
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Follow Us */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-3 mb-4">
                            <a
                                href="https://linkedin.com/company/nexby-ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-indigo-600 text-white p-2.5 rounded-lg transition-all transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.youtube.com/@NexbyAISolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-red-600 text-white p-2.5 rounded-lg transition-all transform hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/nexby.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-pink-600 text-white p-2.5 rounded-lg transition-all transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Connect with us on social media for the latest updates on AI automation and enterprise solutions.
                        </p>
                    </div>
                </div>

                {/* Company Description & Trust Badge */}
                <div className="pt-8 mt-8 border-t border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Company Description */}
                        <div className="text-gray-300 text-sm leading-relaxed">
                            <h3 className="text-white font-bold text-lg mb-3">About Nexby AI Solutions</h3>
                            <p className="mb-4">
                                <strong className="text-white">Nexby AI Solutions</strong> is a leading enterprise AI automation company specializing in <strong className="text-indigo-400">autonomous AI agents</strong> for sales, recruitment, and operations. We deploy production-grade AI systems that deliver measurable ROI across <strong className="text-indigo-400">Real Estate, Manufacturing, Government, Technology, Banking, Pharmaceuticals, and BPO sectors</strong>.
                            </p>
                            <p className="mb-4">
                                Our flagship products—<strong className="text-indigo-400">AI Recruiter</strong>, <strong className="text-indigo-400">AI TeleCaller</strong>, and <strong className="text-indigo-400">Expo Insight</strong>—automate complex workflows with human-level nuance and machine-level speed. From screening thousands of candidates with military-grade proctoring to qualifying leads across voice and text channels, Nexby AI transforms business operations with <strong className="text-indigo-400">90% time reduction</strong> and <strong className="text-indigo-400">40% conversion improvement</strong>.
                            </p>
                            <p className="text-gray-400 text-xs">
                                Trusted by 300+ businesses across India, GCC, and global markets. Average payback period: &lt; 6 months.
                            </p>
                        </div>

                        {/* Trust Badge */}
                        <div className="flex justify-center md:justify-end">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 rounded-full p-3">
                                        <CheckCircle className="text-white" size={32} />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-3xl font-bold">300+</p>
                                        <p className="text-sm font-medium">Businesses Onboarded</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>© 2025 Nexby AI Solutions Private Limited. All rights reserved.</p>
                        <p className="text-xs">Made with ❤️ in India</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
