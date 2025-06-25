import { useNavigate } from 'react-router-dom';

import img from '../icons/inspiracion.png';
import icono from '../icons/curva horizontal.png';
import vtcl from '../icons/curva vertical.png';
import boda from '../icons/invitacion boda.png';
import xv from '../icons/invitacion xv.png';

function Inspiracion(){
    const navigate = useNavigate();

    const changePage = (ruta) =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/inspiracion/${ruta}`)
    };

    return(
        <section className="inspiracion">
            <div className='fondo'>
                <img src={img} className='img' alt='inspiracion Invitandoo' />
                <span className='titulo'>
                    ¿Quieres un poco de inspiración?
                </span>
            </div>

            <div className='contenedor'>
                <p className='parrafo'>
                    Explora nuestra galería y encuentra la inspiración para crear la invitación 
                    perfecta que hará que tu día especial sea aún más memorable.
                </p>

                <img src={icono} className='icono' alt='icono horizontal' />

                <div className='secciones'>
                    <div className='anuncios'>
                        <p className='encabezado'>¿Te vas a casar?</p>
                        <p className='texto'>
                            Descubre diseños que capturan la esencia del amor y la celebración, 
                            perfectos para hacer tu día especial inolvidable.
                        </p>
                    </div>
                    <div className='evento'>
                        <img className='foto' src={boda} alt='invitacion boda' />
                        <button onClick={() => changePage('boda')} className='boton'>Boda</button>
                    </div>

                    <img className='vertical' src={vtcl} alt='icono vertical' />

                    <div className='anuncios'>
                        <p className='encabezado'>Hazlo a tu estilo</p>
                        <p className='texto'>
                            Refleja la alegría y emoción de este momento especial. 
                            Explora nuestros diseños que harán que tu celebración sea única y memorable.
                        </p>
                    </div>

                    <div className='evento'>
                        <img className='foto' src={xv} alt='invitacion XV años' />
                        <button onClick={() => changePage('xv')} className='boton'>XV Años</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inspiracion;