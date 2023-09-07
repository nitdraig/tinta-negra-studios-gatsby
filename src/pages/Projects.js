import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

const projectsLists = [
  {
    projectsTitle: "Placebo",
    projectsDescription:
      "Primer disco producido totalmente en TINTA NEGRA STUDIOS",
    projectImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1694109408/tns/votsayajzpftih883bqv.webp",
    projectsYt:
      "https://www.youtube.com/watch?v=ArQ0qf_u_AY&list=PLRJsC_cR7I65SVn9M30uE50LnFngoOtQi",
    projectsSp: "https://open.spotify.com/playlist/75RFqvSM5sBtUhMvx0Zn84",
  },
  {
    projectsTitle: "Singles",
    projectsDescription:
      "Múltiples singles en diversos estilos fueron producidos de principio a fin en TNS",

    projectImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1694107885/tns/zbheik2iierf2q1men35.webp",
    projectsYt:
      "https://www.youtube.com/watch?v=iYi3QvQlyTE&list=PLRJsC_cR7I67Stwv-hJyzNB5tyenGfwuk",
    projectsSp:
      "https://open.spotify.com/playlist/75RFqvSM5sBtUhMvx0Zn84?si=47cfb2aad27b4916",
  },
  {
    projectsTitle: "Nuestro trabajo con diversos artistas",
    projectsDescription:
      "Varios talentosos decidieron permitirnos formar parte de sus repertorios.",
    projectImg:
      "https://res.cloudinary.com/dcu06etml/image/upload/v1694107917/tns/yyvgzbsqsyr9tnxo8ng6.webp",
    projectsYt:
      "https://youtube.com/playlist?list=PLahpfxOP7aQ9fjM_fhmJAitAd0JKPk2T0",
    projectsSp:
      "https://open.spotify.com/playlist/3EktJGDMXPr9QO0aM7XJvN?si=7cfb800a7e39493d",
  },
];
const Projects = () => {
  const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50"];
  const [usedColors, setUsedColors] = useState([]);

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < projectsLists.length; i++) {
      newColors.push(getRandomColor(colors, usedColors));
    }
    setUsedColors(newColors);
  }, [projectsLists]);

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
    <section className="py-6 bg-black sm:py-16 lg:py-16" id="proyectos">
      <div className="px-4 mt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
            Proyectos
          </h2>
          <p className="font-bold leading-tight text-gray-200 sm:text-4xl lg:text-3xl">
            {" "}
            <span className="text-[#435cff]">+100 </span>
            Singles en diversas plataformas
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 gap-x-6 xl:gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {projectsLists.map((project, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl ${usedColors[i]}`}
              >
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src={project.projectImg}
                      alt="tinta negra studios proyectos"
                    />
                  </div>
                  <div className="h-[150px]">
                    <p className="text-lg font-bold text-black mt-9">
                      {project.projectsTitle}
                    </p>

                    <p className="text-lg text-black">
                      {project.projectsDescription}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      className="p-2 my-5 mx-2 bg-black rounded-lg border-[#fffff] hover:bg-[#f8f6f6] hover:text-black font-bold text-white  border-2  hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
                      href={project.projectsYt}
                      target="_blank"
                    >
                      Youtube
                    </a>
                    <a
                      className="p-2 my-5 mx-2 bg-black rounded-lg border-[#fffff] hover:bg-[#f8f6f6] hover:text-black font-bold text-white  border-2  hover:border-[#000000] shadow-md transition duration-500 md:text-xl"
                      href={project.projectsSp}
                      target="_blank"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
