import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const RoutePair = ({ route }) => {
  return (
    <div className="relative grid grid-cols-2 gap-2">
      {/* Source Card */}
      <div className="flex flex-col items-center space-y-2 bg-white py-3 border rounded-xl shadow-md relative">
        <div className="w-full">
          <div className="flex items-center">
            <div className="text-lg font-semibold m-3">{route.fromCode}</div>
            <div className="border-l-2 h-12 border-gray-300"></div>
            <div className="flex flex-col ml-2">
              <div className="text-sm text-gray-600">{route.fromCity}</div>
              <div className="text-xs text-gray-400 truncate">
                {route.fromAirport}
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Destination Card */}
      <div className="flex flex-col items-center space-y-2 bg-white py-3 border rounded-xl shadow-md relative">
        <div className="w-full">
          <div className="flex items-center">
            <div className="text-lg font-semibold m-3">{route.toCode}</div>
            <div className="border-l-2 h-12 border-gray-300"></div>
            <div className="flex flex-col ml-2">
              <div className="text-sm text-gray-600">{route.toCity}</div>
              <div className="text-xs text-gray-400 truncate">
                {route.toAirport}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full text-black border border-gray-300">
  <FaExchangeAlt className="text-sm" />
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
    <div className="p-6 bg-white my-16 rounded-lg shadow-sm max-w-6xl mx-auto">
      <h1 className="text-5xl text-center font-bold text-gray-800 mb-4">
        Top Domestic & International Routes
      </h1>
      <p className="text-gray-600 text-center mb-6 mx-auto max-w-2xl">
        Curabitur mollis bibendum lactus. Duls suscipit vitae dui sed suscipit.
        Vesifbulum auctor runc vitae diam eleifend, in maximus metus
        sollicitudin. Quisque vitae sodales lectus.
      </p>

      {/* Tab Buttons - Unchanged from original */}
      <div className="flex justify-center mb-8">
        <div
          className={`inline-flex rounded-full overflow-hidden border-2 ${
            activeTab === "Domestic" ? "border-blue-500" : "border-blue-500"
          }`}
        >
          <button
            onClick={() => setActiveTab("Domestic")}
            className={`px-2 py-2 text-lg w-28 text-center ${
              activeTab === "Domestic"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => setActiveTab("International")}
            className={`py-2 text-lg w-28 text-center ${
              activeTab === "International"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            International
          </button>
        </div>
      </div>

      {/* Route Pairs in 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
