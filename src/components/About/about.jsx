import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import Header from "../Header";
import Footer from "../Footer";
import datosAbout from "./About.json";
import useThemeStore from "../../themeStore";
import Mifoto from "../../assets/Mifoto.jpeg"; // Asegúrate de que la ruta sea correcta

const About = () => {
  const [datos, setDatos] = useState(null);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    setDatos(datosAbout[0]);
  }, []);

  if (!datos) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="about-container">
        
      <div className={`about-card ${isDarkMode ? "dark-mode" : ""}`}>
        <img
          src={Mifoto}
          alt={`${datos.nombre} ${datos.apellido}`}
          className="about-image"
        />
        <h2>{datos.nombre} {datos.apellido}</h2>
        <h3>Hobbies:</h3>
        <ul>
          {datos.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h3>Contacto:</h3>
        <p>Teléfono: {datos.contacto.Cel}</p>
        <p>Correo: {datos.contacto.Mail}</p>
      </div>
    </div>
  );
};

export default About;
