import { useState, useEffect } from "react";
import { Globe, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
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

const RealEstateAuditForm = () => {
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

        setFormMeta(res.data.form);
        setEndpointId(res.data.form.endpointId);
        setFormIdState(res.data.form.formId);

        const initial: any = {};
        res.data.form.schema.fields.forEach((f: any) => {
          initial[f.id] = "";
        });
        setFormData(initial);
      } catch (error) {
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
    const stepFields = formMeta.schema.fields.filter(
      (f: any) => f.step === step,
    );

    for (let field of stepFields) {
      if (!formData[field.id]) {
        toast.error("All fields are required");
        return;
      }
    }

    if (step === 1) {
      setIsAnalyzing(true);
      await new Promise((r) => setTimeout(r, 1500));
      setIsAnalyzing(false);
    }

    setStep(step + 1);
  };

  const handleSubmit = async () => {
    for (let key in formData) {
      if (!formData[key]) {
        toast.error("All fields are required");
        return;
      }
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
        navigate("/solutions/industry/real-estate/thank-you");
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

      <div className="p-8">
        {step === 1 && (
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-blue-600" size={32} />
            </div>
            {/* <h4 className="text-2xl font-bold mb-2">{formMeta.description}</h4> */}
            <h2 className="text-3xl font-bold text-slate-800">
              {descriptionParts[0]}.
            </h2>

            <p className="mt-4 text-lg text-slate-600">{descriptionParts[1]}</p>
            <div className="mt-3">
              <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-red-200">
                * All fields are mandatory
              </span>
            </div>
          </div>
        )}

        {fieldsForStep[0]?.group && (
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <ellipse cx="12" cy="5" rx="7" ry="3" />
                  <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                  <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                </svg>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                {fieldsForStep[0].group}
              </h4>
            </div>
          </div>
        )}

        {step === 4 ? (
          <>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {fieldsForStep.slice(0, 2).map((field: any) => (
                <div key={field.id}>
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
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full p-3 border rounded-lg"
                    />
                  )}
                </div>
              ))}
            </div>

            {fieldsForStep.slice(2).map((field: any) => (
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
                    onChange={(e) => handleChange(field.id, e.target.value)}
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
                <div className="space-y-3">
                  {field.options.map((opt: string) => (
                    <label
                      key={opt}
                      className={`
          flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
          ${
            formData[field.id] === opt
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-blue-300"
          }
        `}
                    >
                      <input
                        type="radio"
                        value={opt}
                        checked={formData[field.id] === opt}
                        onChange={() => handleChange(field.id, opt)}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                      />

                      <span className="ml-3 font-medium text-slate-700">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
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
            className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 ${
              step === 1 && !formData.company_url
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {step === 1 && isAnalyzing ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze & Proceed
                <ArrowRight size={20} />
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
      </div>
    </div>
  );
};

export default RealEstateAuditForm;
