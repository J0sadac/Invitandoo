import invitandoo from './icons/Icon Invitandoo.png';
import facebook from './icons/Icon facebook.png';
import instagram from './icons/Icon instagram.png';
import tiktok from './icons/Icon tiktok.png';
import whatsapp from './icons/Icon whatsapp.png';

function Footer(){

    return(
        <footer className='footer'>
            <div className='contenedor'>
                <div className='negocio'>
                    <img src={invitandoo} className='logo' alt='Logo Invitandoo'/>
                    <h2 className='logotipo'>Invitandoo</h2>
                    <p className='eslogan'>¡Comienza en grande!</p>
                </div>

                <div className='indice'>
                    <p className='seccion'>Sobre nosotros</p>
                    <p className='seccion'>Paquetes</p>
                    <p className='seccion'>Galería</p>
                    <p className='seccion'>Contacto</p>
                </div>

                <div className='contacto'>
                    <div className='email'>
                        <input className='texto' placeholder='Introduce tu correo electronico' />
                    </div>
                    <div className='redes'>
                        <img src={facebook} className='icono' alt='facebook' />
                        <img src={instagram} className='icono' alt='instagram' />
                        <img src={tiktok} className='icono' alt='tiktok' />
                        <img src={whatsapp} className='icono' alt='whatsapp' />
                    </div>
                </div>
            </div>

            <p className='copi'>
                Invitandoo. Todos los derechos reservados. 2024.
            </p>
        </footer>
    )
}

export default Footer