import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";

function Tarjeta() {
  const { eventoId, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch('https://nueva-invitandodb.onrender.com/eventos');
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
        console.log(eventoData)
      } catch (error) {
        console.log(error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);

  return (
    <div className='contenedor-tarjeta'>
      {evento ? (
        evento.map((evento, index) => (
          <Link key={index} className='tarjeta-link' to={`/evento/${evento._id}/invitado/${evento.invitados[0]._id}`}>
            <div className="card tarjeta">
              <img src={evento.multimedia.carousel[0].url} className="card-img-top portada" alt="Evento" />
              <div className="card-body descripcion">
                <h5 className="titulo">{evento.datos.festejado}</h5>
                <p className="texto">{evento.evento}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Tarjeta;
