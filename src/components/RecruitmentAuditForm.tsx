import { useState } from "react";
import { Zap, Users, Briefcase } from "lucide-react";
import Form from "./Form";
import DynamicFormContainer from "./DynamicFormContainer";

interface RecruitmentAuditFormProps {
  formId: string;
}

const RecruitmentAuditForm = ({ formId }: RecruitmentAuditFormProps) => {
  const [hiringVolume, setHiringVolume] = useState(10);
  const [timeToHire, setTimeToHire] = useState(30);
  const [challengeText, setChallengeText] = useState("");

  const [contactMethod, setContactMethod] = useState("email");

  const handleTagClick = (text: string) => {
    setChallengeText(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Recruitment Audit Form Submitted:", {
      formId,
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      hiringVolume,
      timeToHire,
      challenge: challengeText,
      contactMethod: contactMethod,
      phoneNumber: formData.get("phoneNumber"),
    });
    // TODO: Wire to backend
    alert(
      "Thank you! Our recruitment optimization team will analyze your data and reach out within 24 hours."
    );
  };

  return (
    <div className="w-[60%] mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-500/20">
      {/* <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Start Your Pilot
        </h3>
        <p className="text-purple-200 text-lg">
          Post a job today and let Nexby deliver your top 3 candidates by
          tomorrow morning.
        </p>
      </div> */}
      <DynamicFormContainer />
      {/* <Form
        title={null}
        buttonName="Start Your Pilot"
        fields={[
          {
            id: "fullName",
            label: "Full Name",
            type: "text",
            required: true,
          },
          { id: "email", label: "Email", type: "email", required: true },
          {
            id: "company",
            label: "Company Name",
            type: "text",
            required: true,
          },
          {
            id: "phone",
            label: "Mobile Number",
            type: "phone",
            required: true,
          },
        ]}

      /> */}
      {/* <form onSubmit={handleSubmit} className="space-y-6">
               
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="text-sm font-semibold text-white mb-2 block">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                            placeholder="Sarah Jenkins"
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
                            className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                            placeholder="sarah@company.com"
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
                        className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                        placeholder="Tech Innovators Inc."
                        required
                    />
                </div>

                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Briefcase size={20} className="text-purple-400" />
                        Current Recruitment Metrics
                    </h4>

                    <div className="space-y-5">
                        
                        <div>
                            <label className="text-sm font-semibold text-white mb-3 block">
                                Monthly Hires: <span className="text-purple-400">{hiringVolume}{hiringVolume >= 100 ? '+' : ''}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="5"
                                value={hiringVolume}
                                onChange={(e) => setHiringVolume(parseInt(e.target.value))}
                                className="w-full h-2 bg-purple-400/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:shadow-purple-500/50 transition-all"
                            />
                            <div className="flex justify-between text-xs text-purple-300 mt-1">
                                <span>0</span>
                                <span>50</span>
                                <span>100+</span>
                            </div>
                        </div>

                        
                        <div>
                            <label className="text-sm font-semibold text-white mb-3 block">
                                Average Time to Hire (Days): <span className="text-purple-400">{timeToHire} days</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="90"
                                step="1"
                                value={timeToHire}
                                onChange={(e) => setTimeToHire(parseInt(e.target.value))}
                                className="w-full h-2 bg-purple-400/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:shadow-purple-500/50 transition-all"
                            />
                            <div className="flex justify-between text-xs text-purple-300 mt-1">
                                <span>1 day</span>
                                <span>45 days</span>
                                <span>90+ days</span>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div>
                    <label className="text-sm font-semibold text-white mb-3 block flex items-center gap-2">
                        <Zap size={18} className="text-yellow-400" />
                        What's your biggest hiring challenge?
                    </label>

                    
                    <div className="flex flex-wrap gap-2 mb-3">
                        <button
                            type="button"
                            onClick={() => handleTagClick("Too many unqualified resumes to screen manually.")}
                            className="text-xs bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-400/50 text-red-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            📄 Resume Overload
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Candidates are cheating on assessments or using proxies.")}
                            className="text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/50 text-blue-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            🤖 Fraud/Cheating
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("Time to hire is too long, losing good candidates.")}
                            className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-400/50 text-purple-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            ⏳ Slow Process
                        </button>
                        <button
                            type="button"
                            onClick={() => handleTagClick("High agency costs and low quality candidates.")}
                            className="text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-400/50 text-green-200 rounded-full px-3 py-1.5 transition-all font-medium"
                        >
                            💰 High Costs
                        </button>
                    </div>

                    <textarea
                        value={challengeText}
                        onChange={(e) => setChallengeText(e.target.value)}
                        className="w-full rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all resize-none"
                        rows={4}
                        placeholder="Describe your challenge in detail. Include numbers if possible (e.g., '500 applications/week, 1 recruiter, 20% fake candidates')."
                    />
                </div>

             
                <div>
                    <label className="text-sm font-semibold text-white mb-3 block flex items-center gap-2">
                        <Users size={18} className="text-purple-400" />
                        How should we contact you?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'email' ? 'border-purple-400 bg-purple-500/10' : 'border-purple-400/30 hover:bg-white/10 hover:border-purple-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="email"
                                checked={contactMethod === 'email'}
                                onChange={() => setContactMethod('email')}
                                className="w-4 h-4 text-purple-500 focus:ring-purple-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">Email</span>
                        </label>
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'phone' ? 'border-purple-400 bg-purple-500/10' : 'border-purple-400/30 hover:bg-white/10 hover:border-purple-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="phone"
                                checked={contactMethod === 'phone'}
                                onChange={() => setContactMethod('phone')}
                                className="w-4 h-4 text-purple-500 focus:ring-purple-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">Phone</span>
                        </label>
                        <label className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border-2 rounded-xl p-4 cursor-pointer transition-all ${contactMethod === 'whatsapp' ? 'border-purple-400 bg-purple-500/10' : 'border-purple-400/30 hover:bg-white/10 hover:border-purple-400/50'}`}>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="whatsapp"
                                checked={contactMethod === 'whatsapp'}
                                onChange={() => setContactMethod('whatsapp')}
                                className="w-4 h-4 text-purple-500 focus:ring-purple-500 focus:ring-2"
                            />
                            <span className="text-white font-medium">WhatsApp</span>
                        </label>
                    </div>

                   
                    {(contactMethod === 'phone' || contactMethod === 'whatsapp') && (
                        <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="text-sm font-semibold text-white mb-2 block">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all"
                                placeholder="+1 (555) 000-0000"
                                required
                                pattern="^\+?[0-9\s\-\(\)]{10,}$"
                                title="Please enter a valid phone number (at least 10 digits)"
                            />
                        </div>
                    )}
                </div>

             
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl px-5 py-4">
                    <p className="text-sm text-purple-100 leading-relaxed">
                        <span className="font-bold text-white">Expert Analysis Guaranteed:</span> Our recruitment specialists will review your requirements and set up a pilot to demonstrate the power of AI in your hiring process.
                    </p>
                </div>

                
                <button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 rounded-full text-white font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    Start Your Pilot
                </button>
            </form> */}
    </div>
  );
};

export default RecruitmentAuditForm;
