import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex h-full w-full flex-col" id="home">
      <video
        autoPlay
        muted
        loop
        className="pointer-events-none absolute left-1/2 top-[-170px] z-[1] h-[440px] w-[440px] -translate-x-1/2 rotate-180 object-contain opacity-90 md:top-[-250px] md:h-[620px] md:w-[620px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
