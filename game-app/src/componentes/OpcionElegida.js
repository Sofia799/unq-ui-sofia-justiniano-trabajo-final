import React from "react";
import "./OpcionElegida.css";

const OpcionElegida = ({ eleccion, resultado, isOpponent }) => {

    return (
        <div className={`${isOpponent ? "bounceInRight" : "bounceInLeft"} animated ${resultado ? "fadeOutDown" : ""}`}>
            {eleccion && (
                <div className={`box-opcion-elegida animated ${resultado ? "fadeOutDown" : ""}`}>
                    <h2 className="title-eleccion">{isOpponent ? "Tu oponente eligió:" : "Elegiste:"}</h2>

                    <button key={eleccion.id} className={`btn-opcion ${resultado ? "box-resultado hidden" : ""}`}>
                        <img className="img-opcion" src={eleccion.logo} alt={eleccion.nombre}></img>
                        {eleccion.nombre}
                    </button>
                </div>
            )}
        </div>
  );
};

export default OpcionElegida;
