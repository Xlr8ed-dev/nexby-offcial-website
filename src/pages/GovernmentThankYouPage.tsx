import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, ArrowRight, FileCheck } from 'lucide-react';

const GovernmentThankYouPage = () => {
    return (
        <div className="font-sans text-slate-900 bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <ShieldCheck className="text-green-600" size={48} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Inquiry Received.
                    </h1>

                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We have received your request for the <strong>Sovereign AI Call Assistant</strong> documentation.
                        Our Government Relations team is currently verifying your credentials.
                    </p>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-xl mx-auto text-left mb-12">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FileCheck className="text-slate-500" /> Next Steps
                        </h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-600">
                            <li><strong>Credential Verification:</strong> 24-48 Hours.</li>
                            <li><strong>Secure Link:</strong> You will receive a one-time secure link to the technical whitepaper on your official email.</li>
                            <li><strong>Pilot Discussion:</strong> A senior solutions architect will reach out to schedule a preliminary briefing.</li>
                        </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            Return to Homepage
                        </Link>
                        <Link
                            to="/solutions/government/ai-call-assistant"
                            className="px-8 py-3 border border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-white hover:border-slate-400 transition-colors flex items-center gap-2"
                        >
                            Back to Solutions <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GovernmentThankYouPage;
