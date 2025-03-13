import React from "react";

const DoctorCard = ({ image, name, specialty, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-[177px] h-[246px] md:w-[187px] md:h-[256px] bg-[#E0EEDC] overflow-visible rounded-t-full mb-4">
        <img
          src={image}
          alt={name}
          className="absolute mx-auto w-[261px] h-[261px] object-contain"
          style={{ transform: 'translateX(-15%)' }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-lg text-[#465445] mt-1">{specialty}</p>
    </div>
  );
};

export default DoctorCard;