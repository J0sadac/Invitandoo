import hombre from '../../../../multimedia/herramientas/traje etiqueta oscuro.png';
import mujer from '../../../../multimedia/herramientas/vestido etiqueta oscuro.png';

function Vestimenta (){

    return(
        <div className="codigo shadow">
            <h3 className="titulo">Codigo de vestimenta</h3>

            <div className="contenido">
                <div className="imagenes">
                    <img src={hombre} alt='...' />
                    <img src={mujer} alt='...' />
                </div>
                <p className="vestimenta">Formal</p>
            </div>
        </div>
    );
};

export default Vestimenta;