import vestido from '../../../../multimedia/herramientas/vestido.svg';
import traje from '../../../../multimedia/herramientas/traje.svg';

function Vestimenta (){

    return(
        <section className="vestimenta">
            <p className="titulo">Codigo de vestimenta</p>
            <img className="icono" src={traje} alt="..." />
            <img className="icono" src={vestido} alt="..." />
            <p>Formal - Noche</p>
            <p className='aviso'>Evitar color blanco</p>
        </section>
    );
};

export default Vestimenta;