import React, { useEffect } from 'react';

import Portada from "./components/modelo 3/portada";
import Mensaje from "./components/modelo 3/mensaje";
import Invitacion from "./components/modelo 3/invitacion";
import Pase from "./components/modelo 3/pase";
import Padres from "./components/modelo 3/padres";
import Padrinos from "./components/modelo 3/padrinos";
import MensajeDos from "./components/modelo 3/mensaje2";
import Galeria from "./components/modelo 3/galeria";
import Ubicacion from "./components/modelo 3/ubicacion";
import Itinerario from "./components/modelo 3/itinerario";
import Mesa from "./components/modelo 3/mesa";
import Vestimenta from "./components/modelo 3/vestimenta";
import Cancion from './components/modelo 2/cancion';
import Confirmacion from "./components/modelo 3/confirmacion";
import Desplazar from "../tools/desplazar";
// import Collage from "./components/modelo 3/collage";

function Invitaciones({ evento }) {
    useEffect(() => {
        if (evento.estilos) {
            const styles = evento.estilos;
            const styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            styleSheet.innerText = `
                :root {
                    --portada-titulo: ${styles.tituloPortada || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --portada-contenido: ${styles.contenidoPortada || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --alineamiento-mensaje: ${styles.alineamientoMensaje || 'center'};
                    --letras-mensaje: ${styles.letraMensaje || 'black'};
                }
            `;
            document.head.appendChild(styleSheet);

            return () => {
                document.head.removeChild(styleSheet);
            };
        }
    }, [evento.estilos]);

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
                <Mensaje 
                    evento={evento.evento}
                />
                <Invitacion 
                    fondo={evento.multimedia.galeria[0].url}
                    dia={evento.datos.dia}
                    lugar={evento.datos.lugar}
                    fecha={evento.datos.fecha}
                    evento={evento.evento}
                />
                <Pase 
                    evento={evento.evento}
                    invitado={evento.invitados}
                />
                <Padres 
                    evento={evento.evento}
                    padres={evento.datos.padres[0]}
                />
                <MensajeDos 
                    evento={evento.evento}
                />
                <Padrinos 
                    padrinos={evento.padrinos}
                />
                {evento?.multimedia?.carousel && evento.multimedia.carousel.length > 0 && (
                    <Galeria 
                        carousel={evento.multimedia.carousel}
                    />
                )} 
                <Vestimenta 
                    evento={evento.evento}
                />
                <Itinerario 
                    protocolo={evento.itinerario}
                />
                {evento?.mesaDeRegalos && evento.mesaDeRegalos.length > 0 && (
                    <Mesa />   
                )}
                <Ubicacion 
                    evento={evento.evento}
                />
                {/* <Collage /> */}
                <Confirmacion 
                    invitadoId={evento.invitados._id}
                    eventoId={evento._id}
                    fondo={evento.multimedia.fondos.tercero}
                />
            </div>
        </div>
    );
}

export default Invitaciones;
