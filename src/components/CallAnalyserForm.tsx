import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart2 } from 'lucide-react';

interface CallAnalyserFormProps {
    formId: string;
}

const CallAnalyserForm = ({ formId }: CallAnalyserFormProps) => {
    const navigate = useNavigate();
    const [callVolume, setCallVolume] = useState(1000);
    const [qaCoverage, setQaCoverage] = useState("random");
    const [primaryGoal, setPrimaryGoal] = useState("");

    const handleTagClick = (text: string) => {
        setPrimaryGoal(text);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // In a real app, you would send this to your backend
        console.log('Call Analyser Form Submitted:', {
            formId,
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            callVolume,
            qaCoverage,
            primaryGoal: primaryGoal || formData.get('otherGoal'),
        });

        // Navigate to Thank You page
        navigate('/products/call-analyser/thank-you');
    };

    return (
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    Get Your Free Audit
                </h3>
                <p className="text-slate-600">
                    See what your current QA process is missing. We'll analyze a sample of your calls and show you the hidden risks and opportunities.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                {/* Basic Info */}
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="text-sm font-semibold text-slate-900 mb-2 block">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-slate-900 placeholder-slate-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            placeholder="Jane Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-slate-900 mb-2 block">
                            Work Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-slate-900 placeholder-slate-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            placeholder="jane@company.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-slate-900 mb-2 block">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        name="company"
                        className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-slate-900 placeholder-slate-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                        placeholder="Acme Inc."
                        required
                    />
                </div>

                {/* Call Metrics */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <BarChart2 size={20} className="text-purple-600" />
                        Call Volume & QA
                    </h4>

                    <div className="space-y-6">
                        {/* Monthly Call Volume */}
                        <div>
                            <label className="text-sm font-semibold text-slate-900 mb-3 block">
                                Est. Monthly Call Volume: <span className="text-purple-600 font-bold">{callVolume.toLocaleString()}{callVolume >= 50000 ? '+' : ''}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="50000"
                                step="1000"
                                value={callVolume}
                                onChange={(e) => setCallVolume(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:shadow-purple-500/30 transition-all"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>0</span>
                                <span>25k</span>
                                <span>50k+</span>
                            </div>
                        </div>

                        {/* Current QA Coverage */}
                        <div>
                            <label className="text-sm font-semibold text-slate-900 mb-2 block">
                                Current QA Process
                            </label>
                            <select
                                value={qaCoverage}
                                onChange={(e) => setQaCoverage(e.target.value)}
                                className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            >
                                <option value="none">No formal QA / Ad-hoc only</option>
                                <option value="random">Random Sampling (1-2% of calls)</option>
                                <option value="dedicated">Dedicated QA Team (5-10% coverage)</option>
                                <option value="automated">Using Legacy Keyword Spotting</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Primary Evaluation Goal */}
                <div>
                    <label className="text-sm font-semibold text-slate-900 mb-3 block flex items-center gap-2">
                        <TrendingUp size={18} className="text-purple-600" />
                        What is your primary goal with AI Analysis?
                    </label>

                    <div className="flex flex-wrap gap-2 mb-3">
                        <button
                            type="button"
                            onClick={() => handleTagClick("Automating compliance scores to reduce risk.")}
                            className={`text-xs border rounded-full px-3 py-1.5 transition-all font-medium ${primaryGoal.includes("compliance") ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-white border-slate-300 text-slate-600 hover:border-purple-400'}`}
                        >
                            🛡️ Compliance & Risk
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Improving sales conversion rates.")}
                            className={`text-xs border rounded-full px-3 py-1.5 transition-all font-medium ${primaryGoal.includes("sales") ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-white border-slate-300 text-slate-600 hover:border-purple-400'}`}
                        >
                            💰 Sales Performance
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Reducing agent training time and ramp-up.")}
                            className={`text-xs border rounded-full px-3 py-1.5 transition-all font-medium ${primaryGoal.includes("training") ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-white border-slate-300 text-slate-600 hover:border-purple-400'}`}
                        >
                            🎓 Agent Coaching
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Understanding customer churn reasons.")}
                            className={`text-xs border rounded-full px-3 py-1.5 transition-all font-medium ${primaryGoal.includes("churn") ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-white border-slate-300 text-slate-600 hover:border-purple-400'}`}
                        >
                            📉 Churn Reduction
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Request Forensic Audit
                </button>

                <p className="text-center text-xs text-slate-500 mt-4">
                    Your data is secure. We calculate L1 fit based on volume and use-case fit.
                </p>
            </form>
        </div>
    );
};

export default CallAnalyserForm;
