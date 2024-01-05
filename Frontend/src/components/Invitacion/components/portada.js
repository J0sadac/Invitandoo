import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import marco from '../../../multimedia/herramientas/marco dorado.svg'

function Portada(){
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
<div>
  {evento ? (
    <div className='container-portada shadow'>
      {evento.evento === 'XV años' ? (
        <div className='portada-xv'>
              <div className='nombre-evento'>
                <h4 className='te-invito'>Te invito a</h4>
                <div className='mis'>
                  <h4>mis</h4>
                  <h3>{evento.evento}</h3>
                  <h4 className='anios'>años</h4>
                </div>
              </div>
              <div>
                <div className='img-portada shadow'>
                  <img src={evento.multimedia.portada[0].imageURL} alt='...' />
                  <img src={marco} className='img-superpuesta' alt='...' />
                </div>
                
                <div className="nombre-portada">
                  <p>{evento.datos.festejado}</p>
                </div>
              </div>
          </div>
      ) : evento.evento === 'Boda' ? (
        <div className='portada-boda'>
          <div className='head'>
            <h4 className='titulo'> Te invitamos a nuestra</h4>
            <h4 className='subtitulo'>{evento.evento}</h4>
          </div>
          <div className='body'>
            <div className='img'>
              <img src={evento.multimedia.portada[0].imageURL} alt='novia' />
              <img src={marco} className='marco' alt='...' />
            </div>
            <div className='nombres'>
              <p>{evento.datos.novios.novia}</p>
              <p>&</p>
              <p>{evento.datos.novios.novio}</p>
            </div>
            <div className='img'>
              <img src={evento.multimedia.portada[1].imageURL} alt='novio' />
              <img src={marco} className='marco' alt='...' />
            </div>
          </div>
        </div>
      ) : evento.evento === 'Cumpleaños' ? (
        <div className='nombre-evento'>
          Seccion de cumpleaños
        </div>
      ) : evento.evento === 'Bautizo' ? (
        <div className='nombre-evento'>
          Seccion de bautizo
        </div>
      ) : (
        <div className='nombre-evento'>
          Estructura por default
        </div>
      )}
    </div>
  ) : (
    <div className="spinner-border spin" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )}
</div>
    )
};

export default Portada;