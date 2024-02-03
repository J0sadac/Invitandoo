import {useState} from 'react';

function Dresscode({vestimenta, mesa}) {
  
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="container-dresscode_mesa shadow">
      <div className="dresscode shadow">
        <h3>Codigo de Vestimenta</h3>

        <div>
          <div>
            <p className="titulo">
              Hombres y Mujeres
            </p>
            <p>
              {vestimenta}
            </p>
          </div>
        </div>

      </div>

      <div className={`mesa shadow ${showExplanation ? 'flip' : ''}`}>

        <div className={`mesaDeRegalos ${showExplanation ? 'hidden' : ''}`}>
          <h3>Mesa de regalos</h3>

          <div className="codigoRegalo">
            <img src={mesa[0].icono} alt="..." className="imgLogo" />

            <p>{mesa[0].modalidad}: {mesa[0].codigo}</p>
          </div>
        </div>

        <div className={`explicacion ${showExplanation ? 'visible' : ''}`}>
          <h3>{mesa[0].modalidad}: {mesa[0].codigo}</h3>
          <p>
            {mesa[0].explicacion}
          </p>
        </div>

        <button className="explicacion-button" onClick={toggleExplanation}>
          {showExplanation ? '➜' : '¿Qué es?'}
        </button>

      </div>

    </div> 
  );
}

export default Dresscode;
