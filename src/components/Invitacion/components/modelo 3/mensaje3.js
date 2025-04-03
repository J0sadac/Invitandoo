
function Mensaje3 ({img, frase, festejado}) {

    return(
        <section className="frase3">
            <img src={img} className="fondo" alt="..." />
            <div className="sombra"></div>

            <span className="frase">{frase}</span>

            {festejado === 'Fausto & Yulissa' && (
                <div className="compromiso">
                    <span className="titulo">Nuestro compromiso empezo un...</span>

                    <span className="fecha">8 de julio de 2024</span>   
                </div>
            )}
        </section>
    )
}

export default Mensaje3;