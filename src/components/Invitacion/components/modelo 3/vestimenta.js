//trajes oscuros
import trajeEtiquetaOscuro from '../../../../multimedia/herramientas/traje etiqueta oscuro.png';
import trajeFormalOscuro from '../../../../multimedia/herramientas/traje formal oscuro.png';
import trajeSemifromalOscuro from '../../../../multimedia/herramientas/traje semi formal oscuro.png';
import trajeInformalOscuro from '../../../../multimedia/herramientas/guayabera.png';

//vestidos oscuros
import vestidoEtiquetaOscuro from '../../../../multimedia/herramientas/vestido etiqueta oscuro.png';
import vestidoFormalOscuro from '../../../../multimedia/herramientas/vestido formal oscuro.png';
import vestidoSemifromalOscuro from '../../../../multimedia/herramientas/vestido semi formal oscuro.png';
import vestidoInformalOscuro from '../../../../multimedia/herramientas/blusa pili.png';

//trajes claros
import trajeEtiquetaClaro from '../../../../multimedia/herramientas/traje etiqueta claro.png';
import trajeFormalClaro from '../../../../multimedia/herramientas/traje formal claro.png';
import trajeSemifromalClaro from '../../../../multimedia/herramientas/traje semi formal claro.png';
import trajeInformalClaro from '../../../../multimedia/herramientas/traje informal claro.png';

//vestidos claros
import vestidoEtiquetaClaro from '../../../../multimedia/herramientas/vestido etiqueta claro.png';
import vestidoFormalClaro from '../../../../multimedia/herramientas/vestido formal claro.png';
import vestidoSemifromalClaro from '../../../../multimedia/herramientas/vestido semi formal claro.png';
import vestidoInformalClaro from '../../../../multimedia/herramientas/vestido informal claro.png';

//ejemplos de vestimenta - Alonso
import vestMujer01 from '../../../../multimedia/herramientas/vestimenta-mujer-02.jpeg';
import vestMujer02 from '../../../../multimedia/herramientas/vestimenta-mujer-03.jpeg';
import vestMujer03 from '../../../../multimedia/herramientas/vestimenta-mujer-01.jpeg';
import vestHombre01 from '../../../../multimedia/herramientas/vestimenta-hombre-02.jpeg';
import vestHombre02 from '../../../../multimedia/herramientas/vestimenta-hombre-01.jpeg';
import vestHombre03 from '../../../../multimedia/herramientas/vestimenta-hombre-03.jpeg';

import tonoAzul from '../../../../multimedia/herramientas/tonos azul.png';
import tonoRojo from '../../../../multimedia/herramientas/tonos rojo.png';
import tonosHM from '../../../../multimedia/herramientas/tonos hombre y mujer.png';
import colores from '../../../../multimedia/herramientas/Azul.png';
import fausto from '../../../../multimedia/herramientas/Colores Fausto.png'
import tonoCafe from '../../../../multimedia/herramientas/paleta dresscode.png';
import tonoPastel from '../../../../multimedia/herramientas/tonos pastel.png';
import codigoHam from '../../../../multimedia/herramientas/codigo ham.png';

// import icono from '../../../../multimedia/herramientas/adorno dorado.gif';
// import iconoDerecho from '../../../../multimedia/herramientas/Detalle Horizontal derecho.gif';
// import flor from '../../../../multimedia/herramientas/flor central.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

function Vestimenta ({fondo, datos, festejado, modo}){
    const [modalMujer, setModalMujer] = useState(false);
    const [modalHombre, setModalHombre] = useState(false);

    return(
        <section className='vestimenta imprimir'>
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}
            <p className="titulo">Código de vestimenta</p>
            
            <>
                {modo === 'oscuro' && (
                    <>
                        {datos.codigo === 'Etiqueta' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeEtiquetaOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoEtiquetaOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeFormalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoFormalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeSemifromalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoSemifromalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            //esta seccion chato
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeInformalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoInformalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>

                                <div className="botonesReferencia">
                                    <button onClick={() => setModalHombre(true)}>Ejemplos de caballeros</button>
                                    <button onClick={() => setModalMujer(true)}>Ejemplos de damas</button>
                                </div>

                                {/* Modal Mujer */}
                                {modalMujer && (
                                    <div className="modalOverlay" onClick={() => setModalMujer(false)}>
                                        <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
                                            <span className="cerrar" onClick={() => setModalMujer(false)}>×</span>

                                            <Swiper
                                                effect={'cards'}
                                                grabCursor={true}
                                                modules={[EffectCards]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide><img src={vestMujer01} alt="..." /></SwiperSlide>
                                                <SwiperSlide><img src={vestMujer02} alt="..." /></SwiperSlide>
                                                <SwiperSlide><img src={vestMujer03} alt="..." /></SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                )}

                                {/* Modal Hombre */}
                                {modalHombre && (
                                    <div className="modalOverlay" onClick={() => setModalHombre(false)}>
                                        <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
                                            <span className="cerrar" onClick={() => setModalHombre(false)}>×</span>

                                            <Swiper
                                                effect={'cards'}
                                                grabCursor={true}
                                                modules={[EffectCards]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide><img src={vestHombre01} alt="..." /></SwiperSlide>
                                                <SwiperSlide><img src={vestHombre02} alt="..." /></SwiperSlide>
                                                <SwiperSlide><img src={vestHombre03} alt="..." /></SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                )}
                            </>  
                        )}
                    </>
                )}

                {modo === 'claro' && (
                    <>
                        {datos.codigo === 'Etiqueta' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeEtiquetaClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoEtiquetaClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}{festejado === 'Alejandra & Alexander' &&(<> rigurosa</>)}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                            {festejado === 'Consuelo & Andrés' ? (
                                    <>
                                        <div className='iconosConand'>
                                            <img loading='lazy' className="icono" src={trajeFormalClaro} alt="..." />
                                            <img loading='lazy' className="icono" src={vestidoFormalClaro} alt="..." />
                                        </div>

                                        <p>{datos.codigo}</p>
                                    </>
                                ):(
                                    <>
                                        <div className='iconos'>
                                            <img loading='lazy' className="icono" src={trajeFormalClaro} alt="..." />
                                            <img loading='lazy' className="icono" src={vestidoFormalClaro} alt="..." />
                                        </div>

                                        <p>{datos.codigo}</p>
                                    </>
                                )}
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeSemifromalClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoSemifromalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeInformalClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoInformalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>  
                        )}
                    </> 
                )}
            </>
            {datos?.mensaje && (
                <>
                    <p className='pet'>{datos.mensaje}</p>

                    {festejado === 'Danna Paola Huerta' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoAzul} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Ariana Barroso Roldán' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoRojo} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Belén & Osmar' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={colores} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Leonel y Denisse' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonosHM} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Fausto & Yulissa' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={fausto} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Lizbeth & Agustín' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoCafe} alt='...' />
                        </div> 
                    )}

                    {festejado === 'Mar & Adrián' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoPastel} alt='...' />
                        </div> 
                    )}

                    {festejado === 'Ham' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={codigoHam} alt='...' />
                        </div> 
                    )}
                </>
            )}
        </section>
    );
};

export default Vestimenta;