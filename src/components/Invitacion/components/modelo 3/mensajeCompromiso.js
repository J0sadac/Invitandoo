function Compromiso ({img, frase, festejado}) {

    return(
        <section className="compromiso">
            <img src={img} className="fondo" alt="..." />
            <div className="sombra"></div>

            <div className="contenedor">
                <span className="titulo">Nuestro compromiso empezo un...</span>

                <span className="fecha">8 de julio de 2024</span>              
            </div>

        </section>
    )
}

export default Compromiso;