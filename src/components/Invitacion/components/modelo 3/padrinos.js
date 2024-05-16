import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import brindis from '../../../../multimedia/herramientas/brindis.gif';
import velacion from '../../../../multimedia/herramientas/velacion.svg';
import anillos from '../../../../multimedia/herramientas/anillos.gif';


function Padrinos() {
  return (
    <section className='padrinos'>
        <p className='titulo'>Padrinos</p>
      
        <Swiper
            pagination={{
            type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={brindis} alt='...' />
                    <p className='accion'>Brindis</p>
                    <div className='padrino'>
                        <span>Sr. Moisés Alejandro López Gómez</span>
                        <span>Mtra. María Arelis Rincón Coronel</span>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={velacion} alt='...' />
                    <p className='accion'>Velacion</p>
                    <div className='padrino'>
                        <span>Sr. Pedro Coronel Hernández</span>
                        <span>Sra. Lucina Méndez Velasco</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={anillos} alt='...' />
                    <p className='accion'>Anillos</p>
                    <div className='padrino'>
                        <span>Dr. Arturo Lozano Álvarez</span>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </section>
  );
};

export default Padrinos;

