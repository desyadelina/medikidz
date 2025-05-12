import React, { useEffect } from "react";
import HeroSection from "../components/detail/HeroSection";
import ServicesSection from "../components/detail/ServicesSection";
const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default ServiceDetails;
