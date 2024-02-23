import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

import axios from 'axios';

//componentes
import Carousel from './components/modelo 1/carousel';
import Portada from './components/modelo 1/portada';
import Invitacion from './components/modelo 1/invitacion';
import Itinerario from './components/modelo 1/itinerario';
import Dresscode from './components/modelo 1/dresscode';
import Padrinos from './components/modelo 1/padrinos';
import Galeria from './components/modelo 1/galeria';
import Padres from './components/modelo 1/padres';
import Confirmacion from './components/modelo 1/confirmacion';

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

  },[eventoId, invitadoId]);

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
