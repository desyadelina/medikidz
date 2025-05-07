import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description }) => {
  const icons = {
    "Poli Anak": "/icons/poli-anak.svg",
    "Poli Umum": "/icons/poli-umum.svg",
    "Apotek": "/icons/apotek.svg",
    "Laboratorium": "/icons/laboratorium.svg",
    "Khitan Anak": "/icons/khitan-anak.svg",
    "Homecare": "/icons/homecare.svg",
  };

  return (
    <div className="flex flex-col mb-8">
      <Link to={`/service/${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="bg-gray-200 h-[88px] w-[88px] rounded flex items-center justify-center mb-4">
          {icons[title] ? (
            <img
              src={icons[title]}
              alt={title}
              className="h-12 w-12 object-cover rounded"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-800" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8v3a1 1 0 0 0 1 1h3m0-4v8m10-8v3a1 1 0 0 0 1 1h3m0-4v8m-11-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"/></svg>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-[#465445] w-auto">{description}</p>
      </Link>
    </div>
  );
};

export default ServiceCard;