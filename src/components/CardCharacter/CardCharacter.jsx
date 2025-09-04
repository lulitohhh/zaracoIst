import { useState } from "react";
import "./CardCharacter.css";

const CharacterDetails = ({ personaje }) => {
  const [vida, setVida] = useState(personaje.vida);
  const [ataque, setAtaque] = useState(personaje.ataque);
  const [puntos, setPuntos] = useState(0); 

  return (
    <div className="character-card">
      <div className="character-card-margin">
      <h1 className="character-title">{personaje.nombre}</h1>

      {personaje.img && (
        <img
          src={personaje.img}
          alt={personaje.nombre}
          className="character-img"
        />
      )}

      <div className="stat-container">
        <p><strong>Puntos de victoria:</strong></p>
        <div className="button-group">
          <button className="stat-btn" onClick={() => setPuntos((prev) => prev + 1)}>+</button>
          <p>{puntos}</p> 
          <button className="stat-btn" onClick={() => setPuntos((prev) => Math.max(prev - 1, 0))}>-</button>
        </div>
      </div>

      <div className="stat-container">
        <p><strong>Vida:</strong></p>
        <div className="button-group">
          <button className="stat-btn" onClick={() => setVida((prev) => prev + 1)}>+</button>
          <p>{vida}</p>
          <button className="stat-btn" onClick={() => setVida((prev) => Math.max(prev - 1, 0))}>-</button>
        </div>
      </div>

      <div className="stat-container">
        <p><strong>Ataque:</strong></p>
        <div className="button-group">
          <button className="stat-btn" onClick={() => setAtaque((prev) => prev + 1)}>+</button>
          <p>{ataque}</p>
          <button className="stat-btn" onClick={() => setAtaque((prev) => Math.max(prev - 1, 0))}>-</button>
        </div>
      </div>

      <div className="ability">
        <p><strong>Habilidad Especial:</strong></p>
        <p>{personaje.habilidad.titulo}</p>
        <p>{personaje.habilidad.descripcion}</p>
        
      </div>
      </div>
    </div>
  );
};

export default CharacterDetails;


