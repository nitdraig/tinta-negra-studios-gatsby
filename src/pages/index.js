import * as React from "react";
import Header from "./Header";
import About from "./About";
import Objetives from "./Objetives";
import Footer from "./Footer";
import Services from "./Services";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Objetives />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <Helmet>
    <title>Tinta Negra Studios</title>
    <meta
      name="description"
      content="Tinta negra studios es un RoomStudio ubicado en Catamarca, Argentina, realiza trabajos de Mix, Mastering, Distribución en plataformas y construcción de Webs"
    />
    <meta property="og:url" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tinta Negra Studios" />
    <meta
      property="og:description"
      content="Tinta negra studios es un RoomStudio ubicado en Catamarca, Argentina, realiza trabajos de Mix, Mastering, Distribución en plataformas y construcción de Webs"
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/dcu06etml/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="" />
    <meta property="twitter:url" content="" />
    <meta name="twitter:title" content="Tinta Negra Studios" />
    <meta
      name="twitter:description"
      content="Tinta negra studios es un RoomStudio ubicado en Catamarca, Argentina, realiza trabajos de Mix, Mastering, Distribución en plataformas y construcción de Webs"
    />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/dcu06etml/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp"
    />
  </Helmet>
);
