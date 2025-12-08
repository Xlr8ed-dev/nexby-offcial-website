import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    BarChart3,
    CheckCircle,
    ArrowRight,
    User,
    Briefcase,
    Phone,
    Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SalesXAuditForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        teamSize: '',
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

    const handleNext = () => {
        if (step === 1 && (!formData.teamSize || !formData.leadVolume)) return;
        setStep(step + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Wire to backend
        console.log('SalesX Form Submitted:', formData);
        navigate('/products/salesx/thank-you');
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
                    <h3 className="text-xl font-bold">SalesX Qualification</h3>
                    <p className="text-slate-400 text-sm">Step {step} of 2</p>
                </div>
                <div className="flex gap-2">
                    {[1, 2].map(i => (
                        <div
                            key={i}
                            className={`h-2 w-8 rounded-full transition-colors ${i <= step ? 'bg-blue-500' : 'bg-slate-700'}`}
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
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="text-blue-600" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Let's understand your scale.</h4>
                                <p className="text-slate-600">Help us size the AI infrastructure for your team.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                        <Users size={16} className="text-blue-500" /> Size of Sales Team?
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['1 - 5', '5 - 10', '10 - 50', '50+'].map((option) => (
                                            <label
                                                key={option}
                                                className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.teamSize === option ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' : 'border-slate-200 hover:border-blue-300 text-slate-600'}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="teamSize"
                                                    value={option}
                                                    checked={formData.teamSize === option}
                                                    onChange={handleInputChange}
                                                    className="hidden"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                        <BarChart3 size={16} className="text-blue-500" /> Monthly Lead Volume?
                                    </label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {['Less than 500', '500 - 2,000', '2,000 - 10,000', '10,000+'].map((option) => (
                                            <label
                                                key={option}
                                                className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${formData.leadVolume === option ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' : 'border-slate-200 hover:border-blue-300 text-slate-600'}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="leadVolume"
                                                    value={option}
                                                    checked={formData.leadVolume === option}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 mr-3"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={!formData.teamSize || !formData.leadVolume}
                                className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next Step <ArrowRight size={20} />
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
                                <User className="text-blue-600" /> Your Details
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
                                            className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Designation</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-3.5 text-slate-400 pointer-events-none" size={18} />
                                            <input
                                                type="text"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                                className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
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
                                        className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3.5 text-slate-400 pointer-events-none" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3.5 text-slate-400 pointer-events-none" size={18} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <p className="text-xs text-blue-800 leading-relaxed">
                                    <strong>Ready to Scale?</strong> We will analyze your inputs and propose a custom SalesX implementation plan.
                                </p>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                Calculate My ROI <CheckCircle size={20} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SalesXAuditForm;
