import imgFondo from '../../../../multimedia/fondos/3.jpg';

function Portada({ evento, festejado, foto}) {

    return (
        <div>
            {evento === 'Boda' ? (
                <>
                    {festejado === 'Leonel y Denisse' ? (
                        <section className="alternativa-portada">
                            <img className="fondo" src={imgFondo} alt="fondo" />
                            <span className='titulo'>NUESTRA BODA</span>
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
                <section className='portada'>
                    <div className='nombres'>
                        <span className='titulo'>Mis XV años</span>
                        <div className='contenedor'>
                            <span>{festejado}</span>
                        </div>
                    </div>
                    <img loading="lazy" className='img' src={foto.url} alt='...' />
                </section>
            ) : (
                <div>holi</div>
            )}
        </div>
    );
}

export default Portada;

