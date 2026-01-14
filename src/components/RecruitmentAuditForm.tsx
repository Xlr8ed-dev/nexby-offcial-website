import { useState } from "react";
import { Zap, Users, Briefcase } from "lucide-react";
import Form from "./Form";
import DynamicFormContainer from "./DynamicFormContainer";

interface RecruitmentAuditFormProps {
  formId: string;
}

const RecruitmentAuditForm = ({ formId }: RecruitmentAuditFormProps) => {
  const [hiringVolume, setHiringVolume] = useState(10);
  const [timeToHire, setTimeToHire] = useState(30);
  const [challengeText, setChallengeText] = useState("");

  const [contactMethod, setContactMethod] = useState("email");

  const handleTagClick = (text: string) => {
    setChallengeText(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Recruitment Audit Form Submitted:", {
      formId,
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      hiringVolume,
      timeToHire,
      challenge: challengeText,
      contactMethod: contactMethod,
      phoneNumber: formData.get("phoneNumber"),
    });
    // TODO: Wire to backend
    alert(
      "Thank you! Our recruitment optimization team will analyze your data and reach out within 24 hours."
    );
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-500/20">
      <DynamicFormContainer />
    </div>
  );
};

export default RecruitmentAuditForm;
