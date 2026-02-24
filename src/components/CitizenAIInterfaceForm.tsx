import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  User,
  Building2,
  Mail,
  Users,
  ArrowRight,
  Loader2,
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

const CitizenAIInterfaceForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState(false);

  const [formMeta, setFormMeta] = useState<any>(null);
  const [endpointId, setEndpointId] = useState<number | null>(null);
  const [formId, setFormId] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/api/form-endpoint?endpoint=${currentPath}`);

        if (!res.data.success) throw new Error();

        const form = res.data.form;

        setFormMeta(form);
        setEndpointId(form.endpointId);
        setFormId(form.formId);

        const initial: any = {};
        form.schema.fields.forEach((field: any) => {
          initial[field.id] = "";
        });

        setFormData(initial);
      } catch {
        setServerError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchForm();
  }, [currentPath]);

  const handleChange = (id: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!endpointId || !formId) {
      toast.error("Form configuration missing.");
      return;
    }

    const hasEmpty = formMeta.schema.fields.some((field: any) => {
      const value = formData[field.id];

      if (typeof value === "string") {
        return value.trim() === "";
      }

      return !value;
    });

    if (hasEmpty) {
      toast.error("All fields are required");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      endpointId,
      formId,
      response: formData,
    };

    try {
      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");
        navigate("/solutions/government/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed.");
      }
    } catch (error: any) {
      if (!error.response || error.response.status >= 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🔥 Skeleton
  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10 animate-pulse">
        <div className="h-6 w-60 bg-slate-200 rounded mb-6"></div>
        <div className="h-12 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded"></div>
      </div>
    );
  }

  if (serverError) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Kindly contact our sales team
        </h3>
        <p className="text-slate-600 mb-4">
          Please reach out using the details below.
        </p>
        <p>📧 hello@nexby.ai</p>
        <p>📞 +91 98920 48816</p>
      </div>
    );
  }

  const fields = formMeta.schema.fields;

  const getIcon = (id: string) => {
    switch (id) {
      case "full_name":
        return (
          <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
        );
      case "designation":
        return (
          <User className="absolute left-3 top-3.5 text-slate-400" size={18} />
        );
      case "department":
        return (
          <Building2
            className="absolute left-3 top-3.5 text-slate-400"
            size={18}
          />
        );
      case "official_email":
        return (
          <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
        );
      case "target_audience_size":
        return (
          <Users className="absolute left-3 top-3.5 text-slate-400" size={18} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200">
      <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="text-blue-500" size={24} />
          <h3 className="text-xl font-bold tracking-tight">{formMeta.title}</h3>
        </div>
        <p className="text-slate-400 text-sm">{formMeta.description}</p>
        <div className="mt-3">
          <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-200">
            * All fields are mandatory
          </span>
        </div>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field: any) => {
              const isFullWidth =
                field.id === "department" ||
                field.id === "official_email" ||
                field.id === "target_audience_size";

              return (
                <div
                  key={field.id}
                  className={isFullWidth ? "md:col-span-2" : ""}
                >
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {field.label}
                  </label>

                  {field.type === "select" ? (
                    <div className="relative">
                      {getIcon(field.id)}
                      <select
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className="w-full p-3 pl-10 rounded-lg border border-slate-300 bg-white focus:border-blue-600 outline-none"
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt: string) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="relative">
                      {getIcon(field.id)}
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none transition-all"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="relative w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Processing Request...
              </>
            ) : (
              <>
                <span className="pr-8 sm:pr-0">
                  {formMeta.submitButtonText}
                </span>
                <ArrowRight className="h-5 w-5 max-sm:absolute max-sm:right-4 max-sm:top-1/2 max-sm:-translate-y-1/2" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default CitizenAIInterfaceForm;
