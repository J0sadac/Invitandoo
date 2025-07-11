import { useState, useEffect } from 'react';

import img1 from '../../../multimedia/portadas/portada 1.jpg';
import img2 from '../../../multimedia/portadas/portada 2.jpg';
import img3 from '../../../multimedia/portadas/portada 3.jpg';
import img4 from '../../../multimedia/portadas/portada 4.jpg';
import img5 from '../../../multimedia/portadas/portada 5.jpg';
import img6 from '../../../multimedia/portadas/portada 6.jpg';
import img7 from '../../../multimedia/portadas/portada 7.jpg';
import img8 from '../../../multimedia/portadas/portada 8.jpg';
import img9 from '../../../multimedia/portadas/portada 9.jpg';
import img10 from '../../../multimedia/portadas/portada 10.jpg';
import img11 from '../../../multimedia/portadas/portada 11.jpg';
import img12 from '../../../multimedia/portadas/portada 12.jpg';
import img13 from '../../../multimedia/portadas/portada 13.jpg';
import img14 from '../../../multimedia/portadas/portada 14.jpg';
import img15 from '../../../multimedia/portadas/portada 15.jpg';
import img16 from '../../../multimedia/portadas/portada 16.jpg';
import img17 from '../../../multimedia/portadas/portada 17.jpg';
import img18 from '../../../multimedia/portadas/portada 18.jpg';

function Portada(){

    const images = [img1, img2, img3, img4, img5, 
                    img6, img7, img8, img9, img10,
                    img11, img12, img13, img14, img15,
                    img16, img17, img18
                ];
                
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 6000);
        return () => clearInterval(interval);
    });


    const goToNext = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return(
        <section id='portada' className='portada'>
            <img
                src={images[index]}
                alt={`slide ${index + 1}`}
                className="fondo"
            />

            <div className="carousel">
                <img
                    src={images[index]}
                    alt={`slide ${index + 1}`}
                    className="carousel-image"
                />
            </div>

            <div className='informacion'>
                <h1 className='titulo'>
                    Crea invitaciones digitales inolvidables
                </h1>
                <h2 className='subtitulo'>
                    Gestiona fácilmente y personaliza tu próximo evento. ¡Hazlo memorable!
                </h2>
                <button className='contacto'>
                    <a
                        href="https://wa.me/529615876932?text=¿Me%20puedes%20proporcionar%20mas%20información%20de%20las%20invitaciones%20digitales?"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CONTACTO
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Portada;