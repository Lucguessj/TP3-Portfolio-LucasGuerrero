import { React, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faMusic } from "@fortawesome/free-solid-svg-icons";
import "../app.css";
import useThemeStore from "../themeStore";

function Header() {
  const location = useLocation();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  const getNavLinkStyle = (path) =>
    location.pathname === path
      ? { color: "#fde047", textDecoration: "underline" }
      : {};
  const audioRef = useRef(null);

  const reproducirMusica = () => {
    audioRef.current.play();
  };

  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/" style={getNavLinkStyle("/")} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/aboutme"
            style={getNavLinkStyle("/aboutme")}
            className="nav-link"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={getNavLinkStyle("/projects")}
            className="nav-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={getNavLinkStyle("/contact")}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
        <li>
          <button
            onClick={toggleDarkMode}
            className="dark-mode-link nav-link"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            {" Modo " + (isDarkMode ? "Claro" : "Oscuro")}
          </button>
        </li>
        <button onClick={reproducirMusica} className="boton-musica">
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </ul>
      <audio ref={audioRef}>
        <source src="/Musica.mp3" type="audio/mpeg" />
      </audio>
    </nav>
  );
}

export default Header;
