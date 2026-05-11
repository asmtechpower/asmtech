"use client";

import { useState, type FormEvent } from "react";
import { sendContactEmail } from "./actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-form"
      className="rounded-3xl border-2 border-dashed border-neutral-400/60 bg-[#eae8de] p-6 sm:p-8 flex flex-col gap-5"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-semibold text-neutral-900"
        >
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-full border-2 border-dashed border-neutral-400/60 bg-transparent px-5 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-semibold text-neutral-900"
        >
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="Write your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-full border-2 border-dashed border-neutral-400/60 bg-transparent px-5 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-phone"
          className="text-sm font-semibold text-neutral-900"
        >
          Your phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-full border-2 border-dashed border-neutral-400/60 bg-transparent px-5 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-neutral-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-3xl border-2 border-dashed border-neutral-400/60 bg-transparent px-5 py-3 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition-colors focus:border-neutral-600 resize-none"
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          id="contact-submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg
                className="mr-2 size-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>

      {/* Success / Error messages */}
      {status === "sent" && (
        <p className="text-sm text-green-700 font-medium animate-in fade-in">
          ✓ Your message has been sent! We&rsquo;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
