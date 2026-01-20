import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  User,
  Mail,
  ShieldAlert,
  FileText,
  CheckCircle,
  Loader2,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TenderQueryAuditForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    ministry: "",
    email: "",
    keyPainPoint: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Tender Query Automation Form Submitted:", formData);
    navigate("/solutions/government/thank-you");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
      <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="text-red-500" size={24} />
          <h3 className="text-xl font-bold tracking-tight">
            Technical Proposal Request
          </h3>
        </div>
        <p className="text-slate-400 text-sm">
          For Government Ministries & PSUs only.
        </p>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Full Name
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
                  placeholder="Official Name"
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Designation
              </label>
              <div className="relative">
                <FileText
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="e.g. Chief Engineer"
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Ministry / Department */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Ministry / Department / PSU
              </label>
              <div className="relative">
                <Building2
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="ministry"
                  value={formData.ministry}
                  onChange={handleInputChange}
                  placeholder="Ministry Name / PSU Name"
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Official Gov Email (.gov / .nic)
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
                  placeholder="official@ministry.gov.in"
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Key Pain Point */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Key Pain Point
              </label>
              <div className="relative">
                <HelpCircle
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <select
                  name="keyPainPoint"
                  value={formData.keyPainPoint}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none bg-white transition-all appearance-none"
                  required
                >
                  <option value="">Select Primary Challenge...</option>
                  <option value="High Query Volume">High Query Volume</option>
                  <option value="Formatting Issues">Formatting Issues</option>
                  <option value="Historical Data Retrieval">
                    Historical Data Retrieval
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
            <ShieldAlert className="text-blue-600 shrink-0" size={20} />
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>Official Request:</strong> By submitting this form, you
              request a technical demonstration and case study. We may verify
              your credentials.
            </p>
          </div>

          {/* <motion.button
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
                Request Technical Proposal & Case Study{" "}
                <CheckCircle size={20} />
              </>
            )}
          </motion.button> */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="
    relative w-full py-4 px-6 
    bg-slate-900 hover:bg-slate-800 
    text-white rounded-xl font-bold text-lg 
    transition-all flex items-center justify-center gap-2 
    shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
  "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin max-sm:h-4 max-sm:w-4" />
                <span className="max-sm:text-sm">Processing Request...</span>
              </>
            ) : (
              <>
                {/* TEXT */}
                <span className="max-sm:text-sm text-center pr-8 sm:pr-0">
                  Request Technical Proposal &amp; Case Study
                </span>

                {/* ICON */}
                <CheckCircle
                  className="
          h-5 w-5
          max-sm:absolute max-sm:right-4 max-sm:top-1/2 max-sm:-translate-y-1/2
        "
                />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default TenderQueryAuditForm;
