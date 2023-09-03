import Img1 from '../../images/Inv-1.jpg';
import Img2 from '../../images/inv-3.jpg';
import Img3 from '../../images/inv-2.jpg';


var frase2="Dos almas, un solo destino.";
var frase3="Gracias por ser parte de nuestro día inolvidable.";

function Carousel(frase){

    return(
        <div id="carouselExampleAutoplaying" className="carousel carousel-fade slide inv-carousel" data-bs-ride="carousel">
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                {frase}
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                {frase2}
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100 inv-img" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5 className="inv-frase">
                {frase3}
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
};

export default Carousel;