import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TrendingUp, BarChart2 } from "lucide-react";
import axios from "axios";
import { Shield, DollarSign, GraduationCap, TrendingDown } from "lucide-react";
import type { ReactNode } from "react";

import { toast } from "react-toastify";

const goalIcons: Record<string, ReactNode> = {
  "Compliance & Risk": <Shield size={14} className="text-blue-500" />,
  "Sales Performance": <DollarSign size={14} className="text-orange-500" />,
  "Agent Coaching": <GraduationCap size={14} className="text-purple-500" />,
  "Churn Reduction": <TrendingDown size={14} className="text-pink-500" />,
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
  },
});

const CallAnalyserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [formMeta, setFormMeta] = useState<any>(null);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/api/form-endpoint?endpoint=${currentPath}`);

        if (!res.data.success || !res.data.form) {
          throw new Error("Invalid form data");
        }

        const form = res.data.form;

        setFormMeta(form);
        setEndpointId(form.endpointId);
        setFormIdState(form.formId);

        const initialValues: Record<string, any> = {};
        form.schema.fields.forEach((field: any) => {
          initialValues[field.id] = field.value ?? "";
        });

        setFormValues(initialValues);
      } catch (error: any) {
        console.log("Fetch form error:", error);
        setServerError("SERVER_DOWN");
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [currentPath]);

  const handleChange = (id: string, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getField = (id: string) =>
    formMeta?.schema?.fields?.find((f: any) => f.id === id);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const payload = {
      endpointId,
      formId: formIdState,
      response: formValues,
    };

    try {
      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");
        navigate("/products/call-analyser/thank-you");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error: any) {
      console.log("Submit error:", error);

      if (error.code === "ERR_NETWORK" || !error.response) {
        setServerError(
          "Server is temporarily unavailable. Please contact support@yourcompany.com or call +1 234 567 8900. Our team will reach out shortly.",
        );
        return;
      }

      if (error.response.status >= 500) {
        setServerError(
          "Server is temporarily unavailable. Please contact support@yourcompany.com or call +1 234 567 8900. Our team will reach out shortly.",
        );
        return;
      }

      toast.error("Something went wrong. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 animate-pulse space-y-6">
        <div className="h-8 bg-slate-200 rounded w-1/2 mx-auto" />
        <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto" />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="h-11 bg-slate-200 rounded-xl" />
          <div className="h-11 bg-slate-200 rounded-xl" />
        </div>
        <div className="h-11 bg-slate-200 rounded-xl" />
        <div className="h-40 bg-slate-200 rounded-2xl" />
        <div className="h-14 bg-slate-200 rounded-full" />
      </div>
    );
  }

  if (serverError && !formMeta) {
    return (
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <div className="bg-white rounded-3xl p-12 text-center shadow-lg border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Kindly contact our sales team
          </h3>

          <p className="text-slate-600 mb-8">
            Please reach out using the details below.
          </p>

          <div className="space-y-4 text-lg text-slate-800">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:hello@nexby.ai"
                className="font-semibold underline hover:text-black transition"
              >
                hello@nexby.ai
              </a>
            </p>

            <p>
              📞 Phone:{" "}
              <a
                href="tel:+919892048816"
                className="font-semibold underline hover:text-black transition"
              >
                +91 98920 48816
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const fullName = getField("full_name");
  const email = getField("work_email");
  const company = getField("company_name");
  const callVolume = getField("call_volume");
  const qaProcess = getField("current_qa_process");
  const goal = getField("goal");

  return (
    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          {formMeta.title}
        </h3>
        <p className="text-slate-600">{formMeta.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold mb-2 block">
              {fullName?.label}
            </label>
            <input
              type="text"
              placeholder={fullName?.placeholder}
              required={fullName?.required}
              disabled={fullName?.disabled}
              value={formValues.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
              className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">
              {email?.label}
            </label>
            <input
              type="email"
              placeholder={email?.placeholder}
              required={email?.required}
              disabled={email?.disabled}
              value={formValues.work_email}
              onChange={(e) => handleChange("work_email", e.target.value)}
              className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold mb-2 block">
            {company?.label}
          </label>
          <input
            type="text"
            placeholder={company?.placeholder}
            required={company?.required}
            disabled={company?.disabled}
            value={formValues.company_name}
            onChange={(e) => handleChange("company_name", e.target.value)}
            className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart2 size={20} className="text-purple-600" />
            {callVolume?.group}
          </h4>

          <div>
            <label className="text-sm font-semibold mb-3 block">
              {callVolume?.label}:{" "}
              <span className="text-purple-600 font-bold">
                {Number(formValues.call_volume || 0).toLocaleString()}
                {Number(formValues.call_volume) >= callVolume?.max ? "+" : ""}
              </span>
            </label>

            <input
              type="range"
              min={callVolume?.min}
              max={callVolume?.max}
              step={callVolume?.step}
              value={formValues.call_volume || 0}
              onChange={(e) =>
                handleChange("call_volume", Number(e.target.value))
              }
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-purple-600
              [&::-webkit-slider-thumb]:shadow-lg"
            />

            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{callVolume?.min}</span>
              <span>{callVolume?.max / 2 / 1000}k</span>
              <span>{callVolume?.max}+</span>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold mb-2 block">
              {qaProcess?.label}
            </label>
            <select
              value={formValues.current_qa_process}
              onChange={(e) =>
                handleChange("current_qa_process", e.target.value)
              }
              className="w-full h-11 rounded-xl border px-4"
            >
              <option value="">{qaProcess?.placeholder}</option>
              {qaProcess?.options?.map((opt: string) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
            <TrendingUp size={18} className="text-purple-600" />
            {goal?.label}
          </label>

          <div className="flex flex-wrap gap-2">
            {goal?.options?.map((opt: string) => (
              <button
                type="button"
                key={opt}
                onClick={() => handleChange("goal", opt)}
                className={`flex items-center gap-2 text-xs border rounded-full px-3 py-1.5 font-medium transition-all ${
                  formValues.goal === opt
                    ? "bg-purple-100 border-purple-400 text-purple-700"
                    : "bg-white border-slate-300 text-slate-600 hover:border-purple-400"
                }`}
              >
                {goalIcons[opt]}
                {opt}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          {formMeta.submitButtonText}
        </button>

        <p className="text-center text-xs text-slate-500 mt-4">
          Your data is secure. We calculate L1 fit based on volume and use-case
          fit.
        </p>
      </form>
    </div>
  );
};

export default CallAnalyserForm;
