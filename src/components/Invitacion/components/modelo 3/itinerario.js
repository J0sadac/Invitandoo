import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Itinerario ({protocolo, fondo, festejado}) {

    return(
        <section className={festejado === 'Leonel y Denisse' ? 'itinerario leo' : 'itinerario'}>
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
                        <div className='contenedor'>
                            <img loading='lazy' className='icono' src={prot.icono} alt='...' />
                            <p className='accion'>{prot.accion}</p>
                            <p className='hora'>{prot.hora}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Itinerario;