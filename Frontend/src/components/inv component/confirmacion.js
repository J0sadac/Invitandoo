import ImgGoogleMaps from "../../multimedia/herramientas/google maps - referencia.png";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Confirmacion() {
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

  const actualizarAsistencia = (asistencia) => {
    const urlApi = `https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`;
    const data = {
      asistir: asistencia
    };
  
    fetch(urlApi, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al actualizar la propiedad "asistir".');
        }
      })
      .then(data => {
        setEvento({ ...evento, asistir: asistencia });
        console.log('Evento actualizado en el frontend:', evento); // Agregamos este console.log
  
        if (asistencia === 'asistire') {
          alert('¡Gracias por confirmar tu asistencia! Nos vemos en el evento.');
        } else if (asistencia === 'faltare') {
          alert('Lamentamos que no puedas asistir. Esperamos verte en otra ocasión.');
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud PUT:', error);
      });
  };
  
  
  return (
    <div className="container-maps_conf shadow">
    <div className="maps shadow">
      <p>Direccion en google maps</p>

      <div id="maps" className='caja-maps'>
          <img className="img-googlemaps" src={ImgGoogleMaps} alt="..." />
      </div>
    </div>

    <div className="confirmacion shadow">
        <p>Por favor, confirma tu asistencia</p>

        <div id="confirmacion" className='botones'>
          <button type='button' onClick={() => actualizarAsistencia("asistire")} className='si'>Asistiré</button>
          <button type='button' onClick={() => actualizarAsistencia("faltare")} className='no'>Faltaré</button>
        </div>
    </div>
  </div>
  );
}

export default Confirmacion;


