import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Padrinos({padrinos, fondo, festejado, evento}) {

  return (
    <section className='padrinos'>
        {fondo?.url && (
            <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
        )}

        {(evento === 'Boda' || evento === 'XV Años') && (
            <>
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
                            <div className={festejado === 'Alejandra & Alexander' || 
                                festejado === 'Ivanna Zoé Montejo Carballo' ||
                                festejado === 'Yare Madrid' 
                                ? 'contenedor personalizado' : 'contenedor'}>

                                    {festejado === 'Ivanna Zoé Montejo Carballo' ? (
                                        <>
                                            
                                        </>
                                    ):(
                                        <img loading='lazy' className='icono' src={pad.icono} alt='...' />
                                    )}
                                    
                                    {festejado === 'Ivanna Zoé Montejo Carballo' ? (
                                        <>
                                            
                                        </>
                                    ):(
                                        <p className='accion'>{pad.de}</p>  
                                    )}
                                    
                                    <div className='padrino'> 
                                        {pad.padrino.map((rino, idx) => (
                                            <span key={idx}>
                                                {rino}
                                                <p>{idx < pad.padrino.length - 1 && " & "}</p>
                                            </span>
                                        ))}
                                    </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )}

        {evento === 'Bautizo' && (
            <div className='pad'>
                <p className='texto'>Me acompaña en este momento tan especial:</p>
                <p className='titulo'>Mi madrina</p>
                <p className='rino'>{padrinos[0].padrino[0]}</p>
            </div>
        )}
        
    </section>
  );
};

export default Padrinos;

