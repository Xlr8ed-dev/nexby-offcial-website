import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    BarChart3,
    Users,
    CheckCircle,
    Briefcase,
    Factory,
    Lightbulb,
    Building2,
    FlaskConical,
    PhoneCall,
    FileSearch,
    Bot,
    BrainCircuit,
    TrendingUp,
    Presentation,
    Phone,
    Headphones,
} from 'lucide-react';

const SOLUTIONS = {
    useCases: [
        { name: 'Sales', icon: BarChart3, path: '/solutions/sales' },
        { name: 'Recruitment', icon: Users, path: '/solutions/recruitment' },
        { name: 'Operations', icon: CheckCircle, path: '/solutions/operations' },
        { name: 'Exhibitors', icon: Briefcase, path: '/solutions/exhibitions' },
    ],
    industries: [
        { name: 'Real Estate', icon: Building2, path: '/solutions/industry/real-estate' },
        { name: 'Manufacturing', icon: Factory, path: '#' },
        { name: 'Pharma', icon: FlaskConical, path: '#' },
        { name: 'Tech & SaaS', icon: Lightbulb, path: '#' },
    ],
    government: [
        { name: 'AI Call Assistant', icon: PhoneCall, path: '#' },
        { name: 'AI RFP Analyser', icon: FileSearch, path: '#' },
        { name: 'AI Chatbots', icon: Bot, path: '#' },
    ],
};

const PRODUCTS = [
    { name: 'AI Recruiter', icon: BrainCircuit, path: '/products/ai-recruiter' },
    { name: 'SalesX', icon: TrendingUp, path: '#' },
    { name: 'Expo Insight', icon: Presentation, path: '/products/expo-insight' },
    { name: 'Call Analyser', icon: BarChart3, path: '#' },
    { name: 'AI TeleCaller', icon: Phone, path: '/products/ai-telecaller' },
    { name: 'SupportAssist', icon: Headphones, path: '#' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16 bg-white/95 backdrop-blur-md shadow-sm' : 'h-24 bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
                    <span>NE</span>
                    <span className="text-black text-3xl relative top-[1px]">X</span>
                    <span>BY</span>
                </Link>

                {/* Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>

                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setActiveDropdown('solutions')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
                            Solutions <ChevronDown size={14} />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                            {activeDropdown === 'solutions' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] pt-2"
                                >
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-6 grid grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">By Use Case</h4>
                                            <ul className="space-y-2">
                                                {SOLUTIONS.useCases.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.path}
                                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <item.icon size={16} /> {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">By Industry</h4>
                                            <ul className="space-y-2">
                                                {SOLUTIONS.industries.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.path}
                                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <item.icon size={16} /> {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">Government</h4>
                                            <ul className="space-y-2">
                                                {SOLUTIONS.government.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.path}
                                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <item.icon size={16} /> {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setActiveDropdown('products')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
                            Products <ChevronDown size={14} />
                        </button>

                        <AnimatePresence>
                            {activeDropdown === 'products' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2"
                                >
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-6">
                                        <ul className="grid grid-cols-2 gap-4">
                                            {PRODUCTS.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        <item.icon size={16} /> {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/about-us" className="text-sm font-medium hover:text-blue-600 transition-colors">About Us</Link>
                    <Link to="/careers" className="text-sm font-medium hover:text-blue-600 transition-colors">Careers</Link>
                    <Link to="/contact-us" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
                </div>

                <Link
                    to="/contact-us"
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${isScrolled
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    Get Started
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
