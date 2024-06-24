import { Link } from "react-router-dom";

import liverpool from '../../../../multimedia/herramientas/liverpool.png';
import lluvia from '../../../../multimedia/herramientas/Lluvia de sobres.svg';
import bbva from '../../../../multimedia/herramientas/BBVA-logo.png';

function Mesa ({fondo, mesa, confirmacion}) {

    return(
        <section className="mesa">
            <h3 className='titulo'>Mesa de regalos</h3>
            {fondo?.url && (
                <img className="fondo" src={fondo.url} alt="..." />
            )}

            <p className="gracias">
                {mesa.explicacion}
            </p>

            {confirmacion.lluvia === true && (
                <div className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                    <div className="contenido">
                        <img className='icono' src={lluvia} alt='...' />
                        <p className='codigo'>Lluvia de sobres</p>
                    </div>
                </div>
            )}

            {mesa?.tarjeta && (
                <>
                <p className="gracias">
                    Quiero ahorrarte tiempo y esfuerzo al elegir el regalo
                    perfecto, si es tu elección obsequiarme algo, puedes hacerlo
                    a travez de una transferencia bancaria
                </p>
                <div className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51436895`}>
                    <div className="contenido">
                        <img className='icono' src={bbva} alt='...' />
                        <p className='codigo'>Numero de cuenta: {mesa.tarjeta}</p>
                    </div>
                </div>
                <p className="gracias">
                    Nos encantaría recibir el comprobante
                    por whatsapp para agradecerte personalmente.
                </p>
                </>
            )}

            <Link className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/${mesa.codigo}`}>
                <div className="contenido">
                    <img className='icono' src={liverpool} alt='...' />
                    <p className='codigo'>{mesa.modalidad}: {mesa.codigo}</p>
                </div>

                <p className="anuncio">¡Haz click aqui!</p>
            </Link>

            <p className="gracias">
                Por supuesto, cualquier detalle será bienvenido y apreciado ¡Con cariño, muchas gracias!
            </p>
        </section>
    );
};

export default Mesa;