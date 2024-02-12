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
            <div className='fondo'></div>
            <Portada />
            <Invitacion />
            <Padres />
            <Itinerario />
            <Pase />
            <Vestimenta />
            <Regalo />
            <div className='fondo2'>
                <p className='frase'>Nos haría muy felices contar con su compañía 
                en este momento tan especial para nosotros. 
                Su presencia sería realmente especial. ¡NO FALTEN!</p>
            </div>
        </div>
    )
}

export default Invitaciones;