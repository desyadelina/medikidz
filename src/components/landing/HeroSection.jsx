import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#C2DEB9] overflow-hidden flex justify-center items-center">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[700px] mb-10 md:mb-0 px-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sehat, Edukatif, Inovatif,
              <br />
              <span className="text-white">
                Ramah Lingkungan, dan Berkelanjutan
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-800 mx-auto md:mx-0">
              Klinik dan Apotek Medikidz merupakan sebuah Klinik Pratama dan
              Apotek di Wilayah Kota Banjarbaru yang memberikan berbagai Layanan
              dan Penunjang Kesehatan. Klinik dan Apotek ini didirikan pada
              tahun 2025 dan menjadi salah satu pelopor Pelayanan Kesehatan
              Tingkat Pertama yang mengedepankan Pelayanan Kesehatan Paripurna
              berbasis Teknologi dan Ramah Lingkungan.
            </p>
            <button className="mt-8 px-8 py-3 bg-[#465445] text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-colors">
              Register
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative px-4">
            <div
              className="w-full md:w-[464px] h-[323px] md:h-[646px] bg-[#E0EEDC] overflow-visible rounded-t-full md:rounded-t-full"
              style={{ transform: "translateY(15%)" }}
            ></div>
            <img
              src="images/doctor.png"
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
