import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import icono from '../../../Home/icons/Icon facebook.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Recomendacion({ fondo, datos }) {
  
  const grupos = datos.reduce((acc, item) => {
    const categoria = item.de || "Otros";
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(item);
    return acc;
  }, {});

  return (
    <section className="recomendacion">
      {fondo?.url && (
        <img loading="lazy" className="fondo" src={fondo.url} alt="..." />
      )}

      <p className="titulo">Recomendaciones</p>

      <div className="contenedor">
        {Object.keys(grupos).map((categoria) => (
          <div key={categoria} className="grupo">
            <p className="subtitulo">{categoria}</p>

            <Swiper
                slidesPerView={1} spaceBetween={30} loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true} modules={[Pagination, Navigation]} className="mySwiper tarjetas"
            >
                {grupos[categoria].map((item) => (
                    <SwiperSlide key={item._id} className="tarjeta">
                        <img src={item.foto} alt={item.nombre} />
                        <div className='contenido'>
                          <p className="nombre">{item.nombre}</p>
                          {item.direccion && <p>Dirección: {item.direccion}</p>}
                          {item.telefono && <p>Tel: {item.telefono}</p>}
                          {item.perfil && 
                            <a href={item.perfil} target="_blank" rel="noopener noreferrer">
                              <img className='icon' src={icono} alt='facebook' />
                            </a> 
                          }
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recomendacion;
