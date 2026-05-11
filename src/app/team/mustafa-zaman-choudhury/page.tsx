import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Mustafa Zaman Choudhury – Founder & CEO | ASMTECH",
  description:
    "Engineer and entrepreneur driven by a vision to accelerate the transition toward a sustainable future.",
};

export default function TeamMemberPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      <section className="container mx-auto max-w-6xl px-4 pt-10 md:pt-14">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to About
        </Link>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
          <div className="w-full max-w-[180px] shrink-0">
            <Image
              src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778524785/WhatsApp_Image_2026-05-11_at_10.54.36_PM_iqi9xl.jpg"
              alt="Mustafa Zaman Choudhury"
              width={180}
              height={240}
              className="object-cover rounded-2xl w-full h-auto aspect-[3/4]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-neutral-600 mb-4">
                Founder & CEO
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
                Mustafa Zaman Choudhury
              </h1>
            </div>

            <div className="flex flex-col gap-5 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                Engineer and entrepreneur driven by a vision to accelerate the transition toward a sustainable future. With 6+ years of industry experience, I founded the company with a mission to deliver innovative, efficient, and accessible green energy solutions to industries and commercial assets that create real impact.
              </p>
              <p>
                Combining technical expertise with a forward-thinking mindset, I am passionate about building smart energy systems that support both economic growth and environmental responsibility and focusing on innovation, sustainability, and powering the country through clean energy technologies.
              </p>
              <p>
                Our company is shaping a future powered by renewable energy — smarter, cleaner, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
