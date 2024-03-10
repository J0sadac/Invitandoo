import enlace from "../../../multimedia/herramientas/exportar.png";
import copiar from "../../../multimedia/herramientas/copiar.png";
import listo from "../../../multimedia/herramientas/copiado.png";
import eliminar from "../../../multimedia/herramientas/eliminar.png";

import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import axios from "axios";

function ListaDeInvitados({ invitados, eventoId }) {
  const [copiado, setCopiado] = useState(Array(invitados.length).fill(false));

  const confirmar = (index) => {
    setCopiado((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    setTimeout(() => {
      setCopiado((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 1000);
  };

  const eliminarInvitado = async (id) => {
    await axios.delete(
      `https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${id}`
    );
  };

  return (
    <>
      {invitados.de === "Novia" ? (
        <div className="lista card-body">
          <div className="titulo">
            <p>Lista de invitados de la</p>
            <p className="de">novia</p>
          </div>
          {invitados.map((datos, index) => (
            <div className="invitado" key={index}>
              <span className="nombre">{datos.invitado}</span>
              <button className="boton enlace">
                <Link to={`/evento/${eventoId}/invitado/${datos._id}`}>
                  <img className="icono" src={enlace} alt="..." />
                </Link>
              </button>
              <button
                className={`boton copiar ${copiado[index] ? "copiado" : ""}`}
                onClick={() => confirmar(index)}
              >
                <CopyToClipboard
                  text={`https://invitandoo.com/evento/${eventoId}/invitado/${datos._id}`}
                >
                  {copiado[index] ? (
                    <img className="icono" src={listo} alt="..." />
                  ) : (
                    <img className="icono" src={copiar} alt="..." />
                  )}
                </CopyToClipboard>
              </button>
              <button
                className="boton eliminar"
                onClick={() => eliminarInvitado(datos._id)}
              >
                <img className="icono" src={eliminar} alt="..." />
              </button>
            </div>
          ))}
        </div>
      ) : invitados.de === "Novio" ? (
        <div className="lista card-body">
          <div className="titulo">
            <p>Lista de invitados del</p>
            <p className="de">novio</p>
          </div>
          {invitados.map((datos, index) => (
            <div className="invitado" key={index}>
              <span className="nombre">{datos.invitado}</span>
              <button className="boton enlace">
                <Link to={`/evento/${eventoId}/invitado/${datos._id}`}>
                  <img className="icono" src={enlace} alt="..." />
                </Link>
              </button>
              <button
                className={`boton copiar ${copiado[index] ? "copiado" : ""}`}
                onClick={() => confirmar(index)}
              >
                <CopyToClipboard
                  text={`https://invitandoo.com/evento/${eventoId}/invitado/${datos._id}`}
                >
                  {copiado[index] ? (
                    <img className="icono" src={listo} alt="..." />
                  ) : (
                    <img className="icono" src={copiar} alt="..." />
                  )}
                </CopyToClipboard>
              </button>
              <button
                className="boton eliminar"
                onClick={() => eliminarInvitado(datos._id)}
              >
                <img className="icono" src={eliminar} alt="..." />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="lista card-body">
          <div className="titulo">Lista de invitados</div>
          {invitados.map((datos, index) => (
            <div className="invitado" key={index}>
              <span className="nombre">{datos.invitado}</span>
              <button className="boton enlace">
                <Link to={`/evento/${eventoId}/invitado/${datos._id}`}>
                  <img className="icono" src={enlace} alt="..." />
                </Link>
              </button>
              <button
                className={`boton copiar ${copiado[index] ? "copiado" : ""}`}
                onClick={() => confirmar(index)}
              >
                <CopyToClipboard
                  text={`https://invitandoo.com/evento/${eventoId}/invitado/${datos._id}`}
                >
                  {copiado[index] ? (
                    <img className="icono" src={listo} alt="..." />
                  ) : (
                    <img className="icono" src={copiar} alt="..." />
                  )}
                </CopyToClipboard>
              </button>
              <button
                className="boton eliminar"
                onClick={() => eliminarInvitado(datos._id)}
              >
                <img className="icono" src={eliminar} alt="..." />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ListaDeInvitados;
