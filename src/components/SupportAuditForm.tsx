import { useState, useEffect } from "react";
import { Zap, Shield, Headphones, Users } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const SupportAuditForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [formMeta, setFormMeta] = useState<any>(null);
  const [endpointId, setEndpointId] = useState<number>(0);
  const [formIdState, setFormIdState] = useState<number>(0);

  const [formData, setFormData] = useState<any>({});
  const [contactMethod, setContactMethod] = useState("Email");

  const [loading, setLoading] = useState(true);
  const [serverDown, setServerDown] = useState(false);

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

  const painPointMap: any = {
    "Repetitive Queries":
      "High volume of repetitive L1 queries (password resets, status checks).",
    "Slow Response": "Response times are too slow during peak hours.",
    "Inconsistent Info": "Agents give inconsistent answers or outdated info.",
    "High Costs": "Support costs are scaling too fast with user growth.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        endpointId,
        formId: formIdState,
        response: formData,
      };

      const res = await api.post("/api/form/submit", payload);

      if (res.data.success) {
        toast.success("Form submitted successfully 🎉");
        navigate("/products/support-assist/thank-you");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      if (!error.response || error.response.status >= 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10 rounded-3xl animate-pulse space-y-6 max-w-3xl mx-auto">
        <div className="h-8 bg-blue-400/20 rounded w-1/2" />
        <div className="h-4 bg-blue-400/20 rounded w-2/3" />
        <div className="h-12 bg-blue-400/20 rounded-xl" />
        <div className="h-12 bg-blue-400/20 rounded-xl" />
        <div className="h-40 bg-blue-400/20 rounded-2xl" />
        <div className="h-14 bg-blue-400/30 rounded-full" />
      </div>
    );
  }
  // if (serverDown) {
  //   return (
  //     <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10 rounded-3xl text-center text-white max-w-3xl mx-auto">
  //       <h3 className="text-3xl font-bold mb-4">Server Unavailable</h3>
  //       <p className="text-blue-200">
  //         Please try again later or contact our support team.
  //       </p>
  //     </div>
  //   );
  // }
  if (serverDown && !formMeta) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 shadow-2xl border border-blue-500/20 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Kindly contact our sales team
        </h3>

        <p className="text-blue-200 text-lg mb-8">
          Please reach out using the details below.
        </p>

        <div className="space-y-4 text-lg text-white">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:hello@nexby.ai"
              className="underline font-semibold hover:text-blue-300 transition"
            >
              hello@nexby.ai
            </a>
          </p>

          <p>
            📞 Phone:{" "}
            <a
              href="tel:+919892048816"
              className="underline font-semibold hover:text-blue-300 transition"
            >
              +91 98920 48816
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 shadow-2xl border border-blue-500/20 max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold text-white mb-2">{formMeta.title}</h3>
      <p className="text-blue-200 mb-8">{formMeta.description}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formMeta.schema.fields
            .filter((f: any) => ["full_name", "work_email"].includes(f.id))
            .map((field: any) => (
              <div key={field.id}>
                <label className="text-white text-sm font-semibold mb-2 block">
                  {field.label} {field.required && "*"}
                </label>
                <input
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 px-4 text-white placeholder-blue-300/50 outline-none focus:border-blue-400"
                />
              </div>
            ))}
        </div>

        {formMeta.schema.fields
          .filter((f: any) => f.id === "company_name")
          .map((field: any) => (
            <div key={field.id}>
              <label className="text-white text-sm font-semibold mb-2 block">
                {field.label} {field.required && "*"}
              </label>
              <input
                type="text"
                required={field.required}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full h-11 rounded-xl border-2 border-blue-400/30 bg-white/10 px-4 text-white placeholder-blue-300/50"
              />
            </div>
          ))}

        {formMeta?.schema.fields
          .filter((field: any) => field.type === "range")
          .map((field: any) => (
            <div
              key={field.id}
              className="bg-white/5 rounded-2xl p-6 border border-blue-400/20 mb-6"
            >
              {field.group && (
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Headphones size={18} className="text-blue-400" />
                  {field.group}
                </h4>
              )}
              <label className="text-blue-300 text-sm block mb-2">
                {field.label}:{" "}
                <span className="text-blue-400 font-semibold">
                  {formData[field.id] || field.min}
                  {field.id === "avg_response_time" ? "h" : ""}
                </span>
              </label>

              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={formData[field.id] || field.min}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full h-2 bg-blue-400/20 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-gradient-to-r
          [&::-webkit-slider-thumb]:from-blue-500
          [&::-webkit-slider-thumb]:to-indigo-500"
              />

              <div className="flex justify-between text-xs text-blue-300 mt-2">
                <span>
                  {field.min}
                  {field.id === "avg_response_time" ? "h" : ""}
                </span>

                <span>
                  {Math.floor((field.max + field.min) / 2)}
                  {field.id === "avg_response_time" ? "h" : ""}
                </span>

                <span>
                  {field.max}
                  {field.id === "avg_response_time" ? "h+" : "+"}
                </span>
              </div>
            </div>
          ))}

        <div>
          <label className="text-white font-semibold flex items-center gap-2 mb-4">
            <Shield size={16} className="text-yellow-400" />
            What's your biggest support pain point?
          </label>

          <div className="flex flex-wrap gap-3 mb-4">
            {Object.keys(painPointMap).map((key, index) => (
              <button
                type="button"
                key={key}
                onClick={() => {
                  handleChange("support_pain_point", key);
                  handleChange("pain_point_details", painPointMap[key]);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  index === 0
                    ? "bg-red-500/20 border-red-400 text-red-200"
                    : index === 1
                      ? "bg-blue-500/20 border-blue-400 text-blue-200"
                      : index === 2
                        ? "bg-purple-500/20 border-purple-400 text-purple-200"
                        : "bg-green-500/20 border-green-400 text-green-200"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <textarea
            rows={4}
            value={formData.pain_point_details}
            onChange={(e) => handleChange("pain_point_details", e.target.value)}
            placeholder={
              formMeta.schema.fields.find(
                (f: any) => f.id === "pain_point_details",
              )?.placeholder
            }
            className="w-full rounded-xl border-2 border-blue-400/30 bg-white/10 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="text-white font-semibold flex items-center gap-2 mb-4">
            <Users size={16} className="text-blue-400" />
            How should we contact you?
          </label>

          <div className="grid md:grid-cols-3 gap-4">
            {["Email", "Phone", "WhatsApp"].map((method) => {
              const isActive = contactMethod === method;

              return (
                <label
                  key={method}
                  className={`relative border-2 rounded-xl p-4 cursor-pointer text-white transition-all flex items-center gap-3 ${
                    isActive
                      ? "border-blue-400 bg-blue-500/10"
                      : "border-blue-400/30 hover:border-blue-400/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="contact_method"
                    value={method}
                    checked={isActive}
                    onChange={() => {
                      setContactMethod(method);
                      handleChange("contact_method", method);
                    }}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? "border-blue-400" : "border-gray-300"
                    }`}
                  >
                    {isActive && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    )}
                  </div>
                  <span className="text-white font-medium">{method}</span>
                </label>
              );
            })}
          </div>

          {(contactMethod === "Phone" || contactMethod === "WhatsApp") && (
            <div className="mt-4">
              <PhoneInput
                country="in"
                value={formData.phone_number}
                onChange={(phone) => handleChange("phone_number", phone)}
                enableSearch
                inputClass="!w-full !h-11 !rounded-xl !bg-white/10 !border-2 !border-blue-400/30 !text-white"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-full text-white font-bold uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
        >
          <Zap size={18} className="text-yellow-400" />
          {formMeta.submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default SupportAuditForm;
