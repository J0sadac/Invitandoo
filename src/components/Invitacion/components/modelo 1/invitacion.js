import {useEffect, useState} from 'react';

//Dependencia para la generacion de codigos QR del codigo QR
import QRCode from 'qrcode.react';

function Invitacion({fecha, lugar, flor, datos}){

  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    function timer() {
      try {
        const deadline = new Date(fecha).getTime();

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
      } catch (err) {
        console.log(err);
      }
    }

    timer();
  });


    return(
        <div className="container-invitacion shadow">
          <div className="date-container">
            <div className="inv-date-container">
              <h3 className="inv-date">06 de abril del 2024</h3>
            </div>

            <div className="place-container">
              <p>Salon {lugar.salon}</p>
              <p>{lugar.address}</p>
              <p>{lugar.ciudad}</p>
            </div>
            
            <div className="time-container">
              <div className="time shadow">
                <h3 className="regresivo">
                {timer.days}
                </h3>
                <h3 className="times">DIAS</h3>
              </div>
              <div className="time shadow">
                <h3 className="regresivo">
                {timer.hours}
                </h3>
                <h3 className="times">HRS</h3>
              </div>
              <div className="time shadow">
                <h3 className="regresivo">
                {timer.minutes}
                </h3>
                <h3 className="times">MNS</h3>
              </div>
              <div className="time shadow">
                <h3 className="regresivo">
                  {timer.seconds}
                </h3>
                <h3 className="times">SEG</h3>
              </div>
            </div>

            <img src={flor.url} className="img-flor img-flor-tr" alt="..."/>
            <img src={flor.url} className="img-flor img-flor-tl" alt="..."/>
            <img src={flor.url} className="img-flor img-flor-br" alt="..."/>
            <img src={flor.url} className="img-flor img-flor-bl" alt="..."/>
          </div>

          <div className="qr-container shadow">
            <div className="nombre-inv">
              <h3>Invitado:</h3>
              <h3 className='nombre'>
                {datos.invitado}
              </h3>
            </div>

            <div className='num-mesa'>
              <p>
                Mesa: {datos.mesa}
              </p>
            </div>

            <div className='num-mesa'>
              <p>
                Pase para {datos.pase}
              </p>
            </div>
          
            <div className='img-qr'>
              <QRCode value={
                "Invitado: " + datos.invitado + 
                "\nMesa: " + datos.mesa + 
                "\nPase para " + datos.pase
              }/>
            </div>
          
            <div className="anuncio">
              <p>No olvides guardar tu codigo QR ¡Sera muy importante para tu recepcion!</p>
            </div>
          </div>    
        </div>
    )
};

export default Invitacion;