import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power your future with clean energy",
  description:
    "Expert end-to-end solar solutions for residential, commercial and industrial projects",
    keywords: ['asmtech, asmtechpower, solar, solar panel, solar solutions, solar company, solar installer, solar panels, solar energy, solar power, solar energy company, solar energy solutions, solar energy installer, solar energy solutions, solar energy company, solar energy installer'],
  appleWebApp: {
    title: "ASMTech",
  },
  openGraph: {
    title: "Power your future with clean energy",
    description:
      "Expert end-to-end solar solutions for residential, commercial and industrial projects",
    url: "https://asmtechpower.co.in",
    siteName: "ASMTech",
    type: "website",
    images: [
      {
        url: "https://asmtechpower.co.in/",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
