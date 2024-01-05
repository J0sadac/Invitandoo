import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Img from '../../multimedia/XV años - Jimena/imagenes/XV años - Jimena - img01.jpg';

import { Link } from "react-router-dom";

function Tarjeta() {
  const { anfitrion, invitadoId } = useParams();
  const [evento, setEvento] = useState();

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

  return (
    <div className='contenedor-tarjeta'>
      {evento? (
        <Link className='tarjeta-link' to="/invitacion/Jimena/a11">
          <div className="card tarjeta">
            <img src={Img} className="card-img-top" alt="..." />
            <div className="card-body descripcion">
              <h5 className="titulo">Jimena Dominguez</h5>
              <p className="texto">XV años</p>
            </div>
          </div>
        </Link>
      ):(
        <div>
          cargando...
        </div>
      )}
    </div>
  );
}

export default Tarjeta;
