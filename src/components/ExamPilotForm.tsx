import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  AlertCircle,
  Building2,
  Users,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExamPilotForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    universityName: "",
    studentCount: "",
    currentMode: "Paper",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Navigate to thank you page
      navigate("/solutions/university-exam-portal/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Request Pilot Demo
          </h3>
          <p className="text-gray-600">
            Schedule a pilot exam for a single department. Experience the
            security firsthand.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* University Name */}
          <div>
            <label
              htmlFor="universityName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              University Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="text-gray-400" size={18} />
              </div>
              <input
                type="text"
                id="universityName"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                placeholder="e.g. State Technical University"
                value={formData.universityName}
                onChange={(e) =>
                  setFormData({ ...formData, universityName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Number of Students */}
          <div>
            <label
              htmlFor="studentCount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Number of Students <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="text-gray-400" size={18} />
              </div>
              <select
                id="studentCount"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none appearance-none"
                value={formData.studentCount}
                onChange={(e) =>
                  setFormData({ ...formData, studentCount: e.target.value })
                }
              >
                <option value="" disabled>
                  Select range
                </option>
                <option value="<1000">Less than 1,000</option>
                <option value="1000-5000">1,000 - 5,000</option>
                <option value="5000-10000">5,000 - 10,000</option>
                <option value="10000+">10,000+</option>
              </select>
            </div>
          </div>

          {/* Current Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Exam Mode
            </label>
            <div className="grid grid-cols-3 gap-3">
              {["Paper", "Online", "Hybrid"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, currentMode: mode })
                  }
                  className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                    formData.currentMode === mode
                      ? "bg-purple-50 border-purple-500 text-purple-700"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Official Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Official Email (Registrar/VC Office){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={18} />
              </div>
              <input
                type="email"
                id="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                placeholder="registrar@university.edu"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Submitting...
              </>
            ) : (
              <>
                Request Pilot Demo
                <Send size={18} />
              </>
            )}
          </button>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your data is processed securely under ISO 27001 standards.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ExamPilotForm;
