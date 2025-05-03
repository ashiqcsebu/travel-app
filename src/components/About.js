import React from "react";
import img1 from "../asset/photo1.jpg";
import img2 from "../asset/photo2.jpg";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        {/* Left Column - Images */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[678px] max-w-[615px] mx-auto">
            <div className="absolute w-[79%] h-[70%] sm:h-[80%] md:h-[88%] overflow-hidden">
              <img
                src={img1}
                alt="Main view"
                className="w-full h-full object-cover"
                style={{
                  borderTopRightRadius: "180px",
                  borderBottomRightRadius: "220px",
                  borderBottomLeftRadius: "220px",
                  borderTopLeftRadius: "0px",
                }}
              />
            </div>

            <div
              className="absolute w-[64%] h-[50%] sm:h-[60%] md:h-[73%] overflow-hidden border-[8px] sm:border-[11px] border-white"
              style={{
                top: "30%",
                left: "36%",
                borderRadius: "200px",
              }}
            >
              <img
                src={img2}
                alt="Scenic landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Why we are</h1>
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
            We are a passionate team of digital marketing enthusiasts dedicated
            to helping businesses succeed in the digital world. With years of
            experience and a deep understanding of the ever-evolving online
            landscape, We value our employees and stakeholders for new ideas or
            opinions.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
            Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad
            aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim
            ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis
            pariatur minim Laboris anim duis sunt aliquip tempor qui. Est in
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur
            voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat.
            Adipisicing velit aute duis pariatur minim officia officia velit
            nostrud ipsum ullamco anim aute sint reprehenderit nulla enim
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;