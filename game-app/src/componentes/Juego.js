import React, { useEffect, useState } from "react";
import "./Juego.css";
import papel from "../images/papel.png";
import lagarto from "../images/lagarto.png";
import piedra from "../images/piedra.png";
import Spock from "../images/Spock.png";
import tijeras from "../images/tijeras.png";
import { useSpring, animated } from "react-spring";

const Juego = () => {

    const opciones = [
        {   
            id: 0, 
            nombre: 'Piedra' , 
            logo: piedra, 
            jugarCon: ((rival) => {
                return rival.nombre === 'Tijera' || rival.nombre === 'Lagarto' ? "¡VICTORIA!" : "DERROTA";
            })
        },
        {
            id: 1, 
            nombre: 'Papel' , 
            logo: papel,
            jugarCon: ((rival) => {
                return rival.nombre === 'Piedra' || rival.nombre === 'Spock' ? "¡VICTORIA!" : "DERROTA";
            })
        },
        {
            id: 2, 
            nombre: 'Tijera' , 
            logo: tijeras,
            jugarCon: ((rival) => {
                return rival.nombre === 'Papel' || rival.nombre === 'Lagarto' ? "¡VICTORIA!" : "DERROTA";
            })
        },
        {
            id: 3, 
            nombre: 'Lagarto', 
            logo: lagarto,
            jugarCon: ((rival) => {
                return rival.nombre === 'Spock' || rival.nombre === 'Papel' ? "¡VICTORIA!" : "DERROTA";
            })
        },
        {
            id: 4, 
            nombre: 'Spock', 
            logo: Spock,
            jugarCon: ((rival) => {
                return rival.nombre === 'Tijera' || rival.nombre === 'Piedra' ? "¡VICTORIA!" : "DERROTA";
            })
        },
    ];

    const [eleccionUser, setEleccionUser] = useState(null);
    const [eleccionPC, setEleccionPC] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [disabledOpcionesElegidas,setDisabledOpcionesElegidas] = useState(true);
    const [chosen, setChosen] = useState(false);
    const [animate, setAnimate] = useSpring(() => ({
        transform: "scale(1)",
        config: { duration: 500 }
      }));      


    const handleEleccion = (id) => {
        let opcionElegidaUsuario = opciones ? opciones.find((opcion) => opcion.id === id) : <>No existe la opcion elegida</>;
        setEleccionUser(opcionElegidaUsuario);
        setDisabled(true);

        setTimeout(() => {
            setChosen(true);
        }, 500)
      
        setDisabledOpcionesElegidas(false);
        
        const eleccionElegidaPc = eleccionRandom();

        setTimeout(() => {
            resolverJugada(opcionElegidaUsuario, eleccionElegidaPc);
        }, 5000);

        clearTimeout();
    }

    const resolverJugada = (opcionElegidaUsuario, eleccionElegidaPc) => {
        if (opcionElegidaUsuario.nombre === eleccionElegidaPc.nombre) {
            setResultado("EMPATE");
        } else {
            const jugada = opcionElegidaUsuario.jugarCon(eleccionElegidaPc);
            setResultado(jugada);

            if (jugada === "¡VICTORIA!") setAnimate({ transform: "scale(1.2)" });
        }
    }

    useEffect(() => {
        if (resultado === "¡VICTORIA!")
            setAnimate({ transform: "scale(1.2)" });

    }, [resultado, setAnimate])

    const eleccionRandom = () => {
        const random = Math.floor(Math.random() * 5);
        let opcionElegida = opciones ? opciones.find((opcion) => opcion.id === random) : <>No existe la opcion elegida</>;
        setEleccionPC(opcionElegida);

        return opcionElegida;
    }

    const volverAJugar = () => {
        setAnimate({ transform: "scale(1)" });
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
            {!chosen ? 
                (<div>
                        <div className={`container-title ${disabled ? "disabled" : ""}`} disabled={disabled}>
                            <h1 className="title-juego">¡Que comience el juego!</h1>
                        </div>

                        <div className="container-opciones">
                            <div className="box-btn-opciones">
                                {opciones && opciones.map((opcion) => {
                                    return (
                                        <button key={opcion.id} className={`btn-opcion btn-isHover ${disabled ? "disabled" : ""}`} onClick={() => handleEleccion(opcion.id)} disabled={disabled}> 
                                            <img className="img-opcion" src={opcion.logo} alt={opcion.nombre}></img>
                                            {opcion.nombre}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                </div>)
            :
                (<div className={`animated ${disabledOpcionesElegidas ? "disabled" : ""}`} disabled={disabledOpcionesElegidas}>

                    <div className={`bounceInLeft animated ${resultado ? "fadeOutDown" : "" }`}>
                        {eleccionUser && (
                            <div className="box-opcion-elegida">
                                <h2 className="title-eleccion">Elegiste:</h2>
                                <button key={eleccionUser.id} className={`btn-opcion ${resultado ? "box-resultado hidden" : ""}`}> 
                                    <img className="img-opcion" src={eleccionUser.logo} alt={eleccionUser.nombre}></img>
                                    {eleccionUser.nombre}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className={`${!resultado ? "hidden" : ""}`}> 
                        <animated.h1 className="title-resultado" style={animate}>
                        {resultado}
                        </animated.h1>
                    </div>

                    <div className={`${!resultado ? "hidden" : "content"}`}>
                        <button className={`btn-opcion btn-isHover ${!resultado ? "hidden" : "btn-opcion"}`} onClick={() => volverAJugar()} >Volver a jugar</button>
                    </div>

                    <div className={`box-vs animated ${resultado ? "fadeOutDown" : "" }`}>
                        <h1 className="title-juego">VS</h1>
                    </div>

                    <div className={`animated bounceInRight ${resultado ? "fadeOutDown" : "" }`}>
                        {eleccionPC && (
                            <div className="box-opcion-elegida">
                                <button key={eleccionPC.id} className={`btn-opcion ${resultado ? "box-resultado hidden" : ""}`}> 
                                    <img className="img-opcion" src={eleccionPC.logo} alt={eleccionPC.nombre}></img>
                                    {eleccionPC.nombre}
                                </button>
                                <h2 className="title-eleccion">Tu oponente eligió:</h2>
                            </div>
                        )}
                    </div>
                </div>)}
        </div>
    )
}

export default Juego;