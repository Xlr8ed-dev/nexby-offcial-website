import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  User,
  Mail,
  Building2,
  FileText,
  HelpCircle,
  CheckCircle,
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

const TenderQueryAuditForm = () => {
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

    setIsSubmitting(true);

    const payload = {
      endpointId,
      formId,
      response: formData,
    };

    try {
      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Request submitted successfully 🎉");
        navigate("/solutions/government/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed.");
      }
    } catch (error: any) {
      if (!error.response || error.response.status >= 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10 animate-pulse">
        <div className="h-6 w-56 bg-slate-200 rounded mb-6"></div>
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

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200">
      <div className="bg-slate-900 p-6 text-white border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="text-red-500" size={22} />
          <h3 className="text-xl font-bold">{formMeta.title}</h3>
        </div>
        <p className="text-slate-400 text-sm">{formMeta.description}</p>
      </div>

      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {formMeta.schema.fields.map((field: any) => {
              const isFullWidth =
                field.id === "department" ||
                field.id === "official_email" ||
                field.id === "key_pain_point";

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
                      <HelpCircle
                        className="absolute left-3 top-3.5 text-slate-400"
                        size={18}
                      />
                      <select
                        required={field.required}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-600 outline-none bg-white"
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt: string, i: number) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="relative">
                      {field.id === "full_name" && (
                        <User
                          className="absolute left-3 top-3.5 text-slate-400"
                          size={18}
                        />
                      )}
                      {field.id === "designation" && (
                        <FileText
                          className="absolute left-3 top-3.5 text-slate-400"
                          size={18}
                        />
                      )}
                      {field.id === "department" && (
                        <Building2
                          className="absolute left-3 top-3.5 text-slate-400"
                          size={18}
                        />
                      )}
                      {field.id === "official_email" && (
                        <Mail
                          className="absolute left-3 top-3.5 text-slate-400"
                          size={18}
                        />
                      )}

                      <input
                        type={field.type}
                        required={field.required}
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

          <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
            <ShieldAlert className="text-blue-600 shrink-0" size={20} />
            <p className="text-xs text-blue-800">
              <strong>Official Request:</strong> We may verify your credentials
              before sharing documentation.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Processing Request...
              </>
            ) : (
              <>
                {formMeta.submitButtonText}
                <CheckCircle size={20} />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default TenderQueryAuditForm;
