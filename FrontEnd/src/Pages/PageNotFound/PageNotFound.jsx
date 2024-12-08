import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F3F3] via-orange-100 to-orange-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-montserrat font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700">
            404
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900">
            Oops! Page not found.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-montserrat">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6"
        >
          <Link to="/">
            <button className="inline-flex items-center px-5 py-3 text-sm sm:text-base font-medium rounded-full text-white bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out shadow-lg hover:shadow-xl">
              Go back home
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
