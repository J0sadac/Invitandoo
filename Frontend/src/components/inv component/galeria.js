import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const img = require.context('../../multimedia', true);

function Galeria({ imagen }) {
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

    return (
        <div>
        {evento ? (
          <div id="carouselExampleInterval" className="carousel slide inv-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {evento.multimedia.imagenesGaleria.map((imgSrc, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3500">
                  <img src={img(imgSrc)} className="d-block w-100 inv-img" alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
  
  export default Galeria;