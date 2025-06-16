import React, { useState, useRef } from "react";
import "./Contact.css";
import Header from "../Header";
import Footer from "../Footer";
import useThemeStore from "../../themeStore";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t26fsej', 'template_s0x0zuj', form.current, 'y22JUzJvVj9-2L38u')
      .then((result) => {
          console.log(result.text);
          alert("¡Mensaje enviado correctamente!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
      });
  };


  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className={`contact-card ${isDarkMode ? "dark-mode" : ""}`}>
          <h2>Contacto</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" name="from_name" placeholder="Tu Nombre" required />
            <input type="email" name="from_email" placeholder="Tu Email" required />
            <textarea name="message" placeholder="Escribe tu mensaje..." required />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
