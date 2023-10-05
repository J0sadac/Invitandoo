//imagen del codigo de vestimenta
//import ImgDresscode from "../../images/codigo de vestimenta.png";
//import ImgDresscodeSemiformal from "../../images/defde.avif";

//imagen de la mesa de regalos
//import ImgLogo from "../../images/liverpool.png";

//var vestimenta = "Semi-formal";

function Dresscode() {
  return (
    <div className="container-dresscode_mesa shadow">
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
              Vestido Largo
            </p>
          </div>
          <div>
          <p className="titulo">
              Hombres
            </p>
            <p>
              Ropa casual
            </p>
          </div>
        </div>

        
      </div>

      {/* <div className="mesa shadow">
        <h3>Mesa de regalos</h3>

        <div className="codigoRegalo">
          <img src={ImgLogo} alt="..." className="imgLogo" />

          <p>4152-537-6932</p>
        </div>
      </div> */}
    </div>
  );
}

export default Dresscode;
