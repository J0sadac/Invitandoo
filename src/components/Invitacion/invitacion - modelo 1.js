//componentes
import Carousel from './components/modelo 1/carousel';
import Portada from './components/modelo 1/portada';
import Invitacion from './components/modelo 1/invitacion';
import Itinerario from './components/modelo 1/itinerario';
import Dresscode from './components/modelo 1/dresscode';
import Padrinos from './components/modelo 1/padrinos';
import Galeria from './components/modelo 1/galeria';
import Padres from './components/modelo 1/padres';

function Invitaciones({evento}) {
  
  return (
        <div className='container-invitaciones' style={{ backgroundImage: `url(${evento.multimedia.fondo.url})` }}>

          <Carousel
            foto={evento.multimedia.carousel} 
            frase={evento.frases}
          />
    
          <Portada 
            tipoDeEvento={evento.evento}
            imgPortada={evento.multimedia.portada}
            festejado={evento.datos.festejado}
            novios={evento.datos.novios}
          />

          {evento?.datos?.padres && evento.datos.padres.length > 0 && (
            <Padres 
              padres={evento.datos.padres}
              tipoDeEvento={evento.evento}
            />
          )}

          {evento?.datos?.padrinos && evento.datos.padrinos.length > 0 && (
            <Padrinos padrinos={evento.datos.padrinos} />
          )}

    
          <Invitacion 
            fecha={evento.datos.fecha}
            lugar={evento.datos.lugar}
            flor={evento.multimedia.flor}
            datos={evento.invitados}
          />

          {evento?.multimedia?.galeria && evento.multimedia.galeria.length > 0 && (
            <Galeria 
              foto={evento.multimedia.galeria}
            />
          )}

          {evento?.itinerario && (
            <Itinerario 
            datos={evento.itinerario}
          />
          )}
          
          <Dresscode 
            vestimenta={evento.vestimenta.mujer}
            mesa={evento.mesaDeRegalos}
          />
          
        </div>
  );
}

export default Invitaciones;
