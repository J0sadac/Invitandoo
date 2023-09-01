 const Confirmar = () => {
  alert("¡Estamos muy felices por contar con tu presencia!")
 };

 const Faltar = () => {
  alert("¡Lamentamos mucho tu ausencia en este evento!")
 }

function Confirmacion(){

    return(
        <div className="container-maps_conf shadow">
        <div className="maps shadow">
          <p>Direccion en google maps</p>

          <div id="maps" className='caja-maps'>

          </div>
        </div>

        <div className="confirmacion shadow">
            <p>Por favor, confirma tu asistencia</p>

            <div id="confirmacion" className='botones'>
              <button type='button' onClick={Confirmar} className='si'>Asistiré</button>
              <button type='button' onClick={Faltar} className='no'>Faltaré</button>
            </div>
        </div>
      </div>
    )
};

export default Confirmacion;