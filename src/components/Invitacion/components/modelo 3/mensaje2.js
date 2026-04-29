import izquierda from '../../../../multimedia/herramientas/petalo izquierda.png';
import derecha from '../../../../multimedia/herramientas/petalo derecha.png';
import flor from '../../../../multimedia/herramientas/rosa central.png';
import cerezos from '../../../../multimedia/herramientas/cerezos.png';
import ramas from '../../../../multimedia/herramientas/ramas de cerezos.png';
import adornoDorado from '../../../../multimedia/herramientas/Horizontal - decoracion 1.png';
import adornoDoradoInferior from '../../../../multimedia/herramientas/Horizontal - decoracion 2.png';

function MensajeDos ({evento, fondo, festejado, frases, id}){

    return(
        <section className="mensajedos">
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}

            {frases.length > 0 ? (
                <>
                    {evento === 'Boda' && (
                        <>
                            {festejado !== 'Alejandra & Alexander' &&
                            festejado !== 'Bruno & Teresa' ? (
                                <div className="florero">
                                    <img loading='lazy' className='flor' src={flor} alt='...' />
                                </div>
                            ):(<></>)} 
                        </>
                    )}

                    {id === '695ee38755ad4156be37d1b2' && (
                        <img className='iconimg' src={ramas} alt='cerezos' />
                    )}

                    {id === '69db4a8a7d5f52fdbdef0c31' && (
                        <img className='iconimg' src={adornoDorado} alt='cerezos' />
                    )}

                    <p className='parrafo'>
                        {frases}
                    </p>

                    {id === '695ee38755ad4156be37d1b2' && (
                        <img className='iconimg' src={cerezos} alt='cerezos' />
                    )}

                    {id === '69db4a8a7d5f52fdbdef0c31' && (
                        <img className='iconimg' src={adornoDoradoInferior} alt='cerezos' />
                    )}

                    {evento === 'Boda' && (
                        <>
                            {festejado !== 'Alejandra & Alexander' &&
                            festejado !== 'Bruno & Teresa' ? (
                                <div className="adornos">
                                    <img loading='lazy' className='icono' src={izquierda} alt='...' />
                                    <img loading='lazy' className='icono' src={derecha} alt='...' />
                                </div>
                            ):(<span></span>)}
                        </>
                    )}
                </>
            ):(
                <p>
                    Estos momentos se vuelven eternos al compartirlos con ustedes.
                </p>
            )}
        </section>
    );
};

export default MensajeDos;