import React, { useState } from 'react';
import izquierda from '../../../../multimedia/herramientas/sobre izquierda.png';
import derecha from '../../../../multimedia/herramientas/sobre derecha.png';
import sello from '../../../../multimedia/herramientas/sello conand.jpg';

function Sobre() {
    const [hideImages, setHideImages] = useState(false);

    const handleClick = () => {
        setHideImages(true);
    };

    return (
        <section className={`sobre ${hideImages ? 'hidden' : ''}`}>
            <img className="img izquierda" src={izquierda} alt="..." />
            <img className="img derecha" src={derecha} alt="..." />
            <button onClick={handleClick}>
                <img className="sello" src={sello} alt="..." />
            </button>
        </section>
    );
}

export default Sobre;
