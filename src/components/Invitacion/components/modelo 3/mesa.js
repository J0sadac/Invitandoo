import { Link } from "react-router-dom";

import liverpool from '../../../../multimedia/herramientas/liverpool.png';
import lluvia from '../../../../multimedia/herramientas/Lluvia de sobres.svg';
import negros from '../../../../multimedia/herramientas/Lluvia de sobres negros.png';
import violeta from '../../../../multimedia/herramientas/violeta.png';
import vino from '../../../../multimedia/herramientas/Sobres vino.png';
import bbva from '../../../../multimedia/herramientas/BBVA-logo.png';
import sears from '../../../../multimedia/herramientas/sears.png'
import antifaz from '../../../../multimedia/herramientas/antifaz veneciaga.png';

function Mesa ({fondo, mesa, confirmacion, festejado}) {

    return(
        <section className="mesa imprimir">
            <h3 className='titulo'>Mesa de regalos</h3>

            <div className="contenido">
                {fondo?.url && (
                    <img loading="lazy" className="fondo" src={fondo.url} alt="..." />
                )}

                <div>
                    {mesa[0].explicacion && (
                        <p className="gracias">
                            {mesa[0].explicacion}
                        </p>
                    )}

                    {confirmacion.lluvia === true && (
                        <>
                            <p className="gracias">
                                Queremos ahorrarte el tiempo y esfuerzo de elegir el regalo
                                perfecto, si es tu elección obsequiarnos algo, puedes depositarlo
                                en el sobre que se te entregará en recepción el día del evento.
                            </p>
                            <div className='regalo'>
                                <div className="contenido">
                                    {festejado === 'Alejandra & Alexander' || 
                                        festejado === 'Xamira Escobar Franco'
                                    ? (
                                        <img loading="lazy" className='icono' src={negros} alt='...' />
                                    ) : festejado === 'Keila Jozabed' ? (
                                        <img loading="lazy" className='icono' src={violeta} alt='...' />
                                    ) : festejado === 'Andrea Citalan' ? (
                                        <img loading="lazy" className='icono' src={vino} alt='...' />
                                    ):(
                                        <img loading="lazy" className='icono' src={lluvia} alt='...' />
                                    )}
                                    
                                    <p className='codigo'>Lluvia de sobres</p>
                                </div>
                            </div>
                        </>
                    )}

                    {mesa[0]?.codigo && (

                        <Link className='regalo' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/${mesa[0].codigo}`}>
                            <div className="contenido">
                                <img loading="lazy" className='icono' src={liverpool} alt='...' />
                                <p className='codigo'>{mesa[0].modalidad}: {mesa[0].codigo}</p>
                            </div>

                            <p className="anuncio">¡Haz click aqui!</p>
                        </Link>
                    )}

                    {mesa[1]?.tarjeta && (
                        <p className="gracias">
                            O hacer una transferencia bancaria.
                        </p> 
                    )}
                </div>

                <div>
                    {mesa[1]?.tarjeta && (
                        <>
                            <div className='regalo'>
                                <div className="contenido">
                                    <img loading="lazy" className='icono' src={bbva} alt='...' />
                                    <p className='codigo'>Numero de cuenta: {mesa[1].tarjeta}</p>
                                    <p className='codigo'>Nombre del destinatario: {mesa[1].destinatario}</p>
                                </div>
                            </div>
                            <p className="gracias">
                                Nos encantaría recibir el comprobante
                                por whatsapp para agradecerte personalmente.
                            </p>
                        </>
                    )}

                    {mesa?.sears && (
                        <Link className='regalo' to={`https://www.sears.com.mx/Mesa-de-Regalos/156087/te-invito-a-mi-boda-esteban-adriana`}>
                            <div className="contenido">
                                <img loading="lazy" className='icono' src={sears} alt='...' />
                                <p className='codigo'>Codigo sears: 156087</p>
                            </div>

                            <p className="anuncio">¡Haz click aqui!</p>
                        </Link>
                    )}


                    <p className="gracias">
                        Por supuesto, cualquier detalle será bienvenido y apreciado ¡Con cariño, muchas gracias!
                    </p>

                    {festejado === 'Danna Paola Huerta' && (
                        <div className="flores">
                            <img loading="lazy" className='petalo ant' src={antifaz} alt='...' />
                            <img loading="lazy" className='petalo ant' src={antifaz} alt='...' />
                        </div>  
                    )}
                </div>

            </div>
            

        </section>
    );
};

export default Mesa;