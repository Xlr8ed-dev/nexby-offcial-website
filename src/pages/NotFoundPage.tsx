import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Nexby AI</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg"
        >
          {/* 404 number */}
          <p className="text-[120px] font-black leading-none text-gray-100 select-none">
            404
          </p>

          <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
            Page not found
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved.
            <br />
            Head back home to explore Nexby AI's products and solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Go to Home
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default NotFoundPage;
