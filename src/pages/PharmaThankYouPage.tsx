import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const PharmaThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Audit Request Received - Nexby Pharma</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce-short">
          <CheckCircle className="text-green-600" size={48} />
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Audit Request Confirmed.
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mb-12">
          Our Pharma Operations team has received your details. We will reach
          out within 24 hours to schedule the initial discovery call.
        </p>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-lg w-full mb-12">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <Calendar size={20} className="text-cyan-600" />
            Next Steps
          </h3>
          <ul className="text-left space-y-4 text-slate-600">
            <li className="flex gap-3">
              <span className="bg-cyan-100 text-cyan-800 font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">
                1
              </span>
              <span>We will map your current process (Tender/Sales/QC).</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-cyan-100 text-cyan-800 font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">
                2
              </span>
              <span>
                You will receive a <strong>Gap Analysis Report</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-cyan-100 text-cyan-800 font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">
                3
              </span>
              <span>We propose a pilot for one specific agent.</span>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default PharmaThankYouPage;
