import correcto from '../../../icons/listo.png';

function Notificaciones ({tipo}) {

    return(
        <div className="notificacion">
            {tipo === 'copiado' && (
                <div className="noti">
                    <img src={correcto} alt='copiado'/>
                    <span>ENLACE COPIADO CORRECTAMENTE</span>
                </div>
            )}

            {tipo === 'eliminado' && (
                <div className='noti'>
                    <img src={correcto} alt='eliminado' />
                    <span>INVITADO ELIMINADO</span>
                </div>
            )}

            {tipo === 'editado' && (
                <div className='noti'>
                    <img src={correcto} alt='eliminado' />
                    <span>CAMBIOS GUARDADOS CORRECTAMENTE</span>
                </div>
            )}
        </div>
    )
}

export default Notificaciones;