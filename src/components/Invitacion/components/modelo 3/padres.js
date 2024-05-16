import colgante from '../../../../multimedia/herramientas/flor colgante.gif';
import pie from '../../../../multimedia/herramientas/flor de pie.gif';
import trancicion from '../../../../multimedia/herramientas/flor de trancicion.svg';

function Padres (){

    return(
        <section className="padres">
            <img className='colgante' src={colgante} alt='...' />
            <p className='titulo'>Nuestros padres</p>
            <div className='contenedor'>
                <p>Padres del Novio</p>
                <span>Cora Casaux López</span>
            </div>
            <img className='transicion' src={trancicion} alt='...' />
            <div className='contenedor'>
                <p>Padres de la Novia</p>
                <span>Javier Velasco Diaz</span>
                <span>Angela Arias Salas</span>
            </div>
            <img className='pie' src={pie} alt='...' />
        </section>
    );
};

export default Padres;