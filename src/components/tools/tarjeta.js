import { Link, useNavigate } from "react-router-dom";

function Tarjeta({evento, carousel, festejado, tipoDeEvento, i}) {

  const history = useNavigate();

  return (
          <div className='tarjeta-link'>
            <div className="card tarjeta">
              <img onClick={() => history(`/evento/${evento._id}/invitado/${evento.invitados[0]._id}`)} src={carousel[0].url} className="card-img-top portada" alt="Evento" />
              <div className="card-body descripcion">
                <h5 className="titulo">{festejado}</h5>
                <div className="contenedor">
                  <p className="texto">{tipoDeEvento}</p>
                  <Link to={`/mi-evento/editar/${evento._id}`}>
                    <button className="btn editar">
                        +
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  );
}

export default Tarjeta;
