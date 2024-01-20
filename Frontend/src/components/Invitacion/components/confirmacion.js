
function Confirmacion() {
  
  return (
    <div className="container-maps_conf shadow">
    <div className="maps shadow">
      <p>Direccion en google maps</p>

      <div id="maps" className='caja-maps'>
          {/* <img className="img-googlemaps" src={} alt="..." /> */}
      </div>
    </div>

    <div className="confirmacion shadow">
        <p>Por favor, confirma tu asistencia</p>

        <div id="confirmacion" className='botones'>
          {/* <button type='button' onClick={() => actualizarAsistencia("asistire")} className='si'>Asistiré</button>
          <button type='button' onClick={() => actualizarAsistencia("faltare")} className='no'>Faltaré</button> */}
        </div>
    </div>
  </div>
  );
}

export default Confirmacion;


