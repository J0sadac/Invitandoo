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
import Frases from './components/modelo 3/frase';
import Collage from "./components/modelo 3/collage";
import Condiciones from './components/modelo 3/condiciones';

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
                    --letras-pase: ${styles.letraPase || 'white'};
                    --letras-ubicacion: ${styles.letraUbicacion || 'rgb(201, 147, 9)'};
                    --color-padit: ${styles.colorPadit || 'rgb(201, 147, 9)'};
                    --color-padres: ${styles.colorPadres || 'linear-gradient(to left, rgb(180, 159, 105), rgb(211, 178, 95), rgb(185, 155, 80), rgb(137, 103, 16), rgb(150, 127, 70), rgb(211, 178, 95), rgb(180, 159, 105));'};
                    --color-confirmar: ${styles.colorConfirmacion || 'white'};
                    --color-galeria: ${styles.estilosGaleria.color || 'rgb(201, 147, 9)'};
                    --color-invitacion: ${styles.estilosInvitacion.color || 'white'};
                    --contenido-padres: ${styles.contenidoPadres || 'white'};
                    --letras-vestimenta: ${styles.letrasVestimenta || 'black'}
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
                foto={evento.multimedia.portada[0]}
            />
            <Cancion 
                url={evento.multimedia.cancion.url}
            />
            <Desplazar />
            <div className="caja">
                <Padres 
                    evento={evento.evento}
                    datos={evento.datos}
                    festejado={evento.datos.festejado}
                    fondo={evento.multimedia.fondos.segundo}
                />
                <Invitacion 
                    fondo={evento.estilos.estilosInvitacion.fondo}
                    dia={evento.datos.dia}
                    lugar={evento.datos.lugar}
                    fecha={evento.datos.fecha}
                    evento={evento.evento}
                    festejado={evento.datos.festejado}
                />
                {evento.confirmaciones.frases === true &&(
                    <Frases
                        evento={evento.evento}
                        fondo={evento.multimedia.fondos.primero}
                    />
                )}
                <Padrinos 
                    padrinos={evento.padrinos}
                    fondo={evento.multimedia.fondos.segundo}
                />
                <MensajeDos 
                    evento={evento.evento}
                    fondo={evento.multimedia.fondos.primero}
                    festejado={evento.datos.festejado}
                />
                {evento?.multimedia?.carousel && evento.multimedia.carousel.length > 1 && (
                    <Galeria 
                        carousel={evento.multimedia.carousel}
                        fondo={evento.estilos.estilosGaleria.fondo}
                    />
                )}
                {evento.confirmaciones.mensajeUno === true &&(
                    <Mensaje 
                        evento={evento.evento}
                        fondo={evento.multimedia.fondos.primero}
                        festejado={evento.datos.festejado}
                    />
                )}
                <Pase 
                    evento={evento.evento}
                    invitado={evento.invitados}
                    fondo={evento.multimedia.fondos.tercero}
                    festejado={evento.datos.festejado}
                />
                <Itinerario 
                    protocolo={evento.itinerario}
                    fondo={evento.multimedia.fondos.segundo}
                />
                <Vestimenta 
                    fondo={evento.multimedia.fondos.primero}
                    datos={evento.vestimenta}
                    modo={evento.estilos.estilosVestimenta.modo}
                    festejado={evento.datos.festejado}
                />
                {evento.confirmaciones.condiciones === true && (
                    <Condiciones 
                        fondo={evento.multimedia.fondos.segundo}
                    />
                )}
                {evento?.multimedia?.galeria && evento?.multimedia?.galeria.length > 1 && (
                    <Collage 
                        fondo={evento.multimedia.fondos.segundo}
                        galeria={evento.multimedia.galeria}
                    />
                )}
                <Ubicacion 
                    evento={evento.evento}
                    fondo={evento.multimedia.fondos.primero}
                    ubicacion={evento.ubicacion[0]}
                />
                {evento?.mesaDeRegalos && evento.mesaDeRegalos.length > 0 && (
                    <Mesa 
                        fondo={evento.multimedia.fondos.segundo}
                        mesa={evento.mesaDeRegalos[0]}
                        confirmacion={evento.confirmaciones}
                        festejado={evento.datos.festejado}
                    />   
                )}
                <Confirmacion 
                    invitadoId={evento.invitados._id}
                    eventoId={evento._id}
                    fondo={evento.multimedia.fondos.tercero}
                    contacto={evento.datos.contacto}
                />
            </div>
        </div>
    );
}

export default Invitaciones;
