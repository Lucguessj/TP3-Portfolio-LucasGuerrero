import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import useThemeStore from "../../themeStore";
import "./Projects.css";

const Projects = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

 

  return (
    <div className={`projects-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Header />
      <div className="project-card">
        <h2>Mis Proyectos</h2>
        <p>Este es mi primer portfolio realizado en React.</p>
        <img
          src="/capturaPortfolio.png"
          alt="Captura del Portfolio"
          className="project-image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
