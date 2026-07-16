import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle, Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const GovernmentAuditForm = () => {
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

    // if (!formData.mobile_number) {
    //   toast.error("Direct Phone Line is required");
    //   return;
    // }
    if (
      !formData.full_name?.trim() ||
      !formData.designation?.trim() ||
      !formData.department?.trim() ||
      !formData.country_state ||
      !formData.use_case_category ||
      !formData.official_email?.trim() ||
      !formData.mobile_number
    ) {
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
      const res = await api.post(`/api/form/submit`, payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");

        setTimeout(() => {
          navigate("/solutions/government/thank-you");
        }, 1200);
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
  const getField = (id: string) => fields.find((f: any) => f.id === id);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200">
      <div className="bg-slate-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-1">
          <ShieldAlert className="text-red-500" size={22} />
          <h3 className="text-xl font-bold">{formMeta.title}</h3>
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
          <div className="grid md:grid-cols-2 gap-6">
            {["full_name", "designation"].map((id) => {
              const field = getField(id);
              if (!field) return null;

              return (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-bold mb-2">
{field.label}
                  </label>
                  <input id={field.id} type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 outline-none"
                  />
                </div>
              );
            })}
          </div>

          {getField("department") && (
            <div>
              <label htmlFor="department" className="block text-sm font-bold mb-2">
{getField("department").label}
</label>
              <input id="department" type="text" placeholder={getField("department").placeholder}
                value={formData["department"]}
                onChange={(e) => handleChange("department", e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 outline-none"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {["country_state", "use_case_category"].map((id) => {
              const field = getField(id);
              if (!field) return null;

              return (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-bold mb-2">
{field.label}
                  </label>

                  {field.type === "select" ? (
                    <select id={field.id} value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 outline-none"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((opt: string, i: number) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input id={field.id} type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 outline-none"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {getField("official_email") && (
              <div>
                <label htmlFor="official_email" className="block text-sm font-bold mb-2">
{getField("official_email").label}
</label>
                <input id="official_email" type="email" placeholder={getField("official_email").placeholder}
                  value={formData["official_email"]}
                  onChange={(e) =>
                    handleChange("official_email", e.target.value)
                  }
                  className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-600 outline-none"
                />
              </div>
            )}

            {getField("mobile_number") && (
              <div>
                <label className="block text-sm font-bold mb-2">
                  {getField("mobile_number").label}
                </label>
                <PhoneInput
                  country="in"
                  value={formData["mobile_number"]}
                  onChange={(phone) => handleChange("mobile_number", phone)}
                  enableSearch
                  inputClass="!w-full !h-[48px] !rounded-xl !border !border-slate-300 focus:!border-blue-600"
                  buttonClass="!border !border-slate-300 !rounded-l-xl"
                  containerClass="!w-full"
                />
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Verifying...
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

export default GovernmentAuditForm;
