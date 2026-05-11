import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/solar-solutions" },
];

const solutionLinks = [
  { label: "Residential", href: "/solar-solutions" },
  { label: "Commercial", href: "/solar-solutions" },
  { label: "Ground mount", href: "/solar-solutions" },
  { label: "Subsidy & savings", href: "/solar-calculator" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
        {/* CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white max-w-[18ch]">
            Ready to harness the power of the sun?
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-green-400 px-7 py-3.5 text-sm font-medium text-black transition-all hover:bg-green-300 active:scale-[0.97]"
          >
            Connect With Us
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-24">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="ASMTECH home">
              <Image
                src="/asmtech_logo.webp"
                height={54}
                width={81}
                alt=""
                className="brightness-200"
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 sm:gap-20 md:gap-28">
            {/* Nav links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solution links */}
            <nav aria-label="Solutions">
              <ul className="flex flex-col gap-3">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
