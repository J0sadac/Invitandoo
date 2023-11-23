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
        <div className='container-padres shadow'>
            {evento ? (
                <div className='contenido'>
                    <h3 className='title'>
                        ¡Mis amados padres!
                    </h3>
    
                    <div className='padres shadow'>
                        <p className='padre'>
                            {evento.datos.padres.papa}
                        </p>
                        <p className='y'> & </p>
                        <p className='padre'> 
                            {evento.datos.padres.mama}
                        </p>
                    </div>  
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default Padrinos;