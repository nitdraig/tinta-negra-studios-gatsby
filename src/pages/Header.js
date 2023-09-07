import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const headerStyle = {
    backgroundImage: `url("https://res.cloudinary.com/dcu06etml/image/upload/v1693868550/tns/bqcz8bxrmwhxtjuvotwb.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  AOS.init();
  return (
    <header
      style={headerStyle}
      className="header bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
      id="home"
    >
      <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1
            data-aos="zoom-out-left"
            data-aos-duration="2000"
            className="text-white font-extrabold mt-[2em] text-4xl xs:text-5xl md:text-6xl"
          >
            Tinta Negra Studios
          </h1>
          <h2
            data-aos="zoom-out-right"
            data-aos-duration="2000"
            className="text-gray-200 font-extrabold text-[2rem] xs:text-4xl  leading-tight"
          >
            Producimos ideas, alcanzamos sueños
          </h2>
          <div className="inline-flex mt-10">
            <a
              href="#nosotros"
              className="p-2 my-5 mx-2 bg-[#1d0606] hover:bg-[#f8f6f6] hover:text-black font-bold text-white rounded border-2 border-transparent hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="p-2 my-5 mx-2 bg-transparent border-[#fffff] hover:bg-[#f8f6f6] hover:text-black font-bold text-white rounded border-2  hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
