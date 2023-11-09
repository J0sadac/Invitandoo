import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Padrinos(){
const {anfitrion, invitadoId} = useParams();
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

    return(
        <div className='container-padrinos shadow'>
            {evento ? (
                <div className='contenido'>
                    <h3 className='title'>
                        ¡Mis padrinos!
                    </h3>

                    <div>
                        <div className='padrinoDe shadow'>
                            <h3 className='de'>Padrinos</h3>

                            <p className='padrino'>{evento.datos.padrinos[1].padrino}</p>
                        </div>

                        <div className='padrinoDe shadow'>
                            <h3 className='de'>Padrino de {evento.datos.padrinos[0].de}</h3>

                            <p className='padrino'>{evento.datos.padrinos[0].padrino}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default Padrinos;