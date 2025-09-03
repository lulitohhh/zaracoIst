import "./CardLegend.css";

const getPersonajeKey = (nombre) => {
  if (!nombre) return "";
  return nombre.replace(/^(El |La )/i, "").toLowerCase();
};

const LeyendaDetails = ({ leyenda, personaje }) => {
  if (!leyenda || !personaje) return null;

  const personajeKey = getPersonajeKey(personaje.nombre);

  const bufo = leyenda.bufos[personajeKey] || "No tiene bufo";
  const debufo = leyenda.debufos[personajeKey] || "No tiene debufo";

  return (
    <div className="leyenda-card">
      <div className="Leyenda-card-margin">
      <h1 className="leyenda-title">{leyenda.nombre}</h1>

      {leyenda.img && (
        <img
          src={leyenda.img}
          alt={leyenda.nombre}
          className="leyenda-img"
        />
      )}

      <div className="leyenda-section">
       <p> <i>{leyenda.lore}</i></p>
      </div>

      <div className="leyenda-section">
        <p><strong>Condición de Victoria:</strong> {leyenda.condicionVictoria}</p>
        <h2 className="leyenda-subtitle">Características de la Condición</h2>
        <ul>
          {leyenda.caracteristicasCondicion.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        </div>
       
        <div className="leyenda-section">
          <h2 className="leyenda-subtitle">Bufos y Debufos del personaje seleccionado</h2>
          <p><strong>Bufo:</strong> {bufo}</p>
          <p><strong>Debufo:</strong> {debufo}</p>
        </div>
      </div>
    </div>
  );
};

export default LeyendaDetails;
