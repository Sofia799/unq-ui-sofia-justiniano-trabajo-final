import React from "react";
import "./VolverAJugar.css"

const VolverAJugar = ({ resultado, volverAJugar }) => {

    return (
        <div className={`${!resultado ? "hidden" : "content"}`}>
            <button className={`btn-isHover ${!resultado ? "hidden" : "btn-opcion btn-volverAJugar"}`} onClick={volverAJugar}>
                Volver a jugar
            </button>
        </div>
    );
};

export default VolverAJugar;
