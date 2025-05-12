import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <article className="flex flex-col items-center p-7 w-full bg-orange-50 rounded-lg shadow-sm h-auto">
      <h3 className="mb-6 text-2xl text-center font-bold text-stone-950">
        {title}
      </h3>
      <p className="text-base font-medium text-center text-stone-950">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
