import React, { useState } from "react";
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

    const [eleccionUser, setEleccionUser] = useState(null);
    const [eleccionPC, setEleccionPC] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [disabledOpcionesElegidas,setDisabledOpcionesElegidas] = useState(true);
    const [chosen, setChosen] = useState(false);


    const handleEleccion = (e) => {
        setEleccionUser(opciones ? opciones.find((opcion) => opcion.id === e) : <>No existe la opcion elegida</>);
        setDisabled(true);

        setTimeout(() => {
            setChosen(true);
        }, 500)
        
        setDisabledOpcionesElegidas(false);

        eleccionRandom();
    }

    const eleccionRandom = () => {
        const random = Math.floor(Math.random() * 5);

        setTimeout(() => {
            setEleccionPC(opciones ? opciones.find((opcion) => opcion.id === random) : <>No existe la opcion elegida</>)
        }, 3000);

        clearTimeout();
    }

    return (
        <div className="container">
            {!chosen ? 
                (<div>
                        <div className={`container-title ${disabled ? "disabled" : ""}`} disabled={disabled}>
                            <h1 className="title-juego">¡Que comience el juego!</h1>
                        </div>

                        <div  className="container-opciones">
                            <div className="box-btn-opciones">
                                {opciones && opciones.map((opcion) => {
                                    return (
                                        <button key={opcion.id} className={`btn-opcion ${disabled ? "disabled" : ""}`} onClick={() => handleEleccion(opcion.id)} disabled={disabled}> 
                                            <img className="img-opcion" src={opcion.logo} alt={opcion.nombre}></img>
                                            {opcion.nombre}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                </div>)
            :
                (<div className={`box-opciones-elegidas ${disabledOpcionesElegidas ? "disabled" : ""}`} disabled={disabledOpcionesElegidas}>
                        <div className="box-opcion-elegida-user">
                            {eleccionUser && (
                                <button key={eleccionUser.id} className="btn-opcion"> 
                                    <img className="img-opcion" src={eleccionUser.logo} alt={eleccionUser.nombre}></img>
                                    {eleccionUser.nombre}
                                </button>
                            )}
                        </div>

                        <div className="box-vs">
                            <p>VS</p>
                        </div>

                        <div className="box-opcion-elegida-pc">
                            {eleccionPC && (
                                <button key={eleccionPC.id} className="btn-opcion"> 
                                    <img className="img-opcion" src={eleccionPC.logo} alt={eleccionPC.nombre}></img>
                                    {eleccionPC.nombre}
                                </button>
                            )}
                        </div>
                </div>)}
        </div>
    )
}

export default Juego;