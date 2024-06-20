import { Link } from "react-router-dom";

import liverpool from '../../../../multimedia/herramientas/liverpool.png';
import lluvia from '../../../../multimedia/herramientas/Lluvia de sobres.svg';

function Mesa ({fondo, mesa}) {

    return(
        <section className="mesa">
            <h3 className='titulo'>Mesa de regalos</h3>
            {fondo?.url && (
                <img className="fondo" src={fondo.url} alt="..." />
            )}

            <p className="gracias">
                {mesa.explicacion}
            </p>

            <Link className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/${mesa.codigo}`}>
                <div className="contenido">
                    <img className='icono' src={liverpool} alt='...' />
                    <p className='codigo'>{mesa.modalidad}: {mesa.codigo}</p>
                </div>

                <p className="anuncio">¡Haz click aqui!</p>
            </Link>

            <div className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                <div className="contenido">
                    <img className='icono' src={lluvia} alt='...' />
                    <p className='codigo'>Lluvia de sobres</p>
                </div>
            </div>

            <p className="gracias">
                ¡Con cariño, muchas gracias!
            </p>
        </section>
    );
};

export default Mesa;