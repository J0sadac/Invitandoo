import Footer from '../footer';
import Boda from './components/boda';

import portada from '../Home/icons/inspiracion.png'


function Inspiracion(){

    return(
        <>
            <section className="inspiracion">
                <img className='portada' src={portada} alt='inspiracion' />
                           
                <p className='spot'>
                    Explora nuestra galería y encuentra la inspiración para crear 
                    la invitación perfecta que hará que tu día especial sea aún 
                    más memorable.
                </p>

                <Boda />
            </section>
        
            <Footer />
        </>
    )
}

export default Inspiracion;