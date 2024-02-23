function Portada ({portada, novios}){

    return(
        <div className="portada" style={{ backgroundImage: `url(${portada[2].url})`}}>
            <div className="encabezado">
                <h3>Nuestra boda</h3>
            </div>
            <div className="contenido">
                <span>{novios.novio}</span>
                <span>&</span>
                <span>{novios.novia}</span>
            </div>
        </div>
    )
}

export default Portada;