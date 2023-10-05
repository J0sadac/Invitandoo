function Galeria({ imagen }) {
    return (
      <div
        id="carouselExampleAutoplaying"
        className="carousel carousel-fade slide inv-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
  
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
  
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
  
        </div>
  
        <div className="carousel-inner">
  
          <div className="carousel-item active">
            <img src={imagen[0]} className="d-block w-100 inv-img" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={imagen[1]} className="d-block w-100 inv-img" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={imagen[2]} className="d-block w-100 inv-img" alt="..." />
            
          </div>
          
          <div className="carousel-item">
            <img src={imagen[3]} className="d-block w-100 inv-img" alt="..." />
            
          </div>
  
          <div className="carousel-item">
            <img src={imagen[4]} className="d-block w-100 inv-img" alt="..." />
            
          </div>
        
        </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Galeria;