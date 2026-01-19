import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const SalesXThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You - SalesX ROI Calculation</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-in zoom-in duration-500">
            <CheckCircle className="text-green-600" size={40} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ROI Calculation in Progress
          </h1>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-10">
            <div className="flex justify-center mb-4">
              <Zap className="text-yellow-500" size={32} />
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              "Our team is analyzing your inputs (Team Size & Lead Volume). We
              will generate a custom ROI report showing exactly how much revenue
              SalesX can recover for you."
            </p>
            <p className="text-slate-500 text-sm">
              Expect an email with your report within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/products/salesx"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-slate-300 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
            >
              Back to SalesX <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesXThankYouPage;
