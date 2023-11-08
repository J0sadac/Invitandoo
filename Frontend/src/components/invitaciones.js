//import { useParams } from 'react-router-dom';

//componentes
import Carousel from './inv component/carousel';
import Novios from './inv component/novios';
import Invitacion from './inv component/invitacion';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
import Confirmacion from './inv component/confirmacion';
import ReproductorDeCancion from './helpers/cancion';


function Invitaciones() {
  //const {id} = useParams();

  return (
    <div>
      <Carousel />

      <Novios />

      <Invitacion />

      <ReproductorDeCancion />

      <Itinerario />
      
      <Dresscode />

      <Confirmacion />
    </div>
  );
}

export default Invitaciones;
