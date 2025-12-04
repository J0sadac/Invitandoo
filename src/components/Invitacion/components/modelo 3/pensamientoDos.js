function PensamientoDos ({img, frase, festejado}) {

    return(
        <section className="pensamiento">
            <img src={img.url} className="fondo" alt="..." />
            <div className="sombra"></div>

            <span className="frase">{frase}</span>
        </section>
    )
}

export default PensamientoDos;