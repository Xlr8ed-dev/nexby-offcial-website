// import { Helmet } from 'react-helmet-async';
// import { motion } from 'framer-motion';
// import { Briefcase, MapPin, Clock } from 'lucide-react';

// const CareersPage = () => {
//     const jobs = [
//         {
//             title: "Senior AI Engineer",
//             department: "Engineering",
//             location: "Mumbai / Remote",
//             type: "Full-time",
//             description: "We are looking for an experienced AI Engineer to lead our core product development."
//         },
//         {
//             title: "Frontend Developer",
//             department: "Engineering",
//             location: "Mumbai",
//             type: "Full-time",
//             description: "Join our team to build beautiful and responsive user interfaces using React and Tailwind CSS."
//         },
//         {
//             title: "Sales Development Rep",
//             department: "Sales",
//             location: "Remote",
//             type: "Full-time",
//             description: "Help us reach more customers and grow our business globally."
//         }
//     ];

//     return (
//         <>
//             <Helmet>
//                 <title>Careers | Nexby AI</title>
//                 <meta name="description" content="Join the Nexby AI team and help shape the future of business automation." />
//             </Helmet>

//             <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                             Join the Revolution
//                         </h1>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             We are building the future of work with autonomous AI agents. Come build with us.
//                         </p>
//                     </div>

//                     <div className="grid gap-6 max-w-4xl mx-auto">
//                         {jobs.map((job, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
//                             >
//                                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                                     <div>
//                                         <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
//                                         <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
//                                             <span className="flex items-center gap-1">
//                                                 <Briefcase size={16} /> {job.department}
//                                             </span>
//                                             <span className="flex items-center gap-1">
//                                                 <MapPin size={16} /> {job.location}
//                                             </span>
//                                             <span className="flex items-center gap-1">
//                                                 <Clock size={16} /> {job.type}
//                                             </span>
//                                         </div>
//                                         <p className="text-gray-600">{job.description}</p>
//                                     </div>
//                                     <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
//                                         Apply Now
//                                     </button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CareersPage;

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, Users, Rocket } from "lucide-react";
import JobCard from "../components/careers/JobCard";
import CultureGallery from "../components/careers/CultureGallery";

// Mock API function to simulate fetching jobs
const fetchJobs = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
    {
      id: "1",
      title: "Senior AI Engineer (LLM Specialist)",
      department: "R&D",
      location: "Mumbai (Hybrid)",
      type: "Full-time",
      description:
        "Lead the development of our core autonomous agent technology. Experience with LLMs and Python required.",
      vibeCheck: "You dream in Python and count sheep in tokens.",
      applyUrl: "#", // Replace with ATS link
    },
    {
      id: "2",
      title: "Frontend Wizard (React/TS)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build beautiful, responsive interfaces for our next-gen AI platforms using React and Tailwind.",
      vibeCheck: "Pixel perfectionist who hates latency.",
      applyUrl: "#",
    },
    {
      id: "3",
      title: "Enterprise Sales Director",
      department: "Sales",
      location: "Mumbai / Delhi",
      type: "Full-time",
      description:
        "Drive enterprise adoption of Nexby's AI solutions across key sectors. 5+ years of SaaS sales experience.",
      vibeCheck: "Hunter mentality. You don't take 'No' for an answer.",
      applyUrl: "#",
    },
    {
      id: "4",
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description:
        "Shape the user experience of our AI tools. Strong portfolio in B2B SaaS required.",
      applyUrl: "#",
    },
  ];
};

const CareersPage = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers at Nexby | Build the Future of AI</title>
        <meta
          name="description"
          content="Join Nexby and help us build the next generation of autonomous AI agents. We're looking for passionate problem solvers."
        />
      </Helmet>

      <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
        {/* Hero Section */}
        <div className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-600 mb-6">
                We are hiring! 🚀
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
                Don't Just Write Code.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Engineer Intelligence.
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                We are building the autonomous enterprise. If you want to build
                the engine rather than just turn the crank, you belong here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#openings"
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all"
                >
                  View Open Roles
                </a>
                <button className="px-8 py-3 border-2 border-gray-200 rounded-full font-medium hover:border-gray-400 transition-all">
                  Watch Our Culture Video
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Culture Section - The "Un-Corporate" Culture */}
        <div className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              We Hate Red Tape. We Love Red Bull.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Builders Only.",
                  desc: "No 'Strategy Consultants' making slides. Everyone here builds, ships, or sells. If you can't show your work, you can't work here.",
                },
                {
                  icon: Users,
                  title: "Arguments Welcome.",
                  desc: "Rank doesn't matter. The best logic wins. We fight for the best idea, not the biggest title.",
                },
                {
                  icon: Rocket,
                  title: "Speed is a Feature.",
                  desc: "We deploy on Fridays. We fix on Saturdays. We don't wait for 'Committee Approval.'",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Life at Nexby (Events) Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Hard Work. Hard Play.
                </h2>
                <p className="text-gray-600 max-w-xl">
                  When we aren't training models, we're crushing code reviews or
                  crushing it at Counter-Strike.
                </p>
              </div>
              <div className="hidden md:block">
                <Rocket className="text-gray-300 w-16 h-16" />
              </div>
            </div>

            <CultureGallery />
          </div>
        </div>

        {/* Benefits Section - "Why You Stay" */}
        <div className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Why You Stay
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: "💻",
                  title: "The Gear",
                  desc: "We don't code on potatoes. You get the latest M3 Macbook Pro.",
                },
                {
                  emoji: "📚",
                  title: "The Learning",
                  desc: "Unlimited budget for Udemy, Coursera, or Books. If you learn, we pay.",
                },
                {
                  emoji: "🏠",
                  title: "The Freedom",
                  desc: "Remote-friendly hybrid culture. We care about 'Done', not 'Desk Time'.",
                },
                {
                  emoji: "💰",
                  title: "The Equity",
                  desc: "Ownership isn't a buzzword. Every early engineer gets ESOPs.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div
          className="py-20 bg-black text-white relative overflow-hidden"
          id="openings"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join the Squad.
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Ready to make an impact? Find your next role below.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            )}

            <div className="mt-16 text-center">
              <p className="text-gray-400">
                Don't see what you're looking for?{" "}
                <a
                  href="mailto:careers@nexby.ai"
                  className="text-white underline hover:text-blue-400"
                >
                  Email us
                </a>{" "}
                your resume.
              </p>
            </div>
          </div>
        </div>

        {/* Cool Footer Section */}
        <div className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Still scrolling? You're detail-oriented. We like that.
              </p>
              <a
                href="mailto:careers@nexby.ai"
                className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all"
              >
                Send us a 'Hello'
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
