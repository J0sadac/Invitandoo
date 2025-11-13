//trajes oscuros
import trajeEtiquetaOscuro from '../../../../multimedia/herramientas/traje etiqueta oscuro.png';
import trajeFormalOscuro from '../../../../multimedia/herramientas/traje formal oscuro.png';
import trajeSemifromalOscuro from '../../../../multimedia/herramientas/traje semi formal oscuro.png';
import trajeInformalOscuro from '../../../../multimedia/herramientas/traje informal oscuro.png';

//vestidos oscuros
import vestidoEtiquetaOscuro from '../../../../multimedia/herramientas/vestido etiqueta oscuro.png';
import vestidoFormalOscuro from '../../../../multimedia/herramientas/vestido formal oscuro.png';
import vestidoSemifromalOscuro from '../../../../multimedia/herramientas/vestido semi formal oscuro.png';
import vestidoInformalOscuro from '../../../../multimedia/herramientas/vestido informal oscuro.png';

//trajes claros
import trajeEtiquetaClaro from '../../../../multimedia/herramientas/traje etiqueta claro.png';
import trajeFormalClaro from '../../../../multimedia/herramientas/traje formal claro.png';
import trajeSemifromalClaro from '../../../../multimedia/herramientas/traje semi formal claro.png';
import trajeInformalClaro from '../../../../multimedia/herramientas/traje informal claro.png';

//vestidos claros
import vestidoEtiquetaClaro from '../../../../multimedia/herramientas/vestido etiqueta claro.png';
import vestidoFormalClaro from '../../../../multimedia/herramientas/vestido formal claro.png';
import vestidoSemifromalClaro from '../../../../multimedia/herramientas/vestido semi formal claro.png';
import vestidoInformalClaro from '../../../../multimedia/herramientas/vestido informal claro.png';

import tonoAzul from '../../../../multimedia/herramientas/tonos azul.png';
import tonoRojo from '../../../../multimedia/herramientas/tonos rojo.png';
import tonosHM from '../../../../multimedia/herramientas/tonos hombre y mujer.png';
import colores from '../../../../multimedia/herramientas/Azul.png';
import fausto from '../../../../multimedia/herramientas/Colores Fausto.png'
import tonoCafe from '../../../../multimedia/herramientas/paleta dresscode.png';
import tonoPastel from '../../../../multimedia/herramientas/tonos pastel.png';

import icono from '../../../../multimedia/herramientas/adorno dorado.gif';
import iconoDerecho from '../../../../multimedia/herramientas/Detalle Horizontal derecho.gif';
import flor from '../../../../multimedia/herramientas/flor central.png';

function Vestimenta ({fondo, datos, festejado, modo}){

    return(
        <section className='vestimenta imprimir'>
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}
            <p className="titulo">Código de vestimenta</p>
            {festejado === 'Consuelo & Andrés' && (
                <div className='efecto'>
                    <img src={icono} className='icono' alt='...' />
                    <img src={flor} className='flor' alt='...' />
                    <img src={iconoDerecho} className='icono' alt='...' />
                </div>
            )}
            <>
                {modo === 'oscuro' && (
                    <>
                        {datos.codigo === 'Etiqueta' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeEtiquetaOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoEtiquetaOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeFormalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoFormalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeSemifromalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoSemifromalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeInformalOscuro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoInformalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>  
                        )}
                    </>
                )}

                {modo === 'claro' && (
                    <>
                        {datos.codigo === 'Etiqueta' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeEtiquetaClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoEtiquetaClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}{festejado === 'Alejandra & Alexander' &&(<> rigurosa</>)}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                            {festejado === 'Consuelo & Andrés' ? (
                                    <>
                                        <div className='iconosConand'>
                                            <img loading='lazy' className="icono" src={trajeFormalClaro} alt="..." />
                                            <img loading='lazy' className="icono" src={vestidoFormalClaro} alt="..." />
                                        </div>

                                        <p>{datos.codigo}</p>
                                    </>
                                ):(
                                    <>
                                        <div className='iconos'>
                                            <img loading='lazy' className="icono" src={trajeFormalClaro} alt="..." />
                                            <img loading='lazy' className="icono" src={vestidoFormalClaro} alt="..." />
                                        </div>

                                        <p>{datos.codigo}</p>
                                    </>
                                )}
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeSemifromalClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoSemifromalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            <>
                                <div className='iconos'>
                                    <img loading='lazy' className="icono" src={trajeInformalClaro} alt="..." />
                                    <img loading='lazy' className="icono" src={vestidoInformalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>  
                        )}
                    </> 
                )}
            </>
            {datos?.mensaje && (
                <>
                    <p className='pet'>{datos.mensaje}</p>

                    {festejado === 'Danna Paola Huerta' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoAzul} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Ariana Barroso Roldán' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoRojo} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Belén & Osmar' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={colores} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Leonel y Denisse' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonosHM} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Fausto & Yulissa' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={fausto} alt='...' />
                        </div>  
                    )}

                    {festejado === 'Lizbeth & Agustín' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoCafe} alt='...' />
                        </div> 
                    )}

                    {festejado === 'Mar & Adrián' && (
                        <div className="contenedor">
                            <img loading='lazy' className='img' src={tonoPastel} alt='...' />
                        </div> 
                    )}
                </>
            )}
        </section>
    );
};

export default Vestimenta;