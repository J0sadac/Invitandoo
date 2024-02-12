import icono1 from '../../../../multimedia/herramientas/coctel.png';
import icono2 from '../../../../multimedia/herramientas/civil.png';
import icono3 from '../../../../multimedia/herramientas/salud.png';
import icono4 from '../../../../multimedia/herramientas/cena.png';

function Itinerario () {

    return(
        <div className="itinerario shadow">
            <div className="titulo">
                <h3>Itinerario</h3>
            </div>
            <div className="contenido">
                <img className='icono' src={icono1} alt="..." />
                <div className="accion">
                    <p>Recepcion cotel</p>
                    <p>6:30 pm - 7:00 pm</p>
                </div>
            </div>
            <div className="contenido">
                <img className='icono' src={icono2} alt="..." />
                <div className="accion">
                    <p>Boda civil</p>
                    <p>7:15 pm</p>
                </div>
            </div>
            <div className="contenido">
                <img className='icono' src={icono3} alt="..." />
                <div className="accion">
                    <p>Brindis</p>
                    <p>9:00 pm</p>
                </div>
            </div>
            <div className="contenido">
                <img className='icono' src={icono4} alt="..." />
                <div className="accion">
                    <p>Cena</p>
                    <p>9:30 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Itinerario;