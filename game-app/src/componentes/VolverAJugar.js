import React from "react";

const VolverAJugar = ({ resultado, volverAJugar }) => {

    return (
        <div className={`${!resultado ? "hidden" : "content"}`}>
            <button className={`btn-opcion btn-isHover ${!resultado ? "hidden" : "btn-opcion"}`} onClick={volverAJugar}>
                Volver a jugar
            </button>
        </div>
    );
};

export default VolverAJugar;
