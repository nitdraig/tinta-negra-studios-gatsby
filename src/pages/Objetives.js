import React, { useState, useEffect } from "react";
const objetivesLists = [
  {
    objetiveTitle: "Juntos",
    objetiveDescription: "Colaboramos a desarrollar tu idea.",
  },
  {
    objetiveTitle: "Potenciamos tu creatividad",
    objetiveDescription:
      "Ofrecemos una gama de herramientas que te permiten expandirte.",
  },
  {
    objetiveTitle: "Creamos el impulso que necesitas",
    objetiveDescription:
      "Una idea nace, crece, pero también debe ser constantemente nutrida para potenciarse.",
  },
  {
    objetiveTitle: "Tu idea merece crecer",
    objetiveDescription: "Y en Tinta Negra Studios te ayudamos a ello.",
  },
];
const Objetives = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < objetivesLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, [objetivesLists]);

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
    <section className="bg-gray-900 p-4" id="objetivos">
      <div className="container mt-10 mx-auto p-4 lg:p-12">
        <div data-aos="zoom-in" className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight pb-10 text-gray-200 sm:text-4xl lg:text-5xl">
            Nuestros objetivos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {objetivesLists.map((objetives, i) => (
            <div
              data-aos="fade-down-left"
              key={i}
              className={`overflow-hidden rounded-2xl ${usedColors[i]}   p-4 lg:p-12`}
            >
              <h3 className="mt-4 text-3xl font-semibold text-slate-800">
                {objetives.objetiveTitle}
              </h3>
              <p className="mt-4 text-lg text-black">
                {objetives.objetiveDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objetives;
