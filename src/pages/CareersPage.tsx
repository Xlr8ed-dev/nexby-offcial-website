import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const CareersPage = () => {
    const jobs = [
        {
            title: "Senior AI Engineer",
            department: "Engineering",
            location: "Mumbai / Remote",
            type: "Full-time",
            description: "We are looking for an experienced AI Engineer to lead our core product development."
        },
        {
            title: "Frontend Developer",
            department: "Engineering",
            location: "Mumbai",
            type: "Full-time",
            description: "Join our team to build beautiful and responsive user interfaces using React and Tailwind CSS."
        },
        {
            title: "Sales Development Rep",
            department: "Sales",
            location: "Remote",
            type: "Full-time",
            description: "Help us reach more customers and grow our business globally."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Careers | Nexby AI</title>
                <meta name="description" content="Join the Nexby AI team and help shape the future of business automation." />
            </Helmet>

            <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Join the Revolution
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We are building the future of work with autonomous AI agents. Come build with us.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={16} /> {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={16} /> {job.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">{job.description}</p>
                                    </div>
                                    <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersPage;
