"use client";

import React, { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ClockIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alleluia@example.com";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFeedbackMessage("Please complete all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setFeedbackMessage("Your email app opened with a pre-filled draft.");
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-4 md:px-10"
    >
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Contact Me
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Have a project in mind or want to collaborate? Share a few details and I
          will get back to you quickly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={prefersReducedMotion ? undefined : slideInFromLeft(0.1)}
          className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-6 shadow-xl shadow-[#2A0E61]/30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold text-white">Lets build something great.</h3>
          <p className="mt-3 text-sm text-gray-300">
            I am open to freelance and full-time software engineering opportunities.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-xl border border-[#8b74ff]/35 bg-[#140b3c]/60 p-4">
              <EnvelopeIcon className="mt-0.5 h-5 w-5 text-[#b49bff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 inline-block text-sm text-white transition-colors hover:text-[#d8d0ff]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#8b74ff]/35 bg-[#140b3c]/60 p-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 text-[#b49bff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">Location</p>
                <p className="mt-1 text-sm text-white">Remote, available worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#8b74ff]/35 bg-[#140b3c]/60 p-4">
              <ClockIcon className="mt-0.5 h-5 w-5 text-[#b49bff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                  Response Time
                </p>
                <p className="mt-1 text-sm text-white">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={prefersReducedMotion ? undefined : slideInFromRight(0.1)}
          className="rounded-2xl border border-[#7042f861] bg-[#0b0426]/60 p-6 shadow-xl shadow-[#2A0E61]/30 backdrop-blur-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm text-gray-200">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, name: event.target.value }))
                }
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-400 focus:border-[#b49bff]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm text-gray-200">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, email: event.target.value }))
                }
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-400 focus:border-[#b49bff]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm text-gray-200">
                Message
              </label>
              <textarea
                id="contact-message"
                value={formState.message}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, message: event.target.value }))
                }
                rows={6}
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-400 focus:border-[#b49bff]"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-[#d8d0ff]">{feedbackMessage}</p>
            <button
              type="submit"
              className="button-primary rounded-lg px-6 py-2 text-sm font-medium text-white"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
