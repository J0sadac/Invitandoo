import izquierda from '../../../../multimedia/herramientas/petalo izquierda.png';
import derecha from '../../../../multimedia/herramientas/petalo derecha.png';
import flor from '../../../../multimedia/herramientas/rosa central.png';

function MensajeDos ({evento, fondo, festejado, frases}){

    return(
        <section className="mensajedos">
            {fondo?.url && (
                <img className='fondo' src={fondo.url} alt='...' />
            )}

            {frases.length > 0 ? (
                <>
                    {evento === 'Boda' && (
                        <div className="florero">
                            <img className='flor' src={flor} alt='...' />
                        </div>
                    )}

                    <p className='parrafo'>
                        {frases}
                    </p>

                    {evento === 'Boda' && (
                        <div className="adornos">
                            <img className='icono' src={izquierda} alt='...' />
                            <img className='icono' src={derecha} alt='...' />
                        </div>
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