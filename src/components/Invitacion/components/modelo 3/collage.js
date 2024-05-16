import img1 from '../../../../multimedia/Fotos - Veronica/collage-1.jpg';
import img2 from '../../../../multimedia/Fotos - Veronica/collage-2.jpg';
import img3 from '../../../../multimedia/Fotos - Veronica/collage-3.jpg';
import img4 from '../../../../multimedia/Fotos - Veronica/collage-4.jpg';
import img5 from '../../../../multimedia/Fotos - Veronica/collage-5.jpg';
import img6 from '../../../../multimedia/Fotos - Veronica/collage-6.jpg';

function Collage () {

    return(
        <section className="collage">
            <p className="titulo">Collage</p>
            <div className='contenedor'>
                <img className="img uno" src={img1} alt="..." />
                <img className="img dos" src={img2} alt="..." />
                <img className="img tres" src={img3} alt="..." />
                <img className="img cuatro" src={img4} alt="..." />
                <img className="img cinco" src={img5} alt="..." />
                <img className="img seis" src={img6} alt="..." />
            </div>
        </section>
    );
};

export default Collage;