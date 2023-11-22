import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const cancion = require.context('../../../multimedia', true);

function Modal({ onClose }) {
  const { anfitrion, invitadoId } = useParams();
  const [evento, setEvento] = useState(null)
  const [minimized, setMinimized] = useState(false);;

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [anfitrion, invitadoId]);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
    }
  }, []);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div>
    {evento ? (
      <div className={`alerta-reproductor shadow ${minimized ? 'minimized' : ''}`}>
        <div className={`reproductor alert-box ${minimized ? 'invisible' : ''}`}>
          <h3 className='title'>¡Dale play!</h3>
          <audio controls ref={audioRef} autoPlay>
            <source src={cancion(evento.multimedia.canciones)} type="audio/mpeg" />
          </audio>
        </div>
        <button className='minimize-button' onClick={toggleMinimize}>
          {minimized ? 'Expandir' : 'Minimizar'}
        </button>
      </div>
    ) : (
      <p>Cargando...</p>
    )}
  </div>
  );
}

export default Modal;
