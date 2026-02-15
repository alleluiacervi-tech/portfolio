import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="pointer-events-none absolute left-1/2 top-[-280px] z-[1] h-[360px] w-[360px] -translate-x-1/2 rotate-180 object-contain opacity-90 md:top-[-360px] md:h-[500px] md:w-[500px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
