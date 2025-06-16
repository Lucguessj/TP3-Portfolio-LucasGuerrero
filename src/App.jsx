import './App.css';
import Main from './components/Main'; 
import { useRef } from 'react';

function App() {
  

  const datos = {
    imagen: '../src/assets/Mifoto.jpeg',
    descripcion: 'Hola! Soy Lucas Guerrero para abreviar, personal trainer y experto en nutricion deportiva. Me apasiona el deporte y la actividad física, y me dedico a ayudar a las personas a alcanzar sus objetivos.',
  };

  return (
    <div className="App">
    
      <Main datos={datos} />
    </div>
    
  );
}

export default App;
