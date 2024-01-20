function Carousel({foto, frase}) {

  return (
    <div id="carouselExampleAutoplaying" className="carousel carousel-fade slide inv-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {foto.map((imagen, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
  
      <div className="carousel-inner">
        {foto.map((imagen, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={imagen.imageURL} className="d-block w-100 inv-img" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">{frase[index]}</h5>
            </div>
          </div>
        ))}
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

export default Carousel;
