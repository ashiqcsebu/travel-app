import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const RoutePair = ({ route }) => {
  return (
    <div className="relative grid grid-cols-2 gap-2">
      {/* Source Card */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 bg-white py-2 sm:py-3 border rounded-lg sm:rounded-xl shadow-sm sm:shadow-md relative">
        <div className="w-full">
          <div className="flex items-center">
            <div className="text-base sm:text-lg font-semibold m-2 sm:m-3">{route.fromCode}</div>
            <div className="border-l-2 h-8 sm:h-12 border-gray-300"></div>
            <div className="flex flex-col ml-1 sm:ml-2">
              <div className="text-xs sm:text-sm text-gray-600">{route.fromCity}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 truncate">
                {route.fromAirport}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destination Card */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 bg-white py-2 sm:py-3 border rounded-lg sm:rounded-xl shadow-sm sm:shadow-md relative">
        <div className="w-full">
          <div className="flex items-center">
            <div className="text-base sm:text-lg font-semibold m-2 sm:m-3">{route.toCode}</div>
            <div className="border-l-2 h-8 sm:h-12 border-gray-300"></div>
            <div className="flex flex-col ml-1 sm:ml-2">
              <div className="text-xs sm:text-sm text-gray-600">{route.toCity}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 truncate">
                {route.toAirport}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full text-black border border-gray-300">
        <FaExchangeAlt className="text-xs sm:text-sm" />
      </div>
    </div>
  );
};

const TopRoutesSection = () => {
  const [activeTab, setActiveTab] = useState("Domestic");

  const domesticRoutes = [
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat Inta...",
      toCode: "CGP",
      toCity: "Chittagong",
      toAirport: "Shah Internationa.",
    },
    {
      fromCode: "CXB",
      fromCity: "Cox's Basar",
      fromAirport: "Cox's Coast.",
      toCode: "DAC",
      toCity: "Dhaka",
      toAirport: "Nasrat Int...",
    },
    {
      fromCode: "JSR",
      fromCity: "Jessore",
      fromAirport: "Jessore Airport",
      toCode: "DAC",
      toCity: "Dhaka",
      toAirport: "Nasrat Shah....",
    },
    {
      fromCode: "CXB",
      fromCity: "Cox's Basar",
      fromAirport: "Cox's Coast.",
      toCode: "DAC",
      toCity: "Dhaka",
      toAirport: "Nasrat Int...",
    },
    {
      fromCode: "JSR",
      fromCity: "Jessore",
      fromAirport: "Jessore Airport",
      toCode: "DAC",
      toCity: "Dhaka",
      toAirport: "Nasrat Shah....",
    },
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat Inta...",
      toCode: "CGP",
      toCity: "Chittagong",
      toAirport: "Shah Internationa.",
    },
  ];

  const internationalRoutes = [
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat S....",
      toCode: "DXB",
      toCity: "Dubai",
      toAirport: "Dubai Airport",
    },
    {
      fromCode: "CGP",
      fromCity: "Chittagong",
      fromAirport: "Shah Int..",
      toCode: "KUL",
      toCity: "Kuala Lumpur",
      toAirport: "KualaLumpur Int..",
    },
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat...",
      toCode: "DEL",
      toCity: "Delhi",
      toAirport: "Indira Int..",
    },
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat...",
      toCode: "DEL",
      toCity: "Delhi",
      toAirport: "Indira Int..",
    },
    {
      fromCode: "DAC",
      fromCity: "Dhaka",
      fromAirport: "Nasrat S....",
      toCode: "DXB",
      toCity: "Dubai",
      toAirport: "Dubai Airport",
    },
    {
      fromCode: "CGP",
      fromCity: "Chittagong",
      fromAirport: "Shah Int..",
      toCode: "KUL",
      toCity: "Kuala Lumpur",
      toAirport: "KualaLumpur Int..",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 bg-white my-8 sm:my-16 rounded-lg shadow-sm max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold text-gray-800 mb-3 sm:mb-4">
        Top Domestic & International Routes
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6 mx-auto max-w-md sm:max-w-xl md:max-w-2xl">
        Curabitur mollis bibendum lactus. Duls suscipit vitae dui sed suscipit.
        Vesifbulum auctor runc vitae diam eleifend, in maximus metus
        sollicitudin. Quisque vitae sodales lectus.
      </p>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div
          className={`inline-flex rounded-full overflow-hidden border ${
            activeTab === "Domestic" ? "border-blue-500" : "border-blue-500"
          }`}
        >
          <button
            onClick={() => setActiveTab("Domestic")}
            className={`px-2 sm:px-4 py-1 sm:py-2  sm:text-sm lg:text-base w-20 sm:w-24 md:w-28 text-center ${
              activeTab === "Domestic"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => setActiveTab("International")}
            className={`px-2  sm:px-4 py-1 sm:py-2  sm:text-sm lg:text-base w-20 sm:w-24 md:w-28 text-center ${
              activeTab === "International"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            International
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {(activeTab === "Domestic" ? domesticRoutes : internationalRoutes).map(
          (route, index) => (
            <RoutePair key={`${activeTab}-${index}`} route={route} />
          )
        )}
      </div>
    </div>
  );
};

export default TopRoutesSection;