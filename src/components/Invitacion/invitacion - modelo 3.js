//import React, { useEffect } from 'react';

import Portada from "./components/modelo 3/portada";
import Mensaje from "./components/modelo 3/mensaje";
import Invitacion from "./components/modelo 3/invitacion";
import Pase from "./components/modelo 3/pase";
import Padres from "./components/modelo 3/padres";
import Padrinos from "./components/modelo 3/padrinos";
import MensajeDos from "./components/modelo 3/mensaje2";
// import Galeria from "./components/modelo 3/galeria";
import Ubicacion from "./components/modelo 3/ubicacion";
import Itinerario from "./components/modelo 3/itinerario";
import Mesa from "./components/modelo 3/mesa";
import Vestimenta from "./components/modelo 3/vestimenta";
import Cancion from './components/modelo 2/cancion';
import Confirmacion from "./components/modelo 3/confirmacion";
import Desplazar from "../tools/desplazar";
// import Collage from "./components/modelo 3/collage";

function Invitaciones({ evento }) {
    // useEffect(() => {
    //     const styles = evento.estilos;
    //     const styleSheet = document.createElement('style');
    //     styleSheet.type = 'text/css';
    //     styleSheet.innerText = `
    //         :root {
    //             --portada-titulo: ${styles.tituloPortada};
    //             --portada-contenido: ${styles.contenidoPortada};
    //         }
    //     `;
    //     document.head.appendChild(styleSheet);

    //     return () => {
    //         document.head.removeChild(styleSheet);
    //     };
    // }, [evento.estilos]);

    return (
        <div className="modelo3">
            <Portada 
                evento={evento.evento}
                festejado={evento.datos.festejado}
                foto={evento.multimedia.portada[0].url}
            />
            <Cancion 
                url={evento.multimedia.cancion.url}
            />
            <Desplazar />
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
                <Confirmacion 
                    invitadoId={evento.invitados._id}
                    eventoId={evento._id}
                />
            </div>
        </div>
    );
}

export default Invitaciones;
