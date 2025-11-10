

function Capitulo ({fondo, capitulo}) {

    return(
        <section  className="capitulo">
                {fondo?.url && (
                    <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                )}

                <p className="texto">"{capitulo.texto}"</p>
                <p className="verso">{capitulo.verso}</p>
        </section>
    )
}

export default Capitulo