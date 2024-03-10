import Whatsapp from '../../../../multimedia/herramientas/whatsapp.png';

function Confirmacion({nombre, telefono}){

    return(
        <div className="confirmacion shadow">
            <h3 className="titulo">Por favor, confirma tu asistencia</h3>
            <p>Puedes confirmar a través de Whatsapp con nuestro wedding planner</p>
            <p>{nombre}</p>
            <a href={`https://wa.me/${telefono}`}><img src={Whatsapp} className='icono' alt="..." /></a>
        </div>
    );
};

export default Confirmacion;