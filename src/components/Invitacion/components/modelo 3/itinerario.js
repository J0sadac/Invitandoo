import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import iglesia from '../../../../multimedia/herramientas/iglesia.gif';
import civil from '../../../../multimedia/herramientas/civil.gif';
import recepcion from '../../../../multimedia/herramientas/recepcion.gif';

function Itinerario () {

    return(
        <section className='itinerario'>
        <p className='titulo'>Itinerario</p>
      
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
                    <img className='icono' src={iglesia} alt='...' />
                    <p className='accion'>Ceremonia religiosa</p>
                    <p className='hora'>4:00 pm</p>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={civil} alt='...' />
                    <p className='accion'>Ceremonia civil</p>
                    <p className='hora'>6:00 pm</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contenedor'>
                    <img className='icono' src={recepcion} alt='...' />
                    <p className='accion'>Recepcion</p>
                    <p className='hora'>7:00 pm</p>
                </div>
            </SwiperSlide>

        </Swiper>
    </section>
    );
};

export default Itinerario;