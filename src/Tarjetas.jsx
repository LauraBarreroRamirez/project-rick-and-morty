import { useState, useEffect, useRef } from "react";
import s from "./Tarjetas.module.css";
import Tarjeta from "./Tarjeta.jsx";
import axios from "axios";

function Tarjetas() {
    const [personajes, setPersonajes] = useState([]);
    const [page, setPage] = useState(1)
    // const [maxPage, setMaxPage] = useState(null)

    const maxPage = useRef(null)

    const fetchData = (page) => {
        return axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`) 
        .then((response) => {
          setPersonajes(response.data.results)
          maxPage.current = response.data.info.pages
        })
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const aumentarPagina = () => {
      if (page < maxPage.current) setPage(page + 1)
    }

    const disminuirPagina = () => {
      if (page > 1) setPage(page - 1)
    }

    const irAlPrincipio = () => {
      setPage(1)
    }

    const irAlFinal = () => {
      setPage(maxPage.current)
    }
    console.log("me reenderice")
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
        {/* <button className={s.button}>Show more</button> */}
        <button
          className="btn btn-primary"
          onClick={irAlPrincipio}
        >ir al principio</button>
        <button 
          className="btn btn-primary"
          onClick={disminuirPagina}
        >
          Anterior
        </button>
        <span>{page} - </span>
        <span>{maxPage.current}</span>
        <button 
          className="btn btn-primary"
          onClick={aumentarPagina}
        >
          Siguiente
        </button>
        <button
          className="btn btn-primary"
          onClick={irAlFinal}
        >
          ir al final
        </button>
        </div>
      </div>
    );
  }
  
  export default Tarjetas;
  