import ImgNovio from '../../images/novio-icon.png';
import ImgNovia from '../../images/novia-icon.png';

var novio= "Daniel";
var novia= "Jazmin";

function Novios(){

    return(
        <div className='container-nov shadow'>
        <div className='img-nov shadow'>
          <img src={ImgNovio} alt='...' />
        </div>
        
        <p>{novio}</p>
        <p>&</p>
        <p>{novia}</p>

        <div className='img-nov shadow'>
          <img src={ImgNovia} alt='...' />
        </div>
        </div>
    )
};

export default Novios;