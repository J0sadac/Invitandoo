
function Galeria({foto}) {
 
    return (
      <div id="carouselExampleInterval" className="carousel slide inv-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {foto.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3500">
            <img src={img.url} className="d-block w-100 inv-img" alt={`Slide ${index + 1}`} />
          </div>
        ))}
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