import { useLocation, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const formId = state?.formId;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div
        className="max-w-xl w-full rounded-3xl border border-purple-400/30 
        bg-slate-900/90 backdrop-blur-xl p-10 text-center shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Thank You 🎉</h2>

        <p className="text-purple-300 text-lg">
          Your request has been submitted successfully
          {/* {formId && (
            <>
              {" "}
              for form{" "}
              <span className="text-white font-semibold">#{formId}</span>
            </>
          )} */}
          .
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-3 rounded-full 
            bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
