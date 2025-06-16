import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import useThemeStore from "../themeStore";
import "./maincard.css"



function Main({ datos}) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  return (
    <main>
      <div className={`card ${isDarkMode ? "dark-mode" : ""}`}>
        <h2>
          Guerrero López Lucas Andrés 
        </h2>
        <hr />
        
        <img src={datos.imagen} alt="Perfil" />
        <p>{datos.descripcion}</p>
      </div>
    </main>
  );
}

export default Main;