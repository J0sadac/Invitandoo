import editar from '../../../icons/editar.png';
import mover from '../../../icons/cambiar.png';
import eliminar from '../../../icons/eliminar.png';

function Opciones({abrirVent, invitado, selecto}) {

  const botonAbrir = (abrir) => {
    selecto(invitado)
    abrirVent(abrir);
  }

  return (
    <div className="opciones">
        <div className='contOp shadow'>
          <button onClick={() => botonAbrir('editar')}>
            <img className='iconoCop' src={editar} alt='Editar invitacion' />
            <span>Editar invitacion</span>  
          </button>

          <button>
            <img className='iconoCop' src={mover} alt='Mover invitado' />
            <span>Mover</span>
          </button>

          <button onClick={() => botonAbrir('eliminar')}>
            <img className='iconoEli' src={eliminar} alt='Eliminar invitacion' />
            <span>Eliminar</span>
          </button>
        </div>
    </div>
  );
}

export default Opciones;