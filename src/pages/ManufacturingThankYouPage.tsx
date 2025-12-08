import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Factory } from 'lucide-react';

const ManufacturingThankYouPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Thank You - Nexby Manufacturing Solutions</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-6 py-20 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
                        <CheckCircle className="text-green-600" size={40} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Application Received
                    </h1>

                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-10">
                        <div className="flex justify-center mb-4">
                            <Factory className="text-blue-500" size={32} />
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            "Archit's office will assess your form and will get back to you before scheduling a meeting. If you are a right fit, his team will schedule a call."
                        </p>
                        <p className="text-slate-500 text-sm">
                            Please check your email for a confirmation of your submission.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
                        >
                            Return Home
                        </Link>
                        <Link
                            to="/solutions/industry/manufacturing"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-slate-300 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
                        >
                            Back to Manufacturing Page <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManufacturingThankYouPage;
