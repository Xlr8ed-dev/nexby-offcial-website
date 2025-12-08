import { useState } from 'react';
import { Zap, Users, Shield, Headphones } from 'lucide-react';

interface SupportAuditFormProps {
    formId?: string;
}

const SupportAuditForm = ({ formId = "support-audit" }: SupportAuditFormProps) => {
    const [ticketVolume, setTicketVolume] = useState(500);
    const [resolutionTime, setResolutionTime] = useState(24);
    const [challengeText, setChallengeText] = useState("");
    const [contactMethod, setContactMethod] = useState("email");

    const handleTagClick = (text: string) => {
        setChallengeText(text);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Support Audit Form Submitted:', {
            formId,
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            ticketVolume,
            resolutionTime,
            challenge: challengeText,
            contactMethod: contactMethod,
            phoneNumber: formData.get('phoneNumber')
        });
        // TODO: Wire to backend
        // alert('Thank you! Our support optimization team will analyze your volume and reach out with a deflection plan within 24 hours.');
        window.location.href = '/products/support-assist/thank-you';
    };

    return (
        <div id="audit-form" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20">
            <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Automate Your Ops
                </h3>
                <p className="text-blue-200 text-lg">
                    Tell us about your support volume. We'll show you exactly how many tickets we can deflect.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="text-sm font-semibold text-white mb-2 block">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-blue-300/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                            placeholder="Alex Rivera"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-white mb-2 block">
                            Work Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-blue-300/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                            placeholder="alex@company.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-white mb-2 block">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        name="company"
                        className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-blue-300/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                        placeholder="Tech Solutions Ltd."
                        required
                    />
                </div>

                {/* Support Metrics */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Headphones size={20} className="text-blue-400" />
                        Current Support Metrics
                    </h4>

                    <div className="space-y-5">
                        {/* Monthly Ticket Volume */}
                        <div>
                            <label className="text-sm font-semibold text-white mb-3 block">
                                Monthly Ticket Volume: <span className="text-blue-400">{ticketVolume}{ticketVolume >= 5000 ? '+' : ''}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                step="100"
                                value={ticketVolume}
                                onChange={(e) => setTicketVolume(parseInt(e.target.value))}
                                className="w-full h-2 bg-blue-400/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:shadow-blue-500/50 transition-all"
                            />
                            <div className="flex justify-between text-xs text-blue-300 mt-1">
                                <span>0</span>
                                <span>2500</span>
                                <span>5000+</span>
                            </div>
                        </div>

                        {/* Avg Resolution Time */}
                        <div>
                            <label className="text-sm font-semibold text-white mb-3 block">
                                Avg. First Response Time (Hours): <span className="text-blue-400">{resolutionTime}h</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="72"
                                step="1"
                                value={resolutionTime}
                                onChange={(e) => setResolutionTime(parseInt(e.target.value))}
                                className="w-full h-2 bg-blue-400/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:shadow-blue-500/50 transition-all"
                            />
                            <div className="flex justify-between text-xs text-blue-300 mt-1">
                                <span>1h</span>
                                <span>36h</span>
                                <span>72h+</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Challenges */}
                <div>
                    <label className="text-sm font-semibold text-white mb-3 block flex items-center gap-2">
                        <Shield size={18} className="text-yellow-400" />
                        What's your biggest support pain point?
                    </label>

                    {/* Quick Select Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        <button
                            type="button"
                            onClick={() => handleTagClick("High volume of repetitive L1 queries (password resets, status checks).")}
                            className="text-xs bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-400/50 text-red-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            🔄 Repetitive Queries
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Response times are too slow during peak hours.")}
                            className="text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/50 text-blue-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            ⏱️ Slow Response
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Agents give inconsistent answers or outdated info.")}
                            className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-400/50 text-purple-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            🚫 Inconsistent Info
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Support costs are scaling too fast with user growth.")}
                            className="text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-400/50 text-green-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            💰 High Costs
                        </button>
                    </div>

                    <textarea
                        value={challengeText}
                        onChange={(e) => setChallengeText(e.target.value)}
                        className="w-full rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-blue-300/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all resize-none"
                        rows={4}
                        placeholder="Describe your challenge in detail. E.g., 'We have 5 agents handling 3000 tickets, mostly simple FAQs.'"
                    />
                </div>

                {/* Preferred Contact Method */}
                <div>
                    <label className="text-sm font-semibold text-white mb-3 block flex items-center gap-2">
                        <Users size={18} className="text-blue-400" />
                        How should we contact you?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'email' ? 'border-blue-400 bg-blue-500/10' : 'border-blue-400/30 hover:bg-white/10 hover:border-blue-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="email"
                                checked={contactMethod === 'email'}
                                onChange={() => setContactMethod('email')}
                                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">Email</span>
                        </label>
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'phone' ? 'border-blue-400 bg-blue-500/10' : 'border-blue-400/30 hover:bg-white/10 hover:border-blue-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="phone"
                                checked={contactMethod === 'phone'}
                                onChange={() => setContactMethod('phone')}
                                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">Phone</span>
                        </label>
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'whatsapp' ? 'border-blue-400 bg-blue-500/10' : 'border-blue-400/30 hover:bg-white/10 hover:border-blue-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="whatsapp"
                                checked={contactMethod === 'whatsapp'}
                                onChange={() => setContactMethod('whatsapp')}
                                className="w-4 h-4 text-blue-500 focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">WhatsApp</span>
                        </label>
                    </div>

                    {/* Conditional Phone Input */}
                    {(contactMethod === 'phone' || contactMethod === 'whatsapp') && (
                        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="text-sm font-semibold text-white mb-2 block">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-blue-300/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all"
                                placeholder="+1 (555) 000-0000"
                                required
                                pattern="^\+?[0-9\s\-\(\)]{10,}$"
                                title="Please enter a valid phone number (at least 10 digits)"
                            />
                        </div>
                    )}
                </div>

                {/* Trust Message */}
                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-2xl px-5 py-4">
                    <p className="text-sm text-blue-100 leading-relaxed">
                        <span className="font-bold text-white">Guaranteed Deflection:</span> Our team will analyze your volume and show you which 70% of tickets can be automated immediately.
                    </p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 rounded-full text-white font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    <Zap size={20} className="text-yellow-400 fill-yellow-400" />
                    Automate My Support
                </button>
            </form>
        </div>
    );
};

export default SupportAuditForm;
