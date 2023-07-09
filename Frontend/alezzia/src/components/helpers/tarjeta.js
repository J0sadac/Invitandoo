import ImgPred from '../../images/img-boda-pred.png';

function tarjeta() {
  return (
      <div class="card shadow">
        <img src={ImgPred} class="card-img-top card-img" alt="img predeterminada" />

        <div class="card-body">
          <h5 class="card-title">Titulo</h5>

          <p class="card-text">
            Texto de ejemplo para apreciar como se veria la descripcion del contenido de la tarjeta.
          </p>

          {/* <a href="." class="btn btn-primary">
            Go somewhere
          </a> */}
          {/* Boton con el enlace al sitio del que se hace referencia */}
        </div>
      </div>
  );
}

export default tarjeta;
