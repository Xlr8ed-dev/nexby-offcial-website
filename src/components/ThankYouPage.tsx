import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-slate-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You 🎉</h1>

        <p className="text-slate-600 text-lg mb-4">
          Your request has been submitted successfully.
        </p>

        <p className="text-slate-500 mb-8">
          Our partnerships team will reach out to you within
          <span className="font-semibold text-slate-800"> 24 to 48 hours.</span>
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
