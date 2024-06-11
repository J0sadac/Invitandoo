
import iglesia from '../../../../multimedia/Boda - Kristopher/iglesia.jpg';
import salonDos from '../../../../multimedia/XV años - Yazit/salon.jpg';
import salon from '../../../../multimedia/Boda - Kristopher/salon.jpg';
import adorno from '../../../../multimedia/herramientas/adorno dorado.svg';
import mapa from '../../../../multimedia/herramientas/mapa.svg';
import fondo from '../../../../multimedia/fondos/Fondo-negro.png';
//import close from '../../../../multimedia/herramientas/x-lg.svg';
import { useState } from 'react';
import Iframe from "react-iframe";

function Ubicacion({evento}) {
    const [ventanaIglesia, setVentanaIglesia] = useState(false);
    const [ventanaSalon, setVentanaSalon] = useState(false);

    const abrirVentanaIglesia = () => {
        setVentanaIglesia(true);
        setVentanaSalon(false);
    };

    const abrirVentanaSalon = () => {
        setVentanaSalon(true);
        setVentanaIglesia(false);
    };

    const cerrarVentanas = () => {
        setVentanaIglesia(false);
        setVentanaSalon(false);
    };

    return (
        <>
            {evento === 'Boda' ? (
                <section className="ubicacion">
                    <div className='encabezado'>
                        <p className="titulo">Ceremonia Religiosa</p>
                        <img className='adorno' src={adorno} alt='...' />
                    </div>

                    <section>
                        <div className="lugar">
                            <p className="establecimiento">Iglesia</p>
                            <img className="foto" src={iglesia} alt="..." />
                            <div className='direccion'>
                                <span className='nombre'>Catedral De San José.</span>
                                <span>1ª Sur No. 1, Colonia Centro, Tapachula, Chiapas.</span>
                            </div>
                        </div>

                        <button onClick={abrirVentanaIglesia}>
                            <img className='icono' src={mapa} alt='...' />
                            <p className='link'>Ubicación GPS</p>
                        </button>
                    </section>

                    {ventanaIglesia && (
                        <div className="modal" onClick={cerrarVentanas}>
                            <div className='mapa'>
                                <p className='titulo'>Ubicación GPS</p>
                                <Iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15422.251053312331!2d-92.2628715!3d14.9057079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0edf8d70ca99%3A0xe0e5379671746486!2sCatedral%20de%20San%20Jos%C3%A9%20de%20Tapachula!5e0!3m2!1ses-419!2smx!4v1716246624260!5m2!1ses-419!2smx" 
                                    width="600" height="450" 
                                    className='maps'
                                    allowFullScreen="" loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></Iframe>
                            </div>
                        </div>
                    )}

                        <div className='encabezado'>
                            <p className="titulo">Recepción</p>
                            <img className='adorno' src={adorno} alt='...' />
                        </div>

                    <section>
                        <div className="lugar">
                            <p className="establecimiento">Salón</p>
                            <img className="foto" src={salon} alt="..." />
                            <div className='direccion'>
                                <span className='nombre'>Salon Bella Vita</span>
                                <span>11 Sur. Entre 6ª. Privada y 8ª. Oriente</span>
                            </div>
                        </div>

                        <button onClick={abrirVentanaSalon}>
                            <img className='icono' src={mapa} alt='...' />
                            <p className='link'>Ubicacion GPS</p>
                        </button>
                    </section>

                    {ventanaSalon && (
                        <div className="modal" onClick={cerrarVentanas}>
                            <div className='mapa'>
                                <p className='titulo'>Ubicacion GPS</p>
                                <Iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.688491285706!2d-92.26225658946532!3d14.898687185563801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0f9dc51b7581%3A0xe23f726e48b3ed9a!2sBELLA%20VITA!5e0!3m2!1ses-419!2smx!4v1716247055855!5m2!1ses-419!2smx"
                                    width="600" height="450" 
                                    className='maps'
                                    allowFullScreen="" loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></Iframe>
                            </div>
                        </div>
                    )}
                </section>
            ) : evento === 'XV Años' ? (
                <section className="ubicacion">
                    <img className='fondo' src={fondo} alt='...' />
                    <div className='encabezado'>
                        <p className="titulo">Ubicacion GPS</p> 
                    </div>

                    <section>
                        <div className="lugar">
                            <p className="establecimiento">salon de fiestas "El Diamante"</p>
                            <img className="foto" src={salonDos} alt="..." />
                            <div className='direccion'>
                                <span className='nombre'>2 poniente entre 5a y 6a sur.</span>
                                <span>Berriozábal, Chiapas, México.</span>
                            </div>
                        </div>

                        <button onClick={abrirVentanaIglesia}>
                            <img className='icono' src={mapa} alt='...' />
                            <p className='link'>Ubicación GPS</p>
                        </button>
                    </section>

                    {ventanaIglesia && (
                        <div className="modal" onClick={cerrarVentanas}>
                            <div className='mapa'>
                                <p className='titulo'>Ubicación GPS</p>
                                <Iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6331553303535!2d-93.2793954759836!3d16.79491720692395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecc35edf8fa329%3A0xadc81439f42ebd59!2sSal%C3%B3n%20para%20eventos%20%22Diamante%22!5e0!3m2!1ses-419!2smx!4v1718074578924!5m2!1ses-419!2smx"
                                    width="600" height="450" 
                                    className='maps'
                                    allowFullScreen="" loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></Iframe>     
                            </div>
                        </div>
                    )}
                </section>
            ) : (
                <div>
                    Holi
                </div>
            )}
        </>
        
    );
}

export default Ubicacion;
