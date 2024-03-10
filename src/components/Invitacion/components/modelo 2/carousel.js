import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Carousel ({imagenes}) {

    return(
        <>
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
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="carousel"
            >
                {imagenes.map((imagen, index) => (
                <SwiperSlide key={index} >
                    <img src={imagen.url} alt={`Imagen ${index}`} className="swiper-slide swiper-slide-visible swiper-slide-fully-visible" />
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}

export default Carousel;