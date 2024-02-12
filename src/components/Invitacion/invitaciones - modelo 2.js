import Portada from './components/modelo 2/portada';
import Invitacion from './components/modelo 2/invitacion';
import Padres from './components/modelo 2/padres';
import Pase from './components/modelo 2/pase';
import Itinerario from './components/modelo 2/itinerario';
import Vestimenta from './components/modelo 2/vestimenta';
import Regalo from './components/modelo 2/regalo';



function Invitaciones () {

    return(
        <div className='modelo'>
            <Portada />
            <Invitacion />
            <Padres />
            <Pase />
            <div className='fondo1'>
                <p className='frase'>En tus ojos encuentro mi paz y mi felicidad.</p>
            </div>
            <Itinerario />
            <Vestimenta />
            <Regalo />
            <div className='fondo2'>
                <p className='frase'>Eres el amor de mi vida, mi compañero eterno.</p>
            </div>
        </div>
    )
}

export default Invitaciones;