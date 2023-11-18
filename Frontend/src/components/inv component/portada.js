import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const img = require.context('../../multimedia', true)

function Novios(){
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

    return(
      <div>
        {evento ? (
          <div className='container-nov shadow'>
          <h3>{evento.evento}</h3>

          <div>
            <div className='img-nov shadow'>
              <img src={img(evento.multimedia.portada)} alt='...' />
            </div>
            
            <div className="nombre-nov">
              <p>{evento.datos.festejado}</p>
            </div>
          </div>
        </div>
        ) : (
          <p>Cargando ...</p>
        )}
      </div>
    )
};

export default Novios;