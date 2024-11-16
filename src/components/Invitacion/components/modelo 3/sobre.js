import izquierda from '../../../../multimedia/herramientas/sobre izquierda.png';
import derecha from '../../../../multimedia/herramientas/sobre derecha.png';
import sello from '../../../../multimedia/herramientas/sello conand.jpg'

function Sobre(){

    return(
        <section className="sobre">
            <img className='img izquierda' src={izquierda} alt='...'/>
            <img className='img derecha' src={derecha} alt='...' />
            <button>
                <img className='sello' img={sello} alt='...' />
            </button>
        </section>
    )
}

export default Sobre;