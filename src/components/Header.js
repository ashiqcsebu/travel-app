/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { 
  FaLinkedin, 
  FaGoogle, 
  FaTwitter, 
  FaPinterest, 
  FaPhoneVolume 
} from "react-icons/fa";
import heroImage from "../asset/bg.jpg";
import Logo from "../asset/logo.png";
import ServicesSection from "./ServiceCards";



export default function Header() {
  return (
    <div className="font-sans text-dark"> {/* Added text-white to parent */}
      {/* Top Bar */}
      <div className="flex justify-around items-center  py-2">
        <div>
          <ul className="flex gap-2 font-medium">
            <li>
              <FaGoogle className="text-lg" />
            </li>
            <li>
              <FaTwitter className="text-lg" />
            </li>
            <li>
              <FaPinterest className="text-lg" />
            </li>
            <li>
              <FaLinkedin className="text-lg" />
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm text-[#00A8CC]">
          <div className="flex items-center gap-1">
            <IoPerson className="w-[16px] h-[16px] text-[#00A8CC]" />
            <a href="#" className=" text-black ">
              Agent Login
            </a>
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-1">
            <MdOutlineMail className="w-[16px] h-[16px] text-[#00A8CC]" />
            <a href="mailto:support@demo.com" className=" text-black">
              support@demo.com
            </a>
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-1">
            <FaPhoneVolume className="w-[16px] h-[16px] text-[#00A8CC]" />
            <span className="text-black">+(642) 342 762 44</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div 
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"> {/* Changed opacity method */}
          <div className="flex justify-around items-center px-4 md:px-6 py-4">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="w-12 h-10 object-contain" />
              <div className="flex flex-col leading-none ml-2">
                <span className="text-2xl font-bold text-white">World Wide</span>
                <span className="text-lg text-cyan-200 tracking-wide">
                  Tours and Travel
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <ul className="flex gap-6">
                <li>
                  <a href="#" className="text-white hover:text-[#00A8CC]">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00A8CC]">About</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00A8CC]">Service</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00A8CC]">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#00A8CC]">Contact</a>
                </li>
              </ul>
              <button className="bg-[#00A8CC] text-white px-4 py-2 rounded-full text-sm hover:bg-[#0095b6]">
                Become an Agent
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-xl max-w-3xl mx-auto text-center relative z-10">
          <p className="text-4xl text-white font-semibold">One Platform</p>
          <h1 className="text-6xl text-white font-semibold mb-6">
            All Travel Solutions.
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            We simplify travel planning by automating expense management and
            delivering actionable insights
          </p>
        </div>
      </div>
<ServicesSection />
     
    </div>
  );
}