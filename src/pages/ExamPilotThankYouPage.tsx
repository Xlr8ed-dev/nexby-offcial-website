import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ExamPilotThankYouPage = () => {
    return (
        <>
            <Helmet>
                <title>Request Received - University Exam Portal | Nexby AI</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
                <div className="max-w-lg w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="text-green-600" size={40} />
                    </motion.div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Pilot Request Received
                    </h1>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Thank you for your interest in the <span className="font-semibold text-purple-700">Nexby Digital Examination Center</span>. Our academic solutions team will review your institution's profile and contact the Registrar's office within 24 hours to discuss the pilot parameters.
                    </p>

                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="block w-full py-3 px-6 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all flex items-center justify-center gap-2"
                        >
                            <Home size={18} />
                            Return Home
                        </Link>

                        <Link
                            to="/solutions/university-exam-portal"
                            className="block w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
                        >
                            Back to Exam Portal
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamPilotThankYouPage;
