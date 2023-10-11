import ImgGoogleMaps from "../../images/google maps - referencia.png";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Confirmacion() {
  const { datoId } = useParams();
  const [datos, setDatos] = useState({ asistir: 'pendiente' });


  useEffect(() => {
    const urlApi = `https://invitandoodb.onrender.com/invitacion/${datoId}`;

    async function fetchApi() {
      try {
        const respuesta = await fetch(urlApi);
        const respuestaJson = await respuesta.json();
        setDatos(respuestaJson);
      } catch (error) {
        console.error('Error al recuperar datos de la API:', error);
      }
    }

    fetchApi();
  }, [datoId]);

  const actualizarAsistencia = (asistencia) => {
    const urlApi = `https://invitandoodb.onrender.com/invitacion/${datoId}`;
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
          setDatos({ ...datos, asistir: asistencia });
  
          if (asistencia === 'asistire') {
            alert('¡Gracias por confirmar tu asistencia! Nos vemos en el evento.');
          } else if (asistencia === 'faltare') {
            alert('Lamentamos que no puedas asistir. Esperamos verte en otra ocasión.');
          }
  
        } else {
          console.error('Error al actualizar la propiedad "asistir".');
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud PUT:', error);
      });
  };
  

  return(
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
)}

export default Confirmacion;