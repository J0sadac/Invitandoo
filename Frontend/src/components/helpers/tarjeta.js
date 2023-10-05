import ImgNovios from '../../images/Boda - Ana y Angel/Boda - Ana y Angel - img09.jpg';

import { Link } from "react-router-dom";

function tarjeta() {
  return (
    <div className='menu-eventos'>
      <h3>Nuestros proximos eventos</h3>

      <div className='tarjetas'>
        <Link className='link' to='/ana-y-angel'>
          <div className="card shadow">
            <img className='card-img' src={ImgNovios} alt='...' />

            <div className="card-body">
              <h5 className="card-title">Daniel y Jazmin</h5>

              <p className="card-text">
                Acompañanos en este momento tan especial para nosotros!!!
              </p>

              {/* <a href="." className="btn btn-primary">
                Go somewhere
              </a> */}
              {/* Boton con el enlace al sitio del que se hace referencia */}
            </div>
          </div> 
        </Link>
      </div>
    </div>
  );
}

export default tarjeta;
