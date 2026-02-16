import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
      <div className="rounded-xl border border-[#7042f861] bg-[#0b0426]/45 p-5 text-center text-sm text-gray-300">
        <p className="font-medium text-white">Alleluia Cervi</p>
        <p className="mt-1">Brand &amp; Digital Designer</p>
        <p className="mt-3 text-xs text-[#c7bcff]">
          &copy; {currentYear} Alleluia Cervi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
