import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  User,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PartnershipForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    region: "",
    partnerType: "",
    collaborationIdea: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to backend
    console.log("Partnership Form Submitted:", formData);
    navigate("/partnerships/thank-you");
  };

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Partner Application</h3>
          <p className="text-slate-400 text-sm">Step {step} of 3</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-colors ${i <= step ? "bg-cyan-500" : "bg-slate-700"}`}
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
                  <Handshake className="text-cyan-600" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  Let's start with the basics.
                </h4>
                <p className="text-slate-600">
                  Tell us about you and your organization.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3.5 text-slate-400"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full p-3 pl-10 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-3 top-3.5 text-slate-400"
                      size={18}
                    />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your Company Pvt Ltd"
                      className="w-full p-3 pl-10 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.companyName}
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <MapPin className="text-cyan-600" /> Partnership Details
              </h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Region
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none bg-white"
                    required
                  >
                    <option value="">Select your region...</option>
                    <option value="India">India</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Europe">Europe</option>
                    <option value="Americas">Americas</option>
                    <option value="APAC">APAC (Asia-Pacific)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Partner Type
                  </label>
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none bg-white"
                    required
                  >
                    <option value="">Select partner type...</option>
                    <option value="Government Prime / Liaison">
                      Government Prime / Liaison
                    </option>
                    <option value="Recruitment / Staffing Agency">
                      Recruitment / Staffing Agency
                    </option>
                    <option value="Digital Marketing Agency">
                      Digital Marketing Agency
                    </option>
                    <option value="Event / Exhibition Organizer">
                      Event / Exhibition Organizer
                    </option>
                    <option value="System Integrator / Consultant">
                      System Integrator / Consultant
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3.5 text-slate-400"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-3.5 text-slate-400"
                      size={18}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={
                  !formData.region ||
                  !formData.partnerType ||
                  !formData.email ||
                  !formData.phone
                }
                className="w-full mt-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <FileText className="text-cyan-600" /> Tell Us Your Vision
              </h4>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Brief Collaboration Idea
                </label>
                <textarea
                  name="collaborationIdea"
                  value={formData.collaborationIdea}
                  onChange={handleInputChange}
                  placeholder="Tell us about your strength and how you envision partnering with Nexby. What value can we create together?"
                  rows={6}
                  className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none"
                  required
                />
                <p className="text-xs text-slate-500 mt-2">
                  Share your current client base, geographic presence, or
                  specific use cases you'd like to address.
                </p>
              </div>

              <div className="mt-6 bg-cyan-50 p-4 rounded-xl border border-cyan-100">
                <p className="text-xs text-cyan-800 leading-relaxed">
                  <strong>Privacy:</strong> Your partnership proposal and
                  business information will be treated confidentially. We sign
                  NDAs for all partnership discussions.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!formData.collaborationIdea}
                className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Submit Application <CheckCircle size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PartnershipForm;
