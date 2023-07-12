import React, { useState } from "react";
import "./Juego.css";
import opciones from "../opciones";
import OpcionesJuego from "./OpcionesJuego";
import OpcionElegida from "./OpcionElegida";
import ResultadoJuego from "./ResultadoJuego";
import VolverAJugar from "./VolverAJugar";

const Juego = () => {

    const [eleccionUser, setEleccionUser] = useState(null);
    const [eleccionPC, setEleccionPC] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [disabledOpcionesElegidas,setDisabledOpcionesElegidas] = useState(true);
    const [chosen, setChosen] = useState(false);
    const [partidasGanadasUsuario, setPartidasGanadasUsuario] = useState(0);
    const [partidasGanadasPC, setPartidasGanadasPC] = useState(0);

    const handleEleccion = (id) => {
        let opcionElegidaUsuario = handleEleccionUser(id);
        let opcionElegidaPC = handleEleccionPC();
        jugar(opcionElegidaUsuario, opcionElegidaPC);   
    }

    const handleEleccionUser = (id) => {
        let eleccionUser = opciones ? opciones.find((opcion) => opcion.id === id) : <>No existe la opcion elegida</>;
        setEleccionUser(eleccionUser);
        setDisabled(true);

        return eleccionUser;
    }
    
    const handleEleccionPC = () => {
        setTimeout(() => { 
            setChosen(true); 
        }, 500);

        setDisabledOpcionesElegidas(false);      
        const eleccionPc = eleccionRandom();
        clearTimeout();

        return eleccionPc;
    }

    const jugar = (opcionElegidaUsuario, opcionElegidaPC) => {
        setTimeout(() => {
            resolverJugada(opcionElegidaUsuario, opcionElegidaPC);
        }, 5000);
        clearTimeout();
    }

    const resolverJugada = (opcionElegidaUsuario, eleccionElegidaPc) => {
        if (opcionElegidaUsuario.nombre === eleccionElegidaPc.nombre) {
            setResultado("EMPATE");
        } else {
            const jugada = opcionElegidaUsuario.jugarCon(eleccionElegidaPc);
            setResultado(jugada);
            calcularPuntaje(jugada);
        }
    }

    const calcularPuntaje = (jugada) => {
        jugada === "¡VICTORIA!" ? 
            setPartidasGanadasUsuario(partidasGanadasUsuario + 1) : 
            setPartidasGanadasPC(partidasGanadasPC + 1);
    }

    const eleccionRandom = () => {
        const random = Math.floor(Math.random() * 5);
        let opcionElegida = opciones ? opciones.find((opcion) => opcion.id === random) : <>No existe la opcion elegida</>;
        setEleccionPC(opcionElegida);

        return opcionElegida;
    }

    const volverAJugar = () => {
        setTimeout(() => {
            setChosen(false);
            setEleccionPC(null);
            setResultado(null);
            setEleccionUser(null);
            setDisabled(false);
            setDisabledOpcionesElegidas(true);
        }, 500);
        clearTimeout();
    }

    return (
        <div className="container">
            <div className="box-cantidadPartidasGanadas">
                <div className="img-cantidad-partidas">
                    <img src="https://img.icons8.com/ios/40/e4b5f0/gender-neutral-user--v1.png" alt="gender-neutral-user--v1"/>
                    <p className="cantidad-partidas">{partidasGanadasUsuario}</p>
                </div>

                <div className="img-cantidad-partidas">
                    <img src="https://img.icons8.com/officel/50/monitor.png" alt="monitor"/>
                    <p className="cantidad-partidas">{partidasGanadasPC}</p>
                </div>
            </div>
            {!chosen ? 
                (<div>
                    <div className={`container-title ${disabled ? "disabled" : ""}`} disabled={disabled}>
                        <h1 className="title-juego">¡Que comience el juego!</h1>
                    </div>

                    <OpcionesJuego disabled={disabled} handleEleccion={handleEleccion} />
                </div>)
            :
                (<div className={`animated ${disabledOpcionesElegidas ? "disabled" : ""}`} disabled={disabledOpcionesElegidas}>
                    <OpcionElegida eleccion={eleccionUser} resultado={resultado} disabled={disabled} />
                    <ResultadoJuego resultado={resultado} />
                    <VolverAJugar resultado={resultado} volverAJugar={volverAJugar} />

                    <div className={`box-vs animated ${resultado ? "fadeOutDown" : ""}`}>
                        <h1 className="title-juego">VS</h1>
                    </div>

                    <OpcionElegida eleccion={eleccionPC} resultado={resultado} disabled={disabled} isOpponent />
                </div>)}
        </div>
    );
}

export default Juego;