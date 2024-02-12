//componentes
import Carousel from '../../Invitacion/components/modelo 1/carousel';
import Portada from '../../Invitacion/components/modelo 1/portada';
import Invitacion from '../../Invitacion/components/modelo 1/invitacion';
import Itinerario from '../../Invitacion/components/modelo 1/itinerario';
import Dresscode from '../../Invitacion/components/modelo 1/dresscode';
import Padrinos from '../../Invitacion/components/modelo 1/padrinos';
import Galeria from '../../Invitacion/components/modelo 1/galeria';
import Padres from '../../Invitacion/components/modelo 1/padres';

function EditarInvitacion({inv}) {

  return (
    <div>
        <div className='container-invitaciones' style={{ backgroundImage: `url(${inv.multimedia.fondo.url})` }}>
            <Carousel
            foto={inv.multimedia.carousel} 
            frase={inv.frases}
            />

            <Portada 
            tipoDeEvento={inv.evento}
            imgPortada={inv.multimedia.portada}
            festejado={inv.datos.festejado}
            novios={inv.datos.novios}
            />

            {inv?.datos?.padres && (
            <Padres 
                padres={inv.datos.padres}
            />
            )}

            {inv?.datos?.padrinos && inv.datos.padrinos.length > 0 && (
            <Padrinos padrinos={inv.datos.padrinos} />
            )}


            {inv?.invitados && inv.invitados.length > 0 && (
                <Invitacion 
                fecha={inv.datos.fecha}
                lugar={inv.datos.lugar}
                flor={inv.multimedia.flor}
                datos={inv.invitados}
                />
            )}

            {inv?.multimedia?.galeria && inv.multimedia.galeria.length > 0 && (
            <Galeria 
                foto={inv.multimedia.galeria}
            />
            )}

            <Itinerario 
            datos={inv.itinerario}
            />

            <Dresscode 
            vestimenta={inv.vestimenta.mujer}
            mesa={inv.mesaDeRegalos}
            />

        </div>
    </div>
  );
}

export default EditarInvitacion;