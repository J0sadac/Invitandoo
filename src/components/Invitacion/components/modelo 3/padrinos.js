import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import fondo from '../../../../multimedia/fondos/fondo blanco.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Padrinos({padrinos}) {
  return (
    <section className='padrinos'>
        <img className='fondo' src={fondo} alt='...' />
        <p className='titulo'>Padrinos</p>
      
        <Swiper
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {padrinos.map((pad) => (
                <SwiperSlide key={pad._id}>
                    <div className='contenedor'>
                        <img className='icono' src={pad.icono} alt='...' />
                        <p className='accion'>{pad.de}</p>
                        <div className='padrino'>
                            {pad.padrino.map((rino, idx) => (
                                <span key={idx}>{rino}</span>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    </section>
  );
};

export default Padrinos;

