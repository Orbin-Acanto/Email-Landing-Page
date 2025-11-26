import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="
        relative 
        h-[40vh]
        overflow-hidden
        parallax-bg
        mt-24
      "
    >
      <img
        src="/hero/hero.jpg"
        alt="Holiday Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-white text-5xl md:text-6xl drop-shadow-xl uppercase hero-header  text-left">
          Expert <span className="font-bold">Hospitality Services</span>
          <br />
          Seamless <span className="font-bold">Venue Management</span>
          <div className="text-3xl normal-case font-normal mt-2 tracking-normal">
            We are the missing piece to your puzzle
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
