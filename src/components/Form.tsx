import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import countryList from "../data/Country.json";
import { z } from "zod";

// -------- SEARCHABLE COUNTRY DROPDOWN --------
interface SearchableCountryDropdownProps {
  value?: string;
  onChange: (dialCode: string) => void;
  fieldId: string;
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

// -------- DYNAMIC FORM WITH LIVE VALIDATION --------
interface FormProps {
  buttonName?: string;
  title?: string | null;
  fields?: {
    id: string;
    label: string;
    type: "text" | "email" | "phone";
    required?: boolean;
  }[];
  onSubmit?: (data: Record<string, any>) => void;
}

const Form: React.FC<FormProps> = ({
  buttonName = "Submit",
  title = "Contact Form",
  fields = [],
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fields.forEach((field) => {
      if (field.type === "phone") {
        setFormData((prev) => ({
          ...prev,
          [`${field.id}_country`]: "+91",
        }));
      }
    });
  }, [fields]);

  const buildDynamicSchema = (fields: any[]) =>
    z.object(
      Object.fromEntries(
        fields.map((field) => {
          let validator: any = z.string();

          if (field.id === "fullName") {
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
                (val) => val.endsWith(".com"),
                "Email must end with .com"
              );
          }

          if (field.type === "text" && field.id !== "fullName") {
            validator = z
              .string()
              .min(3, "Company name is required")
              .max(200, `${field.label} cannot exceed 200 characters`);
          }

          if (field.type === "phone") {
            validator = z.object({
              country: z.string().min(1, "Country code required"),
              number: z
                .string()
                .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
            });
          }

          if (field.required && field.type !== "phone") {
            validator = validator.min(1, `${field.label} is required`);
          }

          return [field.id, validator];
        })
      )
    );

  const validateField = (fieldId: string, value: any) => {
    const field = fields.find((f) => f.id === fieldId);
    if (!field) return;

    const schema = buildDynamicSchema([field]);
    const parsedData =
      field.type === "phone"
        ? {
            [fieldId]: {
              country: formData[`${fieldId}_country`] || "",
              number: value || "",
            },
          }
        : { [fieldId]: value };

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
        if (fields.find((f) => f.type === "phone" && f.id === key)) {
          return [
            key,
            { country: formData[`${key}_country`] || "", number: value || "" },
          ];
        }
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
  };

  return (
    <form onSubmit={handleSubmitForm} className="space-y-6">
      {title && <h2 className="text-xl font-bold text-white">{title}</h2>}

      <div className="grid gap-5">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="text-sm font-semibold text-white mb-2 block">
              {field.label}
            </label>

            {field.type === "phone" && (
              <div className="flex gap-3">
                <SearchableCountryDropdown
                  value={formData[`${field.id}_country`] || "+91"}
                  onChange={(dialCode) =>
                    handleChange(`${field.id}_country`, dialCode)
                  }
                  fieldId={field.id}
                />
                <input
                  type="tel"
                  className={`flex-1 h-11 rounded-xl border-2 ${
                    errors[field.id] ? "border-red-500" : "border-purple-400/30"
                  } bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 
                    outline-none focus:border-purple-400 focus:bg-white/20 transition-all`}
                  placeholder="123 456 7890"
                  value={formData[field.id] || ""}
                  onChange={(e) => {
                    const numeric = e.target.value.replace(/\D/g, "");
                    handleChange(field.id, numeric);
                  }}
                />
              </div>
            )}
            {/* {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
            )} */}

            {field.type !== "phone" && (
              <>
                <input
                  type={field.type}
                  required={field.required}
                  className={`w-full h-11 rounded-xl border-2 ${
                    errors[field.id] ? "border-red-500" : "border-purple-400/30"
                  } bg-white/10 backdrop-blur-sm px-4 text-white placeholder-purple-300/50 
                    outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 
                    transition-all`}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
                {/* {errors[field.id] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.id]}
                  </p>
                )} */}
              </>
            )}
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-gradient-to-r from-purple-600 via-purple-500 
          to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 
          rounded-full text-white font-bold text-base uppercase tracking-wider shadow-lg 
          hover:shadow-purple-500/50 transition-all transform 
          hover:scale-[1.02] active:scale-[0.98]"
      >
        {buttonName}
      </button>
    </form>
  );
};

export default Form;
