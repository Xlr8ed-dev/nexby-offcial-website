import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipThankYouPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Thank You - Partnership Application | Nexby AI</title>
                <meta name="description" content="Thank you for your partnership application. Our team will review your proposal and get back to you within 24-48 hours." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl w-full"
                >
                    <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle className="text-green-600" size={48} />
                        </motion.div>

                        <h1 className="text-4xl font-bold text-slate-900 mb-4">
                            Application Received!
                        </h1>

                        <p className="text-xl text-slate-600 mb-8">
                            Thank you for your interest in partnering with Nexby.
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left">
                            <div className="flex items-start gap-3 mb-4">
                                <Handshake className="text-cyan-600 shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">What Happens Next?</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-600 font-bold">1.</span>
                                            <span>Our partnerships team will review your application within <strong>24-48 hours</strong>.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-600 font-bold">2.</span>
                                            <span>We'll reach out to schedule an exploratory call to discuss synergies.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-cyan-600 font-bold">3.</span>
                                            <span>Together, we'll design a partnership model that creates mutual value.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 mb-8">
                            <p className="text-sm text-cyan-900">
                                <strong>Note:</strong> If you have any urgent questions, feel free to reach out to us at{' '}
                                <a href="mailto:partnerships@nexby.ai" className="text-cyan-600 hover:underline font-bold">
                                    partnerships@nexby.ai
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                            >
                                Back to Partnerships
                            </Link>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-700 transition-colors"
                            >
                                Return to Home <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default PartnershipThankYouPage;
