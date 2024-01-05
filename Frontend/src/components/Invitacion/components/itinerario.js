import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Itinerario() {
  const { eventoId, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);
  const [showExplanation, setShowExplanation] = useState([]);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);

        // Inicializar showExplanation con un array de 'false' de igual longitud que evento.itinerario
        setShowExplanation(new Array(eventoData.itinerario.length).fill(false));
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);

  const toggleExplanation = (index) => {
    const updatedExplanation = [...showExplanation]; // Hace una copia del array de estados
    updatedExplanation[index] = !updatedExplanation[index]; // Modifica el estado del elemento correspondiente al índice
    setShowExplanation(updatedExplanation); // Actualiza el estado
  };

  return (
    <div>
      {evento ? (
        <div className='container-itinerario shadow'>
          <h3>Itinerario</h3>
          {evento.itinerario.map((item, index) => (
            <div className={`cont ${showExplanation[index] ? 'flip' : ''}`} key={index}>
              <div className={`itinerario shadow ${showExplanation[index] ? 'hidden' : ''}`}>
                <img src={item.icono} alt='...' />
                <p>{item.accion}</p>
                <div>
                  <p>{item.ubicacion}</p>
                  <p>{item.hora}</p>
                </div>
              </div>

              <div className={`direccion ${showExplanation[index] ? 'visible' : ''}`}>
                <h3>Direccion</h3>
                <p> {item.direccion} </p>
              </div>

              <button className="explicacion-button" onClick={() => toggleExplanation(index)}>
                {showExplanation[index] ? '➜' : '¿Donde es?'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="spinner-border spin" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};


export default Itinerario;


