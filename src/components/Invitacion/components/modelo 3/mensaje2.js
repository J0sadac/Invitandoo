import izquierda from '../../../../multimedia/herramientas/petalo izquierda.png';
import derecha from '../../../../multimedia/herramientas/petalo derecha.png';
import flor from '../../../../multimedia/herramientas/rosa central.png';
import cerezos from '../../../../multimedia/herramientas/cerezos.png';
import ramas from '../../../../multimedia/herramientas/ramas de cerezos.png';

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

                    <p className='parrafo'>
                        {frases}
                    </p>

                    {id === '695ee38755ad4156be37d1b2' && (
                        <img className='iconimg' src={cerezos} alt='cerezos' />
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