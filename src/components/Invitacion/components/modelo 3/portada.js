
function Portada({ evento, festejado, foto}) {

    return (
        <div>
            {evento === 'Boda' ? (
                <section className='portada'>
                    <div className='nombres'>
                        <span className='titulo'>NUESTRA BODA</span>
                        <div className='contenedor'>
                            <span>{festejado}</span>
                        </div>
                    </div>
                    <img className='img' src={foto.url} alt='...' />
                </section>
            ) : evento === 'XV Años' ? (
                <section className='portada'>
                    <div className='nombres'>
                        <span className='titulo'>Mis XV años</span>
                        <div className='contenedor'>
                            <span>{festejado}</span>
                        </div>
                    </div>
                    <img className='img' src={foto.url} alt='...' />
                </section>
            ) : (
                <div>holi</div>
            )}
        </div>
    );
}

export default Portada;

