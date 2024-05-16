import imgPortada from '../../../../multimedia/Fotos - Veronica/portada.jpg';

function Portada (){

    return(
        <section className='portada'>
            <div className='nombres'>
                <span className='titulo'>NUESTRA BODA</span>
                <div className='contenedor'>
                    <span>Francisco</span>
                    <span>&</span>
                    <span>Veronica</span>
                </div>
            </div>
            <img className='img' src={imgPortada} alt='...' />
        </section>
    );
};

export default Portada;