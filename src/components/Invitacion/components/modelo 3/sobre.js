import izquierda from '../../../../multimedia/herramientas/sobre izquierda.png';
import derecha from '../../../../multimedia/herramientas/sobre derecha.png';

function Sobre(){

    return(
        <section className="sobre">
            <img className='img izquierda' src={izquierda} alt='...'/>
            <img className='img derecha' src={derecha} alt='...' />
            <button>
                
            </button>
        </section>
    )
}

export default Sobre;