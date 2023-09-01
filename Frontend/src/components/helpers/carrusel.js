import ImgCandyBar from "../../images/candy bar.jpg";
import ImgMesas from "../../images/mesas.jpg";
import ImgNovios from "../../images/novios.jpg"

function carrusel() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carrusel carousel-fade"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ImgCandyBar} className="d-block w-100 img-carrusel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ImgMesas} className="d-block w-100 img-carrusel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ImgNovios} className="d-block w-100 img-carrusel" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default carrusel;
