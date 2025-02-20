import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';
import amarillas from '../../../../multimedia/herramientas/flor amarilla.gif';
import antifazFondo from '../../../../multimedia/herramientas/Adorno animado.png';
import rosas from '../../../../multimedia/herramientas/Flores rosas.gif';


function Pase ({evento, invitado, fondo, festejado}){

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
                </div>
            )}
            

            {festejado === 'Ivanna Zoé' ? (
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

            {invitado.infantes > 0 ? (
                <div className="cantidad">
                    <span className="titulo">Pase para: </span>
                    <span className="contenido">{invitado.pase} {invitado.pase === 1 ? 'adulto' : 'adultos'}</span>
                    <span className="contenido">{invitado.infantes} {invitado.infantes === 1 ? 'niño' : 'niños'}</span>
                </div> 
            ):(
                <div className="cantidad">
                    {invitado.pase >= 99 ? (
                        <span className='titulo'>
                            Pase libre
                        </span>
                    ):(
                        <span className='titulo'>
                            Pase para: {invitado.pase}
                        </span>
                    )}
                </div> 
            )}

            {festejado === 'Danna Paola Huerta' && (
                <div className="contenedor-fondo">
                    <img loading='lazy' className='img' src={antifazFondo} alt='...' />
                </div>    
            )}

            {festejado === 'Kristopher & Cristina' && (
                <p className='nin'>
                    Ceremonia y Recepción: Solo adultos. Gracias por su comprensión.
                </p>
            )}

            {festejado === 'Leonel y Denisse' && (
                <p className='nin'>
                    Ceremonia y Recepción: Solo adultos. Gracias por su comprensión.
                </p>
            )}

            {festejado === 'Alejandra & Alexander' && (
                <p className='nin'>
                    Ceremonia y Recepción: Solo adultos. Gracias por su comprensión.
                </p>
            )}

            {festejado === 'Lenny Nadxieli' && (
                <p className='nin'>
                    Por favor, es de vital importancia ser puntuales.
                </p>
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
                    ):(
                        <div className="flores">
                            <img loading='lazy' className='petalo left' src={petalos} alt='...' />
                            <img loading='lazy' className='petalo rigth' src={petalos} alt='...' />
                        </div> 
                    )}
                </>
            )}

            {evento === 'XV Años' && (
                <div className="flores">
                    <img loading='lazy' className='petalo left' src={amarillas} alt='...' />
                    <img loading='lazy' className='petalo rigth' src={amarillas} alt='...' />
                </div>
            )}
        </section>
    );
};

export default Pase;