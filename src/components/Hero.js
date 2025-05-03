import React from "react";
import {
  FaHotel,
  FaPassport,
  FaPlane,
  FaSuitcase,
  FaEllipsisH,
  FaPlaneDeparture,
  FaExchangeAlt,
  FaRoute,
  FaChair,
  FaPlaneArrival,
} from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { LuPlane } from "react-icons/lu";

export default function FlightSearchSection() {
  return (
    <div>
      <div className="relative z-20 px-4 -mt-24">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-4 rounded-xl">
              {[
                { icon: <FaPlane />, label: "Flights", active: true },
                { icon: <FaHotel />, label: "Hotel" },
                { icon: <FaSuitcase />, label: "Tour" },
                { icon: <FaPassport />, label: "Visa" },
                { icon: <FaEllipsisH />, label: "More" },
              ].map(({ icon, label, active }) => (
                <button
                  key={label}
                  className={`w-16 h-16 rounded-lg flex flex-col items-center justify-center text-sm font-medium ${
                    active
                      ? "bg-[#00A8CC] text-white"
                      : "bg-white text-[#00A8CC] hover:bg-[#00A8CC] hover:text-white transition"
                  } shadow`}
                >
                  <div className="text-xl mb-1">{icon}</div>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-2  pt-10">
            {/* Trip Type Tabs */}
            <div className="flex space-x-6 border-b border-gray-200 mb-6 md:text-base text-sm">
              <button className="flex items-center text-cyan-500 font-semibold border-b-2 border-cyan-500 pb-2">
                <FaPlaneDeparture className="mr-2" />
                One Way
              </button>
              <button className="flex items-center text-gray-500 hover:text-cyan-500 pb-2">
                <FaExchangeAlt className="mr-2" />
                Round Trip
              </button>
              <button className="flex items-center text-gray-500 hover:text-cyan-500 pb-2">
                <FaRoute className="mr-2" />
                Multi City
              </button>
            </div>

            {/* Input Row */}
            <div className="flex flex-wrap gap-2 ">
              <div className="relative flex gap-2">
                {/* From */}
                <div className="flex flex-col justify-center bg-white relative px-4 border rounded-xl shadow-md w-56">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-xs text-gray-500 flex items-center space-x-1">
                    <FaPlaneDeparture className="text-xs" />
                    <span>From</span>
                  </label>
                  <div className="flex items-center">
                    <div className="text-lg font-semibold mr-3">DAC</div>
                    <div className="border-l-2 h-8 border-gray-300"></div>
                    <div className="flex flex-col ml-3">
                      <div className="text-sm text-gray-600">Dhaka</div>
                      <div className="text-xs text-gray-400 truncate">
                        Hazrat Shahjalal...
                      </div>
                    </div>
                  </div>
                </div>

                {/* To */}
                <div className="flex flex-col relative justify-center bg-white  px-4 border rounded-xl shadow-md w-56">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-xs text-gray-500 flex items-center space-x-1">
                    <FaPlaneArrival className="text-xs" />
                    <span>To</span>
                  </label>
                  <div className="flex items-center">
                    <div className="text-lg font-semibold mr-3">CXB</div>
                    <div className="border-l-2 h-8 border-gray-300"></div>
                    <div className="flex flex-col ml-3">
                      <div className="text-sm text-gray-600">Cox's Bazar</div>
                      <div className="text-xs text-gray-400 truncate">
                        Cox's Bazar Airport
                      </div>
                    </div>
                  </div>
                </div>

                {/* Swap Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-full text-black border border-gray-300 z-10">
                  <FaExchangeAlt className="text-lg text-black" />
                </div>
              </div>

              <div className="relative border rounded-xl px-4 pt-5 pb-3 w-56">
                <label className="absolute -top-3 left-3 bg-white px-1 text-xs text-gray-500 flex items-center space-x-1">
                  <IoCalendarNumberSharp className="text-xs" />
                  <span>Departure Date</span>
                </label>
                <div className="text-sm font-semibold">12 March, 2025</div>
                <div className="text-sm text-gray-600">Thursday</div>
              </div>

              {/* Traveler */}
              <div className="relative border rounded-xl px-4 pt-5 pb-3 w-48">
                <label className="absolute -top-3 left-3 bg-white px-1 text-xs text-gray-500 flex items-center space-x-1">
                  <FaPersonWalkingLuggage className="text-xs" />
                  <span>Traveler</span>
                </label>
                <div className="text-md font-semibold">01</div>
                <div className="text-sm text-gray-600">Traveler</div>
              </div>

              {/* Class */}
              <div className="relative border rounded-xl px-4 pt-5 pb-3 w-42">
                <label className="absolute -top-3 left-3 bg-white px-1 text-xs text-gray-500 flex items-center space-x-1">
                  <FaChair className="text-xs" />
                  <span>Class</span>
                </label>
                <div className="text-lg font-semibold">Premium Economy</div>
              </div>
            </div>
            {/* Search Button */}
            <div className="flex justify-center mt-2">
              <button className="bg-[#00A8CC] text-sm  my-2 hover:bg-cyan-600 transition text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2">
                <span>SEARCH FLIGHT</span>
                <LuPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
