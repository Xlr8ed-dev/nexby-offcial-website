import { useEffect, useState } from "react";
import Form from "./Form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

type FieldType = "text" | "email" | "phone" | "select" | "textarea";

const mapBackendTypeToFrontend = (type: string): FieldType => {
  switch (type) {
    case "email":
      return "email";
    case "tel":
      return "phone";
    case "select":
      return "select";
    case "textarea":
      return "textarea";
    default:
      return "text";
  }
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DynamicFormContainer: React.FC = () => {
  const [fields, setFields] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Submit");
  const [formId, setFormId] = useState<number>(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const Navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`${API_BASE_URL}/api/form/endpoint?endpoint=${currentPath}`)
      .then((res) => {
        if (!res.ok) throw new Error("Backend error");
        return res.json();
      })
      .then((data) => {
        const backendFields = data.form.schema.fields;

        setFormId(data.form.id);

        const submitField = backendFields.find((f: any) => f.type === "submit");

        const mappedFields = backendFields
          .filter((f: any) => f.type !== "submit")
          .map((field: any) => ({
            id: field.id,
            label: field.label,
            type: mapBackendTypeToFrontend(field.type),
            required: field.required,
            options: field.options ?? [],
          }));

        setTitle(data.form.title);
        setDescription(data.form.description);
        setButtonName(submitField?.label || "Submit");
        setFields(mappedFields);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Form fetch failed:", err);
        setError(true);
        setLoading(false);
      });
  }, [currentPath]);
  const handleSubmit = async (formData: Record<string, any>) => {
    const payload = {
      formId,
      response: {
        ...formData,
        mobile_number: formData.mobile_number,
      },
    };

    await fetch(`${API_BASE_URL}/api/form/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    Navigate("/thank-you", {
      state: { formId },
    });
  };

  if (loading) {
    return (
      <div className="w-full animate-pulse">
        {/* Title */}
        <div className="h-8 w-2/3 bg-white/20 rounded-lg mb-6" />

        {/* Description */}
        <div className="h-4 w-3/4 bg-white/10 rounded mb-10" />

        {/* Inputs */}
        <div className="space-y-5">
          <div className="h-11 w-full bg-white/10 rounded-xl" />
          <div className="h-11 w-full bg-white/10 rounded-xl" />
          <div className="h-11 w-full bg-white/10 rounded-xl" />
          <div className="h-11 w-full bg-white/10 rounded-xl" />
        </div>

        {/* Recaptcha */}
        <div className="h-16 w-64 bg-white/10 rounded-lg mt-10" />

        {/* Button */}
        <div className="h-14 w-full bg-white/20 rounded-full mt-8" />
      </div>
    );
  }
  // Error state → SHOW CONTACT CARD
  if (error) {
    return (
      <div className="w-full text-center px-6 py-16">
        <h3 className="text-2xl font-bold text-white mb-4">
          Kindly contact our sales team
        </h3>
        <p className="text-purple-200 mb-6">
          Kindly contact our sales team using the details below.
        </p>

        <div className="space-y-2 text-white font-medium">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:sales@yourcompany.com"
              className="text-purple-300 underline"
            >
              hello@nexby.ai
            </a>
          </p>

          <p>
            📞 Phone:{" "}
            <a href="tel:+919876543210" className="text-purple-300 underline">
              +91 98920 48816
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form
      title={title}
      description={description}
      buttonName={buttonName}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
};

export default DynamicFormContainer;
