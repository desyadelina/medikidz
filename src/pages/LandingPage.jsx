import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import DoctorsSection from "../components/landing/DoctorsSection";
import ContactSection from "../components/ContactSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;