import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ChevronDown, Check } from "lucide-react";
import Form from "./Form";
import DynamicFormContainer from "./DynamicFormContainer";

// const COUNTRY_CODES = [
//   { code: "+1", country: "US", flag: "🇺🇸" },
//   { code: "+44", country: "UK", flag: "🇬🇧" },
//   { code: "+91", country: "IN", flag: "🇮🇳" },
//   { code: "+1", country: "CA", flag: "🇨🇦" },
//   { code: "+61", country: "AU", flag: "🇦🇺" },
//   { code: "+971", country: "AE", flag: "🇦🇪" },
//   { code: "+65", country: "SG", flag: "🇸🇬" },
//   { code: "+49", country: "DE", flag: "🇩🇪" },
// ];

// const DESIGNATIONS = [
//   "Founder / CXO",
//   "VP / Director",
//   "Manager",
//   "Individual Contributor",
//   "Other",
// ];

// const TIMELINES = ["Within a month", "1-2 months", "After 2 months"];

const ExpoDemoForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    countryCode: "+1",
    mobile: "",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Expo Demo Request:", formData);
    // TODO: Send data to backend
    navigate("/products/expo-insight/thank-you");
  };

  return (
    <section id="demo-form" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Upgrade Your Event ROI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a personalized demo of Expo Insight. See how you can capture,
            qualify, and engage leads in real-time.
          </p>
        </div>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-500/20">
          <DynamicFormContainer />
          {/* <Form
            title={null}
            buttonName="Book Product Demo"
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
          <p className="text-center text-xs text-purple-300/60 mt-4">
            By booking a demo, you agree to our privacy policy. Your data is
            secure.
          </p>
          {/* <form onSubmit={handleSubmit} className="space-y-6">
                       
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-purple-100 mb-2">
                                    Full Name
                                </label>
                                <input id={field.id} type="text"
                                    required
                                    className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-purple-300/30 outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-purple-100 mb-2">
                                    Company Name
                                </label>
                                <input id={field.id} type="text"
                                    required
                                    className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-purple-300/30 outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                                    placeholder="Acme Corp"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                        </div>

                        
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-semibold text-purple-100 mb-2">
                                    Work Email
                                </label>
                                <input id={field.id} type="email"
                                    required
                                    className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-purple-300/30 outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-purple-100 mb-2">
                                    Designation
                                </label>
                                <div className="relative">
                                    <select
                                        required
                                        className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm px-4 text-white outline-none focus:border-purple-400 focus:bg-white/10 transition-all appearance-none cursor-pointer [&>option]:bg-slate-900"
                                        value={formData.designation}
                                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                    >
                                        <option value="" disabled>Select your role</option>
                                        {DESIGNATIONS.map((role) => (
                                            <option key={role} value={role}>{role}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-300 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </div>

                       
                        <div>
                            <label className="block text-sm font-semibold text-purple-100 mb-2">
                                Mobile Number <span className="text-purple-300 font-normal">(Optional)</span>
                            </label>
                            <div className="flex gap-3">
                                <div className="relative w-32 shrink-0">
                                    <select
                                        className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm pl-3 pr-8 text-white outline-none focus:border-purple-400 focus:bg-white/10 transition-all appearance-none cursor-pointer [&>option]:bg-slate-900"
                                        value={formData.countryCode}
                                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                    >
                                        {COUNTRY_CODES.map((item) => (
                                            <option key={item.country} value={item.code}>
                                                {item.flag} {item.code}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 pointer-events-none" size={16} />
                                </div>
                                <input
                                    type="tel"
                                    className="w-full h-12 rounded-xl border-2 border-purple-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-purple-300/30 outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                                    placeholder="123 456 7890"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>
                        </div>

                       
                        <div>
                            <label className="block text-sm font-semibold text-purple-100 mb-2">
                                When is your next exhibition?
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {TIMELINES.map((time) => (
                                    <label
                                        key={time}
                                        className={`
                                            relative flex items-center justify-center px-4 py-3 rounded-xl border-2 cursor-pointer transition-all
                                            ${formData.timeline === time
                                                ? 'border-purple-500 bg-purple-500/20 text-white shadow-lg shadow-purple-500/20'
                                                : 'border-purple-400/20 bg-white/5 text-purple-200 hover:border-purple-400/40 hover:bg-white/10'}
                                        `}
                                    >
                                        <input
                                            type="radio"
                                            name="timeline"
                                            value={time}
                                            checked={formData.timeline === time}
                                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                            className="sr-only"
                                        />
                                        <span className="font-medium text-sm">{time}</span>
                                        {formData.timeline === time && (
                                            <div className="absolute top-2 right-2">
                                                <Check size={14} className="text-purple-400" />
                                            </div>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-14 mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-lg shadow-purple-900/50 hover:shadow-purple-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book Product Demo
                        </button>

                        <p className="text-center text-xs text-purple-300/60 mt-4">
                            By booking a demo, you agree to our privacy policy. Your data is secure.
                        </p>
                    </form> */}
        </div>
      </div>
    </section>
  );
};

export default ExpoDemoForm;
