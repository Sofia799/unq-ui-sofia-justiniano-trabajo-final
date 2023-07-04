import React from "react";
import "./Juego.css"

const Juego = () => {

    const opciones = [
        {id: 0, nombre: 'Piedra'},
        {id: 1, nombre: 'Papel'},
        {id: 2, nombre: 'Tijera'},
        {id: 3, nombre: 'Lagarto'},
        {id: 4, nombre: 'Spock'},
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
                                {/* <img src="src/images/piedra.png"></img> */}
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