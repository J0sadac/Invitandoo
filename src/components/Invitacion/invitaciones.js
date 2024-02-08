import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

import axios from 'axios';

//componentes
import Carousel from './components/carousel';
import Portada from './components/portada';
import Invitacion from './components/invitacion';
import Itinerario from './components/itinerario';
import Dresscode from './components/dresscode';
import Padrinos from './components/padrinos';
import Galeria from './components/galeria';
import Padres from './components/padres';
import Confirmacion from './components/confirmacion';

import AlertaConReproductor from '../tools/cancion/alertaReproductor';

function Invitaciones() {
  const {eventoId, invitadoId} = useParams();
  const [evento, setEvento] = useState();

  useEffect(() => {

    const getInvitacion = async () => {
      try{
        const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
      
        setEvento(res.data);

      }catch(err){
        console.log(err)
      }
    };

    getInvitacion();

  },[eventoId, invitadoId])

  console.log(evento)

  return (
    <div>
      {evento ? (
        <div className='container-invitaciones' style={{ backgroundImage: `url(${evento.multimedia.fondo.url})` }}>

          <AlertaConReproductor />

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

          <Confirmacion />

          
        </div>
      ):(
        <div className='loading'>
          <p>Cargando invitación</p>

          <div className="spinner-border spin" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <p>¡Por favor espere!</p>
        </div>
      )}
    </div>
  );
}

export default Invitaciones;
