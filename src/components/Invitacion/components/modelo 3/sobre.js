import React, { useState } from 'react';

function Sobre({ sobre, onCerrarVentanaCancion, onReproducirCancion, evento, apertura}) {
  const [hideImages, setHideImages] = useState(false);

  const handleClick = () => {
    if (onCerrarVentanaCancion) onCerrarVentanaCancion();

    setHideImages(true);
    const sobreEl = document.querySelector('.sobre');
    sobreEl.classList.add('hidden');

    setTimeout(() => {
      sobreEl.style.display = 'none';
      if (onReproducirCancion) onReproducirCancion();
    }, 800); // tiempo de animación del sobre
  };

  return (
        <section className={`sobre ${hideImages ? 'hidden' : ''}`}>
          <img className="img izquierda" src={sobre.cuerpo} alt="..." />
          <img className="img derecha" src={sobre.solapa} alt="..." />
          <button className={`boton ${hideImages ? 'hidden' : ''}`} onClick={handleClick}>
            <img className="sello" src={sobre.sello} alt="..." />
          </button>
        </section>
  );
}

export default Sobre;
