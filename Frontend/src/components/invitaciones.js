import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

//componentes
import Carousel from './inv component/carousel';
import Portada from './inv component/portada';
import Invitacion from './inv component/invitacion';
import Itinerario from './inv component/itinerario';
import Dresscode from './inv component/dresscode';
//import Confirmacion from './inv component/confirmacion';
import ReproductorDeCancion from './helpers/cancion';
import Padrinos from './inv component/padrinos';


function Invitaciones() {
  const { anfitrion, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [anfitrion, invitadoId]);

  const fondoDinamico = (url) => {
    
    const urlDinamica = url.replace(/\//g, '-');

    return `fondo-${urlDinamica}`;
  };

  return (
    <div>
      {evento ? (
        <div className={fondoDinamico(evento.multimedia.fondo)}>
        <Carousel />
  
        <Portada />
  
        <Invitacion />
  
        <ReproductorDeCancion />
  
        <Itinerario />
  
        <Padrinos />
        
        <Dresscode />
  
        {/* <Confirmacion /> */}
      </div>
      ):(
        <p>
          Cargando...
        </p>
      )}
    </div>
  );
}

export default Invitaciones;
