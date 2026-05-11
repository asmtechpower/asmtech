import Link from "next/link";
import AboutSection from "./components/AboutSection";
import SolutionsSection from "./components/SolutionsSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative overflow-hidden pt-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1778514971/8851164-uhd_2560_1440_30fps_00_00_08_k5fcqy.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dhbjr5ujm/video/upload/v1778405382/8851164-uhd_2560_1440_30fps_eeqryj.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black/20" />
        <div className="relative z-10 container mx-auto max-w-6xl min-h-screen flex flex-col">
          <Header />
          {/* Hero content */}
          <div className="flex flex-1 items-center justify-center px-4 pb-12 sm:pb-16">
            <div className="grid gap-4 sm:gap-6 text-white text-center max-w-full">
              <h3 className="justify-self-center uppercase text-green-300 text-base sm:text-lg font-medium inline-block w-fit mx-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/45 backdrop-blur-sm border border-green-400/35 shadow-md shadow-black/20">
                Solar Energy for Tomorrow
              </h3>
              <h1 className="text-4xl leading-[1.05] md:text-6xl lg:text-7xl xl:text-[80px] xl:leading-[100%] font-bold max-w-[15ch] mx-auto">
                Power Your <span className="text-green-400">Future</span> with Clean Solar Energy
              </h1>
              <h2 className="uppercase font-medium text-xl max-w-[60ch] px-8 text-gray-200">
                Expert end-to-end solar solutions for commercial, industrial, and ground mount projects
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-green-400 px-9 py-4 rounded-full text-black font-medium uppercase"
                >
                  Get free consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 shrink-0"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/subsidy"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/90 bg-white/10 px-9 py-4 text-sm font-medium uppercase text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Check subsidy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
