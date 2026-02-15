import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  MapPin,
  FileText,
  ArrowRight,
  CheckCircle,
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
    "ngrok-skip-browser-warning": "true",
  },
});

const PartnershipForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [serverDown, setServerDown] = useState(false);

  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);
  const [formMeta, setFormMeta] = useState<any>(null);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/api/form-endpoint?endpoint=${currentPath}`);

        if (res.data.success) {
          const form = res.data.form;
          setFormMeta(form);
          setEndpointId(form.endpointId);
          setFormIdState(form.formId);

          const initial: any = {};
          form.schema.fields.forEach((f: any) => {
            initial[f.id] = "";
          });
          setFormData(initial);
        }
      } catch (error: any) {
        if (!error.response || error.response.status >= 500) {
          setServerDown(true);
        } else {
          toast.error("Unable to load form. Please try again.");
        }
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
    formMeta?.schema.fields.filter((f: any) => f.step === step) || [];

  const isStepValid = fieldsForStep.every(
    (field: any) => !field.required || formData[field.id],
  );

  const handleNext = () => {
    if (isStepValid) setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    if (!isStepValid) return;

    setIsSubmitting(true);

    try {
      const payload = {
        endpointId,
        formId: formIdState,
        response: formData,
      };

      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Application submitted successfully 🎉");
        navigate("/partnerships/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
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
      <div className="bg-white rounded-3xl shadow-2xl p-8 animate-pulse max-w-2xl mx-auto">
        <div className="h-6 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded"></div>
      </div>
    );
  }

  if (serverDown && !formMeta) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-10 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Kindly contact our sales team
        </h3>

        <p className="text-slate-600 mb-6">
          Please reach out using the details below.
        </p>

        <div className="space-y-3 text-slate-800">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:hello@nexby.ai"
              className="underline font-semibold hover:text-black transition"
            >
              hello@nexby.ai
            </a>
          </p>

          <p>
            📞 Phone:{" "}
            <a
              href="tel:+919892048816"
              className="underline font-semibold hover:text-black transition"
            >
              +91 98920 48816
            </a>
          </p>
        </div>
      </div>
    );
  }

  const groupTitle = fieldsForStep[0]?.group;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center rounded-t-3xl">
        <div>
          <h3 className="text-xl font-bold">{formMeta?.title}</h3>
          <p className="text-slate-400 text-sm">Step {step} of 3</p>
        </div>

        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full ${
                i <= step ? "bg-cyan-500" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 min-h-[420px] flex flex-col">
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
            {/* Step Icon + Heading */}
            {/* <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {step === 1 && (
                  <Handshake className="text-cyan-600" size={28} />
                )}
                {step === 2 && <MapPin className="text-cyan-600" size={28} />}
                {step === 3 && <FileText className="text-cyan-600" size={28} />}
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                {groupTitle || formMeta?.description}
              </h4>
            </div> */}
            <div className="mb-8">
              {step === 1 ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="text-cyan-600" size={28} />
                  </div>

                  {/* <h4 className="text-3xl font-bold text-slate-900 mb-3">
                    {formMeta.description.split(".")[0]}.
                  </h4>

                  <p className="text-lg text-slate-600">
                    {formMeta.description.split(".").slice(1).join(".").trim()}
                  </p> */}
                  <h4 className="text-3xl font-bold text-slate-900 mb-3">
                    {formMeta?.description?.split(".")[0] || ""}
                    {formMeta?.description?.includes(".") ? "." : ""}
                  </h4>

                  <p className="text-lg text-slate-600">
                    {formMeta?.description
                      ?.split(".")
                      ?.slice(1)
                      ?.join(".")
                      ?.trim() || ""}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    {step === 2 && (
                      <MapPin className="text-cyan-600" size={20} />
                    )}
                    {step === 3 && (
                      <FileText className="text-cyan-600" size={20} />
                    )}
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900">
                    {groupTitle}
                  </h4>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {fieldsForStep.map((field: any) => (
                <div key={field.id}>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {field.label}
                  </label>

                  {field.type === "select" && (
                    <select
                      required={field.required}
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 bg-white"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((opt: string) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  )}

                  {field.type === "tel" && (
                    <PhoneInput
                      country="in"
                      value={formData[field.id]}
                      onChange={(phone) => handleChange(field.id, phone)}
                      enableSearch
                      inputClass="!w-full !h-[48px] !rounded-xl !border !border-slate-300"
                      containerClass="!w-full"
                    />
                  )}

                  {field.type === "textarea" && (
                    <textarea
                      required={field.required}
                      value={formData[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      rows={5}
                      className="w-full p-4 rounded-xl border border-slate-300 resize-none"
                    />
                  )}

                  {field.type !== "select" &&
                    field.type !== "tel" &&
                    field.type !== "textarea" && (
                      <input
                        type={field.type}
                        required={field.required}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full p-3 rounded-xl border border-slate-300"
                      />
                    )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              {step < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid}
                  className="w-full py-4 bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  Next Step <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid || isSubmitting}
                  className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-40"
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
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PartnershipForm;
