import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "../assets/name-logo.png";
import {
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Users,
  CheckCircle,
  Briefcase,
  BrainCircuit,
  Presentation,
  Phone,
  Building2,
  Factory,
  FlaskConical,
  Lightbulb,
  PhoneCall,
  FileSearch,
  Bot,
  TrendingUp,
  Headphones,
  GraduationCap,
} from "lucide-react";

// const SOLUTIONS = {
//   useCases: [
//     { name: "Sales", icon: BarChart3, path: "/solutions/sales" },
//     { name: "Recruitment", icon: Users, path: "/solutions/recruitment" },
//     { name: "Operations", icon: CheckCircle, path: "/solutions/operations" },
//     { name: "Exhibitors", icon: Briefcase, path: "/solutions/exhibitions" },
//   ],
// };

// const PRODUCTS = [
//   { name: "AI Recruiter", icon: BrainCircuit, path: "/products/ai-recruiter" },
//   { name: "Expo Insight", icon: Presentation, path: "/products/expo-insight" },
//   { name: "AI TeleCaller", icon: Phone, path: "/products/ai-telecaller" },
// ];
const SOLUTIONS = {
  useCases: [
    { name: "Sales", icon: BarChart3, path: "/solutions/sales" },
    { name: "Recruitment", icon: Users, path: "/solutions/recruitment" },
    { name: "Operations", icon: CheckCircle, path: "/solutions/operations" },
    { name: "Exhibitors", icon: Briefcase, path: "/solutions/exhibitions" },
    {
      name: "Examination",
      icon: GraduationCap,
      path: "/solutions/university-exam-portal",
    },
  ],
  industries: [
    {
      name: "Real Estate",
      icon: Building2,
      path: "/solutions/industry/real-estate",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      path: "/solutions/industry/manufacturing",
    },
    { name: "Pharma", icon: FlaskConical, path: "/solutions/industry/pharma" },
    // { name: "Tech & SaaS", icon: Lightbulb, path: "#" },
  ],
  government: [
    {
      name: "AI Call Assistant",
      icon: PhoneCall,
      path: "/solutions/government/ai-call-assistant",
    },
    // { name: "AI RFP Analyser", icon: FileSearch, path: "#" },
    {
      name: "Tender Query Automation",
      icon: FileSearch,
      path: "/solutions/government/tender-query-automation",
    },
    // { name: "AI Chatbots", icon: Bot, path: "#" },
    {
      name: "Citizen AI Interface",
      icon: Bot,
      path: "/solutions/government/citizen-ai-interface",
    },
  ],
};

const PRODUCTS = [
  { name: "AI Recruiter", icon: BrainCircuit, path: "/products/ai-recruiter" },
  { name: "SalesX", icon: TrendingUp, path: "/products/salesx" },
  { name: "Expo Insight", icon: Presentation, path: "/products/expo-insight" },
  { name: "Call Analyser", icon: BarChart3, path: "/products/call-analyser" },
  { name: "AI TeleCaller", icon: Phone, path: "/products/ai-telecaller" },
  { name: "SupportAssist", icon: Headphones, path: "/products/support-assist" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSolutions, setOpenMobileSolutions] = useState(false);
  const [openMobileProducts, setOpenMobileProducts] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔒 LOCK BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <img src={HeaderLogo} alt="Nexby" className="h-9" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link hover:text-blue-600">
              Home
            </Link>

            {/* SOLUTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1 hover:text-blue-600">
                Solutions <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[500px]"
                  >
                    {/* <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4">
                      {SOLUTIONS.useCases.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg"
                        >
                          <item.icon size={16} /> {item.name}
                        </Link>
                      ))}
                    </div> */}
                    <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-8">
                      {/* USE CASES */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">
                          By Use Case
                        </h4>
                        <div className="space-y-1">
                          {SOLUTIONS.useCases.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition"
                            >
                              <item.icon size={16} />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* INDUSTRIES */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">
                          By Industry
                        </h4>
                        <div className="space-y-1">
                          {SOLUTIONS.industries.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition"
                            >
                              <item.icon size={16} />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* GOVERNMENT */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 tracking-wider">
                          Government
                        </h4>
                        <div className="space-y-1">
                          {SOLUTIONS.government.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition"
                            >
                              <item.icon size={16} />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center gap-1 hover:text-blue-600">
                Products <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px]"
                  >
                    <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4">
                      {PRODUCTS.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg"
                        >
                          <item.icon size={16} /> {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about-us" className="nav-link hover:text-blue-600">
              About Us
            </Link>
            <Link to="/contact-us" className="nav-link hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
            >
              Get Started
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <img src={HeaderLogo} alt="logo" className="h-8" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-base">
              {/* HOME */}
              <Link
                to="/"
                className="block font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* SOLUTIONS */}
              <div>
                <button
                  onClick={() => setOpenMobileSolutions((p) => !p)}
                  className="w-full flex items-center justify-between font-medium"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openMobileSolutions ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMobileSolutions && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="mt-4 rounded-xl bg-gray-50 p-4 space-y-4"
                    >
                      {/* USE CASES */}
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                          Use Cases
                        </p>
                        {SOLUTIONS.useCases.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-1 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* INDUSTRIES */}
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                          Industries
                        </p>
                        {SOLUTIONS.industries.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-1 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* GOVERNMENT */}
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">
                          Government
                        </p>
                        {SOLUTIONS.government.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block py-1 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PRODUCTS */}
              <div>
                <button
                  onClick={() => setOpenMobileProducts((p) => !p)}
                  className="w-full flex items-center justify-between font-medium"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openMobileProducts ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMobileProducts && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="mt-4 rounded-xl bg-gray-50 p-4 space-y-2"
                    >
                      {PRODUCTS.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-1 text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* STATIC LINKS */}
              <Link
                to="/about-us"
                className="block font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              {/* <Link
                to="/careers"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/partnerships"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Partnerships
              </Link> */}

              <Link
                to="/contact-us"
                className="block font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* STICKY CTA */}
            <div className="px-6 py-4 border-t">
              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-4 rounded-xl
            bg-black text-white font-semibold
            shadow-lg shadow-blue-600/30
            active:scale-[0.98] transition hover:bg-gray-800"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
