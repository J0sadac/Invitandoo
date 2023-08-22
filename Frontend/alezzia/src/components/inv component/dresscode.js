import ImgDresscode from '../../images/codigo de vestimenta.png';

var vestimenta="Semi-formal";

function Dresscode(){

    return(
        <div className="container-dresscode_mesa-inv shadow">

        <div className='dresscode shadow'>
          <h3>Codigo de Vestimenta</h3>

          <div className="img-dresscode">
            <img src={ImgDresscode} alt='...' />
          </div>

          <p>{vestimenta}</p>
        </div>

        <div className="mesa-inv shadow">
          <h3>
            Mesa de regalos
          </h3>
        </div>
      </div>
    )
};

export default Dresscode;