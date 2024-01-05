import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';


function ReproductorDeCancion({ cancionReproduciendose, setCancionReproduciendose }) {
  const { eventoId, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);

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
            <source src={evento.multimedia.cancion.audioURL} type="audio/mpeg" />
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

