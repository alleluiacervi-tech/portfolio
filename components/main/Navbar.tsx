"use client";

import { Socials } from "@/constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import Image from "next/image";
import React, { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#design-work" },
  { label: "Contact", href: "#contact" },
];

const renderSocialIcon = (socialName: string) => {
  switch (socialName) {
    case "Instagram":
      return <RxInstagramLogo className="h-4 w-4" />;
    case "X":
      return <FaXTwitter className="h-4 w-4" />;
    default:
      return <span className="text-xs font-semibold">{socialName.slice(0, 1)}</span>;
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 z-50 w-full px-4 md:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-[#7042f861] bg-[#030014cc] shadow-[0_10px_35px_rgba(42,14,97,0.38)] backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#about-me" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="logo"
              width={42}
              height={42}
              className="h-10 w-10 rounded-full border border-[#8b74ff]/40 bg-[#140b3c] p-1 object-contain"
            />
            <span className="hidden text-sm font-semibold tracking-wide text-gray-200 sm:block">
              Alleluia Cervi
            </span>
          </a>

          <nav className="hidden items-center rounded-full border border-[#8b74ff]/40 bg-[#140b3c]/45 px-2 py-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-[#8b74ff]/20 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b74ff]/35 bg-[#0d0830]/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b74ff]/70 hover:bg-[#8b74ff]/15"
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b74ff]/40 bg-[#0d0830]/70 text-gray-200 transition-colors hover:bg-[#8b74ff]/20 md:hidden"
            >
              {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden px-4 transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-64 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 border-t border-[#8b74ff]/20 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-[#8b74ff]/20 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 flex items-center gap-2">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b74ff]/35 bg-[#0d0830]/70 transition-colors hover:bg-[#8b74ff]/20"
              >
                {renderSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
