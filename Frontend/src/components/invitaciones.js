//import { useParams } from 'react-router-dom';

//componentes
import Carousel from './inv component/carousel';
import Novios from './inv component/novios';
import Invitacion from './inv component/invitacion';
import Galeria from './inv component/galeria';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
import Confirmacion from './inv component/confirmacion';

//importacion de imagines del Carousel
import ImgCar1 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img09.jpg';
import ImgCar2 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img08.jpg';
import ImgCar3 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img07.jpg';
import ImgCar4 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img06.jpg';
import ImgCar5 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img05.jpg';
import ImgCar6 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img04.jpg';

//importacion de imagines del Carousel
import ImgCar7 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img01.jpg';
import ImgCar9 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img03.jpg';
import ImgCar10 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img10.jpg';
import ImgCar11 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img11.jpg';
import ImgCar12 from '../images/Boda - Ana y Angel/Boda - Ana y Angel - img12.jpg';

//Importacion de imagenes para la seccion de novios
import ImgNovio from '../images/Boda - Ana y Angel/Boda - Ana y Angel - Angel.jpg';
import ImgNovia from '../images/Boda - Ana y Angel/Boda - Ana y Angel - Ana.jpg';


//Variables del Carousel
var fraseCarousel=[
  "Comienza nuestra historia de amor.",
  "Dos almas, un solo destino.",
  "Contigo, todo es posible. ¿Te unes a mí para siempre?",
  "En el amor, encontramos nuestra alegría.",
  "Nuestro amor es un cuento que nunca termina.",
  "Eres mi sol en días lluviosos. ¿Quieres ser mi esposa?"

];

var imgCarousel = [
  ImgCar1,
  ImgCar2,
  ImgCar3,
  ImgCar4,
  ImgCar5,
  ImgCar6
];

//Variables del Carousel
var imgGaleria = [
  ImgCar7,
  ImgCar9,
  ImgCar10,
  ImgCar11,
  ImgCar12
];


//Variables de la seecion "novios"
var nombreNovios = {
  novio: "Angel",
  novia: "Ana"
};

var imgNovios = [
  ImgNovio,
  ImgNovia
]

function Invitaciones() {
  //const {id} = useParams();

  return (
    <div>
      <Carousel 
        frase={fraseCarousel}
        imagen={imgCarousel} />

      <Novios 
        nombres={nombreNovios}
        imagen={imgNovios}/>

      <Invitacion />

      <Galeria 
        imagen={imgGaleria} />

      <Itinerario />
      
      <Dresscode />

      <Confirmacion />
    </div>
  );
}

export default Invitaciones;
