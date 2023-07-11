import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import "./ResultadoJuego.css";

const ResultadoJuego = ({ resultado }) => {

    const [animate, setAnimate] = useSpring(() => ({
        transform: "scale(1)",
        config: { duration: 500 }
      }));

    useEffect(() => {
        if (resultado === "¡VICTORIA!") setAnimate({ transform: "scale(1.2)" });
    }, [resultado, setAnimate]);

    return (
        <div className={`${!resultado ? "hidden" : ""}`}>
            <animated.h1 className="title-resultado" style={animate}>
                {resultado}
            </animated.h1>
        </div>
    );
};

export default ResultadoJuego;
