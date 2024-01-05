import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

//componentes
import Carousel from './components/carousel';
import Portada from './components/portada';
import Invitacion from './components/invitacion';
import Itinerario from './components/itinerario';
import Dresscode from './components/dresscode';
//import Padrinos from './components/padrinos';
import Galeria from './components/galeria';
//import Padres from './components/padres';

import AlertaConReproductor from '../tools/cancion/alertaReproductor';

function Invitaciones() {
  const { eventoId, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
        console.log(eventoData)
      } catch (error) {
        console.log(error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);



  return (
    <div>
      {evento ? (
        <div className='container-invitaciones' style={{ backgroundImage: `url(${evento.multimedia.fondo.imageURL})` }}>

          <AlertaConReproductor />

          <Carousel />
    
          <Portada />

          {/* <Padres /> */}

          {/* <Padrinos /> */}
    
          <Invitacion />

          <Galeria />
    
          <Itinerario />
          
          <Dresscode />

          
        </div>
      ):(
        <div className='loading'>
          <p>Cargando</p>

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
