import React from "react";
import "./Juego.css";
import papel from "../images/papel.png";
import lagarto from "../images/lagarto.png";
import piedra from "../images/piedra.png";
import Spock from "../images/Spock.png";
import tijeras from "../images/tijeras.png";

const Juego = () => {

    const opciones = [
        {id: 0, nombre: 'Piedra' , logo: piedra},
        {id: 1, nombre: 'Papel' , logo: papel},
        {id: 2, nombre: 'Tijera' , logo: tijeras},
        {id: 3, nombre: 'Lagarto', logo: lagarto},
        {id: 4, nombre: 'Spock', logo: Spock},
    ];

    return (
        <div className="container">

            <div className="container-title">
                <h1 className="title-juego">¡Que comience el juego!</h1>
            </div>

            <div  className="container-opciones">
                <div className="box-btn-opciones">
                    {opciones.map((opcion) => {
                        return (
                            <button key={opcion.id} className="btn-opcion" > 
                                <img className="img-opcion" src={opcion.logo} alt={opcion.nombre}></img>
                                {opcion.nombre}
                            </button>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Juego;