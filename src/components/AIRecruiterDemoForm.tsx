import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ChevronDown, Check, Loader2 } from "lucide-react";
import { submitDemoRequest } from "../services/api";
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

// const TIMELINES = ["Within 1 month", "1-3 months", "3 months+"];

// const SOURCING_CHANNELS = [
//   "Naukri",
//   "LinkedIn",
//   "Recruitment Agencies",
//   "Other",
// ];

const AIRecruiterDemoForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    countryCode: "+1",
    mobile: "",
    timeline: "",
    sourcingChannels: [] as string[],
  });

  const handleChannelChange = (channel: string) => {
    setFormData((prev) => {
      const channels = prev.sourcingChannels.includes(channel)
        ? prev.sourcingChannels.filter((c) => c !== channel)
        : [...prev.sourcingChannels, channel];
      return { ...prev, sourcingChannels: channels };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitDemoRequest(formData);
      navigate("/products/ai-recruiter/thank-you");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-form" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Automate Your Hiring?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a personalized demo of AI Recruiter. See how you can screen,
            interview, and rank talent at scale.
          </p>
        </div>
        <div className="w-[80%] mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20">
          <DynamicFormContainer formId={9} />
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
          <p className="text-center text-xs text-blue-300/60 mt-4">
            By booking a demo, you agree to our privacy policy. Your data is
            secure.
          </p>
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-blue-100 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-blue-300/30 outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-100 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-blue-300/30 outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-blue-100 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-blue-300/30 outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-100 mb-2">
                  Designation
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm px-4 text-white outline-none focus:border-blue-400 focus:bg-white/10 transition-all appearance-none cursor-pointer [&>option]:bg-slate-900"
                    value={formData.designation}
                    onChange={(e) =>
                      setFormData({ ...formData, designation: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {DESIGNATIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Mobile Number{" "}
                <span className="text-blue-300 font-normal">(Optional)</span>
              </label>
              <div className="flex gap-3">
                <div className="relative w-32 shrink-0">
                  <select
                    className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm pl-3 pr-8 text-white outline-none focus:border-blue-400 focus:bg-white/10 transition-all appearance-none cursor-pointer [&>option]:bg-slate-900"
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                  >
                    {COUNTRY_CODES.map((item) => (
                      <option key={item.country} value={item.code}>
                        {item.flag} {item.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 pointer-events-none"
                    size={16}
                  />
                </div>
                <input
                  type="tel"
                  className="w-full h-12 rounded-xl border-2 border-blue-400/20 bg-white/5 backdrop-blur-sm px-4 text-white placeholder-blue-300/30 outline-none focus:border-blue-400 focus:bg-white/10 transition-all"
                  placeholder="123 456 7890"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                When do you plan to hire?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TIMELINES.map((time) => (
                  <label
                    key={time}
                    className={`
                                            relative flex items-center justify-center px-4 py-3 rounded-xl border-2 cursor-pointer transition-all
                                            ${
                                              formData.timeline === time
                                                ? "border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20"
                                                : "border-blue-400/20 bg-white/5 text-blue-200 hover:border-blue-400/40 hover:bg-white/10"
                                            }
                                        `}
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={time}
                      checked={formData.timeline === time}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="sr-only"
                    />
                    <span className="font-medium text-sm">{time}</span>
                    {formData.timeline === time && (
                      <div className="absolute top-2 right-2">
                        <Check size={14} className="text-blue-400" />
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-100 mb-2">
                Do you use Naukri, LinkedIn for sourcing?
              </label>
              <div className="flex flex-wrap gap-3">
                {SOURCING_CHANNELS.map((channel) => (
                  <label
                    key={channel}
                    className={`
                                            relative flex items-center justify-center px-4 py-2 rounded-xl border-2 cursor-pointer transition-all
                                            ${
                                              formData.sourcingChannels.includes(
                                                channel
                                              )
                                                ? "border-blue-500 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20"
                                                : "border-blue-400/20 bg-white/5 text-blue-200 hover:border-blue-400/40 hover:bg-white/10"
                                            }
                                        `}
                  >
                    <input
                      type="checkbox"
                      name="sourcingChannels"
                      value={channel}
                      checked={formData.sourcingChannels.includes(channel)}
                      onChange={() => handleChannelChange(channel)}
                      className="sr-only"
                    />
                    <span className="font-medium text-sm">{channel}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 mt-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 rounded-full text-white font-bold text-lg uppercase tracking-wider shadow-lg shadow-blue-900/50 hover:shadow-blue-500/50 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Submitting...
                </>
              ) : (
                "Book Product Demo"
              )}
            </button>

            <p className="text-center text-xs text-blue-300/60 mt-4">
              By booking a demo, you agree to our privacy policy. Your data is
              secure.
            </p>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default AIRecruiterDemoForm;
