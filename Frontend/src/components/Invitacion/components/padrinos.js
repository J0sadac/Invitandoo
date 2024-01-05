import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Padrinos(){
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

  return (
    <div className='container-padrinos shadow'>
      {evento ? (
        <div className='contenido'>
          <h3 className='title'>¡Mis padrinos!</h3>
          <div>
            {evento.datos.padrinos.map((padrino, index) => (
              <div key={index} className='padrinoDe shadow'>
                <h3 className='de'>Padrino de {padrino.de}</h3>
                <p className='padrino'>{padrino.padrino}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="spinner-border spin" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Padrinos;