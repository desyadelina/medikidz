import React from "react";
import { useParams } from "react-router-dom";
import ServiceCard from "../landing/ServiceCard";

const HeroSection = () => {
  const { serviceId } = useParams();

  const services = [
    {
      title: "Poli Anak",
      description:
        "Poli Anak pada Klinik dan Apotek Medikidz merupakan pelayanan kesehatan anak Rawat Jalan yang dapat melayani Pemantauan Tumbuh Kembang Anak, Imunisasi, Pelayanan Kesehatan untuk Anak Sakit, Skrining Nutrisi Anak dan Tumbuh Kembang Anak, dan Pelayanan Lain pada Kesehatan Anak.",
    },
    {
      title: "Poli Umum",
      description:
        "Poli Umum Klinik Medikidz memberikan layanan pemeriksaan dan diagnosis penyakit umum, pencegahan penyakit melalui Screening, vaksinasi, penyuluhan kesehatan, dan pemeriksaan rutin, Layanan Rujukan, Konsultasi Kesehatan, Khitanan Anak, Medical Check Up, Home Care, dan Pembuatan Surat Sehat dan Sakit.",
    },
    {
      title: "Apotek",
      description:
        "Apotek Medikidz merupakan Unit Layanan yang menyelenggarakan Pelayanan Kefarmasian. Pelayanan yang diselenggarakan antara lain Pengelolaan Sediaan Farmasi, Alat Kesehatan, dan Bahan Medis Habis Pakai dan pelayanan Farmasi Klinik.",
    },
    {
      title: "Laboratorium",
      description:
        "Laboratorium Medikidz merupakan Unit dalam Klinik Medikidz yang menyelenggarakan pelayanan kesehatan untuk pengukuran, penetapan dan pengujian untuk penentuan jenis penyakit, penyebab penyakit, dan kondisi kesehatan. Jenis pemeriksaan yang dapat dilakukan antara lain hematologi klinik, kimia klinik, dan beberapa pemeriksaan lain.",
    },
    {
      title: "Khitan Anak",
      description:
        "Layanan sunat anak dengan metode modern, aman, dan nyaman bagi anak-anak. Proses dilakukan oleh tenaga medis profesional dengan pendekatan yang ramah anak, memastikan pengalaman yang minim trauma dan pemulihan yang cepat untuk kenyamanan anak dan keluarga.",
    },
    {
      title: "Homecare",
      description:
        "Layanan perawatan kesehatan langsung di rumah, cocok untuk pasien yang butuh pemantauan rutin. Tim medis kami memberikan layanan seperti perawatan luka, terapi, pemeriksaan kesehatan, dan konsultasi, memastikan pasien mendapatkan perawatan berkualitas tanpa harus meninggalkan kenyamanan rumah mereka.",
    },
  ];

  const currentService = services.find(
    (service) => service.title.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!currentService) {
    return <p>Service not found</p>;
  }

  return (
    <section className="relative bg-white overflow-hidden flex justify-center items-center">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-[530px] mb-10 md:mb-0 px-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {currentService.title}
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-800 max-w-lg mx-auto md:mx-0">
              {currentService.description}
            </p>
            <button className="mt-8 px-8 py-3 bg-[#465445] text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-colors">
              Register
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative px-4">
            <div
              className="w-full md:w-[464px] h-[323px] md:h-[646px] bg-[#C2DEB9] overflow-visible"
              style={{
                transform: "translateY(15%)",
                borderTopLeftRadius: "245.5px",
              }}
            ></div>
            <img
              src="/images/dr_Iskandar_cropped.png"
              alt="Doctor"
              className="absolute bottom-0 left-0 right-0 mx-auto w-full md:w-[600px] object-contain"
              style={{ transform: "translateY(25%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
