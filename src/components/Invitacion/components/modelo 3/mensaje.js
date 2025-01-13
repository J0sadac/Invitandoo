import flor from '../../../../multimedia/herramientas/Flor fuccia.gif';
import animacion from '../../../../multimedia/herramientas/adorno dorado.gif'
import corona from '../../../../multimedia/herramientas/corona.png';
import tiara from '../../../../multimedia/herramientas/tiara.png';

//import bajo from '../../../../multimedia/herramientas/adorno-bajo.png';

function Mensaje ({evento, fondo, festejado}) {

    return(
        <>
            {evento === 'Boda' ? (
                <section className="mensaje">
                    <div className='florero'>
                        <img loading='lazy' className='flor tl' src={flor} alt='...' />
                        <img loading='lazy' className='flor tr' src={flor} alt='...' />
                    </div>
                    <p className='fecha'>03 de agosto de 2024</p>
                    <p>
                        ¡Uno de los dias más importantes de nuestra vida ha llegado!
                    </p>
                    <div className='florero'>
                        <img loading='lazy' className='flor bl' src={flor} alt='...' />
                        <img loading='lazy' className='flor br' src={flor} alt='...' />
                    </div>
                </section>
            ): evento === 'XV Años' ? (
                <section className='mensaje'>
                    {fondo?.url && (
                        <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                    )}
                    {festejado === 'Bella' ? (
                        <div className='iconos'>
                            <img loading='lazy' src={animacion} className='adorno' alt='...' />
                            <img loading='lazy' src={tiara} className='icono crn' alt='...' />
                            <img loading='lazy' src={animacion} className='adorno tr' alt='...' />
                        </div>
                    ):(
                        <div className='iconos'>
                            <img loading='lazy' src={animacion} className='adorno' alt='...' />
                            {festejado === 'Ariana Barroso Roldán' ? (
                                <img loading='lazy' src={tiara} className='icono crn' alt='...' />
                            ):(
                                <img loading='lazy' src={corona} className='icono crn' alt='...' />
                            )}
                            
                            <img loading='lazy' src={animacion} className='adorno tr' alt='...' />
                        </div>
                    )}
                    <p>Hoy cierro un capítulo lleno de recuerdos y abro otro con nuevas aventuras.</p>
                    <div  className='iconos'>
                        <img loading='lazy' src={animacion} className='adorno' alt='...' />
                        <img loading='lazy' src={animacion} className='adorno tr' alt='...' />
                    </div>
                </section>
            ): (
                <>holi</>
            )}
        </>
    );
};

export default Mensaje;