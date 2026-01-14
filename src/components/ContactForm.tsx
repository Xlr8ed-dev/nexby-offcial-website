import { useState } from "react";
import Form from "./Form";
import DynamicFormContainer from "./DynamicFormContainer";

interface ContactFormProps {
  showDescription?: boolean;
  formId: string;
  widthClass?: string;
}

const ContactForm = ({
  showDescription = true,
}: // formId,
// widthClass = "w-[60%]",
ContactFormProps) => {
  const [problemText, setProblemText] = useState("");

  const handleTagClick = (text: string) => {
    setProblemText(text);
  };

  return (
    <section id="contact" className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {showDescription && (
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-purple-600 mb-4">
              Talk to an AI expert
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Answer a few sharp questions.
              <br />
              We'll tell you if we're a fit.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We're not the right partner for every business — and that's by
              design. This short form qualifies your stage, intent and
              readiness. If we can meaningfully move the needle, we'll get on a
              call.
            </p>
          </div>
        )}

        {/* <div className="w-[60%] mx-auto"> */}
        {/* <div className="w-[60%] mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-purple-500/20">
          <DynamicFormContainer />
        </div> */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-500/20">
          <DynamicFormContainer />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
