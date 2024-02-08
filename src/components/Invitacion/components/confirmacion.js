import maps from '../../../multimedia/herramientas/maps - boda - jaqui.png';

function Confirmacion() {

  const actualizarAsistencia = (param) => {

    if(param === 'asistire'){
      alert('Gracias por confirmar tu asistencia')
    }else{
      alert('Sentimos mucho tu ausencia, esperamos verte en otra ocasion')
    }
    
  }

  return (
    <div className="container-maps_conf shadow">
    <div className="maps shadow">
      <p>Direccion en google maps</p>

      <div id="maps" className='caja-maps'>
          <img className="img-googlemaps" src={maps} alt="..." />
      </div>
    </div>

    <div className="confirmacion shadow">
        <p>Por favor, confirma tu asistencia</p>

        <div id="confirmacion" className='botones'>
          <button type='button' onClick={() => actualizarAsistencia("asistire")} className='si'>Asistiré</button>
          <button type='button' onClick={() => actualizarAsistencia("faltare")} className='no'>Faltaré</button>
        </div>
    </div>
  </div>
  );
}

export default Confirmacion;


