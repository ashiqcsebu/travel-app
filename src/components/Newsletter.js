import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
    <div className="flex justify-center items-center my-4 max-w-6xl mx-auto">
      <div className="bg-[#00A8CC] p-10 rounded-xl shadow-lg w-full mx-auto">
        <h3 className="text-LG font-bold text-white text-center mb-3">
          NEWSLETTER
        </h3>
        <h1 className="text-5xl font-bold text-white text-center mb-1">
          Subscribe for Exclusive
        </h1>
        <h1 className="text-5xl font-bold text-white text-center mb-6">
          Travel Deals!
        </h1>
        <form className="flex items-center justify-center space-x-4">
          {/* Email Input Field with React Icon */}
          <div className="relative w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-md text-lg border-none focus:outline-none"
              required
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-gray-800 text-white p-4 rounded-md text-lg hover:bg-gray-700 w-full max-w-xs"
          >
            Subscribe & Start Exploring
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
