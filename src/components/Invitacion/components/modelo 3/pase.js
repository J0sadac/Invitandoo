import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';
import amarillas from '../../../../multimedia/herramientas/flor amarilla.gif';
import antifazFondo from '../../../../multimedia/herramientas/Adorno animado.png'


function Pase ({evento, invitado, fondo, festejado}){

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
                    {fondo?.url && (
                        <img className='fondo' src={fondo.url} alt='...' />
                    )}
                    <div className="invitado">
                        <span className="titulo">Invitado:</span>
                        <span>{invitado.invitado}</span>
                    </div>

                    {invitado.mesa > 0 &&(
                        <div className="datos">
                            <span>Mesa: {invitado.mesa}</span>
                        </div>
                    )}

                    {invitado.infantes > 0 ? (
                        <div className="cantidad">
                            <span className="titulo">Pase para: </span>
                            <span className="contenido">{invitado.pase} {invitado.pase === 1 ? 'adulto' : 'adultos'}</span>
                            <span className="contenido">{invitado.infantes} {invitado.infantes === 1 ? 'niño' : 'niños'}</span>
                        </div> 
                    ):(
                        
                        <div className="cantidad">
                            <span className="titulo">Pase para: {invitado.pase}</span>
                        </div> 
                    )}

                    {festejado === 'Danna Paola Huerta Pantoja.' ? (
                        <div className="contenedor-fondo">
                            <img className='img' src={antifazFondo} alt='...' />
                        </div>  
                    ):(
                        <div className="flores">
                            <img className='petalo left' src={amarillas} alt='...' />
                            <img className='petalo rigth' src={amarillas} alt='...' />
                        </div>  
                    )}
                </section>
            ):(
                <div>holi</div>
            )}
        </>
    );
};

export default Pase;