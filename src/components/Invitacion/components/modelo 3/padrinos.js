import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Padrinos({padrinos, fondo, festejado}) {
  return (
    <section className='padrinos'>
        {fondo?.url && (
            <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
        )}
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
                    <div className={festejado === 'Alejandra & Alexander' || festejado === 'Ivanna Zoé' ? 'contenedor aleContenedor' : 'contenedor'}>
                        {festejado === 'Ivanna Zoé' ? (
                            <>
                                
                            </>
                        ):(
                            <img loading='lazy' className='icono' src={pad.icono} alt='...' />
                        )}
                        
                        {festejado === 'Ivanna Zoé' ? (
                            <>
                                
                            </>
                        ):(
                            <p className='accion'>{pad.de}</p>  
                        )}
                        
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

