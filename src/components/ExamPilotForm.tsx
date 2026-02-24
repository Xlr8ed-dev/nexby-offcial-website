import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  AlertCircle,
  Building2,
  Users,
  Mail,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ExamPilotForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [loading, setLoading] = useState(true);
  const [serverDown, setServerDown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);
  const [formMeta, setFormMeta] = useState<any>(null);

  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/api/form-endpoint?endpoint=${currentPath}`);

        if (!res.data.success || !res.data.form) {
          throw new Error("Invalid form");
        }

        const form = res.data.form;

        setFormMeta(form);
        setEndpointId(form.endpointId);
        setFormIdState(form.formId);

        const initialValues: Record<string, any> = {};
        form.schema.fields.forEach((field: any) => {
          initialValues[field.id] = field.value ?? "";
        });

        setFormData(initialValues);
      } catch (error: any) {
        console.log("Fetch error:", error);
        setServerDown(true);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [currentPath]);

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getField = (id: string) =>
    formMeta?.schema?.fields?.find((f: any) => f.id === id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.university_name?.trim() ||
      !formData.number_of_students ||
      !formData.current_exam_mode ||
      !formData.official_email?.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        endpointId,
        formId: formIdState,
        response: formData,
      };

      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");
        navigate("/solutions/university-exam-portal/thank-you");
      } else {
        toast.error(
          res.data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error: any) {
      if (!error.response || error.response.status >= 500) {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-pulse space-y-6">
        <div className="h-6 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-12 bg-gray-200 rounded-xl" />
        <div className="h-12 bg-gray-200 rounded-xl" />
        <div className="h-12 bg-gray-200 rounded-xl" />
        <div className="h-12 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  if (serverDown && !formMeta) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Kindly contact our sales team
        </h3>

        <p className="text-gray-600 mb-6">
          Please reach out using the details below.
        </p>

        <div className="space-y-3 text-gray-800">
          <p>
            📧 Email:{" "}
            <a href="mailto:hello@nexby.ai" className="underline font-semibold">
              hello@nexby.ai
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+919892048816" className="underline font-semibold">
              +91 98920 48816
            </a>
          </p>
        </div>
      </div>
    );
  }

  const university = getField("university_name");
  const students = getField("number_of_students");
  const mode = getField("current_exam_mode");
  const email = getField("official_email");

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {formMeta.title}
          </h3>
          <p className="text-gray-600">{formMeta.description}</p>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-200">
            * All fields are mandatory
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {university?.label}
              {university?.required && <span className="text-red-500"> *</span>}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Building2 className="text-gray-400" size={18} />
              </div>
              <input
                type="text"
                // required={university?.required}
                disabled={university?.disabled}
                placeholder={university?.placeholder}
                value={formData.university_name}
                onChange={(e) =>
                  handleChange("university_name", e.target.value)
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {students?.label}
              {students?.required && <span className="text-red-500"> *</span>}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Users className="text-gray-400" size={18} />
              </div>

              <select
                // required={students?.required}
                disabled={students?.disabled}
                value={formData.number_of_students}
                onChange={(e) =>
                  handleChange("number_of_students", e.target.value)
                }
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <option value="">{students?.placeholder}</option>

                {students?.options?.map((opt: string) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {mode?.label}
            </label>

            <div className="grid grid-cols-3 gap-3">
              {mode?.options?.map((opt: string) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleChange("current_exam_mode", opt)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                    formData.current_exam_mode === opt
                      ? "bg-purple-50 border-purple-500 text-purple-700"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {email?.label}
              {email?.required && <span className="text-red-500"> *</span>}
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Mail className="text-gray-400" size={18} />
              </div>

              <input
                type="email"
                // required={email?.required}
                disabled={email?.disabled}
                placeholder={email?.placeholder}
                value={formData.official_email}
                onChange={(e) => handleChange("official_email", e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Submitting...
              </>
            ) : (
              <>
                {formMeta.submitButtonText}
                <Send size={18} />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your data is processed securely under ISO 27001 standards.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ExamPilotForm;
