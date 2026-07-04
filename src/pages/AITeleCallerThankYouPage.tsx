import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';


const AITeleCallerThankYouPage = () => {
    return (
        <>
            

            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="max-w-lg w-full text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <CheckCircle className="text-indigo-600" size={48} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Voice Demo Request Received!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 mb-8"
                    >
                        Thanks for your interest in AI TeleCaller. Our voice specialists will review your requirements and reach out within 24 hours to schedule your personalized demo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Homepage
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AITeleCallerThankYouPage;
