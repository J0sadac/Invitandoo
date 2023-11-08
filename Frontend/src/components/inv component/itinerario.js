import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Recepcion from '../../images/recepcionista.png';
import Inicio from '../../images/salud.png';
import Misa from '../../images/capilla.png';


function Itinerario(){
    const { anfitrion, invitadoId } = useParams();
    const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);

        console.log(eventoData)
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [anfitrion, invitadoId]);

    return(
      <div>
        {evento ? (
          <div className='container-itinerario shadow'>
            <h3>Itinerario</h3>
            <div className='cont'>
            <div className='itinerario shadow'>
              <img src={Misa} alt='...' />

              <p>{evento.itinerario.uno.accion}</p>

                <div>
                  <p>{evento.itinerario.uno.ubicacion}</p>
                  <p>{evento.itinerario.uno.hora}</p>
                </div>
              </div>

              <div className='itinerario shadow'>
              <img src={Recepcion} alt='...' />

              <p>{evento.itinerario.dos.accion}</p>

                <div>
                  <p>{evento.itinerario.dos.ubicacion}</p>
                  <p>{evento.itinerario.dos.hora}</p>
                </div>
              </div>

              <div className='itinerario shadow'>
                <img src={Inicio} alt='...' />

                <p>{evento.itinerario.tres.accion}</p>

                <div>
                  <p>{evento.itinerario.tres.ubicacion}</p>
                  <p>{evento.itinerario.tres.hora}</p>
                </div>
              </div>
            </div>
        </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    )
};

export default Itinerario;