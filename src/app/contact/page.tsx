import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ASMTECH Power & Infra Pvt Ltd",
  description:
    "Get in touch with ASMTECH Power & Infra. Request a quote, ask about solar subsidies, or send us a message. We're here to help you go solar.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      {/* Contact section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-800">
              Contact Us
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-neutral-900 max-w-[14ch]">
              Let&rsquo;s power a greener future together
            </h1>

            {/* Contact details */}
            <div className="mt-4 flex flex-col gap-4 text-neutral-700">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-neutral-500"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-neutral-500"
                  aria-hidden
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
                <span className="text-sm">info@asmtech.in</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-neutral-500 mt-0.5"
                  aria-hidden
                >
                  <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm">
                  ASMTECH Power & Infra Pvt Ltd, Guwahati, Assam
                </span>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
