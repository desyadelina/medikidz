import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/ServicesData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { serviceId } = useParams(); // Ambil serviceId dari URL
  const services = servicesData[serviceId] || []; // Ambil layanan berdasarkan serviceId

  return (
    <section className="px-16 pt-36 max-md:px-10 max-sm:px-5 max-sm:pt-20 py-16 md:py-24">
      <h2 className="mb-12 text-5xl font-bold text-center text-stone-950">
        Our Service
      </h2>
      <div
        className={`grid gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 ${
          services.length === 2 ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;