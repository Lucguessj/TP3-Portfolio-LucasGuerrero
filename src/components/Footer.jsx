import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        
        <a
          href="https://github.com/lucguessj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {" | "}
        <a
          href="https://www.instagram.com/Lgue.coach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
        {" | "}
        <a
          href="https://wa.me/5493816405182"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </p>
      <p>
        ©2025 Guerrero López Lucas Andrés.
      </p>
    </div>
  );
};

export default Footer;