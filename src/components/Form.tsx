import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import countryList from "../data/Country.json";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// -------- SEARCHABLE COUNTRY DROPDOWN --------
interface SearchableCountryDropdownProps {
  value?: string;
  onChange: (dialCode: string) => void;
  fieldId: string;
}

interface PhoneCountryData {
  dialCode: string;
  countryCode: string;
  name: string;
}

const SearchableCountryDropdown: React.FC<SearchableCountryDropdownProps> = ({
  value = "+91",
  onChange,
  fieldId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countryList.find((c) => c.dial_code === value) || countryList[0];

  const filteredCountries = countryList.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dial_code.includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (country: (typeof countryList)[0]) => {
    onChange(country.dial_code);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-32 shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-11 rounded-xl border-2 border-purple-400/30 
          bg-white/10 backdrop-blur-sm px-3 text-white outline-none 
          focus:border-purple-400 focus:bg-white/20 transition-all 
          flex items-center justify-between cursor-pointer"
      >
        <span className="flex items-center gap-1.5 text-sm">
          <span className="text-lg">{selectedCountry.flag}</span>
          <span>{selectedCountry.dial_code}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-purple-300 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 rounded-xl border-2 border-purple-400/30 
          bg-slate-900 backdrop-blur-xl shadow-2xl z-50 overflow-hidden"
        >
          <div className="p-3 border-b border-purple-400/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" />
              <input
                type="text"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-9 rounded-lg border border-purple-400/30 
                  bg-white/5 pl-9 pr-3 text-sm text-white placeholder-purple-300/50 
                  outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                autoFocus
              />
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full px-4 py-2.5 flex items-center gap-3 text-left 
                    hover:bg-purple-500/20 transition-colors ${
                      country.dial_code === value ? "bg-purple-500/10" : ""
                    }`}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium truncate">
                      {country.name}
                    </div>
                    <div className="text-purple-300/70 text-xs">
                      {country.dial_code}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-purple-300/50 text-sm">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

type FieldType = "text" | "email" | "phone" | "select" | "textarea";

interface FormProps {
  buttonName?: string;
  title?: string | null;
  description?: string | null;
  fields?: {
    id: string;
    label: string;
    type: FieldType;
    required?: boolean;
    options?: string[];
  }[];
  onSubmit?: (data: Record<string, any>) => void;
}

const Form: React.FC<FormProps> = ({
  buttonName = "Submit",
  title = "Contact Form",
  description,
  fields = [],
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const getBorderClass = (fieldId: string) =>
    errors[fieldId] ? "border-red-500" : "border-purple-400/30";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    // fields.forEach((field) => {
    //   if (field.type === "phone") {
    //     setFormData((prev) => ({
    //       ...prev,
    //       [`${field.id}_country`]: "+91",
    //     }));
    //   }
    // });
    if (fields.length > 0) {
      const initialData: Record<string, any> = {};

      fields.forEach((field) => {
        initialData[field.id] = "";
        if (field.type === "phone") {
          initialData[`${field.id}_country`] = "+91";
        }
      });

      setFormData(initialData);
    }
  }, [fields]);

  const buildDynamicSchema = (fields: any[]) =>
    z.object(
      Object.fromEntries(
        fields.map((field) => {
          let validator: any = z.string();

          if (field.id === "full_name") {
            validator = z
              .string()
              .min(5, "Full name must be at least 5 characters")
              .max(50, "Full name cannot exceed 50 characters")
              .regex(/^[A-Za-z\s]+$/, "Full name must contain only letters");
          }
          if (field.type === "email") {
            validator = z
              .string()
              .email("Invalid email format")
              .refine(
                (val) => val === val.toLowerCase(),
                "Email must be in lowercase"
              )
              .refine(
                (val) => val.endsWith(".com"),
                "Email must end with .com"
              );
          }

          // if (field.type === "text" && field.id !== "fullName") {
          //   validator = z
          //     .string()
          //     .min(3, "Company name is required")
          //     .max(200, `${field.label} cannot exceed 200 characters`);
          // }

          // if (field.type === "phone") {
          //   validator = z.object({
          //     country: z.string().min(1, "Country code required"),
          //     number: z
          //       .string()
          //       .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
          //   });
          // }
          if (field.type === "phone") {
            validator = z
              .string()
              .min(8, "Phone number is too short")
              .max(15, "Phone number is too long");
          }
          // if (field.type === "phone") {
          //   validator = z
          //     .string()
          //     .regex(/^\+[1-9]\d{7,14}$/, "Invalid phone number");
          // }

          // if (field.required && field.type !== "phone") {
          //   validator = validator.min(1, `${field.label} is required`);
          // }
          if (field.required) {
            validator = validator.min(1, `${field.label} is required`);
          }

          if (field.type === "select") {
            validator = z.string().min(1, `${field.label} is required`);
          }

          if (field.type === "textarea") {
            validator = z
              .string()
              .max(500, "Remarks cannot exceed 500 characters")
              .optional();
          }

          {
            field.type === "select" && (
              <select
                className={`w-full h-11 rounded-xl border-2 ${
                  errors[field.id] ? "border-red-500" : "border-purple-400/30"
                } bg-slate-900 px-4 text-white outline-none`}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
              >
                <option value="">Select product</option>
                {field.options?.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            );
          }

          // {
          //   field.type === "textarea" && (
          //     <textarea
          //       rows={4}
          //       className={`w-full rounded-xl border-2 ${
          //         errors[field.id] ? "border-red-500" : "border-purple-400/30"
          //       } bg-white/10 px-4 py-3 text-white outline-none`}
          //       placeholder="Enter remarks..."
          //       value={formData[field.id] || ""}
          //       onChange={(e) => handleChange(field.id, e.target.value)}
          //     />
          //   );
          // }

          return [field.id, validator];
        })
      )
    );

  const validateField = (fieldId: string, value: any) => {
    const field = fields.find((f) => f.id === fieldId);
    if (!field) return;

    const schema = buildDynamicSchema([field]);
    // const parsedData =
    //   field.type === "phone"
    //     ? {
    //         [fieldId]: {
    //           country: formData[`${fieldId}_country`] || "",
    //           number: value || "",
    //         },
    //       }
    //     : { [fieldId]: value };
    const parsedData = { [fieldId]: value };

    const result = schema.safeParse(parsedData);

    setErrors((prev) => ({
      ...prev,
      [fieldId]: result.success
        ? ""
        : result.error.flatten().fieldErrors[fieldId]?.[0] || "",
    }));
  };

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    validateField(id, value); // Live validation
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const schema = buildDynamicSchema(fields);

    const parsedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        if (key.includes("_country")) return [];
        // if (fields.find((f) => f.type === "phone" && f.id === key)) {
        //   return [
        //     key,
        //     { country: formData[`${key}_country`] || "", number: value || "" },
        //   ];
        // }
        return [key, value];
      })
    );

    const result = schema.safeParse(parsedData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      const fieldErrors = result.error.flatten().fieldErrors;
      for (const key in fieldErrors) {
        formattedErrors[key] = fieldErrors[key]?.[0] || "";
      }
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    onSubmit?.(result.data);

    const resetData: Record<string, any> = {};
    fields.forEach((field) => {
      if (field.type === "phone") {
        resetData[`${field.id}_country`] = "+91";
        resetData[field.id] = "";
      } else {
        resetData[field.id] = "";
      }
    });

    setFormData(resetData);
    setOpen(false);
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmitForm} className="space-y-6">
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {title}
            </h3>
          )}

          {description && (
            <p className="text-purple-200 text-lg">{description}</p>
          )}
        </div>
      )}
      <div className="grid gap-5">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="text-sm font-semibold text-white mb-2 block">
              {field.label}
              {/* <span className="text-red-500 ml-1">*</span> */}
              {field.required ? (
                <span className="text-red-500 ml-1">*</span>
              ) : (
                <span className="text-purple-300 text-xs ml-2"></span>
              )}
            </label>

            {/* PHONE */}
            {/* {field.type === "phone" && (
              <div className="flex gap-3">
                <SearchableCountryDropdown
                  fieldId={field.id}
                  value={formData[`${field.id}_country`] || "+91"}
                  onChange={(dialCode) =>
                    handleChange(`${field.id}_country`, dialCode)
                  }
                />
                <input
                  type="tel"
                  className="flex-1 h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 px-4 text-white"
                  value={formData[field.id] || ""}
                  onChange={(e) =>
                    handleChange(field.id, e.target.value.replace(/\D/g, ""))
                  }
                />
              </div>
            )} */}
            {field.type === "phone" && (
              <PhoneInput
                country={"in"}
                value={formData[field.id] || ""}
                onChange={(phone: string, country: PhoneCountryData) => {
                  setFormData((prev) => ({
                    ...prev,
                    [field.id]: phone,
                    [`${field.id}_country`]: `+${country.dialCode}`,
                  }));

                  validateField(field.id, phone);
                }}
                enableSearch
                containerClass={`react-tel-input ${
                  errors[field.id] ? "phone-error" : ""
                }`}
                inputProps={{
                  name: field.id,
                  required: field.required,
                }}
                inputClass="!w-full !h-11 !bg-white/10 !text-white !rounded-xl"
                buttonClass="!bg-white/10 !rounded-l-xl"
                dropdownClass="!bg-slate-900 !text-white"
                searchClass="!bg-slate-800 !text-white"
              />
              // <PhoneInput
              //   country={"in"}
              //   value={formData[field.id] || ""}
              //   onChange={(phone: string, country: PhoneCountryData) => {
              //     const e164Phone = `+${phone}`;

              //     setFormData((prev) => ({
              //       ...prev,
              //       [field.id]: e164Phone,
              //     }));

              //     validateField(field.id, e164Phone); // ✅ SAME value
              //   }}
              //   enableSearch
              //   containerClass={`react-tel-input ${
              //     errors[field.id] ? "phone-error" : ""
              //   }`}
              //   inputClass="!w-full !h-11 !bg-white/10 !text-white !rounded-xl"
              //   buttonClass="!bg-white/10 !rounded-l-xl"
              //   dropdownClass="!bg-slate-900 !text-white"
              //   searchClass="!bg-slate-800 !text-white"
              // />
            )}
            <style>{`
  .react-tel-input .country-list {
    background-color: #1f2937;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .react-tel-input .country-list .country {
    padding: 10px 12px;
    color: #ffffff;
    transition: background-color 0.15s ease;
  }

  /* HOVER effect (your 2nd image style) */
  .react-tel-input .country-list .country:hover,
  .react-tel-input .country-list .country.highlight {
    background-color: #e5e7eb;
    color: #111827;
  }

  .react-tel-input .country-list .country:hover .dial-code,
  .react-tel-input .country-list .country.highlight .dial-code {
    color: #374151;
  }

  .react-tel-input .country-list .country:hover .country-name,
  .react-tel-input .country-list .country.highlight .country-name {
   color: #111827;
  }

   /* Default border */
  .react-tel-input .form-control {
    border: 2px solid rgba(168, 85, 247, 0.3);
  }

  /* 🔴 ERROR border */
  .react-tel-input.phone-error .form-control,
  .react-tel-input.phone-error .flag-dropdown {
    border-color: #ef4444 !important;
  }
`}</style>
            {field.type === "select" && (
              <div ref={productDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  //             className="w-full h-11 rounded-xl border-2 border-purple-400/30
                  // bg-white/10 backdrop-blur-sm px-4 text-white
                  // flex justify-between items-center"
                  className={`w-full h-11 rounded-xl border-2
    bg-white/10 backdrop-blur-sm px-4 text-white
    flex justify-between items-center
    ${getBorderClass(field.id)}`}
                >
                  <span
                    className={
                      formData[field.id] ? "text-white" : "text-purple-300/50"
                    }
                  >
                    {formData[field.id] || "Select product"}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {open && (
                  <div
                    className="absolute z-50 mt-2 w-full rounded-xl border
        border-purple-400/30 bg-slate-900 backdrop-blur-xl overflow-hidden"
                  >
                    {field.options?.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          handleChange(field.id, opt);
                          setOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left text-white
            hover:bg-purple-500/20 transition"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TEXTAREA */}
            {field.type === "textarea" && (
              <textarea
                rows={4}
                // className="w-full rounded-xl border-2 border-purple-400/30 bg-white/10 px-4 py-3 text-white"
                className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white
    ${getBorderClass(field.id)}`}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}

            {/* DEFAULT INPUT → ONLY text & email */}
            {field.type === "text" || field.type === "email" ? (
              <input
                type={field.type}
                // className="w-full h-11 rounded-xl border-2 border-purple-400/30 bg-white/10 px-4 text-white"
                className={`w-full rounded-xl border-2 bg-white/10 px-4 py-3 text-white
    ${getBorderClass(field.id)}`}
                value={formData[field.id] || ""}
                // onChange={(e) => handleChange(field.id, e.target.value)}
                onChange={(e) => {
                  let value = e.target.value;
                  if (field.id === "full_name") {
                    value = value.replace(/[^A-Za-z\s]/g, "");
                  }

                  handleChange(field.id, value);
                }}
              />
            ) : null}

            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="robotCheck"
          checked={isHuman}
          onChange={(e) => setIsHuman(e.target.checked)}
          className="w-4 h-4 accent-purple-600"
        />
        <label htmlFor="robotCheck" className="text-sm text-white">
          I am not a robot
        </label>
      </div> */}
      <div className="flex justify-start">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY || ""}
          onChange={(value) => setRecaptchaToken(value)}
          onExpired={() => setRecaptchaToken(null)}
          onErrored={() => setRecaptchaToken(null)}
          theme="light"
        />
      </div>
      {/* <button
        type="submit"
        className="w-full h-14 bg-gradient-to-r from-purple-600 via-purple-500 
          to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 
          rounded-full text-white font-bold text-base uppercase tracking-wider shadow-lg 
          hover:shadow-purple-500/50 transition-all transform 
          hover:scale-[1.02] active:scale-[0.98]"
      >
        {buttonName}
      </button> */}
      <button
        type="submit"
        disabled={!recaptchaToken}
        className={`w-full h-14 rounded-full font-bold uppercase tracking-wider transition-all
    ${
      recaptchaToken
        ? "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:scale-[1.02]"
        : "bg-gray-600 cursor-not-allowed opacity-60"
    }`}
      >
        {buttonName}
      </button>
    </form>
  );
};

export default Form;
