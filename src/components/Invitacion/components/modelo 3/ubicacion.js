//import { Link } from 'react-router-dom';
import iglesia from '../../../../multimedia/Kristopher/iglesia.jpg';
import salon from '../../../../multimedia/Kristopher/salon.jpg';
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
                        <span className='nombre'>Catedral De San José.</span>
                        <span>1ª Sur No. 1, Colonia Centro, Tapachula, Chiapas.</span>
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
                        <span className='nombre'>Salon Bella Vita</span>
                        <span>11 Sur. Entre 6ª. Privada y 8ª. Oriente</span>
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