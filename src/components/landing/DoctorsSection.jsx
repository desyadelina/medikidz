import React from "react";
import Slider from "react-slick";
import DoctorCard from "./DoctorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1, color: "#E0EEDC" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 , color: "#E0EEDC"}}
      onClick={onClick}
    />
  );
};

const DoctorsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="doctor" className="py-16 md:py-24 bg-[#C2DEB9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Doctor</h2>
          <p className="mt-4 text-lg text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>

        <div className="block md:hidden">
          <Slider {...settings}>
            <DoctorCard
              image="images/doctor.png"
              name="Dr. Iskandar"
              specialty="Dokter Anak"
            />
            <DoctorCard
              image="images/doctor.png"
              name="Dr. Iskandar"
              specialty="Dokter Anak"
            />
            <DoctorCard
              image="images/doctor.png"
              name="Dr. Iskandar"
              specialty="Dokter Anak"
            />
            <DoctorCard
              image="images/doctor.png"
              name="Dr. Iskandar"
              specialty="Dokter Anak"
            />
          </Slider>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DoctorCard
            image="images/doctor.png"
            name="Dr. Iskandar"
            specialty="Dokter Anak"
          />
          <DoctorCard
            image="images/doctor.png"
            name="Dr. Iskandar"
            specialty="Dokter Anak"
          />
          <DoctorCard
            image="images/doctor.png"
            name="Dr. Iskandar"
            specialty="Dokter Anak"
          />
          <DoctorCard
            image="images/doctor.png"
            name="Dr. Iskandar"
            specialty="Dokter Anak"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;