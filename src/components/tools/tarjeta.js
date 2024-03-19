import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import icon from '../../multimedia/herramientas/options-icon.svg';

function Tarjeta({evento, carousel, festejado, tipoDeEvento, i}) {

  const navigate = useNavigate();

  const[opciones, setOpciones] = useState(false);
  const optionRef = useRef(null);

  const puerta = (estado) => {
    setOpciones(estado);
  };

  useEffect(() => {
      function cerrar(event) {
          if (optionRef.current && !optionRef.current.contains(event.target)) {
              setOpciones(false);
          }
      };

      document.addEventListener('mousedown', cerrar);
      return () => {
          document.removeEventListener('mousedown', cerrar);
      };
  }, []);

  return (
          <div className='tarjeta-link'>
            <div className="card tarjeta">
              <img onClick={() => navigate(`/evento/${evento._id}/invitado/${evento.invitados[0]._id}`)} src={carousel[0].url} className="card-img-top portada" alt="Evento" />
              <div className="card-body descripcion">
                <h5 className="titulo">{festejado}</h5>
                <div className="contenedor">
                  <p className="texto">{tipoDeEvento}</p>

                  <div ref={optionRef} className={`${opciones ? 'opciones' : 'cerrado'}`}>
                    <Link to={`/invitados/${evento._id}`}>Invitados</Link>
                    <Link to={`/evento/editar/${evento._id}`}>Editar</Link>
                  </div>

                  <button className="opcion" onClick={() => puerta(true)}> 
                    <img src={icon} alt="..." />
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
}

export default Tarjeta;
