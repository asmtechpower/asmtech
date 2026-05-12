import Link from "next/link";
import AboutSection from "./components/AboutSection";
import SolutionsSection from "./components/SolutionsSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
