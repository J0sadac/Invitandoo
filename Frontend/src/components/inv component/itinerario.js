import IconChurch from '../../images/church.png';
import IconWedding from '../../images/champagne-glass.png';
import IconCena from '../../images/serving-dish.png';

function Itinerario(){

    return(
        <div className='container-itinerario shadow'>
        <h3>Itinerario</h3>
        <div className='cont'>
          <div className='itinerario shadow'>
            <img src={IconChurch} alt='...' />

            <p>Misa</p>

            <div>
              <p>Jesus de la buena esperanza</p>
              <p>6:00 pm - 7:00 pm</p>
            </div>
          </div>
          <div className='itinerario shadow'>
          <img src={IconWedding} alt='...' />

          <p>Boda</p>

            <div>
              <p>Country club</p>
              <p>7:30 pm - 8:30 pm</p>
            </div>
          </div>
          <div className='itinerario shadow'>
            <img src={IconCena} alt='...' />

            <p>Cena</p>

            <div>
              <p>Country club</p>
              <p>8:30 pm - 00:00 pm</p>
            </div>
          </div>
        </div>
        </div>
    )
};

export default Itinerario;