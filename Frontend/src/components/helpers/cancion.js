import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';


const cancion = require.context('../../multimedia', true);

function ReproductorDeCancion() {
  const { anfitrion, invitadoId } = useParams();
    const [evento, setEvento] = useState(null);

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

  return (
    <div>
      {evento ? (
        <div className='container-reproductor shadow'>
        <div className='reproductor'>
          <h3 className='title'>¡MI CANCION!</h3>
          <audio controls ref={audioRef} autoPlay>
            <source src={cancion(evento.multimedia.canciones)} type="audio/mpeg" />
          </audio>
        </div>
      </div>
      ):(
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ReproductorDeCancion;

  