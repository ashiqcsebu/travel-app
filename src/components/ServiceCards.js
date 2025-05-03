import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineTrain, MdOutlineSupportAgent } from "react-icons/md";
import { IoMdWifi } from "react-icons/io";
import cardImage from "../asset/p1.jpg";

const ServiceCard = ({ title, description, icon, hasImage }) => {
  return (
    <div className="relative rounded-xl shadow-md overflow-hidden w-full h-full flex flex-col">
      {hasImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${cardImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
      )}
      <div
        className={`relative z-10 p-6 flex flex-col ${
          hasImage ? "justify-end text-white" : "justify-start bg-gray-100"
        } h-full`}
      >
        <div className="mb-4">
          <div className="w-12 h-12 bg-[#00A8CC] rounded-lg flex items-center justify-center">
            <div className="text-white text-xl">{icon}</div>
          </div>
        </div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            hasImage ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm ${
            hasImage ? "text-white" : "text-gray-800"
          } flex-grow`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

// ✅ Then define the ServicesSection
const ServicesSection = () => {
  const services = [
    {
      title: "Smooth Bookings Platform",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience.",
      icon: <FaMobileAlt />,
      hasImage: true,
    },
    {
      title: "Professional Travel Assistance",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience.",
      icon: <MdOutlineTrain />,
      hasImage: false,
    },
    {
      title: "User Friendly Customizable UI",
      description:
        "Business coach with advanced experience on growth and business scaling.",
      icon: <IoMdWifi />,
      hasImage: false,
    },
    {
      title: "24*7 Online & offline Service",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience.",
      icon: <MdOutlineSupportAgent />,
      hasImage: false,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl mt-12 py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            hasImage={service.hasImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
