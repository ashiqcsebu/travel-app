import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGoogle, FaTwitter, FaPinterest, FaLinkedin, FaPhoneVolume } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:px-6 md:px-8">
        {/* Social Icons - Left-aligned */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-2 sm:mb-0">
          <ul className="flex gap-3 sm:gap-4">
            <li><FaGoogle className="text-lg sm:text-xl" /></li>
            <li><FaTwitter className="text-lg sm:text-xl" /></li>
            <li><FaPinterest className="text-lg sm:text-xl" /></li>
            <li><FaLinkedin className="text-lg sm:text-xl" /></li>
          </ul>
        </div>

        {/* Contact Info - Right-aligned */}
        <div className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#00A8CC]">
          <div className="flex items-center gap-1">
            <IoPerson className="w-3 h-3 sm:w-4 sm:h-4" />
            <button className="text-black focus:outline-none">Agent Login</button>
          </div>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <div className="flex items-center gap-1">
            <MdOutlineMail className="w-4 h-4 sm:w-4 sm:w-4" />
            <a href="mailto:support@demo.com" className="text-black">support@demo.com</a>
          </div>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <div className="flex items-center gap-1">
            <FaPhoneVolume className="w-3 h-3 sm:w-4 sm:h-4 " />
            <span className="text-black">+(642) 342 762 44</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;