import { useEffect, useState } from "react";

function Invitacion({ evento, fondo, dia, lugar, fecha, festejado }) {
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function timer() {
      try {
        const deadline = new Date(fecha).getTime();

        const interval = setInterval(() => {
          const now = new Date().getTime();
          const timeLeft = Math.max(deadline - now, 0);

          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0");
          const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
            .toString()
            .padStart(2, "0");
          const minutes = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
          )
            .toString()
            .padStart(2, "0");
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0");

          setTimer({
            days,
            hours,
            minutes,
            seconds,
          });

          if (timeLeft <= 0) {
            clearInterval(interval);
            setTimer({
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00",
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

  return (
    <section className="invitacion">
      <img loading="lazy" className="fondo" src={fondo} alt="..." />
      <div className="sombra"></div>

      <div className="contenedor">

        {evento === "XV Años" && (
          <div className="direccion">
            <p>
              Hay momentos en la vida que imaginamos, soñamos y esperamos. ¡Uno
              de esos momentos ha llegado y lo quiero compartir contigo!
            </p>
          </div>
        )}

        <div className="contenido">
          {dia && (
              <p className="fecha">{dia}</p>
          )}

          {festejado !== 'Ariana Barroso Roldán' && (
            <>
              {lugar && lugar.salon && (
                  <div className="direccion">
                      <p>{lugar.salon}</p>
                      <p>{lugar.direccion}</p>
                      <p>{lugar.ciudad}</p>
                  </div>
              )}
            </>
          )}

          {festejado === "Andrea Faybelin Citalan Arriaga" && (
              <div className="direccion">
                  <p>¡No puedes faltar! ¡Me hará muy feliz verte ese día!</p>
              </div>
          )}

          {fecha && (
              <div className="contador">
                  <div className="tiempo shadow-lg">
                      <span className="segundero">{timer.days}</span>
                      <span>DIAS</span>
                  </div>
                  <div className="tiempo shadow">
                      <span className="segundero">{timer.hours}</span>
                      <span>HRS</span>
                  </div>
                  <div className="tiempo shadow">
                      <span className="segundero">{timer.minutes}</span>
                      <span>MNTS</span>
                  </div>
                  <div className="tiempo shadow">
                      <span className="segundero">{timer.seconds}</span>
                      <span>SEG</span>
                  </div>
              </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Invitacion;
