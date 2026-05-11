import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
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
  title: "ASMTECH Power & Infra Pvt Ltd | Go Solar, Pay Zero Electricity Bills",
  description:
    "ASMTECH Power & Infra provides premium solar solutions. Get subsidy up to ₹1,30,800 from Central & State Government. Go solar and pay zero electricity bills.",
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
