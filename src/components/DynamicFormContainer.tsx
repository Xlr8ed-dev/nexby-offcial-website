"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Form from "./Form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
    "Content-Type": "application/json",
  },
});

const DynamicFormContainer: React.FC = () => {
  const [fields, setFields] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("Submit");
  const [formId, setFormId] = useState<number>(0);
  const [endpointId, setEndpointId] = useState<number>(0);
  const location = useLocation();
  const currentPath = location.pathname;

  const Navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    api
      .get(`/api/form-endpoint?endpoint=${currentPath}`)
      .then((res) => {
        const data = res.data;
        const backendFields = data.form.schema.fields;

        setFormId(data.form.formId);
        setEndpointId(data.form.endpointId);

        // const submitField = backendFields.find((f: any) => f.type === "submit");

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
        // setButtonName(submitField?.label || "Submit");
        setButtonName(data.form.submitButtonText || "Submit");
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
      endpointId,
      formId,
      response: {
        ...formData,
        mobile_number: formData.mobile_number,
      },
    };

    const res = await api.post(`/api/form/submit`, payload);

    if (!res.data.success) {
      let message = "Something went wrong. Please try again.";

      if (res.status >= 500) {
        message = "Server error. Please try again later.";
      } else if (res.status === 404) {
        message = "Service unavailable. Please contact support.";
      }

      throw new Error(message);
    }

    Navigate("/thank-you", { state: { formId } });
  };
  if (loading) {
    return (
      <div className="w-full animate-pulse px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="h-6 sm:h-7 md:h-8 w-2/3 bg-white/20 rounded-lg mb-4 sm:mb-6" />

        {/* Description */}
        <div className="h-3 sm:h-4 w-3/4 bg-white/10 rounded mb-6 sm:mb-10" />

        {/* Inputs */}
        <div className="space-y-4 sm:space-y-5">
          <div className="h-10 sm:h-11 md:h-12 w-full bg-white/10 rounded-xl" />
          <div className="h-10 sm:h-11 md:h-12 w-full bg-white/10 rounded-xl" />
          <div className="h-10 sm:h-11 md:h-12 w-full bg-white/10 rounded-xl" />
          <div className="h-10 sm:h-11 md:h-12 w-full bg-white/10 rounded-xl" />
        </div>

        {/* Recaptcha */}
        <div className="h-14 sm:h-16 w-48 sm:w-64 bg-white/10 rounded-lg mt-8 sm:mt-10" />

        {/* Button */}
        <div className="h-11 sm:h-12 md:h-14 w-full bg-white/20 rounded-full mt-6 sm:mt-8" />
      </div>
    );
  }

  // Error state → SHOW CONTACT CARD
  if (error) {
    return (
      <div className="w-full text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
          Kindly contact our sales team
        </h3>
        <p className="text-sm sm:text-base text-purple-200 mb-6 sm:mb-8">
          Kindly contact our sales team using the details below.
        </p>

        <div className="space-y-2 text-white font-medium text-sm sm:text-base">
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
