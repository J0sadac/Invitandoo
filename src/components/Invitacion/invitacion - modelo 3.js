import { useEffect, lazy, useRef } from 'react';
import Pensamiento from './components/modelo 3/pensamiento';
import Sobre from './components/modelo 3/sobre';
import Timeline from './components/modelo 3/timeline';
import Recomendacion from './components/modelo 3/recomendacion';
import Hashtag from './components/modelo 3/hashtag';
import Capitulo from './components/modelo 3/capitulo';

const Portada = lazy(() => import("./components/modelo 3/portada"));
const Mensaje = lazy(() => import("./components/modelo 3/mensaje"));
const Invitacion = lazy(() => import("./components/modelo 3/invitacion"));
const Pase = lazy(() => import("./components/modelo 3/pase"));
const Padres = lazy(() => import("./components/modelo 3/padres"));
const Padrinos = lazy(() => import("./components/modelo 3/padrinos"));
const MensajeDos = lazy(() => import("./components/modelo 3/mensaje2"));
const Galeria = lazy(() => import("./components/modelo 3/galeria"));
const Ubicacion = lazy(() => import("./components/modelo 3/ubicacion"));
const Itinerario = lazy(() => import("./components/modelo 3/itinerario"));
const Mesa = lazy(() => import("./components/modelo 3/mesa"));
const Vestimenta = lazy(() => import("./components/modelo 3/vestimenta"));
const Cancion = lazy(() => import('./components/modelo 2/cancion'));
const Confirmacion = lazy(() => import("./components/modelo 3/confirmacion"));
const Desplazar = lazy(() => import("./components/modelo 3/desplazar"));
const Frases = lazy(() => import('./components/modelo 3/frase'));
const Collage = lazy(() => import("./components/modelo 3/collage"));
const Condiciones = lazy(() => import('./components/modelo 3/condiciones'));


