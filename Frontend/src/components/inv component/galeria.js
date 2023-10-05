function Galeria({ imagen }) {
    return (
     <div id="carouselExampleInterval" class="carousel slide inv-carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
            <img src={imagen[0]} class="d-block w-100 inv-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3500">
            <img src={imagen[1]} class="d-block w-100 inv-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3500">
            <img src={imagen[2]} class="d-block w-100 inv-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3500">
            <img src={imagen[3]} class="d-block w-100 inv-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3500">
            <img src={imagen[4]} class="d-block w-100 inv-img" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    );
  }
  
  export default Galeria;