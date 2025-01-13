import Portada from "./components/modelo 2/portada";
import Invitacion from "./components/modelo 2/invitacion";
import Padres from "./components/modelo 2/padres";
import Pase from "./components/modelo 2/pase";
import Itinerario from "./components/modelo 2/itinerario";
import Vestimenta from "./components/modelo 2/vestimenta";
import Regalo from "./components/modelo 2/regalo";
import Imagen from "./components/modelo 2/imagen";
import Confirmacion from "./components/modelo 2/confirmacion";
import Ubicacion from "./components/modelo 2/ubicacion";
import Cancion from "./components/modelo 2/cancion";
import Carousel from "./components/modelo 2/carousel";

function Invitaciones({ evento }) {
  return (
    <div className="modeloDos">
      <div
        className="fondo"
        style={{ backgroundImage: `url(${evento.multimedia.fondo.url})` }}
      ></div>

      <Cancion 
        url={evento.multimedia.cancion.url} 
      />

      <Portada
        novios={evento.datos.novios}
        portada={evento.multimedia.portada}
      />

      <Padres padres={evento.datos.padres} />
      
      <Invitacion
        lugar={evento.datos.lugar}
        fecha={evento.datos.fecha}
        dia={evento.datos.dia}
        festejado={evento.datos.festejado}
      />

      <Pase invitado={evento.invitados} />

      {evento?.multimedia?.carousel.length > 0 && (
        <Carousel imagenes={evento.multimedia.carousel} />
      )}

        {evento?.itinerario?.length > 0 && (
            <Itinerario itinerario={evento.itinerario} />
        )}

      {evento?.vestimenta?.mujer && (
        <Vestimenta vestimenta={evento.vestimenta} />
      )}

      <Regalo regalo={evento.mesaDeRegalos} />

      <Confirmacion
        nombre={evento.datos.contacto.nombre}
        telefono={evento.datos.contacto.telefono}
      />

      <Ubicacion gps={evento.ubicacion} />

      <Imagen frase={evento.frases} portada={evento.multimedia.portada} />
    </div>
  );
}

export default Invitaciones;