function Invitaciones({ evento, festejado }) {
    const cancionRef = useRef(null);

    const handleCerrarVentanaCancion = () => {
        cancionRef.current?.closeWindow(); // 👈 cerrar inmediatamente
    };

    const handleReproducirCancion = () => {
        cancionRef.current?.playSong(); // 👈 reproducir cuando acabe animación
    };
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
                    --color-mesa: ${styles.colorMesa || 'white'};
                    --contenido-padres: ${styles.contenidoPadres || 'white'};
                    --letras-vestimenta: ${styles.letrasVestimenta || 'black'};
                    --font-main: ${styles.fontMain || "'Tangerine', cursive"};
                    --font-main-size: ${styles.fontMainSize || "55px"};
                    --font-second: ${styles.fontSecond || "'Abel', sans-serif"};
                    --font-second-size: ${styles.fontSecondSize || "25px"};
                    --font-message: ${styles.fontMessage || "'Tangerine', cursive"};
                    --font-message-size: ${styles.fontMessageSize || "37px"};
                    --font-date-size: ${styles.fontDateSize || "60px"};
                    --altura-portada: ${styles.alturaPortada || "65px"};
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

                {evento.evento !== 'Graduacion' && (
                    <Cancion 
                        ref={cancionRef}
                        url={evento.multimedia.cancion.url}
                    />
                )}

                {evento?.sobre && (
                    <Sobre 
                        sobre={evento.sobre}
                        onCerrarVentanaCancion={handleCerrarVentanaCancion}
                        onReproducirCancion={handleReproducirCancion}
                    />
                )}

                <Desplazar />

                <div className="caja">
                    {evento?.capitulo && (
                        <Capitulo 
                            capitulo={evento.capitulo}
                            fondo={evento.multimedia.fondos.primero}
                        />
                    )}
                    
                    {evento?.frase && (
                        <MensajeDos 
                            evento={evento.evento}
                            fondo={evento.multimedia.fondos.tercero}
                            festejado={evento.datos.festejado}
                            frases={evento.frases}
                        />
                    )}

                    {evento.evento !== 'Graduacion' && (
                        <Padres 
                            evento={evento.evento}
                            datos={evento.datos}
                            festejado={evento.datos.festejado}
                            fondo={evento.multimedia.fondos.segundo}
                        />
                    )}

                    <Invitacion 
                        fondo={evento.estilos.estilosInvitacion.fondo}
                        dia={evento.datos.dia}
                        lugar={evento.datos.lugar}
                        fecha={evento.datos.fecha}
                        evento={evento.evento}
                        festejado={evento.datos.festejado}
                    />

                    {evento.confirmaciones.frases === true && (
                        <Frases
                            evento={evento.evento}
                            fondo={evento.multimedia.fondos.primero}
                        />
                    )}

                    {evento.padrinos.length > 0 && (
                        <Padrinos 
                            padrinos={evento.padrinos}
                            fondo={evento.multimedia.fondos.segundo}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    <Pase 
                        evento={evento.evento}
                        invitado={evento.invitados}
                        fondo={evento.multimedia.fondos.tercero}
                        festejado={evento.datos.festejado}
                        sugerencia={evento.sugerencia}
                        condiciones={evento.confirmaciones}
                    />
                    
                    {evento?.multimedia?.carousel && evento.multimedia.carousel.length > 1 && (
                        <Galeria
                            carousel={evento.multimedia.carousel}
                            fondo={evento.estilos.estilosGaleria.fondo}
                            festejado={evento.datos.festejado}
                        />
                    )}
                    
                    {evento.evento !== 'Graduacion' && (
                        <Vestimenta 
                            fondo={evento.multimedia.fondos.primero}
                            datos={evento.vestimenta}
                            modo={evento.estilos.estilosVestimenta.modo}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    {evento.itinerario.length > 0 && (
                        <Itinerario 
                            protocolo={evento.itinerario}
                            fondo={evento.multimedia.fondos.segundo}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    {evento.confirmaciones.mensajeUno === true && (
                        <Mensaje 
                            evento={evento.evento}
                            fondo={evento.multimedia.fondos.tercero}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    {evento.confirmaciones.condiciones === true && (
                        <Condiciones 
                            fondo={evento.multimedia.fondos.primero}
                            festejado={evento.datos.festejado}
                        />
                    )}

                    {evento?.multimedia?.timeLine && evento.multimedia.timeLine.length > 1 && (
                        <Timeline 
                            fondo={evento.estilos.estilosTimeLine.fondo}
                            timeLine={evento.multimedia.timeLine}
                        />
                    )}

                    {evento?.pensamiento?.frase && (
                        <Pensamiento
                            img={evento.pensamiento.imagen}
                            frase={evento.pensamiento.frase}
                            festejado={evento.datos.festejado}
                        />
                    )}
                    
                    <Ubicacion 
                        evento={evento.evento}
                        fondo={evento.multimedia.fondos.segundo}
                        ubicacion={evento.ubicacion}
                    />
                   
                    {evento?.mesaDeRegalos && evento.mesaDeRegalos.length > 0 && (
                        <Mesa 
                            fondo={evento.multimedia.fondos.primero} 
                    
                            mesa={evento.mesaDeRegalos}
                            confirmacion={evento.confirmaciones}
                            festejado={evento.datos.festejado}
                        />   
                    )}

                    {evento?.multimedia?.galeria && evento?.multimedia?.galeria.length > 1 && (
                        <Collage 
                            fondo={evento.multimedia.fondos.segundo}
                            galeria={evento.multimedia.galeria}
                        />
                    )}

                    {evento?.datos?.recomendacion && evento?.datos?.recomendacion.length >= 1 && (
                        <Recomendacion 
                            fondo={evento.multimedia.fondos.segundo}
                            datos={evento.datos.recomendacion}
                        />
                    )}

                    {evento?.hashtag && (
                        <Hashtag 
                            fondo={evento.multimedia.fondos.primero}
                            datos={evento.hashtag}
                        />
                    )}

                    {evento.evento !== 'Graduacion' && (
                        <Confirmacion 
                            invitadoId={evento.invitados._id}
                            eventoId={evento._id}
                            fondo={evento.multimedia.fondos.tercero}
                            contacto={evento.datos.contacto}
                        />
                    )}
                </div>
        </div>
    );
}

export default Invitaciones;
