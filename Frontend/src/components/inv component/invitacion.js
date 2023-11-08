import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

//Imagen ESTATICA para adorno de la fecha y lugar
import ImgFlor from '../../images/inv-flor-vino.png';

//Dependencia para la generacion de codigos QR del codigo QR
import QRCode from 'qrcode.react';

//Funcion de cuenta regresiva de la fecha y lugar



function Invitacion(){
  const [evento, setEvento] = useState();
  const { anfitrion, invitadoId } = useParams()
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);

        const deadline = new Date(eventoData.datos.fechas).getTime();

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
  }, [anfitrion, invitadoId]);


    return(
        <div className="container-inv shadow">
          {evento ? (
            <div className="date-container">
            <div className="inv-date-container">
              <h3 className="inv-date">{evento.datos.dia}</h3>
            </div>

            <div className="place-container">
              <p>Salon {evento.datos.direccion.salon}</p>
              <p>{evento.datos.direccion.address}</p>
              <p>{evento.datos.direccion.ciudad}</p>
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

            <img src={ImgFlor} className="img-flor img-flor-tr" alt="..."/>
            <img src={ImgFlor} className="img-flor img-flor-tl" alt="..."/>
            <img src={ImgFlor} className="img-flor img-flor-br" alt="..."/>
            <img src={ImgFlor} className="img-flor img-flor-bl" alt="..."/>
          </div>
          ) : (
            <p>Cargando...</p>
          )}

          {evento ? (
            <div className="qr-container shadow">
            <div className="nombre-inv">
              <h3>Familia:</h3>
              <h3>
                {evento.invitados[0].nombreInvitado}
              </h3>
            </div>

            <div className='num-mesa'>
              <p>
                Mesa: {evento.invitados[0].mesa}
              </p>
            </div>

            <div className='num-mesa'>
              <p>
                Pase para {evento.invitados[0].cantidadInvitados}
              </p>
            </div>
          
            <div className='img-qr'>
              <QRCode value={
                "Invitado: " + evento.invitados[0].nombreInvitado + 
                "\nMesa: " + evento.invitados[0].mesa + 
                "\nPase para " + evento.invitados[0].cantidadInvitados
              }/>
            </div>
          
            <div className="anuncio">
              <p>No olvides guardar tu codigo QR ¡Sera muy importante para tu recepcion!</p>
            </div>
          </div>
          ) : (
            <p>Cargando...</p>
          )}
          
              
        </div>
    )
};

export default Invitacion;