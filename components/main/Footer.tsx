import { Socials } from "@/constants";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";

const QUICK_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Design Work", href: "#design-work" },
  { label: "Development", href: "#development-projects" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_EMAIL = "alleluiacervi@gmail.com";

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

const Footer = () => {
  return (
    <footer className="section-shell pb-8 pt-4 md:pb-10 md:pt-6">
      <div className="clean-divider mb-8" />

      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="section-eyebrow">Alleluia Cervi</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
            Brand and digital designer with development expertise, building
            reliable product experiences from strategy to implementation.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Navigation
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Connect
          </p>
          <div className="mt-3 flex items-center gap-2">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b74ff]/35 bg-[#0d0830]/70 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b74ff]/70 hover:bg-[#8b74ff]/15"
              >
                {renderSocialIcon(social.name)}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm text-slate-300 transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-[#8b74ff]/25 pt-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Alleluia Cervi. All rights reserved.</p>
        <p>Kigali, Rwanda</p>
      </div>
    </footer>
  );
};

export default Footer;
