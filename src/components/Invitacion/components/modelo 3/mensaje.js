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
                        <img className='flor tl' src={flor} alt='...' />
                        <img className='flor tr' src={flor} alt='...' />
                    </div>
                    <p className='fecha'>03 de agosto de 2024</p>
                    <p>
                        ¡Uno de los dias más importantes de nuestra vida ha llegado!
                    </p>
                    <div className='florero'>
                        <img className='flor bl' src={flor} alt='...' />
                        <img className='flor br' src={flor} alt='...' />
                    </div>
                </section>
            ): evento === 'XV Años' ? (
                <section className='mensaje'>
                    {fondo?.url && (
                        <img className='fondo' src={fondo.url} alt='...' />
                    )}
                    {festejado === 'Bella' ? (
                        <div className='iconos'>
                            <img src={animacion} className='adorno' alt='...' />
                            <img src={tiara} className='icono crn' alt='...' />
                            <img src={animacion} className='adorno tr' alt='...' />
                        </div>
                    ):(
                        <div className='iconos'>
                            <img src={animacion} className='adorno' alt='...' />
                            <img src={corona} className='icono crn' alt='...' />
                            <img src={animacion} className='adorno tr' alt='...' />
                        </div>
                    )}
                    <p>Hoy cierro un capítulo lleno de recuerdos y abro otro con nuevas aventuras.</p>
                    <div  className='iconos'>
                        <img src={animacion} className='adorno' alt='...' />
                        <img src={animacion} className='adorno tr' alt='...' />
                    </div>
                </section>
            ): (
                <>holi</>
            )}
        </>
    );
};

export default Mensaje;