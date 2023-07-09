import ImgCandyBar from "../../images/candy bar.jpg";
import ImgMesas from "../../images/mesas.jpg";
import ImgNovios from "../../images/novios.jpg"

function carrusel() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide carrusel carousel-fade"
        data-bs-ride="carousel"
      >

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ImgCandyBar} class="d-block w-100 img-carrusel" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ImgMesas} class="d-block w-100 img-carrusel" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ImgNovios} class="d-block w-100 img-carrusel" alt="..." />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default carrusel;
