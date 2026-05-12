import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

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
    </html>
  );
}
