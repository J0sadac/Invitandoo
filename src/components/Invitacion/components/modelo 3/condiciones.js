import fiesta from '../../../../multimedia/herramientas/fiesta.png';
// import prohibido from '../../../../multimedia/herramientas/celular prohibido.png';
import bailar from '../../../../multimedia/herramientas/bailar.png';
import brindar from '../../../../multimedia/herramientas/brindar.png';

function Condiciones ({fondo}) {

    return(
        <section className="condiciones">
            <img className="fondo" src={fondo.url} alt="..." />

            <p className="titulo">Requisitos para divertirse!!</p>

            <div className="contenedor shadow-lg">
                <p className="condicion">
                    Si decides acompañarme en mi gran día, que sea solo con un motivo ¡DIVERTIRSE!
                </p>
                <img className="icono" src={fiesta} alt='...' />
            </div>
            {/* <div className="contenedor shadow-lg">
                <p className="condicion">
                    Evitar el uso constante del celular.
                </p>
                <img className="icono" src={prohibido} alt='...' />
            </div> */}
            <div className="contenedor shadow-lg">
                <p className="condicion">
                    ¡Bailar TODA la velada junto a la quinceañera!
                </p>
                <img className="icono" src={bailar} alt='...' />
            </div>
            <div className="contenedor shadow-lg">
                <p className="condicion">
                    Brindar por la felicidad de Ariana.
                </p>
                <img className="icono" src={brindar} alt='...' />
            </div>

            <p>¡Nos encantaría verte ahí!</p>
        </section>
    );
};

export default Condiciones;