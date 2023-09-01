//componentes
import Carousel from './inv component/carousel';
import Novios from './inv component/novios';
import Invitacion from './inv component/invitacion';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
import Confirmacion from './inv component/confirmacion';

function invitaciones() {

  return (
    <div>
      <Carousel />

      <Novios />

      <Invitacion />

      <Itinerario />
      
      <Dresscode />

      <Confirmacion />
    </div>
  );
}

export default invitaciones;
