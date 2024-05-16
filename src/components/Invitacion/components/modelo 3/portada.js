import imgPortada from '../../../../multimedia/Kristopher/portada.jpg';

function Portada (){

    return(
        <section className='portada'>
            <div className='nombres'>
                <span className='titulo'>NUESTRA BODA</span>
                <div className='contenedor'>
                    <span>Kristopher</span>
                    <span>&</span>
                    <span>Cristina</span>
                </div>
            </div>
            <img className='img' src={imgPortada} alt='...' />
        </section>
    );
};

export default Portada;