import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Galeria() {
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

    return (
        <div>
        {evento ? (
          <div id="carouselExampleInterval" className="carousel slide inv-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {evento.multimedia.galeria.map((imgSrc, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3500">
                  <img src={imgSrc.imageURL} className="d-block w-100 inv-img" alt={`Slide ${index + 1}`} />
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
          <div className="spinner-border spin" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    );
  }
  
  export default Galeria;