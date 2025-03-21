import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section id="service" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Service
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* First column with large image */}
          <div className="hidden md:flex col-span-1 md:col-span-1 lg:col-span-1 flex-col">
            <div
              className="overflow-hidden mb-8 h-[560px] w-[491px] bg-[#C2DEB9]"
              style={{ borderTopRightRadius: "245.5px" }}
            >
              <img
                src="images/doctor.png"
                alt="Doctor"
                className="absolute w-[560px] object-cover"
                style={{ transform: "translateY(10%)" }}
              />
            </div>
            <div className="overflow-hidden mb-8 ">
              <h3
                className="absolute text-6xl font-bold text-white opacity-[59%]"
                style={{ transform: "translateY(-180%) translateX(15%)" }}
              >
                Service
              </h3>
            </div>
          </div>

          {/* Grid for service cards */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 md:items-center lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Poli Anak"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
              <ServiceCard
                title="Service 1"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
              <ServiceCard
                title="Service 1"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
              <ServiceCard
                title="Service 1"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
              <ServiceCard
                title="Service 1"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
              <ServiceCard
                title="Service 1"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;