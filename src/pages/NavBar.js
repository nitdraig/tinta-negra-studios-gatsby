import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-black bg-opacity-50 pt-1 text-white w-screen  fixed">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#home">
          TNS
        </a>

        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <a className="hover:text-gray-200" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#objetivos">
              Objetivos
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#proyectos">
              Proyectos
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#contacto">
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
