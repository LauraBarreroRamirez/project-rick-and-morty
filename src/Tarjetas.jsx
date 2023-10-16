import { useState, useEffect } from "react";
import s from "./Tarjetas.module.css";
import Tarjeta from "./Tarjeta.jsx";
import axios from "axios";

function Tarjetas() {
    const [personajes, setPersonajes] = useState([]);

    const fetchData = () => {
        return axios.get("https://rickandmortyapi.com/api/character") 
        .then((response) => setPersonajes(response.data.results))
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <div className={s.container}>
        <h1 className={s.titulo}>Personajes</h1>
        <div className="row">
            {personajes.map((personaje) => (
              <div key={personaje.id} className="col-12 col-sm-6 col-lg-4 my-2">
                <Tarjeta info={personaje} />
              </div>
            ))}
        </div>
        <div>
        <button className={s.button}>click me</button>
        </div>
      </div>
    );
  }
  
  export default Tarjetas;
  