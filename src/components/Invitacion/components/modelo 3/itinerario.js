import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import fondo from '../../../../multimedia/fondos/fondo blanco.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Itinerario ({protocolo}) {

    return(
        <section className='itinerario'>
            <img className='fondo' src={fondo} alt='...' />
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
                            <img className='icono' src={prot.icono} alt='...' />
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