import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    FlaskConical,
    FileText,
    User,
    CheckCircle,
    ArrowRight,
    Loader2,
    Briefcase,
    Phone,
    Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PharmaAuditForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [formData, setFormData] = useState({
        website: '',
        sector: '',
        exportMarkets: '',
        tenderVolume: '',
        stockistCount: '',
        leadVolume: '',
        name: '',
        companyName: '',
        designation: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = async () => {
        if (step === 1) {
            if (!formData.website) return;
            setIsAnalyzing(true);
            // Simulate analysis
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsAnalyzing(false);
            setStep(step + 1);
        } else {
            setStep(step + 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Wire to backend
        console.log('Form Submitted:', formData);
        navigate('/solutions/industry/pharma/thank-you');
    };

    const variants = {
        enter: { x: 50, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">Pharma Operations Audit</h3>
                    <p className="text-slate-400 text-sm">Step {step} of 4</p>
                </div>
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div
                            key={i}
                            className={`h-2 w-8 rounded-full transition-colors ${i <= step ? 'bg-cyan-500' : 'bg-slate-700'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-8 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col justify-center"
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="text-cyan-600" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Let's start with your digital footprint.</h4>
                                <p className="text-slate-600">Our AI will analyze your current website structure.</p>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-700 mb-2">Company Website URL</label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="https://www.yourpharma.com"
                                    className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
                                />
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={!formData.website || isAnalyzing}
                                className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        Analyzing Structure...
                                    </>
                                ) : (
                                    <>
                                        Analyze & Proceed <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex-1"
                        >
                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <FlaskConical className="text-cyan-600" /> Pharma Profile
                            </h4>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Primary Business Model</label>
                                    <select
                                        name="sector"
                                        value={formData.sector}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none bg-white"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Generics (Domestic)">Generics (Domestic)</option>
                                        <option value="Generics (Export)">Generics (Export)</option>
                                        <option value="API Manufacturer">API Manufacturer</option>
                                        <option value="Medical Devices">Medical Devices</option>
                                        <option value="CRAMS/CRO">CRAMS/Contract Research</option>
                                        <option value="Biotech">Biotech/Biosimilars</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Key Export Markets</label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            name="exportMarkets"
                                            value={formData.exportMarkets}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                            placeholder="e.g. LATAM, EU, Africa, SEA"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Tenders</label>
                                        <select
                                            name="tenderVolume"
                                            value={formData.tenderVolume}
                                            onChange={handleInputChange}
                                            className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none bg-white"
                                        >
                                            <option value="">Select...</option>
                                            <option value="0-5">0-5</option>
                                            <option value="5-20">5-20</option>
                                            <option value="20-50">20-50</option>
                                            <option value="50+">50+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Stockist Count</label>
                                        <select
                                            name="stockistCount"
                                            value={formData.stockistCount}
                                            onChange={handleInputChange}
                                            className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none bg-white"
                                        >
                                            <option value="">Select...</option>
                                            <option value="None">None (Direct)</option>
                                            <option value="< 100">Less than 100</option>
                                            <option value="100-500">100 - 500</option>
                                            <option value="500-2000">500 - 2,000</option>
                                            <option value="2000+">2,000+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-full mt-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                Next Step <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex-1"
                        >
                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <FileText className="text-cyan-600" /> Operational Volume
                            </h4>

                            <div className="mb-8">
                                <label className="block text-lg font-medium text-slate-700 mb-4">
                                    Size of Field Force (MRs)?
                                </label>
                                <div className="grid grid-cols-1 gap-3">
                                    {['Less than 50 MRs', '50 - 200 MRs', '200 - 1,000 MRs', '1,000+ MRs'].map((option) => (
                                        <label
                                            key={option}
                                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.leadVolume === option ? 'border-cyan-500 bg-cyan-50' : 'border-slate-200 hover:border-cyan-300'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="leadVolume"
                                                value={option}
                                                checked={formData.leadVolume === option}
                                                onChange={handleInputChange}
                                                className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                                            />
                                            <span className="ml-3 font-medium text-slate-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-full mt-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                Next Step <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="flex-1"
                        >
                            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <User className="text-cyan-600" /> Final Details
                            </h4>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Designation</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                            <input
                                                type="text"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-cyan-50 p-4 rounded-xl border border-cyan-100">
                                <p className="text-xs text-cyan-800 leading-relaxed">
                                    <strong>Privacy:</strong> We sign a strict NDA for all process audits. Your operational data is safe.
                                </p>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                Submit & Schedule Audit <CheckCircle size={20} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PharmaAuditForm;
