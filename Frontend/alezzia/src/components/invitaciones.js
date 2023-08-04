import Img1 from '../images/Inv-1.jpg';
import Img2 from '../images/inv-3.jpg';
import Img3 from '../images/inv-2.jpg';
import ImgFlor from '../images/inv-flor.png';
import ImgQR from '../images/ejemplo QR.png';
import ImgNovio from '../images/novio-icon.png';
import ImgNovia from '../images/novia-icon.png';
import IconChurch from '../images/church.png';
import IconWedding from '../images/champagne-glass.png';
import IconCena from '../images/serving-dish.png';
import ImgDresscode from '../images/codigo de vestimenta.png'

function invitaciones() {
  return (
    <div>
      <div className='container-nov'>
        <div className='img-nov shadow'>
          <img src={ImgNovio} alt='...' />
        </div>
        
        <p>Daniel y Jazmin</p>

        <div className='img-nov shadow'>
          <img src={ImgNovia} alt='...' />
        </div>
      </div>

      <div id="carouselExampleAutoplaying" className="carousel carousel-fade slide inv-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                Comienza nuestra historia de amor.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                Dos almas, un solo destino.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                Gracias por ser parte de nuestro día inolvidable.
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-inv">
        <div className="date-container">
          <div className="inv-date-container">
            <h3 className="inv-date">Noviembre 12, 2024</h3>
          </div>

          <div className="place-container">
            <p>Salon Country club</p>
            <p>Calle 3a. Ote. 33, Los Naranjos, Centro, 30830</p>
            <p>Tapachula, Chiapas, Mexico</p>
          </div>
          
          <div className="time-container">
            <div className="time">
              <p>
                
              </p>
              <p className="times">HRS</p>
            </div>
            <div className="time">
              <p>

              </p>
              <p className="times">MNS</p>
            </div>
            <div className="time">
              <p>

              </p>
              <p className="times">SEG</p>
            </div>
          </div>

          <img src={ImgFlor} className="img-flor img-flor-tr" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-tl" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-br" alt="..."/>
          <img src={ImgFlor} className="img-flor img-flor-bl" alt="..."/>
        </div>

        <div className="qr-container shadow">
          <div class="nombre-inv">
            <h3>Familia:</h3>
            <h3>
              Castellanos López
            </h3>
          </div>
          <div className="anuncio">
            <p>No olvides guardar tu codigo QR</p>
            <p>¡Sera muy importante para tu recepcion!</p>
          </div>
          

          <img src={ImgQR} alt="..." className="img-qr"/>
        </div>
      </div>

      <div className='container-itinerario'>
        <h3>Itinerario</h3>
        <div className='cont'>
          <div className='itinerario shadow'>
            <img src={IconChurch} alt='...' />

            <p>Misa</p>

            <div>
              <p>Jesus de la buena esperanza</p>
              <p>6:00 pm - 7:00 pm</p>
            </div>
          </div>
          <div className='itinerario shadow'>
          <img src={IconWedding} alt='...' />

          <p>Boda</p>

            <div>
              <p>Country club</p>
              <p>7:30 pm - 8:30 pm</p>
            </div>
          </div>
          <div className='itinerario shadow'>
            <img src={IconCena} alt='...' />

            <p>Cena</p>

            <div>
              <p>Country club</p>
              <p>8:30 pm - 00:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-dresscode'>
        <h3>Codigo de Vestimenta</h3>

        <div>
          <img src={ImgDresscode} alt='...' />

        </div>
      </div>

      <div className="container-maps_conf">
        <div className="maps shadow">
          <p>Direccion en google maps</p>

          <div id="maps" className='caja-maps'>

          </div>
        </div>

        <div className="confirmacion shadow">
            <p>Por favor, confirma tu asistencia</p>

            <div id="confirmacion" className='botones'>
              <button type='button' className='si'>Asistiré</button>
              <button type='button' className='no'>Faltaré</button>
            </div>
        </div>
      </div>
      

    </div>
  );
}

export default invitaciones;
