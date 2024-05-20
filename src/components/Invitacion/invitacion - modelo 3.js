import Portada from "./components/modelo 3/portada";
import Mensaje from "./components/modelo 3/mensaje";
import Invitacion from "./components/modelo 3/invitacion";
import Pase from "./components/modelo 3/pase";
import Padres from "./components/modelo 3/padres";
import Padrinos from "./components/modelo 3/padrinos";
import MensajeDos from "./components/modelo 3/mensaje2";
//import Galeria from "./components/modelo 3/galeria";
import Ubicacion from "./components/modelo 3/ubicacion";
import Itinerario from "./components/modelo 3/itinerario";
import Mesa from "./components/modelo 3/mesa";
import Vestimenta from "./components/modelo 3/vestimenta";
import Cancion from './components/modelo 2/cancion';
//import Collage from "./components/modelo 3/collage";

function Invitaciones ({evento}) {

    return(
        <div className="modelo3">
            <Portada />
            <Cancion 
                url={evento.multimedia.cancion.url}
            />
            <div className="caja">
                <Mensaje />
                <Invitacion />
                <Pase 
                    invitado={evento.invitados}
                />
                <Padres />
                <MensajeDos />
                <Padrinos />
                {/* <Galeria /> */}
                <Vestimenta />
                <Itinerario />
                <Mesa />
                <Ubicacion />
                {/* <Collage /> */}
            </div>
        </div>
    )
};

export default Invitaciones;