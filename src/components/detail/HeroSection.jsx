import React from "react";
import { useParams } from "react-router-dom";

const HeroSection = () => {
  const { serviceId } = useParams();
return (
    <section className="relative bg-white overflow-hidden flex justify-center items-center">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[530px] mb-10 md:mb-0 px-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {serviceId.replace(/-/g, " ")}
                    </h1>
                    <p className="mt-6 text-base md:text-lg text-gray-800 max-w-lg mx-auto md:mx-0">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                    <button className="mt-8 px-8 py-3 bg-[#465445] text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-colors">
                        Register
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center relative px-4">
                    <div
                        className="w-full md:w-[464px] h-[323px] md:h-[646px] bg-[#C2DEB9] overflow-visible"
                        style={{ transform: "translateY(15%)", borderTopLeftRadius: "245.5px" }}
                    ></div>
                    <img
                        src="/images/doctor.png"
                        alt="Doctor"
                        className="absolute bottom-0 left-0 right-0 mx-auto w-full md:w-[679px] object-contain"
                        style={{ transform: "translateY(15%)" }}
                    />
                </div>
            </div>
        </div>
    </section>
);
};

export default HeroSection;
