import React from "react";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alleluia@example.com";
const CONTACT_PORTFOLIO =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "https://portfolio.example.com";
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+000 000 000 000";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
      <div className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-8 shadow-xl shadow-[#2A0E61]/20 backdrop-blur-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.22em] text-[#b49bff]">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Let&apos;s Build Something Meaningful
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-xl border border-[#8b74ff]/45 bg-[#8b74ff]/10 p-4 transition-colors hover:bg-[#8b74ff]/20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#c6b8ff]">Email</p>
            <p className="mt-2 text-sm text-white">{CONTACT_EMAIL}</p>
          </a>

          <a
            href={CONTACT_PORTFOLIO}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-400/45 bg-cyan-500/10 p-4 transition-colors hover:bg-cyan-500/20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">
              Portfolio
            </p>
            <p className="mt-2 text-sm text-white">{CONTACT_PORTFOLIO}</p>
          </a>

          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
            className="rounded-xl border border-[#8b74ff]/45 bg-[#8b74ff]/10 p-4 transition-colors hover:bg-[#8b74ff]/20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#c6b8ff]">Phone</p>
            <p className="mt-2 text-sm text-white">{CONTACT_PHONE}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
