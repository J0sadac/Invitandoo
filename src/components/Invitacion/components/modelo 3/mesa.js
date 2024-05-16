import { Link } from "react-router-dom";

import liverpool from '../../../../multimedia/herramientas/liverpool.png';
import banorte from '../../../../multimedia/herramientas/banorte.png';

function Mesa () {

    return(
        <section className="mesa">
            <h3 className='titulo'>Mesa de regalos</h3>

            <Link className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                <div className="contenido">
                    <img className='icono img-fluid' src={liverpool} alt='...' />
                    <p className='codigo'>Codigo Liverpool: 51436895</p>
                </div>

                <p className="anuncio">¡Haz Click!</p>
            </Link>

            <div className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                <div className="contenido">
                    <img className='icono img-fluid' src={banorte} alt='...' />
                    <p className='codigo'>Transferencia: 4189 1431 1720 1031</p>
                    <p className='codigo'>Clave: 072100010924214146</p>
                </div>

                <p className="anuncio">Francisco Alatorre Casaux</p>
            </div>
        </section>
    );
};

export default Mesa;