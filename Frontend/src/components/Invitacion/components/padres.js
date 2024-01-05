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
              <div className="spinner-border spin" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
        </div>
    )
}

export default Padrinos;