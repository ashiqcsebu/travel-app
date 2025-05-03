import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
    <div className="flex justify-center items-center my-4 max-w-6xl mx-auto px-4">
      <div className="bg-[#00A8CC] p-8 sm:p-10 rounded-xl shadow-lg w-full mx-auto">
        <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3">
          NEWSLETTER
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-3">
          Subscribe for Exclusive
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6">
          Travel Deals!
        </h1>

        {/* Form Layout */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          {/* Email Input Field with Icon */}
          <div className="relative w-full sm:max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-md text-sm sm:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-3 rounded-md text-sm sm:text-base hover:bg-gray-700 w-full sm:w-auto"
          >
            Subscribe & Start Exploring
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
