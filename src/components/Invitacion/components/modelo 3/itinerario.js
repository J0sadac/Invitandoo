import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Itinerario ({protocolo, fondo, festejado}) {

    return(
        <>
            {festejado === 'Alejandra & Alexander' ? (
                <section className='itLineal'>
                    {fondo?.url && (
                        <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                    )}

                    <p className='titulo'>Itinerario</p>

                    <div className='contenido'>
                        {protocolo.map((prot) => (
                                    <div className='contenedor' key={prot._id}>
                                        <img loading='lazy' className='icono' src={prot.icono} alt='...' />

                                        <div className='datos'>
                                            <span className='accion'>{prot.accion}</span>
                                            <span className='hora'>{prot.hora}</span>
                                        </div>
                                    </div>
                            ))}

                    </div>
                </section>
            ):(
                <section className={festejado === 'Leonel y Denisse' ? 'itinerario leo' : 'itinerario imprimir'}>
                    {fondo?.url && (
                        <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                    )}
                    <p className='titulo'>Itinerario</p>
                
                    <Swiper
                        pagination={{
                        type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {protocolo.map((prot) => (
                            <SwiperSlide key={prot._id}>
                                <div className={festejado === 'Yare Madrid' 
                                    ? 'contenedor personalizado' : 'contenedor'}>
                                    <img loading='lazy' className='icono' src={prot.icono} alt='...' />
                                    <p className='accion'>{prot.accion}</p>
                                    <p className='hora'>{prot.hora}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            )}
        </>
    );
};

export default Itinerario;