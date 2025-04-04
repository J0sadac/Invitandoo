
function Mensaje3 ({img, frase, festejado}) {

    return(
        <section className="frase3">
            <img src={img} className="fondo" alt="..." />
            <div className="sombra"></div>

            <span className="frase">{frase}</span>

        </section>
    )
}

export default Mensaje3;