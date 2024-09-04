import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Galeria({carousel, fondo}) {

  return (
    <section className='galeria'>
        {fondo && (
            <img loading='lazy' className='fondo' src={fondo} alt='...' />
        )}
        <p className='titulo'>Galeria de fotos</p>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {carousel.map((foto) => (
                <SwiperSlide key={foto._id}>
                    <img loading='lazy' className='imagen' src={foto.url} alt='...' />
                </SwiperSlide>
            ))}
            
        </Swiper>
    </section>
  );
};

export default Galeria;