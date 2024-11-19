import React, { useState } from 'react';
import izquierda from '../../../../multimedia/herramientas/sobre izquierda.png';
import derecha from '../../../../multimedia/herramientas/sobre derecha.png';
import sello from '../../../../multimedia/herramientas/sello conand.gif';

function Sobre() {
    const [hideImages, setHideImages] = useState(false);

    const handleClick = () => {
        setHideImages(true);

        const sobre = document.querySelector('.sobre');
        sobre.classList.add('hidden'); // Agrega la clase para animar
    
        // Espera el tiempo de la animación antes de aplicar display: none
        setTimeout(() => {
          sobre.style.display = 'none';
        }, 500); 
    };

    return (
        <section className={`sobre ${hideImages ? 'hidden' : ''}`}>
            <img className="img izquierda" src={izquierda} alt="..." />
            <img className="img derecha" src={derecha} alt="..." />
            <button className={`boton ${hideImages ? 'hidden' : ''}`} onClick={handleClick}>
                <img className="sello" src={sello} alt="..." />
            </button>
        </section>
    );
}

export default Sobre;
