import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";
import img4 from "../asset/img4.png";

function Footer() {
  return (
    <footer className="bg-[#041E42] text-white">
      {/* Certifications Section - Top and Centered */}
      <div
        className="text-center py-4 "
        style={{
          paddingLeft: "300px",
          paddingRight: "300px",
        }}
      >
        <h3 className="text-3xl font-bold pt-4">Our Certifications</h3>
        <div className="flex justify-center flex-wrap gap-6 mt-4">
          <img
            src={img1}
            alt="Certification 1"
            className="w-28 h-24 object-contain"
          />
          <img
            src={img4}
            alt="Certification 4"
            className="w-28 h-24 object-contain"
          />
          <img
            src={img2}
            alt="Certification 2"
            className="w-28 h-24 object-contain"
          />
          <img
            src={img3}
            alt="Certification 3"
            className="w-28 h-24 object-contain"
          />
          <img
            src={img4}
            alt="Certification 4"
            className="w-28 h-24 object-contain"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto  py-8 px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Flex container for logo and all columns in the same row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between pb-4 gap-4 ">
          {/* Logo and Description Section */}
          <div className="lg:w-[30%] text-center lg:text-left">
            <h2 className="text-3xl font-bold">World Wide</h2>
            <p className="text-lg mt-2">Tours and Travel</p>
            <p className="mt-4 text-base text-gray-400  lg:mx-0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  flex-1">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Travel Guide
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Travel Advisory
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Visa Guide
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Visa Application
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold">Service</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Flight
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Hotel
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Holiday
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Visa
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Menu */}
            <div>
              <h3 className="text-lg font-semibold">Quick Menu</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    FAQ
                  </button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white  ">
                    Hotel Sitemap
                  </button>
                </li>
              </ul>
            </div>

            {/* Head Office */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold">Head Office</h3>
              <p className="mt-4 text-gray-400">
                Unit# 09, Building, Shop# 272, Shouq Al Aharaj, 42
                Street# 850, Doha, Qatar
              </p>
              <p className="mt-2 text-gray-400 flex items-center space-x-2">
                <FaPhoneAlt className="text-[#00A8CC]" />
                <span>+974 66667043</span>
              </p>
              <p className="mt-2 text-gray-400 flex items-center space-x-2">
                <FaEnvelope className="text-[#00A8CC]" />
                <span>world.doh@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-gray-700 bg-[#041E42] flex items-center justify-between py-2 ">
          {/* Copyright Text */}
          <p className="text-gray-400 text-sm">
            Copyright © 2025 World Wide Tours and Travel Ltd.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 ">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-gray-400 rounded-full active:bg-[#00A8CC] p-1"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white border-2 border-gray-400 rounded-full p-1"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white border-2 border-gray-400 rounded-full p-1"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white border-2 border-gray-400 rounded-full p-1"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
