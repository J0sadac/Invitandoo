
function Portada({ evento, festejado, foto}) {

    return (
        <div>
            {evento === 'Boda' ? (
                <>
                    {festejado === 'Leonel y Denisse' ? (
                        <section className="alternativa-portada">
                            <img loading="lazy" className='img' src={foto.url} alt='...' />
                        </section>
                    ): festejado === 'Consuelo & Andrés' ? (
                        <section className="alternativa-portada">
                            <img loading="lazy" className='img' src={foto.url} alt='...' />
                        </section>
                    ):(
                        <section className='portada'>
                            <div className='nombres'>
                                <span className='titulo'>NUESTRA BODA</span>
                                <div className='contenedor'>
                                    <span>{festejado}</span>
                                </div>
                            </div>
                            <img loading="lazy" className='img' src={foto.url} alt='...' />
                        </section>
                    )}
                </>
            ) : evento === 'XV Años' ? (
                <>
                
                {festejado === 'Karla Beatriz Diaz Mendez' ? (
                    <section className='portada'>
                        <img loading="lazy" className='img' src={foto.url} alt='...' />
                    </section>
                ):(
                    <section className='portada'>
                        <div className='nombres'>
                            <span className='titulo'>Mis XV años</span>
                            <div className='contenedor'>
                                <span>{festejado}</span>
                            </div>
                        </div>
                        <img loading="lazy" className='img' src={foto.url} alt='...' />
                    </section>
                )}
                </>
                
            ) : (
                <div>holi intento de cambio</div>
            )}
        </div>
    );
}

export default Portada;

