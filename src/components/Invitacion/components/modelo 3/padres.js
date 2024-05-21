import colgante from '../../../../multimedia/herramientas/flor colgante.gif';
import pie from '../../../../multimedia/herramientas/flor de pie.gif';
import rip from '../../../../multimedia/herramientas/rip.svg'

function Padres (){

    return(
        <section className="padres">
            <img className='colgante' src={colgante} alt='...' />
            <p className='titulo'>Nuestros padres</p>
            <div className='contenedor'>
                <p>Padres del Novio</p>
                <span>Waldemar Flores Hintz</span>
                <span>Ana Cristina Fernández Favila</span>
            </div>
            <div className='contenedor'>
                <p>Padres de la Novia</p>
                <span>Reyna Isabel Díaz Saldaña</span>
                <span>Medardo Escobar Armenta <img src={rip} alt='...' /></span>                
            </div>
            <img className='pie' src={pie} alt='...' />
        </section>
    );
};

export default Padres;