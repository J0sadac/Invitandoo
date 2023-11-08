import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Liverpool from '../../images/liverpool.png'

function Dresscode() {
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

  return (
    
    <div className="container-dresscode_mesa shadow">
       {evento ? (
        <div className="dresscode shadow">
          <h3>Codigo de Vestimenta</h3>

      {/* <div className="img-dresscode">
            <img src={ImgDresscodeSemiformal} alt="..." />
          </div> */}

          <div>
            <div>
              <p className="titulo">
                Mujeres
              </p>
              <p>
                {evento.codigoDeVestimenta.mujer}
              </p>
            </div>
            <div>
            <p className="titulo">
                Hombres
              </p>
              <p>
              {evento.codigoDeVestimenta.hombre}
              </p>
            </div>
          </div>

        </div>
       ) : (
        <p>Cargando...</p>
       )}

       {evento ? (
        <div className="mesa shadow">
          <h3>Mesa de regalos</h3>

          <div className="codigoRegalo">
            <img src={Liverpool} alt="..." className="imgLogo" />

            <p>{evento.datos.mesaDeRegalos}</p>
          </div>
      </div>
       ) : (
        <p>Cargando...</p>
       )}

  
         
    </div>
      
  );
}

export default Dresscode;
