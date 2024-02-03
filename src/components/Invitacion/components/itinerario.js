import { useState } from "react";

function Itinerario({datos}) {

  const [showExplanation, setShowExplanation] = useState([]);

  const toggleExplanation = (index) => {
    const updatedExplanation = [...showExplanation]; // Hace una copia del array de estados
    updatedExplanation[index] = !updatedExplanation[index]; // Modifica el estado del elemento correspondiente al índice
    setShowExplanation(updatedExplanation); // Actualiza el estado
  };

  return (
    <div className='container-itinerario shadow'>
          <h3>Itinerario</h3>
          {datos.map((item, index) => (
            <div className={`cont ${showExplanation[index] ? 'flip' : ''}`} key={index}>
              <div className={`itinerario shadow ${showExplanation[index] ? 'hidden' : ''}`}>
                <img src={item.icono} alt='...' />
                <p>{item.accion}</p>
                <div>
                  <p>{item.ubicacion}</p>
                  <p>{item.hora}</p>
                </div>
              </div>

              <div className={`direccion shadow ${showExplanation[index] ? 'visible' : ''}`}>
                <h3>Direccion</h3>
                <p> {item.direccion} </p>
              </div>

              <button className="explicacion-button" onClick={() => toggleExplanation(index)}>
                {showExplanation[index] ? '➜' : '¿Donde es?'}
              </button>
            </div>
          ))}
    </div>
  );
};


export default Itinerario;


