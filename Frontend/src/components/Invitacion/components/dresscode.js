import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Dresscode() {
  const { eventoId, invitadoId } = useParams();
  const [evento, setEvento] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    async function fetchEvento() {
      try {
        const eventoResponse = await fetch(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);
        const eventoData = await eventoResponse.json();
        setEvento(eventoData);
      } catch (error) {
        console.error('Error al recuperar datos del evento:', error);
      }
    }

    fetchEvento();
  }, [eventoId, invitadoId]);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };


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
                Hombres y Mujeres
              </p>
              <p>
                {evento.vestimenta.mujer}
              </p>
            </div>
          </div>

        </div>
       ) : (
        <div className="spinner-border spin" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       )}

       {evento ? (
        <div className={`mesa shadow ${showExplanation ? 'flip' : ''}`}>

          <div className={`mesaDeRegalos ${showExplanation ? 'hidden' : ''}`}>
            <h3>Mesa de regalos</h3>

            <div className="codigoRegalo">
              <img src={evento.mesaDeRegalos[0].icono} alt="..." className="imgLogo" />

              <p>{evento.mesaDeRegalos[0].modalidad}: {evento.mesaDeRegalos[0].codigo}</p>
            </div>
          </div>

          <div className={`explicacion ${showExplanation ? 'visible' : ''}`}>
            <h3>{evento.mesaDeRegalos[0].modalidad}: {evento.mesaDeRegalos[0].codigo}</h3>
            <p>
            {evento.mesaDeRegalos[0].explicacion}
            </p>
          </div>

          <button className="explicacion-button" onClick={toggleExplanation}>
            {showExplanation ? '➜' : '¿Qué es?'}
          </button>

      </div>
       ) : (
        <div className="spinner-border spin" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       )}

    </div> 
  );
}

export default Dresscode;
