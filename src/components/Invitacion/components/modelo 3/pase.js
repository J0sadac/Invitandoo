import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';
import fondo from '../../../../multimedia/fondos/fondo rojo.png'

function Pase ({evento, invitado}){

    return(
        <>
            {evento === 'Boda' ? (
                <section className="pase">
                    <div className="invitado">
                        <span className="titulo">Invitado:</span>
                        <span>{invitado.invitado}</span>
                    </div>

                    {/* <div className="datos">
                        <span>Mesa: 4</span>
                    </div> */}

                    <div className="cantidad">
                        <span className="titulo">Pase para: {invitado.pase}</span>
                    </div>

                    <p className='nin'> Ceremonia y Recepción: Solo adultos. Gracias por su comprensión.</p>

                    <div className="flores">
                        <img className='petalo left' src={petalos} alt='...' />
                        <img className='petalo rigth' src={petalos} alt='...' />
                    </div>     
                </section>
            ): evento === 'XV Años' ? (
                <section className="pase">
                    <img className='fondo' src={fondo} alt='...' />
                    <div className="invitado">
                        <span className="titulo">Invitado:</span>
                        <span>{invitado.invitado}</span>
                    </div>

                    <div className="datos">
                        <span>Mesa: {invitado.mesa}</span>
                    </div>

                    <div className="cantidad">
                        <span className="titulo">Pase para: {invitado.pase}</span>
                    </div>  
                </section>
            ):(
                <div>holi</div>
            )}
        </>
    );
};

export default Pase;