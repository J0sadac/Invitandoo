//import { Link } from "react-router-dom";

//import liverpool from '../../../../multimedia/herramientas/liverpool.png';
import lluvia from '../../../../multimedia/herramientas/Lluvia de sobres.svg';

function Mesa () {

    return(
        <section className="mesa">
            <h3 className='titulo'>Mesa de regalos</h3>

            {/* <Link className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                <div className="contenido">
                    <img className='icono' src={liverpool} alt='...' />
                    <p className='codigo'>Codigo Liverpool: 51436895</p>
                </div>

                <p className="anuncio">¡Haz Click!</p>
            </Link> */}

            <div className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                <div className="contenido">
                    <img className='icono' src={lluvia} alt='...' />
                    <p className='codigo'>Lluvia de sobres</p>
                </div>

                <p className="anuncio">Tu compañía es todo lo que deseamos, pero si quisieras llevar un regalo,
                preferimos que sea una contribución en efectivo.</p>
            </div>
        </section>
    );
};

export default Mesa;