import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen" dir="rtl">
      {/* Animated background */}
      <div className="animated-bg" aria-hidden="true" />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <Section1 />
      <SectionDivider sectionNum={1} />

      <Section2 />
      <SectionDivider sectionNum={2} />

      <Section3 />
      <SectionDivider sectionNum={3} />

      <Section4 />
      <SectionDivider sectionNum={4} />

      <Section5 />
      <SectionDivider sectionNum={5} />

      <Section6 />
      <SectionDivider sectionNum={6} />

      <Section7 />

      {/* Footer */}
      <Footer />
    </main>
  );
}
