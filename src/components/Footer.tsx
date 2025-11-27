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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Column 1: Legal & Policies */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 text-left"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 text-left"
                                >
                                    Cookie & Tracking Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 text-left"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 text-left"
                                >
                                    Data Processing Addendum
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                        <div className="flex items-start gap-2 mb-4">
                            <div className="bg-indigo-600 text-white p-2 rounded-lg shrink-0">
                                <Target size={20} />
                            </div>
                            <div>
                                <p className="text-white font-semibold">Nexby AI Solutions</p>
                                <p className="text-gray-400 text-sm">Private Limited</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hello@nexby.ai"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail size={16} className="shrink-0" />
                                    hello@nexby.ai
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@nexby.ai"
                                    className="hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail size={16} className="shrink-0" />
                                    support@nexby.ai
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="shrink-0 mt-1 text-indigo-400" />
                                <div>
                                    <p className="text-gray-300">Office Address:</p>
                                    <p className="text-gray-400">
                                        15, Khatau Building<br />
                                        44 Bank Street<br />
                                        Mumbai - 400001<br />
                                        India
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="shrink-0 mt-1 text-indigo-400" />
                                <div>
                                    <p className="text-gray-300">Phone:</p>
                                    <a href="tel:+919892048816" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                        +91 98920 48816
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://linkedin.com/company/nexby-ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-indigo-600 text-white p-3 rounded-lg transition-all transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.youtube.com/@NexbyAISolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-red-600 text-white p-3 rounded-lg transition-all transform hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/nexby.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 hover:bg-pink-600 text-white p-3 rounded-lg transition-all transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Connect with us on social media for updates and insights.
                        </p>
                    </div>
                </div>

                {/* Company Description & Trust Badge */}
                <div className="pt-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                        {/* Company Description */}
                        <div className="text-gray-300 text-sm leading-relaxed">
                            <p>
                                <strong className="text-white">Nexby AI Solutions</strong> transforms business efficiency with cutting-edge AI Agents for recruitment, sales, and exhibition management. Our intelligent solutions—including Recruiter, Prospector, and Exhibitor Agents—automate hiring workflows, accelerate lead generation, and maximize trade show ROI. Experience 24/7 productivity and data-driven growth with Nexby's innovative enterprise automation platform.
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
                                        <p className="text-3xl font-bold">600+</p>
                                        <p className="text-sm font-medium">Trusted Clients</p>
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
