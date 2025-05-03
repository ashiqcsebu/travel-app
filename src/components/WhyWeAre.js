import React from "react";
import img1 from "../asset/photo1.jpg";
import img2 from "../asset/photo2.jpg";
const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[678px] max-w-[615px] mx-auto">
            <div className="absolute w-[79%] h-[88%] overflow-hidden">
              <img
                src={img1}
                alt="Main view"
                className="w-full h-full object-cover"
                style={{
                  borderTopRightRadius: "280px",
                  borderBottomRightRadius: "330px",
                  borderBottomLeftRadius: "330px",
                }}
              />
            </div>

            <div
              className="absolute w-[64%] h-[73%] overflow-hidden border-[11px] border-white"
              style={{
                top: "27%",
                left: "36%",
                borderRadius: "320px",
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
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl  font-bold mb-6">Why we are</h1>
          <p className="text-lg text-gray-600 mb-4">
            We are a passionate team of digital marketing enthusiasts dedicated
            to helping businesses succeed in the digital world. With years of
            experience and a deep understanding of the ever-evolving online
            landscape, We value our employees and stakeholders for new ideas or
            opinions.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad
            aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim
            ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis
            pariatur minim Laboris anim duis sunt aliquip tempor qui. Est in
            
          </p>
          <p className="text-lg text-gray-600 ">
            Est in
            nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur
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
