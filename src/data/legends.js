import Silbon from "../images/silbon.png";
import Patasola from "../images/patasola.png";
import Muelona from "../images/LaMuelona.png";
import Sombreron from "../images/Sombreron.png";
import Madremonte from "../images/Madremonte.png";
import Llorona from "../images/llorona.png";
import JuanMachete from "../images/juanMachete.png"
import Latunda from "../images/laTunda.png"
import Mohan from "../images/ElMohan.png"
import Duende from "../images/Duende.png"

const legends = [
    {
        id: 1,
        nombre: "El Silbón",
        img: Silbon, 
        condicionVictoria: "Alcanzar 25 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt cuando un enemigo usa No hacer nada al defenderte",
            "+2 pts cada que saques 6 o 1 en el dado",
            "+1 pt cada que otro jugador deje a un enemigo en 1 HP y el Silbón lo elimine en ese mismo turno."
        ],
        bufos: {
            cazador: "Al Contraatacar: +2 daño extra",
            curandera: "Al Sanar: +3 HP extra a ti misma",
            borracho: "Al usar 'Aguardiente': +1 movimiento permanente",
            niñoValiente: "Al usar 'Grito Heroico': Todos los enemigos en rango pierden 1 movimiento",
            forastero: "Al Copiar: +1 a todas tus estadísticas por 1 turno",
            cafetero: "Al Empujar: +1 daño extra si choca con obstáculo"
    },
        debufos: {
            cazador: "Si no atacas en un turno: -2 HP",
            curandera: "Si usas 'Defender': -1 movimiento",
            borracho: "Si usas 'No hacer nada': Pierdes 3 HP",
            niñoValiente: "Si gritas: -2 HP",
            forastero: "Si copias: Pierdes 1 turno después",
            cafetero: "Si empujas: -1 movimiento en tu próximo turno"
    },
        lore: "En los llanos aún resuena el silbido escalofriante del Silbón, un espíritu alto y famélico que carga un saco de huesos. Nacido de un parricidio y castigado con crueldad, se anuncia con un silbido engañoso: si lo oyes cerca, está lejos; si lo escuchas lejos, ya lo tienes encima."
    },
    {
        id: 2,
        nombre: "La Patasola",
        img: Patasola, 
        condicionVictoria: "Alcanzar 20 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada 3 sacado en el dado",
            "+2 pts si tú y otro jugador eliminan enemigos distintos dentro del mismo bosque en un mismo turno.",
            "+1 pt cuando un enemigo falla al Contraatacar"
        ],
        bufos: {
            cazador: "Al moverte 3+ casillas: +2 ATQ en tu próximo ataque",
            curandera: "Al Sanar en bosque: +4 HP curado",
            borracho: "Al usar 'Aguardiente': Inmune a efectos de movimiento negativo",
            niñoValiente: "Al Gritar: +1 alcance permanente",
            forastero: "Al Copiar: Robas 1 stat del objetivo",
            cafetero: "Al Empujar: El enemigo pierde 1 turno si choca con obstáculo"
    },
        debufos: {
            cazador: "Si fallas un ataque: -3 HP",
            curandera: "Si no sanas en 2 turnos: -2 ATQ",
            borracho: "Si usas 'Defender': -2 HP",
            niñoValiente: "Si no gritas en 3 turnos: -1 movimiento",
            forastero: "Si copias: -2 HP",
            cafetero: "Si empujas: -1 movimiento"
    },
        lore: "En los senderos solitarios se oculta un espíritu seductor que en la oscuridad revela su verdadera forma: un monstruo con dientes enormes y una sonrisa aterradora. Se acerca a los hombres con dulces coqueteos, solo para arrastrar a los infieles, mujeriegos y abusivos hacia su destino fatal"
    },
    {
        id: 3,
        nombre: "La muelona",
        img: Muelona, 
        condicionVictoria: "Alcanzar 20 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada vez que un enemigo termine adyacente a ti",
            "+2 pts al reducir a 0 HP a un enemigo que usó Defender contra ti",
            "+1 pt por cada 3 daño recibido en un turno"
        ],
        bufos: {
            cazador: "Al atacar primero: +3 daño",
            curandera: "Al Sanar: +2 ATQ por 2 turnos",
            borracho: "Al usar 'Aguardiente': +3 HP curados",
            niñoValiente: "Al Gritar: Inmune a daño 1 turno",
            forastero: "Al Copiar: +2 movimiento en tu próximo turno",
            cafetero: "Al Empujar: +2 daño si choca con otro jugador"
        },
        debufos: {
            cazador: "Si no mueves en un turno: -2 HP",
            curandera: "Si usas 'Contraatacar': -1 ATQ",
            borracho: "Si bebes: Movimiento reducido a 1 casilla",
            niñoValiente: "Si gritas: Pierdes 1 turno después",
            forastero: "Si copias: -1 al dado de defensa",
            cafetero: "Si empujas: -1 HP"
        },
        lore: "Espíritu condenado con una sola pierna y garras feroces. A lo lejos parece una mujer hermosa, pero al acercarse revela su monstruoso engaño: atrae a los hombres para perderlos entre la maleza y devorarlos, mientras protege a los animales y a la selva de los intrusos."
    },
    {
        id: 4,
        nombre: "El Sombrerón",
        img: Sombreron, 
        condicionVictoria: "Alcanzar 18 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada turno que un enemigo no te ataque",
            "+2 pt por cada 5 daño causado en un turno",
            "+1 pt si decides no defenderte de un ataque hecho por otro jugador"
        ],
        bufos: {
            cazador: "Al usar 'Trampa Experta': Robas 1 ATQ al objetivo",
            curandera: "Al Sanar: El aliado gana +1 al dado de defensa",
            borracho: "Al usar 'Aguardiente': Inmune a robo de stats",
            niñoValiente: "Al Gritar: Silencia enemigos (no habilidades) 1 turno",
            forastero: "Al Copiar: Dura 1 turno extra",
            cafetero: "Al Empujar: El enemigo pierde 1 stat aleatorio"
        },
        debufos: {
            cazador: "Si la trampa falla: -2 movimiento",
            curandera: "Si no curas en 2 turnos: -3 HP",
            borracho: "Si usas 'No hacer nada': -2 ATQ",
            niñoValiente: "Si gritas: -3 HP",
            forastero: "Si copias: Pierdes 1 movimiento",
            cafetero: "Si empujas: -1 HP"
        },
        lore: "En las noches silenciosas aparece el Sombrerón, vestido de negro y un sombrero enorme. Se le oye rasgar la guitarra para embrujar mujeres hermosas y seducirlas con hechizos, mientras persigue a borrachos que se cruzan en su camino, dejando caballos trenzados y almas inquietas tras su paso."
    },
        {
        id: 5,
        nombre: "La Madre Monte",
        img: Madremonte, 
        condicionVictoria: "Alcanzar 25 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada turno acabado dentro del bosque",
            "+1 pt por cada ataque defendido exitosamente dentro del bosque",
            "+2 pts cada que tú y otro jugador eliminen enemigos distintos dentro del bosque en un mismo turno."
        ],
        bufos: {
            cazador: "Cuando estás en un bosque, obtienes +3 ATQ en tus ataques.",
            curandera: "Si sanas en un bosque, curas +4 HP adicionales.",
            borracho: "Si usas 'Aguardiente' dentro del bosque, recuperas +5 HP.",
            niñoValiente: "Al gritar en un bosque, creas lianas que reducen en -1 el movimiento de los enemigos.",
            forastero: "Cuando copias dentro de un bosque, recibes +2 ATQ por ese turno.",
            cafetero: "Si empujas a un enemigo dentro del bosque, infliges +2 daño adicional."
        },
        debufos: {
            cazador: "Cuando estás en una aldea, tu movimiento se reduce en -2.",
            curandera: "Si te mueves 4 o más casillas en el bosque, pierdes -3 HP.",
            borracho: "Cuando estás en una aldea, recibes -1 en el dado de defensa.",
            niñoValiente: "Cuando estás en una aldea, tu ATQ se reduce en -2.",
            forastero: "Cuando estás en una aldea, pierdes -1 de movimiento.",
            cafetero: "Si estás en la ciudad, tu acción de empujar hace -1 de daño."
        },    
        lore: "La Madremonte, espíritu colosal vestido de selva, emerge entre hojas y musgo para proteger ríos, animales y montes. Con tormentas y desvíos de agua castiga a cazadores y colonos que hieren la naturaleza, haciendo que se pierdan sin retorno en su reino verde."
    },
{
        id: 6,
        nombre: "La llorona",
        img: Llorona, 
        condicionVictoria: "Alcanzar 30 puntos de victoria",
        caracteristicasCondicion: [
            "+2 pt al causar daño en agua",
            "+3 Que ella y otro jugador eliminen enemigos distintos en el agua en un mismo turno.",
            "+1 pt por cada 5 de daño causado a enemigos fuera del agua"
        ],
        bufos: {
            cazador: "Cuando estás en agua, obtienes +4 ATQ en tus ataques.",
            curandera: "Si sanas estando en agua, tu curación se duplica.",
            borracho: "Al usar 'Aguardiente' dentro del agua, ignoras todos los debuffs.",
            niñoValiente: "Si gritas en el agua, ahogas a los enemigos cercanos infligiéndoles -3 HP.",
            forastero: "Cuando copias dentro del agua, obtienes +3 de movimiento.",
            cafetero: "Si empujas a un enemigo al agua, infliges +4 de daño adicional."
        },
        debufos: {
            cazador: "Si no estás cerca de agua, pierdes -2 HP por turno.",
            curandera: "Si intentas sanar en tierra, recibes -3 HP.",
            borracho: "Si bebes estando en tierra, tu movimiento se reduce en -2.",
            niñoValiente: "Si gritas en tierra, pierdes -2 HP.",
            forastero: "Si copias en tierra, pierdes -1 ATQ.",
            cafetero: "Si empujas en tierra, tu movimiento se reduce en -1."
        },
        lore: "Dicen que en las noches más oscuras se escucha el llanto desgarrador de La Llorona, una mujer que, cegada por los celos, ahogó a su hijo y ahora vaga con su cuerpo en brazos. Su silueta huesuda y su grito helado anuncian desgracia, castigando a los infieles y traidores que se crucen en su camino."
    },
    {
        id: 7,
        nombre: "Juan Machete",
        img: JuanMachete, 
        condicionVictoria: "Alcanzar 25 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt cada que entres a un nuevo bioma",
            "+2 pt cada que tú y otro jugador crucen hacia un bioma distinto en el mismo turno.",
            "+3 pts al eliminar a un atacante con la habilidad de tu personaje"
        ],
        bufos: {
            cazador: "Cuando estás en campos y usas 'Trampa Experta', infliges +1 de daño adicional.",
            curandera: "Si sanas en campos, obtienes +3 DEF adicionales.",
            borracho: "Al usar 'Aguardiente' en campos, recibes -2 de daño en el proximo ataque",
            niñoValiente: "Si gritas en campos, tu HP aumenta en +1 de forma permanente.",
            forastero: "Cuando copias en campos, eres inmune a los debuffos por ese turno.",
            cafetero: "Si empujas en campos, inmovilizas al enemigo por 1 turno."
        },
        debufos: {
            cazador: "Si estás en una aldea, tu ATQ se reduce en -2.",
            curandera: "Si estás en una aldea, tus curaciones sanan un 50% menos.",
            borracho: "Si estás en una aldea, pierdes -3 HP.",
            niñoValiente: "Si estás en una aldea, tu acción de gritar falla automáticamente.",
            forastero: "Si estás en una aldea, recibes -1 a todas las acciones.",
            cafetero: "Si estás en una aldea, tu movimiento se reduce en -2."
        },
        lore: "En las noches sin luna aparece Juan Machete, alma en pena de un hombre avaro que enterró su fortuna antes de morir. Oscuro y amenazante, blande un machete que brilla como fuego, guardando con furia el tesoro que jamás entregó en vida. Ataca sin piedad a quienes intentan desenterrarlo."
    },
    {
        id: 8,
        nombre: "La tunda",
        img: Latunda, 
        condicionVictoria: "Alcanzar 20 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada ataque del enemigo fallido contra ti",
            "+2 pts si usas tu habilidad para ayudar a un aliado",
            "+3 pts si tú y otro jugador usan sus habilidades en el mismo bioma."
        ],
        bufos: {
            cazador: "Si esquivas un ataque, ganas +2 ATQ para tu siguiente ataque.",
            curandera: "Cuando sanas, el aliado que curaste esquiva automáticamente el próximo ataque recibido.",
            borracho: "Al usar 'Aguardiente', eres inmune a efectos de inmovilización.",
            niñoValiente: "Si gritas, confundes a los enemigos y su movimiento se vuelve aleatorio.",
            forastero: "Cuando copias, puedes copiar 2 efectos al mismo tiempo.",
            cafetero: "Si empujas a un enemigo, lo obligas a usar 'No hacer nada' durante 1 turno."
        },
        debufos: {
            cazador: "Si un enemigo te ataca primero, pierdes -1 movimiento.",
            curandera: "Si no te mueves en un turno, pierdes -2 HP.",
            borracho: "Si usas 'Defender', pierdes -3 HP.",
            niñoValiente: "Si no gritas en un turno, tu ATQ se reduce en -1.",
            forastero: "Si copias, recibes -2 HP.",
            cafetero: "Si empujas, pierdes 1 turno completo."
        },
        lore: "En lo profundo de la selva acecha la Tunda, monstruo engañoso que adopta el rostro de una madre o de una amante para atraer a sus presas. Con su siniestro “bocado de tunda” te embruja, volviéndote esclavo de su voluntad, perdido para siempre entre las sombras del bosque."
    },
        {
        id: 9,
        nombre: "El Mohán",
        img: Mohan, 
        condicionVictoria: "Alcanzar 28 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pts al causar daño en agua",
            "+3 pts al acabar con la vida de un enemigo en agua",
            "+3 pts si tú y otro jugador terminen turno en agua y en la siguiente ronda ambos causen daño."
        ],
        bufos: {
            cazador: "Si activas Trampa Experta' en el agua, el enemigo recibe +3 de daño.",
            curandera: "Cuando sanas a un aliado mientras estés en agua o río, ese aliado recupera +5 HP.",
            borracho: "Si usas 'Aguardiente' mientras te encuentras en agua, tu ATQ aumenta en +3 hasta el final del turno.",
            niñoValiente: "Al usar el grito mientras estés en agua, los enemigos alcanzados reciben +3 de daño adicional.",
            forastero: "Si copias una habilidad estando en agua, todas tus estadísticas reciben +2 durante ese turno.",
            cafetero: "Cuando empujas a un enemigo hacia el agua o río, este recibe +4 de daño."
        },
        debufos: {
            cazador: "Cuando estás en tierra, pierdes -2 puntos de movimiento",
            curandera: "Al sanar a un aliado estando en tierra, tu conexión con la energía vital es más débil: lanzas el dado de defensa con un penalizador de -1.",
            borracho: "Si permaneces en tierra, los efectos de 'Aguardiente' se vuelven dañinos: recibes -2 HP al final de cada turno.",
            niñoValiente: "Cuando gritas estando en tierra, el daño de tu acción se reduce a la mitad.",
            forastero: "Al copiar habilidades fuera del agua, todas tus estadísticas se reducen en -1 hasta tu próximo turno.",
            cafetero: "Cuando intentas empujar a un enemigo en tierra, el daño de tu acción se reduce a la mitad."
        },

          lore: "En las corrientes embrujadas habita el Mohán, espíritu indómito de los ríos. Peludo y desgreñado, con sonrisa burlona y tabaco en mano, confunde a los pescadores, enreda sus redes y hunde a los incautos que desafían sus dominios."
    },
        {
        id: 10,
        nombre: "El Duende",
        img: Duende, 
        condicionVictoria: "Alcanzar 30 puntos de victoria",
        caracteristicasCondicion: [
            "+1 pt por cada stat robado",
            "+2 pts cada que robes un stat y, en esa mismo turno, otro jugador cause daño a ese enemigo.",
            "+1 pt cada que entres y salgas de una villa"
        ],
        bufos: {
            cazador: "Cuando activas tu 'Trampa Experta', robas 1 movimiento al enemigo atrapado, dejándolo sin salida.",
            curandera: "Al sanar, absorbes energía del enemigo más cercano: robas 1 HP y lo transfieres a tu aliado.",
            borracho: "Al beber 'Aguardiente', tu espíritu se fortalece: eres inmune a cualquier intento de robo.",
            niñoValiente: "Tu grito resuena con fuerza: robas 1 ATQ a todos los enemigos en tu rango.",
            forastero: "Al copiar, despojas a tu objetivo de poder: robas 2 estadísticas completas.",
            cafetero: "Con un empujón cargado de energía, robas 1 movimiento del enemigo y lo dejas fuera de ritmo."
        },
        debufos: {
            cazador: "Si fallas un ataque, tu orgullo se resquebraja: pierdes 1 ATQ.",
            curandera: "Si no sanas durante tu turno, la culpa pesa sobre ti: pierdes 2 de movimiento.",
            borracho: "Si bebes demasiado, la confusión te domina: pierdes 1 estadística aleatoria.",
            niñoValiente: "Tus gritos exigen un precio a tu cuerpo: cada vez que gritas, pierdes 3 HP.",
            forastero: "Copiar es un acto agotador: si lo haces, pierdes un turno completo.",
            cafetero: "El esfuerzo de empujar te pasa factura: pierdes 1 HP cada vez que lo usas."
        },
        lore: "En los montes se esconde el Duende. Con rostro travieso, protege a los inocentes y a los animales, pero castiga a los niños desobedientes y a los hombres violentos. Travieso y escurridizo, secuestra, confunde y juega, aunque siempre huye del poder de las cruces y las tijeras."
    }

];

export default legends;