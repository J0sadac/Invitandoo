import React, { useState } from 'react';
import Iframe from 'react-iframe'; 

import mapaIcon from '../../../../multimedia/herramientas/mapa.svg';

const Ubicacion = ({ fondo, ubicacion, mapa }) => {
    const [modalIndex, setModalIndex] = useState(null);

    const abrirVentanaIglesia = (index) => {
        setModalIndex(index);
    };

    const cerrarVentanas = () => {
        setModalIndex(null);
    };

    return (
        <section className="ubicacion no-imprimir">
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}
            <div className='encabezado'>
                <p className="titulo">Ubicación</p>
            </div>

            <section>
                {ubicacion.map((lugar, index) => (
                    <div key={index} className="lugar">
                        <p className="establecimiento">{lugar.salon}</p>
                        <img loading='lazy' className="foto" src={lugar.foto} alt="..." />
                        <div className='direccion'>
                            <span className='nombre'>{lugar.direccion}</span>
                            <span>{lugar.ciudad}</span>
                        </div>
                        <button onClick={() => abrirVentanaIglesia(index)}>
                            <img loading='lazy' className='icono' src={mapaIcon} alt='...' />
                            <p className='link'>Ubicación GPS</p>
                        </button>

                        {modalIndex === index && (
                            <div className="modal" onClick={cerrarVentanas}>
                                <div className='mapa'>
                                    <p className='titulo'>Ubicación GPS</p>
                                    <Iframe 
                                        src={lugar.link}
                                        width="600" height="450" 
                                        className='maps'
                                        allowFullScreen="" loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></Iframe>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Ubicacion;
