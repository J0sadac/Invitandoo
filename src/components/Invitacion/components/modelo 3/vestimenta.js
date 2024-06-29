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

function Vestimenta ({fondo, datos, modo}){

    return(
        <section className="vestimenta">
            {fondo?.url && (
                <img className='fondo' src={fondo.url} alt='...' />
            )}
            <p className="titulo">Código de vestimenta</p>
            <>
                {modo === 'oscuro' && (
                    <>
                        {datos.codigo === 'Etiqueta' ? (
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeEtiquetaOscuro} alt="..." />
                                    <img className="icono" src={vestidoEtiquetaOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeFormalOscuro} alt="..." />
                                    <img className="icono" src={vestidoFormalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeSemifromalOscuro} alt="..." />
                                    <img className="icono" src={vestidoSemifromalOscuro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeInformalOscuro} alt="..." />
                                    <img className="icono" src={vestidoInformalOscuro} alt="..." />
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
                                    <img className="icono" src={trajeEtiquetaClaro} alt="..." />
                                    <img className="icono" src={vestidoEtiquetaClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Formal' ? (
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeFormalClaro} alt="..." />
                                    <img className="icono" src={vestidoFormalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ): datos.codigo === 'Semi formal' ? (
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeSemifromalClaro} alt="..." />
                                    <img className="icono" src={vestidoSemifromalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>
                        ):(
                            <>
                                <div className='iconos'>
                                    <img className="icono" src={trajeInformalClaro} alt="..." />
                                    <img className="icono" src={vestidoInformalClaro} alt="..." />
                                </div>

                                <p>{datos.codigo}</p>
                            </>  
                        )}
                    </> 
                )}
            </>
            {datos?.mensaje && (
                <p>{datos.mensaje}</p>
            )}
        </section>
    );
};

export default Vestimenta;