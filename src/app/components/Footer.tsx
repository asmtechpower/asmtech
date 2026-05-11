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
  { label: "Savings calculator", href: "/solar-calculator" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18JAXf3dq8/",
    icon: (
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AsmtechPowerInfraPvtLtd",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
] as const;

const brandDescription =
  "ASMTECH Power & Infra Pvt Ltd is a solar EPC partner for homes and businesses: design, installation, and support across residential, commercial, and ground-mount projects, with guidance on subsidies and long-term savings.";

export default function Footer() {
  const year = new Date().getFullYear();

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
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">
          {/* Logo, socials, and description */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10 lg:max-w-2xl">
            <div className="flex shrink-0 flex-col gap-5">
              <Link href="/" aria-label="ASMTECH home">
                <Image
                  src="/asmtech_logo.webp"
                  height={54}
                  width={81}
                  alt=""
                  className="brightness-200"
                />
              </Link>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ASMTECH on ${item.label}`}
                    className="flex size-10 items-center justify-center rounded-full border border-neutral-500 text-neutral-300 transition-colors hover:border-neutral-300 hover:bg-neutral-700 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                      aria-hidden
                    >
                      {item.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 sm:pt-1 sm:min-w-0">
              {brandDescription}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 sm:gap-x-20 md:gap-x-28">
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

        <p className="mt-10 border-t border-neutral-700 pt-8 text-center text-xs text-neutral-500 sm:text-left">
          © {year} ASMTECH Power & Infra Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
