import React from "react";
import HeroSection from "../components/detail/HeroSection";
import ServicesSection from "../components/detail/ServicesSection";
const ServiceDetails = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default ServiceDetails;
