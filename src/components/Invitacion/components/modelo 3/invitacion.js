import { useEffect, useState } from "react";

function Invitacion ({evento, fondo, dia, lugar, fecha, festejado}){
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
        <>
            {evento === 'Boda' ? (
                <section className="invitacion">

                    <img className="fondo" src={fondo} alt="..." />
                    <div className="sombra"></div>
                    
                </section>
            ) : evento === 'XV Años' ? (
                <section className="invitacion">

                    <img className="fondo" src={fondo} alt="..." />
                    <div className="sombra"></div>

                    <div className="contenedor">
                        <div className="direccion">
                            <p>
                                Hay momentos en la vida
                                que imaginamos, soñamos
                                y esperamos, uno de esos momentos
                                ha llegado y lo quiero
                                compartir contigo.
                            </p>
                        </div>

                        <p className="fecha">{dia}</p>

                        {festejado !== 'Andrea Faybelin Citalan Arriaga' ?(

                            <div className="direccion">
                                <p>{lugar.salon}</p>
                                <p>{lugar.direccion}</p>
                                <p>{lugar.ciudad}</p>
                            </div>
                        ):(
                            <div className="direccion">
                                <p>
                                    ¡No puedes faltar!
                                    ¡Me hará muy feliz
                                    verte ese día!
                                </p>
                            </div>
                        )}

                        <div className="contador">
                            <div className="tiempo shadow-lg">
                                <span className="segundero">
                                    {timer.days}
                                </span>
                                <span>
                                    DIAS
                                </span>
                            </div>
                            <div className="tiempo shadow">
                                <span className="segundero">
                                    {timer.hours}
                                </span>
                                <span>
                                    HRS
                                </span>
                            </div>
                            <div className="tiempo shadow">
                                <span className="segundero">
                                    {timer.minutes}
                                </span>
                                <span>
                                    MNTS
                                </span>
                            </div>
                            <div className="tiempo shadow">
                                <span className="segundero">
                                    {timer.seconds}
                                </span>
                                <span>
                                    SEG
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            ): (
                <div>holi</div>
            )}
        </>
    );
};

export default Invitacion;