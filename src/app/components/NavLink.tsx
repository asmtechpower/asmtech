"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const baseClassName =
  "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-[background-color,color] duration-300 ease-out";

const inactiveClassName =
  "text-neutral-900 hover:bg-green-400 hover:text-black";

const activeClassName = "bg-green-400 text-black";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={[baseClassName, isActive ? activeClassName : inactiveClassName, className]
        .filter(Boolean)
        .join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
