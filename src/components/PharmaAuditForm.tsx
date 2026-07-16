import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  User,
  CheckCircle,
  ArrowRight,
  Loader2,
  FlaskConical,
  FileText,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const PharmaAuditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [formMeta, setFormMeta] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/api/form-endpoint?endpoint=${currentPath}`);
        if (!res.data.success) throw new Error();

        const form = res.data.form;

        setFormMeta(form);
        setEndpointId(form.endpointId);
        setFormIdState(form.formId);

        const initial: any = {};
        form.schema.fields.forEach((f: any) => {
          initial[f.id] = "";
        });

        setFormData(initial);
      } catch {
        setServerError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [currentPath]);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = async () => {
    const fields = formMeta.schema.fields.filter((f: any) => f.step === step);

    const hasEmpty = fields.some((field: any) => {
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

    if (step === 1) {
      setIsAnalyzing(true);
      await new Promise((r) => setTimeout(r, 1500));
      setIsAnalyzing(false);
    }

    setStep(step + 1);
  };
  const handleSubmit = async () => {
    const fields = formMeta.schema.fields.filter((f: any) => f.step === 4);

    const hasEmpty = fields.some((field: any) => {
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
    try {
      const payload = {
        endpointId,
        formId: formIdState,
        response: formData,
      };

      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");
        navigate("/solutions/industry/pharma/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch {
      toast.error("Something went wrong.");
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-pulse">
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-4 w-40 bg-slate-700 rounded"></div>
            <div className="h-3 w-24 bg-slate-700 rounded"></div>
          </div>

          <div className="flex gap-2">
            <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
            <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
            <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
            <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="h-6 w-2/3 bg-slate-200 rounded"></div>
          <div className="h-12 bg-slate-200 rounded-xl"></div>
          <div className="h-12 bg-slate-200 rounded-xl"></div>
          <div className="h-12 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (serverError) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center border border-slate-100">
        {/* <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-3xl">⚠️</span>
        </div> */}

        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Kindly contact our sales team
        </h3>

        <p className="text-slate-600 mb-6">
          Please reach out using the details below.
        </p>

        <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 space-y-1">
          <p>📧 hello@nexby.ai</p>
          <p>📞 +91 98920 48816</p>
        </div>
      </div>
    );
  }

  const fieldsForStep = formMeta.schema.fields.filter(
    (f: any) => f.step === step,
  );

  const groupTitle = fieldsForStep[0]?.group;
  const descriptionParts = formMeta.description.split(". ");
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-visible border border-slate-100">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{formMeta.title}</h3>
          <p className="text-slate-400 text-sm">Step {step} of 4</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full ${
                i <= step ? "bg-cyan-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-cyan-600" size={36} />
                </div>
                {/* 
                <h4 className="text-3xl font-bold text-slate-900 mb-3">
                  {formMeta.description}
                </h4> */}
                <h2 className="text-3xl font-bold text-slate-800">
                  {descriptionParts[0]}.
                </h2>

                <p className="mt-4 text-lg text-slate-600">
                  {descriptionParts[1]}
                </p>
                <div className="mt-3">
                  <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-200">
                    * All fields are mandatory
                  </span>
                </div>
                {fieldsForStep.map((field: any) => (
                  <div key={field.id} className="mt-8 text-left">
                    <label htmlFor={field.id} className="block text-sm font-semibold mb-3">
{field.label}
                    </label>
                    <input id={field.id} type={field.type}
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 outline-none"
                    />
                  </div>
                ))}
              </div>
            )}

            {groupTitle && step !== 1 && (
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  {groupTitle === "Pharma Profile" && (
                    <FlaskConical className="text-cyan-600" size={20} />
                  )}

                  {groupTitle === "Operational Volume" && (
                    <FileText className="text-cyan-600" size={20} />
                  )}

                  {groupTitle === "Final Details" && (
                    <User className="text-cyan-600" size={20} />
                  )}
                </div>

                <h4 className="text-2xl font-bold text-slate-900">
                  {groupTitle}
                </h4>
              </div>
            )}

            {step === 4 ? (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {["full_name", "designation"].map((id) => {
                    const field = fieldsForStep.find((f: any) => f.id === id);
                    if (!field) return null;

                    return (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-bold mb-2">
{field.label}
                        </label>
                        <input id={field.id} type={field.type}
                          value={formData[field.id]}
                          onChange={(e) =>
                            handleChange(field.id, e.target.value)
                          }
                          className="w-full p-3 rounded-xl border border-slate-300"
                        />
                      </div>
                    );
                  })}
                </div>

                {fieldsForStep
                  .filter(
                    (f: any) => f.id !== "full_name" && f.id !== "designation",
                  )
                  .map((field: any) => (
                    <div key={field.id} className="mb-6">
                      <label htmlFor={field.id} className="block text-sm font-bold mb-2">
{field.label}
                      </label>

                      {field.type === "tel" ? (
                        <PhoneInput
                          country="in"
                          value={formData[field.id]}
                          onChange={(phone) => handleChange(field.id, phone)}
                          enableSearch
                          inputClass="!w-full !h-12 !border !rounded-lg"
                        />
                      ) : (
                        <input id={field.id} type={field.type}
                          value={formData[field.id]}
                          onChange={(e) =>
                            handleChange(field.id, e.target.value)
                          }
                          className="w-full p-3 border rounded-lg"
                        />
                      )}
                    </div>
                  ))}
              </>
            ) : (
              step !== 1 &&
              fieldsForStep.map((field: any) => (
                <div key={field.id} className="mb-6">
                  <label htmlFor={field.id} className="block text-sm font-bold mb-2">
{field.label}
                  </label>

                  {field.type === "select" && (
                    <select id={field.id} value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="w-full p-3 border rounded-lg"
                    >
                      <option value="">
                        {field.placeholder || "Select..."}
                      </option>
                      {field.options?.map((opt: string) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  )}

                  {field.type === "radio" && (
                    <div className="space-y-3 mt-4">
                      {field.options?.map((option: string) => {
                        const selected = formData[field.id] === option;

                        return (
                          <label
                            key={option}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selected
                                ? "border-cyan-500 bg-cyan-50"
                                : "border-slate-200 hover:border-cyan-300"
                            }`}
                          >
                            <input
                              type="radio"
                              checked={selected}
                              onChange={() => handleChange(field.id, option)}
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {field.type !== "select" &&
                    field.type !== "radio" &&
                    field.type !== "tel" && (
                      <input id={field.id} type={field.type}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder} // ✅ ADD THIS LINE
                        className="w-full p-3 border rounded-lg"
                      />
                    )}
                </div>
              ))
            )}

            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={step === 1 && !formData.company_url}
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {step === 1 && isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze & Proceed <ArrowRight size={20} />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                {formMeta.submitButtonText}
                <CheckCircle size={20} />
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PharmaAuditForm;
