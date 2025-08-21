import completa from '../../../icons/confirmado.png';
import pendiente from '../../../icons/pendiente.png';
import declinados from '../../../icons/declinado.png';

function Cambiar({cerrar, seleccionar}){

    return(
        <div className="ventana">
            <div className="cambiar">
                <button className="btnCerrar" onClick={cerrar}>X</button>

                <p className="titulo">Mover invitado</p>

                <div className="cambios">
                    <div className="mesa shadow">
                        <span>Mesa 1</span>
                        <div className='datos'>
                            <div className='total'>
                                <span>12</span>
                                <span>Total</span>
                            </div>
                            <div className='dato'>
                                <span>7</span>
                                <img className='icon' src={completa} alt='completa' />
                            </div>
                            <div className='dato'>
                                <span>3</span>
                                <img className='icon' src={pendiente} alt='completa' />
                            </div>
                            <div className='dato'>
                                <span>2</span>
                                <img className='icon' src={declinados} alt='completa' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cambiar;