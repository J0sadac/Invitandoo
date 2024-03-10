import { useState } from "react";
import close from "../../../../multimedia/herramientas/x-lg.svg";
import open from "../../../../multimedia/herramientas/soundwave.svg";

function Cancion({ url }) {
  const [ventana, setVentana] = useState(true);

  const puerta = (estado) => {
    setVentana(estado);
  };

  return (
    <div className="reproductor">
        <div className={`${ventana ? "cancion" : "cerrado"}`} onClick={() => puerta(false)}>
            <div className="contenedor">
            <button className="cerrar" onClick={() => puerta(false)}>
                <img src={close} alt="..." className="icono" />
            </button>

            <div className="contenido">
                <p>¡Dale play!</p>
                <audio src={url} controls autoPlay/>
            </div>
            </div>
        </div>

        <div className={`${ventana === false ? "puerta" : "cerrado"}`}>
            <button className="abrir" onClick={() => puerta(true)}>
            <img src={open} alt="..." className="icono" />
            </button>
        </div>
    </div>
  );
}

export default Cancion;
