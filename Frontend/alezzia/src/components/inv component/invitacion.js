import {useEffect, useState} from 'react';

//Imagen ESTATICA para adorno de la fecha y lugar
import ImgFlor from '../../images/inv-flor.png';

//Imagen de EJEMPLO para el codigo QR
import ImgQR from '../../images/ejemplo QR.png';

//Variables de la fecha y lugar
var diaBoda= "Nov 12 2023 19:30:00";
var day = "Nov 12 2023"

//Variables del codigo QR
var numMesa= 7;
var nombreInv= "Castellanos Lopez";

//Funcion de cuenta regresiva de la fecha y lugar
const Timer = (limite) => {
  var [seconds, setSeconds] = useState(0);
  var [minutes, setMinutes] = useState(0);
  var [hours, setHours] = useState(0);
  var [days, setDays] = useState(0);

  var today = new Date();
  var fecha = new Date(limite);

  var tiempo = (fecha - today + 1000) / 1000;

  seconds = ("0" + Math.floor(tiempo % 60)).slice(-2);
  minutes = ("0" + Math.floor(tiempo / 60 % 60)).slice(-2);
  hours = ("0" + Math.floor(tiempo /3600 % 24)).slice(-2);
  days = ("0" + Math.floor(tiempo / (3600 * 24))).slice(-2);


  useEffect(() => {

    const Countdown = setInterval(() => {
      setSeconds(seconds - 1);

      if(setSeconds === "00"){
        setMinutes(minutes - 1);
      };

      if(setMinutes === "00"){
        setHours(hours - 1);
      };

      if(setHours === "00"){
        setDays(days - 1);
      };
      
    }, 1000);

    return () => clearInterval(Countdown);

  });

  return{
    seconds,
    minutes,
    hours,
    days}
}

//Funcion para la generacion de codigos QR del codigo QR


function Invitacion(){

    return(
        <div className="container-inv shadow">

        <div className="date-container">
          <div className="inv-date-container">
            <h3 className="inv-date">{day}</h3>
          </div>

          <div className="place-container">
            <p>Salon Country club</p>
            <p>Calle 3a. Ote. 33, Los Naranjos, Centro, 30830</p>
            <p>Tapachula, Chiapas, Mexico</p>
          </div>
          
          <div className="time-container">
            <div className="time shadow">
              <p className="regresivo">
              {Timer(diaBoda).days}
              </p>
              <p className="times">DIAS</p>
            </div>
            <div className="time shadow">
              <p className="regresivo">
              {Timer(diaBoda).hours}
              </p>
              <p className="times">HRS</p>
            </div>
            <div className="time shadow">
              <p className="regresivo">
              {Timer(diaBoda).minutes}
              </p>
              <p className="times">MNS</p>
            </div>
            <div className="time shadow">
              <p className="regresivo">
                {Timer(diaBoda).seconds}
              </p>
              <p className="times">SEG</p>
            </div>
          </div>

          <img src={ImgFlor} className="img-flor img-flor-tr" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-tl" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-br" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-bl" alt="..."/>
        </div>

        <div className="qr-container shadow">
          <div className="nombre-inv">
            <h3>Familia:</h3>
            <h3>
              {nombreInv}
            </h3>
          </div>

          <div className='num-mesa'>
            <p>
              Mesa: {numMesa}
            </p>
          </div>
          
          <img src={ImgQR} alt="..." className="img-qr"/>

          <div className="anuncio">
            <p>No olvides guardar tu codigo QR ¡Sera muy importante para tu recepcion!</p>
          </div>
        </div>
        </div>
    )
};

export default Invitacion;