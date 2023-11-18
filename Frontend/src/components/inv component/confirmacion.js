import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ImgGoogleMaps from "../../multimedia/herramientas/google maps - referencia.png";

function Confirmacion() {
  const { anfitrion, invitadoId } = useParams();
  const [confirmacion, setConfirmacion] = useState('');

  const actualizarAsistencia = (asistencia) => {
    const urlApi = `https://invitandoodb.onrender.com/eventos?anfitrion=${anfitrion}&invitadoId=${invitadoId}`;
    const data = {
      anfitrion,
      invitadoId,
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
          setConfirmacion(asistencia);
          if (asistencia === 'asistire') {
            alert('¡Gracias por confirmar tu asistencia! Nos vemos en el evento.');
          } else if (asistencia === 'faltare') {
            alert('Lamentamos que no puedas asistir. Esperamos verte en otra ocasión.');
          }
        } else {
          console.error('Error al actualizar la confirmación de asistencia.');
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud PUT:', error);
      });
  };

  return (
    <div className="container-maps_conf shadow">
      <div className="maps shadow">
        <p className="title">Ubicacion</p>

        <div id="maps" className='caja-maps'>
          <img className="img-googlemaps" src={ImgGoogleMaps} alt="..." />
        </div>
      </div>

      <div className="confirmacion shadow">
        <p className="title">Confirma tu asistencia</p>
        <div id="confirmacion" className='botones'>
          <button type='button' onClick={() => actualizarAsistencia("asistire")} className='si'>Asistiré</button>
          <button type='button' onClick={() => actualizarAsistencia("faltare")} className='no'>Faltaré</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmacion;
