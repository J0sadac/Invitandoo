import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

//Dependencia para la generacion de codigos QR del codigo QR
import QRCode from 'qrcode.react';

function Invitacion(){
  const [evento, setEvento] = useState();
  const { eventoId, invitadoId } = useParams()
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);

        const deadline = new Date(eventoData.datos.fecha).getTime();

        const interval = setInterval(() => {
          const now = new Date().getTime();
          const timeLeft = Math.max(deadline - now, 0);

          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, '0');

          setTimer({
            days,
            hours,
            minutes,
            seconds
          });

          if (timeLeft <= 0) {
            clearInterval(interval);
            setTimer({
              days: '00',
              hours: '00',
              minutes: '00',
              seconds: '00'
            });
          }
        }, 1000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);


    return(
        <div className="container-inv shadow">
          {evento ? (
            <div className="date-container">
            <div className="inv-date-container">
              <h3 className="inv-date">22 de diciembre del 2024</h3>
            </div>

            <div className="place-container">
              <p>Salon {evento.datos.lugar.salon}</p>
              <p>{evento.datos.lugar.address}</p>
              <p>{evento.datos.lugar.ciudad}</p>
            </div>
            
            <div className="time-container">
              <div className="time shadow">
                <p className="regresivo">
                {timer.days}
                </p>
                <p className="times">DIAS</p>
              </div>
              <div className="time shadow">
                <p className="regresivo">
                {timer.hours}
                </p>
                <p className="times">HRS</p>
              </div>
              <div className="time shadow">
                <p className="regresivo">
                {timer.minutes}
                </p>
                <p className="times">MNS</p>
              </div>
              <div className="time shadow">
                <p className="regresivo">
                  {timer.seconds}
                </p>
                <p className="times">SEG</p>
              </div>
            </div>

            <img src={evento.multimedia.flor.imageURL} className="img-flor img-flor-tr" alt="..."/>
            <img src={evento.multimedia.flor.imageURL} className="img-flor img-flor-tl" alt="..."/>
            <img src={evento.multimedia.flor.imageURL} className="img-flor img-flor-br" alt="..."/>
            <img src={evento.multimedia.flor.imageURL} className="img-flor img-flor-bl" alt="..."/>
          </div>
          ) : (
            <div className="spinner-border spin" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}

          {evento ? (
            <div className="qr-container shadow">
            <div className="nombre-inv">
              <h3>Invitado:</h3>
              <h3>
                {evento.invitados.invitado}
              </h3>
            </div>

            <div className='num-mesa'>
              <p>
                Mesa: {evento.invitados.mesa}
              </p>
            </div>

            <div className='num-mesa'>
              <p>
                Pase para {evento.invitados.pase}
              </p>
            </div>
          
            <div className='img-qr'>
              <QRCode value={
                "Invitado: " + evento.invitados.invitado + 
                "\nMesa: " + evento.invitados.mesa + 
                "\nPase para " + evento.invitados.pase
              }/>
            </div>
          
            <div className="anuncio">
              <p>No olvides guardar tu codigo QR ¡Sera muy importante para tu recepcion!</p>
            </div>
          </div>
          ) : (
            <div className="spinner-border spin" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          
              
        </div>
    )
};

export default Invitacion;