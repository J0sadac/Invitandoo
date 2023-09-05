//componentes
import Carousel from './inv component/carousel';
import Novios from './inv component/novios';
import Invitacion from './inv component/invitacion';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
import Confirmacion from './inv component/confirmacion';

//importacion de imagines del Carousel
import ImgCar1 from '../images/Inv-1.jpg';
import ImgCar2 from '../images/inv-3.jpg';
import ImgCar3 from '../images/inv-2.jpg';

//Importacion de imagenes para la seccion de novios
import ImgNovio from '../images/novio-icon.png';
import ImgNovia from '../images/novia-icon.png';


//Variables del Carousel
var fraseCarousel=[
  "Comienza nuestra historia de amor.",
  "Dos almas, un solo destino.",
  "Gracias por ser parte de nuestro día inolvidable."
];

var imgCarousel = [
  ImgCar1,
  ImgCar2,
  ImgCar3
];


//Variables de la seecion "novios"
var nombreNovios = {
  novio: "Daniel",
  novia: "Jazmin"
};

var imgNovios = [
  ImgNovio,
  ImgNovia
]

function invitaciones() {

  return (
    <div>
      <Carousel 
        frase={fraseCarousel}
        imagen={imgCarousel} />

      <Novios 
        nombres={nombreNovios}
        imagen={imgNovios}/>

      <Invitacion />

      <Itinerario />
      
      <Dresscode />

      <Confirmacion />
    </div>
  );
}

export default invitaciones;
