import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import heroImage from "../asset/bg.jpg";
import Logo from "../asset/logo.png";
import ServicesSection from "./ServiceCards";
import FlightSearchSection from "./FlightSearchSection";
import AboutSection from "./About";
import TopBar from "./TopBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <div className="font-sans">
        {/* Full Screen Hero Banner */}
        <div
          className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40">
            {/* Logo and Navigation Bar */}
            <div className="container  px-24 sm:px-4 py-4 flex  justify-around gap-8 relative z-20">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 sm:w-12 h-8 sm:h-10 object-contain"
                />
                <div className="flex flex-col leading-none ml-2">
                  <span className="text-xl sm:text-2xl font-bold text-white">
                    World Wide
                  </span>
                  <span className="text-sm sm:text-lg text-cyan-200 tracking-wide">
                    Tours and Travel
                  </span>
                </div>
              </div>

              {/* Navigation - Desktop */}
              <div className="hidden md:flex items-center gap-6 ml-10">
                <ul className="flex gap-6 text-sm font-medium">
                  {["Home", "About", "Service", "Blog", "Contact"].map(
                    (item) => (
                      <li key={item}>
                        <button className="text-white hover:text-[#00A8CC] transition-colors">
                          {item}
                        </button>
                      </li>
                    )
                  )}
                </ul>
                <button className="bg-[#00A8CC] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0095b6] transition-colors">
                  Become an Agent
                </button>
              </div>

              {/* Mobile Menu Icon */}
              <button
                className="md:hidden text-white text-2xl focus:outline-none z-10 ml-auto"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-16 right-4 w-56 bg-black/90 rounded-lg shadow-lg z-50 transition-all duration-300">
                <ul className="flex flex-col items-center py-2">
                  {["Home", "About", "Service", "Blog", "Contact"].map(
                    (item) => (
                      <li
                        key={item}
                        className="w-full text-center border-b border-gray-700"
                      >
                        <button
                          className="block w-full py-3 text-white hover:text-[#00A8CC] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item}
                        </button>
                      </li>
                    )
                  )}
                  <li className="w-full text-center mt-2 mb-2">
                    <button
                      className="bg-[#00A8CC] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0095b6] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Become an Agent
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Centered Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="container mx-auto px-4 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                  One Platform
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold mb-4 sm:mb-6">
                  All Travel Solutions.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
                  We simplify travel planning by automating expense management
                  and delivering actionable insights
                </p>
              </div>
            </div>
          </div>
        </div>

        <FlightSearchSection />
        <ServicesSection />
        <AboutSection />
      </div>
    </>
  );
}
