
import prohibido from '../../../../multimedia/herramientas/celular prohibido.png';
import divertirse from '../../../../multimedia/herramientas/divertirse.png'
import brindar from '../../../../multimedia/herramientas/brindar.png';
import dance from '../../../../multimedia/herramientas/dance.gif'

function Condiciones ({fondo, festejado}) {

    const nombre = festejado.split(" ")[0];

    return(
        <section className="condiciones">
            <img loading='lazy' className="fondo" src={fondo.url} alt="..." />

            <p className="titulo">Requisitos para divertirse!!</p>

            <div className="contenedor shadow-lg">
                <p className="condicion">
                    Si decides acompañarme en mi gran día, que sea solo con un motivo ¡DIVERTIRSE!
                </p>
                <img loading='lazy' className="icono" src={divertirse} alt='...' />
            </div>
            <div className="contenedor shadow-lg">
                <p className="condicion">
                    Evitar el uso constante del celular.
                </p>
                <img className="icono" src={prohibido} alt='...' />
            </div>
            <div className="contenedor shadow-lg">
                <p className="condicion">
                    ¡Bailar TODA la velada junto a la quinceañera!
                </p>
                <img loading='lazy' className="icono" src={dance} alt='...' />
            </div>
            <div className="contenedor shadow-lg">
                <p className="condicion">
                    Brindar por la felicidad de {nombre}.
                </p>
                <img loading='lazy' className="icono" src={brindar} alt='...' />
            </div>

            <p>¡Nos encantaría verte ahí!</p>
        </section>
    );
};

export default Condiciones;