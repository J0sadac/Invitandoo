import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import foto1 from '../../../../multimedia/Fotos - Veronica/galeria-1.jpg';
import foto2 from '../../../../multimedia/Fotos - Veronica/galeria-2.jpg';
import foto3 from '../../../../multimedia/Fotos - Veronica/galeria-3.jpg';
import foto4 from '../../../../multimedia/Fotos - Veronica/galeria-4.jpg';
import foto5 from '../../../../multimedia/Fotos - Veronica/galeria-5.jpg';
import foto6 from '../../../../multimedia/Fotos - Veronica/galeria-6.jpg';
import foto7 from '../../../../multimedia/Fotos - Veronica/galeria-7.jpg';
import foto8 from '../../../../multimedia/Fotos - Veronica/galeria-8.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Galeria() {

  return (
    <section className='galeria'>
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
            <SwiperSlide>
                <img className='imagen' src={foto1} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto2} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto3} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto4} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto5} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto6} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto7} alt='...' />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imagen' src={foto8} alt='...' />
            </SwiperSlide>
        </Swiper>
    </section>
  );
};

export default Galeria;