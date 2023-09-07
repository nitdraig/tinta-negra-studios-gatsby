import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-700 bg-gray-900 body-font">
      <div className="container px-5 py-4 mx-auto">
        <p className="text-sm text-white capitalize text-center">
          Tinta Negra Studios - All rights reserved Copyright &copy; 2023
          <br />
          <p className="mt-3">
            {" "}
            <a
              href="https://www.linkedin.com/in/avellaneda-agustín-tns"
              target="_blank"
            >
              {" "}
              Dev with &hearts; by Agustín Avellaneda
            </a>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
