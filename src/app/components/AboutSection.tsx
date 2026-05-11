import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-[#f5f0e8] px-6 py-10 text-center md:px-10 md:py-16"
      aria-labelledby="about-asmtech-heading"
    >
      <p className="mb-10 rounded-full  border border-black/40 px-5 py-2 text-lg font-light uppercase tracking-wide md:mb-10">
        About ASMTECH
      </p>
      <h2
        id="about-asmtech-heading"
        className="-mt-3 mb-14 max-w-[900px] text-4xl font-medium leading-tight text-black md:-mt-5 md:mb-16 md:text-[3rem]"
      >
        Our mission is to enable businesses and industries to transition to
        reliable, scalable solar energy systems that lower energy costs,
        enhance efficiency, and support long-term sustainability.
      </h2>
      <Link
        href="/about"
        className="inline-flex rounded-full bg-black px-9 py-4 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
      >
        Learn more about us
      </Link>
    </section>
  );
}
