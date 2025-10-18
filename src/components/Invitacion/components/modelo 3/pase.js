import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';
import amarillas from '../../../../multimedia/herramientas/flor amarilla.gif';
import rosas from '../../../../multimedia/herramientas/Flores rosas.gif';


function Pase ({evento, invitado, fondo, festejado, sugerencia}){

    return(
        <section className={festejado === 'Leonel y Denisse' ? 'pase leo' : 'pase imprimir'}>
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}

            {festejado === 'Leonel y Denisse' ? (
                <div className="invitado">
                    <span className="titulo">Nos complace invitarte a ti:</span>
                    <span>{invitado.invitado}</span>
                </div>
            ):(
                <div className="invitado">
                    <span className="titulo">Invitado:</span>
                    <span>{invitado.invitado}</span>
                    {invitado?.titulo && (
                        <span>{invitado.titulo}</span>
                    )}
                </div>
            )}
            

            {festejado === 'Ivanna Zoé' || festejado === 'Lenny Nadxieli' ? (
                <>
                </>
            ):(
                <>
                    {invitado.mesa > 0 &&(
                        <div className="datos">
                            <span>Mesa: {invitado.mesa}</span>
                        </div>
                    )}
                </>
            )}

            {invitado.pase > 0 && (
                <div className="cantidad">
                    <span className="titulo">Pase para: </span>
                    <span className="contenido">{invitado.pase} {invitado.pase === 1 ? 'adulto' : 'adultos'}</span>
                    {invitado.infantes > 0 && (
                        <span className="contenido">{invitado.infantes} {invitado.infantes === 1 ? 'niño' : 'niños'}</span>
                    )}
                </div> 
            )}

            {sugerencia && (
                <p className='sugerencia'>{sugerencia}</p>
            )}

            {evento === 'Boda' && (
                <>
                    {festejado === 'Belén & Osmar' ? (
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={rosas} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={rosas} alt='...' />
                        </div>
                    ): festejado === 'Alejandra & Alexander' ?(
                        <></>
                    ):festejado === 'Leyda & Aaron' ?(
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={amarillas} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={amarillas} alt='...' />
                        </div>
                    ): festejado === 'Bruno & Teresa' ?(
                        <></>
                    ): festejado === 'Lizbeth y Agustín' ?(
                        <></>
                    ):(
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={petalos} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={petalos} alt='...' />
                        </div> 
                    )}
                </>
            )}

            {evento === 'XV Años' && (
                <>
                    {festejado !== 'Yare Madrid' && (
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={amarillas} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={amarillas} alt='...' />
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default Pase;