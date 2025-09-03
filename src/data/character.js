import Borracho from "../images/Borracho.png";
import Cazador from "../images/Cazador.png";
import Curandera from "../images/Curandera.png"
import NiñoValiente from "../images/NiñoValiente.png"
import Cafetero from "../images/Cafetero.png"
import Forastero from "../images/Forastero.png"
const characters = [
    {
        id: 1,
        nombre: "El cazador",
         img: Cazador, 
        habilidad: {
            titulo: "Trampa experta",
            descripcion: "El proximo jugador en tu casilla sufre 3 de daño y pierde 2 de movimiento"
        },
        vida: 30,
        ataque: 6
    },
    {
        id: 2,
        nombre: "La curandera",
        img: Curandera, 
        habilidad: {
            titulo: "Sanación Ancestral",
            descripcion: "Cura 8 HP a un jugador adyacente (incluido tú)"
        },
        vida: 25,
        ataque: 4
    },
    {
        id: 3,
        nombre: "El borracho",
        img: Borracho, 
        habilidad: {
            titulo: "Aguardiente",
            descripcion: "Ganas +3 de ATQ y +2 de movimiento por 2 turnos. Luego pierdes 5 HP"
        },
        vida: 35,
        ataque: 6
    },
    {
        id: 4,
        nombre: "El niño Valiente",
        img: NiñoValiente, 
        habilidad: {
            titulo: "Grito heroíco",
            descripcion: "Todos los participantes ubicados en una casilla adyacente pierden un turno"
        },
        vida: 20,
        ataque: 7
    },
    {
        id: 5,
        nombre: "El forastero",
        img: Forastero, 
        habilidad: {
            titulo: "Mimetismo",
            descripcion: "Copias el buffo o debuffo de una leyenda adyacente por 3 turnos"
        },
        vida: 30,
        ataque: 5
    },
        {
        id: 6,
        nombre: "El cafetero",
        img: Cafetero, 
        habilidad: {
            titulo: "Oleada de Café",
            descripcion: "Si en tu turno hay otro jugador en tu misma casilla, puedes empujarlo 2 casillas en línea recta. Si en la primera o segunda casilla hay un muro, jugador A se detiene allí y recibe 3 de daño. Si en el recorrido o destino está el jugador B, entonces A y B sufren 2 de daño cada uno."
        },
        vida: 30,
        ataque: 5
    },
];

export default characters;