
import IconRecepcionista from '../../images/recepcionista.png';
import IconCena from '../../images/salud.png';

function Itinerario(){

    return(
        <div className='container-itinerario shadow'>
        <h3>Itinerario</h3>
        <div className='cont'>
          <div className='itinerario shadow'>
          <img src={IconRecepcionista} alt='...' />

          <p>Recepcion</p>

            <div>
              <p>Salon Bella Vita</p>
              <p>7:00 pm - 8:00 pm</p>
            </div>
          </div>
          <div className='itinerario shadow'>
            <img src={IconCena} alt='...' />

            <p>Inicio del evento</p>

            <div>
              <p>Salon Bella Vita</p>
              <p>8:00 pm</p>
            </div>
          </div>
        </div>
        </div>
    )
};

export default Itinerario;