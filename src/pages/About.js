import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-16 bg-black" id="nosotros">
      <div className="container pt-10 m-auto px-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/dcu06etml/image/upload/v1693869270/tns/pmlexbd3ip6zraqijzhk.png"
              className="rounded-full"
              alt="Tinta Negra Studios"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-4xl text-gray-300 font-bold md:text-4xl">
              ¿Quienes somos?
            </h2>
            <p className="mt-6 text-2xl text-white">
              Un RoomStudio enfocado en la producción musical, producción
              audiovisual.
              <br />
              Desde el año 2018 ayudando a jovenes talentos de la provincia de
              Catamarca a plasmar sus ideas en canciones.
              <br />
              Contamos en nuestro portfolio con más de 50 producciones... <br />
              en estilos que van desde el rap, trap, electrónica, reggaetón,
              acústico, entre otros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
