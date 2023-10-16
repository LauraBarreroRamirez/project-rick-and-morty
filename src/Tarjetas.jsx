import { useState, useEffect } from "react";
import s from "./Tarjetas.module.css";
import axios from "axios";

function Tarjetas() {
    const [personajes, setPersonajes] = useState([]);

    const fetchData = () => {
        return axios.get("https://rickandmortyapi.com/api/character") 
        .then((response) => setPersonajes(response.data.results))
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
      <div className={s.container}>
        <h1 className={s.titulo}>Tarjetas</h1>
        <div className={s.card}>
            <ul>
                {personajes?.map((personaje) => (<li key={personaje.name}>{personaje.name}</li>))}
                {personajes?.map((personaje) => (<li key={personaje.image}>{personaje.image}</li>))}
            </ul>
        </div>
        <div>
        <button className={s.button}>click me</button>
        </div>
      </div>
    );
  }
  
  export default Tarjetas;
  