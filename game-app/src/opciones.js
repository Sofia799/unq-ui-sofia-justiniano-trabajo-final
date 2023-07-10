import papel from "./images/papel.png";
import lagarto from "./images/lagarto.png";
import piedra from "./images/piedra.png";
import Spock from "./images/Spock.png";
import tijeras from "./images/tijeras.png";

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

export default opciones;