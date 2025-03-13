import React from "react";
import ServiceCard from "./ServiceCard";

const services = Array(6).fill({
  title: "Nama Service",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text",
});

const ServicesSection = () => {
  return (
    <section className="px-16 pt-36 max-md:px-10 max-sm:px-5 max-sm:pt-20 py-16 md:py-24">
      <h2 className="mb-12 text-5xl font-bold text-center text-stone-950">
        Our Service
      </h2>
      <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
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
