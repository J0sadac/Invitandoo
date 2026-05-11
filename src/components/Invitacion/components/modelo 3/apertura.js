import React, { useState } from 'react';

function Apertura({
  multimedia,
  onCerrarVentanaCancion,
  onReproducirCancion
}) {

  const [hidePrimera, setHidePrimera] = useState(false);
  const [hideSegunda, setHideSegunda] = useState(false);
  const [hideTercera, setHideTercera] = useState(false);

  const [hideBoton, setHideBoton] = useState(false);

  // NUEVO
  const [cerrarApertura, setCerrarApertura] = useState(false);

  const handleClick = () => {

    if (onCerrarVentanaCancion) {
      onCerrarVentanaCancion();
    }

    // Música inmediata
    if (onReproducirCancion) {
      onReproducirCancion();
    }

    setHideBoton(true);

    // Primera capa
    setTimeout(() => {
      setHidePrimera(true);
    }, 800);

    // Segunda capa
    setTimeout(() => {
      setHideSegunda(true);
    }, 1300);

    // Tercera capa
    setTimeout(() => {
      setHideTercera(true);
    }, 1800);

    // ELIMINAR TODA LA APERTURA
    setTimeout(() => {
      setCerrarApertura(true);
    }, 1900);
  };

  // Desmonta TODO el componente
  if (cerrarApertura) return null;

  return (
    <section className="apertura">

      <img
        className={`img apertura-1 ${hidePrimera ? 'hidden' : ''}`}
        src={multimedia.apertura.fondo[0].url}
        alt=""
      />

      <img
        className={`img apertura-2 ${hideSegunda ? 'hidden' : ''}`}
        src={multimedia.apertura.fondo[1].url}
        alt=""
      />

      <img
        className={`img apertura-3 ${hideTercera ? 'hidden' : ''}`}
        src={multimedia.apertura.fondo[2].url}
        alt=""
      />

      <button
        className={`boton-apertura ${hideBoton ? 'hidden' : ''}`}
        onClick={handleClick}
      >
        <img
          className="img-boton"
          src={multimedia.apertura.boton.url}
          alt="Abrir"
        />
      </button>

    </section>
  );
}

export default Apertura;