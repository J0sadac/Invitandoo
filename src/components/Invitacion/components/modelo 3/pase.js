import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';
import amarillas from '../../../../multimedia/herramientas/flor amarilla.gif';
import rosas from '../../../../multimedia/herramientas/Flores rosas.gif';
import cerezo from '../../../../multimedia/herramientas/adorno cerezo.png';


function Pase ({evento, invitado, fondo, festejado, sugerencia, condiciones, id}){

    return(
        <section className='pase imprimir'>
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}

            <div className="invitado">
                <span className="titulo">Invitado:</span>
                    <span>{invitado.invitado}</span>
                    {invitado?.titulo && (
                        <span>{invitado.titulo}</span>
                    )}
            </div>
            
            {condiciones.mesa === true && (
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
                    ): festejado === 'Lizbeth & Agustín' ?(
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
                    {id === '695ee38755ad4156be37d1b2' ? (
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={cerezo} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={cerezo} alt='...' />
                        </div>
                    ):(
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