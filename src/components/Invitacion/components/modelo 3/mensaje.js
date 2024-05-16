import flor from '../../../../multimedia/herramientas/Flor fuccia.gif';

function Mensaje () {

    return(
        <section className="mensaje">
            <div className='florero'>
                <img className='flor tl' src={flor} alt='...' />
                <img className='flor tr' src={flor} alt='...' />
            </div>
            <p>
                ¡Uno de los dias más importantes de nuestra vida ha llegado!
            </p>
            <div className='florero'>
                <img className='flor bl' src={flor} alt='...' />
                <img className='flor br' src={flor} alt='...' />
            </div>
        </section>
    );
};

export default Mensaje;