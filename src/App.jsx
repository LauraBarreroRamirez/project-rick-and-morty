import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Tarjetas from "./Tarjetas.jsx";
import ImagenHome from "./assets/portal.gif";
import ImagenTitulo from "./assets/titulo.png";
import s from "./App.module.css";

function App() {
  return (
    <>
      <div className={s.Container}>
        <img 
          src={ImagenTitulo} 
          alt="Rick and Morty" 
          className={s.Logo} 
        />
        <img 
            src={ImagenHome} 
            alt="Imagen Portal" 
            className={s.Imagen}
        />
        <Link to="/tarjetas" className={s.LinkApp}>Tarjetas</Link>
      </div>
      
    </>
  );
}

export default App;
