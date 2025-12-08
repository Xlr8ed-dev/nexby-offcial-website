import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    User,
    Mail,
    Users,
    ShieldAlert,
    Loader2,
    ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CitizenAIInterfaceForm = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        department: '',
        audenceSize: '',
        email: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Citizen AI Form Submitted:', formData);
        navigate('/solutions/government/thank-you');
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                    <ShieldAlert className="text-blue-500" size={24} />
                    <h3 className="text-xl font-bold tracking-tight">Government Inquiry</h3>
                </div>
                <p className="text-slate-400 text-sm">
                    Request a roadmap for your department.
                </p>
            </div>

            <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Designation</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Secretary, Director"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Department */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Department / Municipal Corporation</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Urban Development Department"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Official Gov Email */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Official Gov Email (.gov / .nic)</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="name@dept.gov.in"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Target Audience Size */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Target Audience Size</label>
                            <div className="relative">
                                <Users className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <select
                                    name="audenceSize"
                                    value={formData.audenceSize}
                                    onChange={handleInputChange}
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none bg-white transition-all appearance-none"
                                    required
                                >
                                    <option value="">Select Scale...</option>
                                    <option value="District">District Level</option>
                                    <option value="State">State Level</option>
                                    <option value="National">National Level</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                        <ShieldAlert className="text-blue-600 shrink-0" size={20} />
                        <p className="text-xs text-blue-800 leading-relaxed">
                            <strong>Security Protocol:</strong> Your details will be verified against our Government Directory before access to technical documentation is granted. This connection is encrypted.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" /> Processing Request...
                            </>
                        ) : (
                            <>
                                Request Digital Governance Roadmap <ArrowRight size={20} />
                            </>
                        )}
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default CitizenAIInterfaceForm;
