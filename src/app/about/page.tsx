import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamSection from "../components/TeamSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | ASMTECH Power & Infra Pvt Ltd",
  description:
    "ASMTECH Power & Infra Pvt Ltd is a growing Solar EPC company committed to delivering reliable and affordable rooftop solar solutions for homes and businesses across India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <section className="pt-8 container mx-auto max-w-6xl">
        <Header />
      </section>

      {/* Hero section */}
      <section className="container mx-auto max-w-6xl px-4 pt-10 md:pt-14">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 md:mb-10">
            <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-neutral-800 shrink-0">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-neutral-900 sm:text-right max-w-[16ch]">
            Pioneering a solar powered future
          </h1>
        </div>

        {/* Hero image placeholder */}
        <div className="w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl bg-black relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405075/solar_solution_hero_u6a36e.png"
            alt="Solar solution illustration"
            fill
            className="object-cover rounded-2xl"
            priority={false}
          />
        </div>
      
      </section>

      {/* Company description */}
      <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-medium leading-snug text-neutral-900 text-center max-w-3xl mx-auto">
          Asmtech Power &amp; Infra Pvt Ltd. is a growing Solar EPC
          (Engineering, Procurement &amp; Construction) company committed to
          delivering reliable and affordable rooftop solar solutions for homes
          and businesses
        </p>
      </section>

      {/* Mission section */}
      <section className="container mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-black relative overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405692/about_mission_bu2cso.png"
              alt="Mission"
              fill
              className="object-cover w-full h-full rounded-2xl"
              priority={false}
            />
          </div>
    

          {/* Content */}
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-neutral-600">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-neutral-900">
              Powering a Greener Future
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              To empower households with affordable solar energy solutions that
              reduce electricity costs and promote a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="container mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content — on left for desktop, below image on mobile */}
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <span className="inline-flex w-fit items-center rounded-full border border-neutral-400 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-neutral-600">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-neutral-900">
              Trusted Solar for India
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              To contribute towards a solar-powered India by building trust,
              delivering quality installations, and creating long-term customer
              relationships.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black order-1 md:order-2 relative">
          <Image
            src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778405696/about_vision_msjwga.png"
            alt="Vision"
            fill
            className="object-cover rounded-2xl"
            priority={false}
          />
          </div>
    
        </div>
      </section>

      <TeamSection />
      <Footer />
    </main>
  );
}
