import vestido from '../../../../multimedia/herramientas/vestido.svg';
import traje from '../../../../multimedia/herramientas/traje.svg';
import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';


function Vestimenta ({evento, fondo}){

    return(
        <>
            {evento === 'Boda' ? (
                <section className="vestimenta">
                    <p className="titulo">Código de vestimenta</p>
                    <div className='iconos'>
                        <img className="icono" src={traje} alt="..." />
                        <img className="icono" src={vestido} alt="..." />
                    </div>
                    <p>Formal - Noche</p>
                    <p className='aviso'>Evitar color blanco</p>
        
                    <div className="flores">
                        <img className='petalo left' src={petalos} alt='...' />
                        <img className='petalo rigth' src={petalos} alt='...' />
                    </div>
                </section>
            ) : evento === 'XV Años' ? (
                <section className="vestimenta">
                    {fondo?.url && (
                        <img className='fondo' src={fondo.url} alt='...' />
                    )}
                    <p className="titulo">Código de vestimenta</p>
                    <div className='iconos'>
                        <img className="icono" src={traje} alt="..." />
                        <img className="icono" src={vestido} alt="..." />
                    </div>
                    <p>Formal - Noche</p>
                </section>
            ):(
                <div>
                    Holi
                </div>
            )}
        </>
    );
};

export default Vestimenta;