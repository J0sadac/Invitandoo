import izquierda from '../../../../multimedia/herramientas/petalo izquierda.png';
import derecha from '../../../../multimedia/herramientas/petalo derecha.png';
import flor from '../../../../multimedia/herramientas/rosa central.png';
import logo from '../../../../multimedia/herramientas/logo AA.png';

function MensajeDos ({evento, fondo, festejado, frases}){

    return(
        <section className="mensajedos">
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}

            {frases.length > 0 ? (
                <>
                    {evento === 'Boda' && (
                        <>
                            {festejado !== 'Alejandra & Alexander' ? (
                                <div className="florero">
                                    <img loading='lazy' className='flor' src={flor} alt='...' />
                                </div>
                            ):(<></>)} 
                        </>
                    )}

                    <p className='parrafo'>
                        {frases}
                    </p>

                    {evento === 'Boda' && (
                        <>
                            {festejado !== 'Alejandra & Alexander' ? (
                                <div className="adornos">
                                    <img loading='lazy' className='icono' src={izquierda} alt='...' />
                                    <img loading='lazy' className='icono' src={derecha} alt='...' />
                                </div>
                            ):(<div className='logo'>
                                <img src={logo} alt='...' />
                            </div>)}
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