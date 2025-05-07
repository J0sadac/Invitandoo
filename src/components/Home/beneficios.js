import { useState } from 'react';
import icono from './icons/Icono invitandoo.png';
import curva from './icons/curva horizontal.png';

function Beneficios() {
  const beneficios = [
    {
      titulo: "Gestión",
      subtitulo: "Administra tu evento",
      contenido: "Invitandoo te ayuda a gestionar tu tiempo, recursos y espacio de manera efectiva, permitiéndote tener el control total de la organización de tu evento."
    },
    {
      titulo: "Diseño",
      subtitulo: "Ponle tu personalidad",
      contenido: "Ofrecemos invitaciones digitales que son estéticamente agradables y completamente personalizables, reflejando la atmosfera y personalidad de tu evento."
    },
    {
      titulo: "Accesibilidad",
      subtitulo: "Disponible en todo momento",
      contenido: "Tus invitados pueden acceder a la invitación desde cualquier dispositivo, en cualquier lugar del mundo, sin complicaciones."
    },
    {
        titulo: "Eficiencia",
        subtitulo: "Confirmación rapida de invitados",
        contenido: "Nuestras invitaciones estan diseñadas para proporcionar toda la información necesaria de manera clara y atractiva, facilitando una confirmacion rapida por parte de tus invitados."
    },
    {
        titulo: "Atención",
        subtitulo: "Servicio exepcional",
        contenido: "En invitandoo, priorizamos a nuestros clientes, brindando asistencia y soporte desde la cotización hasta el envío de las invitaciones, aségurandonos de que todas tus peticiones sean integradas y tu experiencia sea perfecta."
    }
  ];

  const [index, setIndex] = useState(0);
  const siguiente = () => setIndex((index + 1) % beneficios.length);
  const anterior = () => setIndex((index - 1 + beneficios.length) % beneficios.length);

  return (
    <section className="beneficios">
        <div className='contenedor'>
            <img src={icono} className='icono' alt="Invitandoo" />

            <div className='contenido'>
            <h2 className="encabezado">Beneficios de tu invitación digital</h2>
            <p className='parrafo'>Celebra tus momentos especiales sin complicaciones.</p>
            </div>
        </div>

        <img src={curva} className='adorno' alt='adorno horizontal' />

        <div className='carousel'>

            <button onClick={anterior}>‹</button>

            <div className='seccion'>
                <p className='titulo'>{beneficios[index].titulo}</p>
                <p className='subtitulo'>{beneficios[index].subtitulo}</p>
                <p className='contenido'>{beneficios[index].contenido}</p>

                <div className="dots">
                    {beneficios.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${index === i ? 'activo' : ''}`}
                        onClick={() => setIndex(i)}
                    />
                    ))}
                </div>
            </div>



            <button onClick={siguiente}>›</button>
        
        </div>

    </section>
  );
}

export default Beneficios;
