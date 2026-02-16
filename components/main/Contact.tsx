"use client";

import React, { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaXTwitter } from "react-icons/fa6";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "alleluiacervi@gmail.com";
const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+250788505946";
const CONTACT_LOCATION =
  process.env.NEXT_PUBLIC_CONTACT_LOCATION ?? "Kigali, Rwanda";
const CONTACT_X_URL =
  process.env.NEXT_PUBLIC_CONTACT_X_URL ?? "https://x.com/@AIandgrowth";
const CONTACT_X_HANDLE = "@AIandgrowth";

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
      className="section-shell pb-20 pt-6 md:pb-24"
    >
      <div className="mb-10 text-center">
        <h2 className="section-title">
          Contact Me
        </h2>
        <p className="section-intro mx-auto max-w-2xl">
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
          className="panel-card panel-card-hover"
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
              <PhoneIcon className="mt-0.5 h-5 w-5 text-[#b49bff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">Phone</p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="mt-1 inline-block text-sm text-white transition-colors hover:text-[#d8d0ff]"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#8b74ff]/35 bg-[#140b3c]/60 p-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 text-[#b49bff]" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">Location</p>
                <p className="mt-1 text-sm text-white">{CONTACT_LOCATION}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-[#8b74ff]/35 bg-[#140b3c]/60 p-4">
              <a
                href={CONTACT_X_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open X profile"
                className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#8b74ff]/45 bg-[#0d0830]/70 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b49bff] hover:bg-[#8b74ff]/20"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#b49bff]">
                  X
                </p>
                <p className="mt-1 text-sm text-white">{CONTACT_X_HANDLE}</p>
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
          className="panel-card panel-card-hover"
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
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-400 focus:border-[#b49bff]"
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
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-400 focus:border-[#b49bff]"
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
                className="w-full rounded-lg border border-[#8b74ff]/40 bg-[#140b3c]/70 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-gray-400 focus:border-[#b49bff]"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs text-[#d8d0ff]">{feedbackMessage}</p>
            <button
              type="submit"
              className="button-primary rounded-lg px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
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
