//imagen del codigo de vestimenta
import ImgDresscode from "../../images/codigo de vestimenta.png";

//imagen de la mesa de regalos
import ImgLogo from "../../images/liverpool.png";

var vestimenta = "Semi-formal";

function Dresscode() {
  return (
    <div className="container-dresscode_mesa shadow">
      <div className="dresscode shadow">
        <h3>Codigo de Vestimenta</h3>

        <div className="img-dresscode">
          <img src={ImgDresscode} alt="..." />
        </div>

        <p>{vestimenta}</p>
      </div>

      <div className="mesa shadow">
        <h3>Mesa de regalos</h3>

        <div className="codigoRegalo">
          <img src={ImgLogo} alt="..." className="imgLogo" />

          <p>4152-537-6932</p>
        </div>
      </div>
    </div>
  );
}

export default Dresscode;
