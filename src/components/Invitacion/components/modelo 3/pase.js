import petalos from '../../../../multimedia/herramientas/adorno petalos.gif';

function Pase ({invitado}){

    return(
        <section className="pase">
            <div className="invitado">
                <span className="titulo">Invitado:</span>
                <span>{invitado.invitado}</span>
            </div>
            {/* <div className="datos">
                <span>Mesa: </span><span>4</span>
            </div> */}
            <div className="cantidad">
                <span className="titulo">Pase para: {invitado.pase}</span>
            </div>
            <div className="flores">
                <img className='petalo left' src={petalos} alt='...' />
                <img className='petalo rigth' src={petalos} alt='...' />
            </div>
        </section>
    );
};

export default Pase;