"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderNav from "./HeaderNav";
import NavLink from "./NavLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-20 mx-4 md:mx-0">
      <div className="flex items-center justify-between gap-2 px-3 py-3 rounded-full bg-white">
        <Link href="/" className="ml-3 shrink-0" aria-label="ASMTech home">
          <Image
            src="/asmtech_logo.webp"
            width={160}
            height={160}
            alt=""
            className="h-9 w-auto scale-[1.8] md:scale-[2] origin-left"
          />
        </Link>

        <div className="hidden md:flex md:flex-1 md:justify-center">
          <HeaderNav />
        </div>

        <div className="hidden md:block shrink-0 bg-white px-5 py-2.5 rounded-full border-black border-2 text-sm">
          <Link href="/contact">Contact us</Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black text-neutral-900"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="size-5"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="size-5"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile"
        aria-hidden={!menuOpen}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="rounded-2xl border-2 border-black bg-white px-3 py-3 shadow-lg">
          <ul className="flex flex-col gap-1">
            <li>
              <NavLink href="/" className="w-full justify-center">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" className="w-full justify-center">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/solar-solutions"
                className="w-full justify-center"
              >
                Solar Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/solar-calculator"
                className="w-full justify-center"
              >
                Subsidy calculator
              </NavLink>
            </li>
            <li className="pt-2 border-t border-neutral-200">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full border-2 border-black px-3 py-2.5 text-sm font-medium"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
