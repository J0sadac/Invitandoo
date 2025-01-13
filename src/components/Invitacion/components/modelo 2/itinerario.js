function Itinerario ({itinerario}) {

    return(
        <div className="itinerario shadow">
            <div className="titulo">
                <h3>Itinerario</h3>
            </div>
            {itinerario.map((dato, index) => (
            <div className="contenido" key={index}>
                <img className='icono' src={dato.icono} alt="..." />
                <div className="accion">
                    <p>{dato.accion}</p>
                    <p>{dato.hora}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Itinerario;