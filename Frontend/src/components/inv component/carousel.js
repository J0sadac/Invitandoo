import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Img1 from '../../images/XV años - Jimena/XV años - Jimena - img02.jpg';
import Img2 from '../../images/XV años - Jimena/XV años - Jimena - img03.jpg';
import Img3 from '../../images/XV años - Jimena/XV años - Jimena - img04.jpg';

function Carousel() {
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
        <div
        id="carouselExampleAutoplaying"
        className="carousel carousel-fade slide inv-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
  
        </div>
  
        <div className="carousel-inner">
  
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">{evento.frases[0]}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">{evento.frases[1]}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase frase3">{evento.frases[2]}</h5>
            </div>
          </div>
        
        </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
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

export default Carousel;
