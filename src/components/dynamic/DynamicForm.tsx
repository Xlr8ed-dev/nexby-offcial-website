import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface DynamicFormProps {
  config: {
    title?: string;
    subtext?: string;
    submitLabel?: string;
    fields: FormField[];
  };
  landingPageId: string;
  onSuccess: (thankYouData: any) => void;
  className?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ config, landingPageId, onSuccess, className = "" }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic client-side validation
    for (const field of config.fields) {
        if (field.required && !values[field.name]) {
            setError(`Please fill in ${field.label}`);
            setIsSubmitting(false);
            return;
        }
    }

    try {
      // Get UTMs from URL (basic implementation)
      const searchParams = new URLSearchParams(window.location.search);
      const utm = {
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign'),
        utm_term: searchParams.get('utm_term'),
        utm_content: searchParams.get('utm_content'),
      };

      const response = await fetch('http://localhost:3000/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          landingPageId,
          values,
          utm,
          // clickData could be added here if tracking pixels are present
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      onSuccess(data.thankYou);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ${className}`}>
      {config.title && <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h3>}
      {config.subtext && <p className="text-gray-500 mb-6">{config.subtext}</p>}

      {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
          </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {config.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                defaultValue=""
              >
                 <option value="" disabled>Select {field.label}</option>
                {field.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
                 <textarea
                    name={field.name}
                    required={field.required}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                 />
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
                <Loader2 className="animate-spin" size={20} /> Processing...
            </>
          ) : (
            <>
                {config.submitLabel || 'Submit'} <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
