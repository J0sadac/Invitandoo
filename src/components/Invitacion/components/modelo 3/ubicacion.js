//import { Link } from 'react-router-dom';
import iglesia from '../../../../multimedia/Fotos - Veronica/iglesia.jpg';
import salon from '../../../../multimedia/Fotos - Veronica/salon.png';
import adorno from '../../../../multimedia/herramientas/adorno dorado.svg';
//import mapa from '../../../../multimedia/herramientas/mapa.svg';

function Ubicacion () {

    return(
        <section className="ubicacion">
            <div className='encabezado'>
                <p className="titulo">Ubicacion</p>
                <img className='adorno' src={adorno} alt='...' />
            </div>

            <section>
                <div className="lugar">
                    <p className="establecimiento">Iglesia</p>
                    <img className="foto" src={iglesia} alt="..." />
                    <div className='direccion'>
                        <span className='nombre'>Iglesia De San Juan Bautista</span>
                        <span>Primera Ote Nte 170, Centro, 29760 Jitotol, Chis.</span>
                    </div>
                </div>

                {/* <button>
                    <img className='icono' src={mapa} alt='...' />
                    <Link className='link' src='https://maps.app.goo.gl/admCwC8hJDMExcKx7' >Ubicacion GPS</Link>
                </button> */}
            </section>

            <section>
                <div className="lugar">
                    <p className="establecimiento">Salon</p>
                    <img className="foto" src={salon} alt="..." />
                    <div className='direccion'>
                        <span className='nombre'>Salon El Diamante</span>
                        <span>Carretera Federal km 184, tramo Jitotol-Pueblo Nuevo Solistahuacan</span>
                    </div>
                </div>

                {/* <button>
                    <img className='icono' src={mapa} alt='...' />
                    <Link className='link' src='https://maps.app.goo.gl/admCwC8hJDMExcKx7' >Ubicacion GPS</Link>
                </button> */}
            </section>
        </section>
    );
};

export default Ubicacion;