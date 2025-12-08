import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    User,
    Mail,
    Phone,
    MapPin,
    ShieldAlert,
    FileText,
    CheckCircle,
    Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GovernmentAuditForm = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        department: '',
        location: '',
        email: '',
        phone: '',
        useCase: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Government Form Submitted:', formData);
        navigate('/solutions/government/thank-you');
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                    <ShieldAlert className="text-red-500" size={24} />
                    <h3 className="text-xl font-bold tracking-tight">Secure Inquiry Portal</h3>
                </div>
                <p className="text-slate-400 text-sm">
                    Restricted to Government Officials & Public Sector Units.
                </p>
            </div>

            <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Official Name"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Designation / Rank</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Director, Secretary"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Department */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">Department / Ministry Name</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Ministry of Home Affairs / State Police"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Country / State</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Maharashtra, India"
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Use Case */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Use Case Category</label>
                            <select
                                name="useCase"
                                value={formData.useCase}
                                onChange={handleInputChange}
                                className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-600 outline-none bg-white transition-all"
                                required
                            >
                                <option value="">Select Category...</option>
                                <option value="Emergency Response">Emergency Response (PSAP/112)</option>
                                <option value="Citizen Grievance">Citizen Grievance Redressal</option>
                                <option value="Public Health">Public Health & Safety</option>
                                <option value="Law Enforcement">Law Enforcement & Intel</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Official Email (.gov/.nic)</label>
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

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Direct Phone Line</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+91..."
                                    className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                                    required
                                />
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
                                <Loader2 className="animate-spin" /> Verifying Credentials...
                            </>
                        ) : (
                            <>
                                Request Official Documentation <CheckCircle size={20} />
                            </>
                        )}
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default GovernmentAuditForm;
