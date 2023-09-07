import React, { useState, useEffect } from "react";

const servicesLists = [
  {
    servicesTitle: "Producción musical",
    servicesDescription:
      "Producimos de principio a fin tu idea, involucrando al artista en todos los aspectos del desarrollo. Posee un limite de revisiones finales.",
    servicesImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1693868523/tns/msnjnxhzr9sdm5g46yn7.jpg",
  },
  {
    servicesTitle: "Mix & Mastering",
    servicesDescription:
      "Podes de igual manera traernos tu tema ya producido, nos encargaremos de darle los toques finales basados en referencias provistas por el cliente.",
    servicesImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1693868522/tns/z00v6botyt4ey3yrldm8.jpg",
  },
  {
    servicesTitle: "Otros servicios",
    servicesDescription:
      "Nos encargamos de distribución en múltiples plataformas, realizamos ediciones de video y hasta diseños de páginas web. Consultanos para saber los precios.",
    servicesImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1693868541/tns/jlwurqkvooafvpubw5gl.jpg",
  },
];
const Services = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < servicesLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, [servicesLists]);

  function getRandomColor(colors, usedColors) {
    const availableColors = colors.filter(
      (color) => !usedColors.includes(color)
    );

    if (availableColors.length === 0) {
      usedColors.length = 0;
      return colors[Math.floor(Math.random() * colors.length)];
    }

    const randomIndex = Math.floor(Math.random() * availableColors.length);
    const color = availableColors[randomIndex];
    usedColors.push(color);
    return color;
  }

  return (
    <section className="py-16 bg-gray-900" id="services">
      <div className="container m-auto mt-10 px-6 text-gray-800 md:px-12 xl:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight pb-10 text-gray-200 sm:text-4xl lg:text-5xl">
            Servicios
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {servicesLists.map((service, i) => (
            <div
              key={i}
              className={`overflow-hidden shadow-xl px-8 py-12 sm:px-12 lg:px-8 rounded-2xl ${usedColors[i]} `}
            >
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">
                  {service.servicesTitle}
                </h3>
                <p className="mb-6 text-black">
                  {service.servicesDescription}
                  <br />
                  <br />
                </p>
              </div>
              <img
                src={service.servicesImg}
                width="900"
                height="600"
                alt="Servicio"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
