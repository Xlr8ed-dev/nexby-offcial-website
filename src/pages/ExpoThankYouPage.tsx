import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpoThankYouPage = () => {
    return (
        <>
            <Helmet>
                <title>Thank You | Nexby Expo Insight</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="max-w-2xl w-full text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600"
                    >
                        <CheckCircle size={48} strokeWidth={2.5} />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Demo Request Received!
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 mb-12 leading-relaxed"
                    >
                        Thank you for your interest in <strong>Expo Insight</strong>. Our team has received your details and will reach out shortly to schedule your personalized walkthrough.
                        <br /><br />
                        Please check your email for a confirmation.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold transition-colors"
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

export default ExpoThankYouPage;
