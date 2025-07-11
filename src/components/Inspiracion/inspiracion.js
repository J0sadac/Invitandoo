import { Outlet } from 'react-router-dom';

import Footer from '../footer';

import portada from '../Home/icons/inspiracion.png'


function Inspiracion(){

    return(
        <>
            <section id='invitaciones' className="inspiracion">
                <img className='portada' src={portada} alt='inspiracion' />
                           
                <p className='spot'>
                    Explora nuestra galería y encuentra la inspiración para crear 
                    la invitación perfecta que hará que tu día especial sea aún 
                    más memorable.
                </p>

                <Outlet />

            </section>
        
            <Footer />
        </>
    )
}

export default Inspiracion;