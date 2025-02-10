import derecha from '../../../../multimedia/herramientas/flecha derecha.png';
import izquierda from '../../../../multimedia/herramientas/flecha izquierda.png';

function Timeline({ fondo, timeLine }) {
    return (
        <section className="timeline no-imprimir">
            <img loading="lazy" className="fondo" src={fondo.url} alt="..." />

            <p className="titulo">Nuestra historia</p>

            {timeLine.map((time, index) => (
                <div className="contenedor" key={time._id}>
                    {index % 2 === 0 ? (
                        <>
                            <img className="imagen" src={time.url} alt="..." />
                            <p className="mensaje">{time.frase}</p>
                            {/* Solo mostrar la flecha si NO es el último elemento */}
                            {index !== timeLine.length - 1 && (
                                <img className="icono" src={derecha} alt="flecha derecha" />
                            )}
                        </>
                    ) : (
                        <>
                            <p className="mensaje">{time.frase}</p>
                            <img className="imagen" src={time.url} alt="..." />
                            {/* Solo mostrar la flecha si NO es el último elemento */}
                            {index !== timeLine.length - 1 && (
                                <img className="icono" src={izquierda} alt="flecha izquierda" />
                            )}
                        </>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Timeline;

