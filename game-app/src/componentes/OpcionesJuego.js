import React from "react";
import opciones from "../opciones";
import "./OpcionesJuego.css";

const OpcionesJuego = ({disabled, handleEleccion }) => {

    return (
        <div className="container-opciones">
            <div className="box-btn-opciones">
                {opciones &&
                    opciones.map((opcion) => (
                        <button key={opcion.id}
                                className={`btn-opcion btn-isHover ${disabled ? "disabled" : ""}`}
                                onClick={() => handleEleccion(opcion.id)}
                                disabled={disabled}>

                            <img className="img-opcion" src={opcion.logo} alt={opcion.nombre}></img>
                            {opcion.nombre}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default OpcionesJuego;
