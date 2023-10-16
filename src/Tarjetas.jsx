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
    }, []);

    return (
      <div className={s.container}>
        <h1 className={s.titulo}>Tarjetas</h1>
        <div className={s.card}>
            <ul>
                {personajes && personajes.length > 0 && personajes.map((personaje, index) => (
                  <li key={personaje.id}>
                    {personaje.name} {personaje.image} {personaje.gender} 
                    {/* {personaje.location} */}
                  </li>),
                )}            
            </ul>
        </div>
        <div>
        <button className={s.button}>click me</button>
        </div>
      </div>
    );
  }
  
  export default Tarjetas;
  