import Whatsapp from '../../../../multimedia/herramientas/whatsapp.png';

function Confirmacion(){

    return(
        <div className="confirmacion shadow">
            <h3 className="titulo">Por favor, confirma tu asistencia</h3>
            <p>Puedes confirmar via whatsapp con nuestra wedding planner</p>
            <p>Alejandra Torres 961 138 4574</p>
            <a href='https://wa.me/529611384574'><img src={Whatsapp} className='icono' alt="..." /></a>
        </div>
    );
};

export default Confirmacion;