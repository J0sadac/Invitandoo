function Galeria({ imagen }) {
    return (
     <div id="carouselExampleInterval" className="carousel slide inv-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
            <img src={imagen[0]} className="d-block w-100 inv-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3500">
            <img src={imagen[1]} className="d-block w-100 inv-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3500">
            <img src={imagen[2]} className="d-block w-100 inv-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3500">
            <img src={imagen[3]} className="d-block w-100 inv-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3500">
            <img src={imagen[4]} className="d-block w-100 inv-img" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
  }
  
  export default Galeria;