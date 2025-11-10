import React, { useState } from 'react';

function Sobre({ sobre, onCerrarVentanaCancion, onReproducirCancion }) {
  const [hideImages, setHideImages] = useState(false);

  const handleClick = () => {
    // 🔹 1️⃣ Cierra la ventana de la canción de inmediato
    if (onCerrarVentanaCancion) onCerrarVentanaCancion();

    // 🔹 2️⃣ Comienza animación del sobre
    setHideImages(true);
    const sobreEl = document.querySelector('.sobre');
    sobreEl.classList.add('hidden');

    // 🔹 3️⃣ Espera a que acabe la animación, luego reproduce la música
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
