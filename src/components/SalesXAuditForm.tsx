import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  User,
  Briefcase,
  Mail,
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

const SalesXAuditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [formMeta, setFormMeta] = useState<any>(null);
  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);
  const [formData, setFormData] = useState<any>({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [serverDown, setServerDown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          initial[f.id] = f.value || "";
        });

        setFormData(initial);
      } catch {
        setServerDown(true);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [currentPath]);

  const handleChange = (id: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [id]: value }));
  };

  const fieldsForStep =
    formMeta?.schema?.fields?.filter((f: any) => f.step === step) || [];

  const isStepValid = fieldsForStep.every(
    (field: any) => !field.required || formData[field.id],
  );

  const handleNext = () => {
    if (!isStepValid) {
      toast.error("All fields are required");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    if (!isStepValid) {
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
        navigate("/products/salesx/thank-you");
      } else {
        toast.error(
          res.data.message || "Something went wrong. Please try again.",
        );
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

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-pulse">
        <div className="h-6 bg-slate-200 rounded mb-4" />
        <div className="h-12 bg-slate-200 rounded mb-4" />
        <div className="h-12 bg-slate-200 rounded" />
      </div>
    );
  }

  if (serverDown && !formMeta) {
    return (
      <div className="flex justify-center px-6 mt-16">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-xl w-full">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Kindly contact our sales team
          </h3>
          <p className="mb-6 text-slate-600">
            Please reach out using the details below.
          </p>
          <div className="space-y-2 text-slate-800">
            <p>📧 hello@nexby.ai</p>
            <p>📞 +91 98920 48816</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-visible border border-slate-100">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{formMeta.title}</h3>
          <p className="text-slate-400 text-sm">Step {step} of 2</p>
        </div>
        <div className="flex gap-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full ${i <= step ? "bg-blue-500" : "bg-slate-700"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {step === 1 && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    {formMeta.description}
                  </h4>
                  <div className="mt-3">
                    <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-200">
                      * All fields are mandatory
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {fieldsForStep.map((field: any) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-bold text-slate-700 mb-3">
{field.label}
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        {field.options?.map((opt: string) => (
                          <label
                            key={opt}
                            className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                              formData[field.id] === opt
                                ? "border-blue-500 bg-blue-50 text-blue-700 font-bold"
                                : "border-slate-200 hover:border-blue-300 text-slate-600"
                            }`}
                          >
                            <input
                              type="radio"
                              value={opt}
                              checked={formData[field.id] === opt}
                              onChange={() => handleChange(field.id, opt)}
                              className="hidden"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!isStepValid}
                  className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  Next Step <ArrowRight size={20} />
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <User className="text-blue-600" /> Your Details
                </h4>
                {/* <div className="mb-3">
                  <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full border border-red-200">
                    * All fields are mandatory
                  </span>
                </div> */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fieldsForStep
                      .filter(
                        (f: any) =>
                          f.id === "full_name" || f.id === "designation",
                      )
                      .map((field: any) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-sm font-bold text-slate-700 mb-2">
{field.label}
                          </label>

                          <div className="relative">
                            {field.id === "designation" && (
                              <Briefcase
                                className="absolute left-3 top-3.5 text-slate-400"
                                size={18}
                              />
                            )}

                            <input id={field.id} type="text"
                              required={field.required}
                              value={formData[field.id]}
                              onChange={(e) =>
                                handleChange(field.id, e.target.value)
                              }
                              className={`w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900 ${
                                field.id === "designation" ? "pl-10" : ""
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {fieldsForStep
                    .filter((f: any) => f.id === "company_name")
                    .map((field: any) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-bold text-slate-700 mb-2">
{field.label}
                        </label>

                        <input id={field.id} type="text"
                          required={field.required}
                          value={formData[field.id]}
                          onChange={(e) =>
                            handleChange(field.id, e.target.value)
                          }
                          className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                        />
                      </div>
                    ))}

                  {fieldsForStep
                    .filter((f: any) => f.id === "work_email")
                    .map((field: any) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-bold text-slate-700 mb-2">
{field.label}
                        </label>

                        <div className="relative">
                          <Mail
                            className="absolute left-3 top-3.5 text-slate-400"
                            size={18}
                          />

                          <input id={field.id} type="email"
                            required={field.required}
                            value={formData[field.id]}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            className="w-full p-3 pl-10 rounded-lg border border-slate-300 focus:border-blue-500 outline-none text-slate-900"
                          />
                        </div>
                      </div>
                    ))}

                  {fieldsForStep
                    .filter((f: any) => f.type === "tel")
                    .map((field: any) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-bold text-slate-700 mb-2">
{field.label}
                        </label>
                        <style>
                          {`
      .react-tel-input .country-list {
        background-color: #ffffff !important;
      }

      .react-tel-input .country-list .country {
        color: #111827 !important;
      }

      .react-tel-input .country-list .country .dial-code {
        color: #6b7280 !important;
      }

      .react-tel-input .country-list .country:hover {
        background-color: #f3f4f6 !important;
      }

      .react-tel-input .search-box {
        color: #111827 !important;
      }
    `}
                        </style>
                        <PhoneInput
                          country={"in"}
                          enableSearch
                          value={formData[field.id]}
                          onChange={(phone) => handleChange(field.id, phone)}
                          inputClass="!w-full !h-[48px] !rounded-lg !border !border-slate-300 !pl-[60px] !text-slate-900 !bg-white focus:!border-blue-500"
                          buttonClass="!border-none !bg-transparent"
                          containerClass="!w-full"
                          dropdownClass="!rounded-xl !shadow-lg !border !border-slate-200"
                          searchClass="!w-full !p-2"
                        />
                      </div>
                    ))}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {formMeta.submitButtonText}
                      <CheckCircle size={20} />
                    </>
                  )}
                </button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SalesXAuditForm;
