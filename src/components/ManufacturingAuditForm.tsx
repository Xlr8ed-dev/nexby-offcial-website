import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Factory,
  FileText,
  User,
  CheckCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
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

const ManufacturingAuditForm = () => {
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

        if (!res.data.success) throw new Error("Invalid response");

        const form = res.data.form;

        setFormMeta(form);
        setEndpointId(form.endpointId);
        setFormIdState(form.formId);

        const initial: any = {};
        form.schema.fields.forEach((f: any) => {
          initial[f.id] = "";
        });

        setFormData(initial);
      } catch (err) {
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

    // for (let field of fields) {
    //   if (field.required && !formData[field.id]) {
    //     toast.error(`${field.label} is required`);
    //     return;
    //   }
    // }
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
        navigate("/solutions/industry/manufacturing/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error: any) {
      if (
        error.code === "ERR_NETWORK" ||
        !error.response ||
        error.response.status >= 500
      ) {
        setServerError(true);
        return;
      }

      toast.error("Something went wrong. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 animate-pulse">
        <div className="h-6 bg-slate-200 w-1/2 rounded mb-6"></div>
        <div className="h-12 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded"></div>
      </div>
    );
  }

  if (serverError) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Kindly contact our sales team
        </h3>
        <p className="mb-6 text-slate-600">
          Please reach out using the details below.
        </p>
        <p>📧 hello@nexby.ai</p>
        <p>📞 +91 98920 48816</p>
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
                i <= step ? "bg-blue-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-blue-600" size={32} />
                </div>
                {/* <h4 className="text-2xl font-bold text-slate-900 mb-2">
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
              </div>
            )}

            {/* Group Title */}
            {/* {groupTitle && step !== 1 && (
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                {groupTitle}
              </h4>
            )} */}
            {groupTitle && step !== 1 && (
              <div className="flex items-center gap-3 mb-6">
                {groupTitle === "Manufacturing Profile" && (
                  <Factory className="text-blue-600" size={24} />
                )}

                {groupTitle === "Operational Volume" && (
                  <FileText className="text-blue-600" size={24} />
                )}

                {groupTitle === "Final Details" && (
                  <User className="text-blue-600" size={24} />
                )}

                <h4 className="text-2xl font-bold text-slate-900">
                  {groupTitle}
                </h4>
              </div>
            )}

            {step === 4 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {["full_name", "designation"].map((fieldId) => {
                    const field = fieldsForStep.find(
                      (f: any) => f.id === fieldId,
                    );
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
                          className="w-full p-3 rounded-xl border border-slate-300 focus:border-blue-500 outline-none"
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
                          placeholder={field.placeholder}
                          className="w-full p-3 border rounded-lg"
                        />
                      )}
                    </div>
                  ))}
              </>
            ) : (
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
                      <option value="">Select...</option>
                      {field.options?.map((opt: string) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  )}

                  {field.type === "radio" && (
                    <div className="space-y-3 mt-4">
                      {field.options?.map((option: string) => {
                        const isSelected = formData[field.id] === option;

                        return (
                          <label
                            key={option}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              isSelected
                                ? "border-blue-500 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name={field.id}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleChange(field.id, option)}
                              className="w-5 h-5 text-blue-600"
                            />
                            <span className="text-slate-800 font-medium">
                              {option}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {field.type === "tel" && (
                    <PhoneInput
                      country="in"
                      value={formData[field.id]}
                      onChange={(phone) => handleChange(field.id, phone)}
                      enableSearch
                      inputClass="!w-full !h-12 !border !rounded-lg"
                    />
                  )}

                  {field.type !== "select" &&
                    field.type !== "radio" &&
                    field.type !== "tel" && (
                      <input id={field.id} type={field.type}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
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
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
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
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2"
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

export default ManufacturingAuditForm;
