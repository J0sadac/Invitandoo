//import icon from '../../../Home/icons/Icon instagram.png'
import iconBlack from '../../../Home/icons/icono - instagram black.png';

function Hashtag ({fondo, datos}) {

    return(
        <section className="hashtag">
            {fondo?.url && (
                <img loading="lazy" className="fondo" src={fondo.url} alt="..." />
            )}

            <p className="titulo">Hashtag</p>
            <p className='subtitulo'>¡Etiqueta y comparte!</p>

            <div className='content'>
                <img className='codigo' src={datos.codigo} alt='codigo QR' />

                <p className='hash'>{datos.hashtag}</p>

                <img className='icon' src={iconBlack} alt='insta' />
            </div>
        </section>
    )
}

export default Hashtag;