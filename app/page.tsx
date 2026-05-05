import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="bg-[#07100b] min-h-screen w-full"
      style={{ position: "relative" }}
    >
      {/* Header / Nav */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* What I do */}
      <WhatIDoSection />

      {/* Work Experience */}
      <WorkExperienceSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact CTA */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
