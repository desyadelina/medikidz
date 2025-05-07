import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <article className="flex flex-col items-center p-7 w-full bg-orange-50 rounded-lg shadow-sm h-[260px]">
      <h3 className="mb-6 text-3xl text-center font-bold text-stone-950">
        {title}
      </h3>
      <p className="text-base font-light text-center text-stone-950">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
