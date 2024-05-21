import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import arras from '../../../../multimedia/herramientas/arras.gif';
import velacion from '../../../../multimedia/herramientas/velacion.svg';
import anillos from '../../../../multimedia/herramientas/anillos.gif';
import lazo from '../../../../multimedia/herramientas/lazo.svg';

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
                    <img className='icono' src={arras} alt='...' />
                    <p className='accion'>Arras</p>
                    <div className='padrino'>
                        <span>Ing. Zafiro Ramírez Fernández</span>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={velacion} alt='...' />
                    <p className='accion'>Velacion</p>
                    <div className='padrino'>
                        <span>Sr. Luis Rey Salas Barrios</span>
                        <span>Sra. Dory Luz Escobar Martinez</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={anillos} alt='...' />
                    <p className='accion'>Anillos</p>
                    <div className='padrino'>
                        <span>Lic. Juan José Muñoz</span>
                        <span>Lic. Gabriela Solís Trujillo</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={lazo} alt='...' />
                    <p className='accion'>Lazo</p>
                    <div className='padrino'>
                        <span>Sr. Germán Blanco Pérez</span>
                        <span>Sra. Adriana Escobar Díaz</span>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </section>
  );
};

export default Padrinos;

