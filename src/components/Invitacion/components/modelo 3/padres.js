import colgante from '../../../../multimedia/herramientas/flor colgante.gif';
import pie from '../../../../multimedia/herramientas/flor de pie.gif';
import rip from '../../../../multimedia/herramientas/rip.svg';
import fondo from '../../../../multimedia/fondos/fondo blanco.png';

function Padres ({evento, padres}){

    return(
        <>
            {evento === 'Boda' ? (
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
            ) : evento === 'XV Años' ? (
                <section className="padres xv">
                    <img className='fondo' src={fondo} alt='...' />
                    <img className='colgante' src={colgante} alt='...' />
                    <p className='titulo'>Mis amados padres</p>
                    <div className='contenedor'>
                        <span>{padres.papa}</span>
                        <span>&</span>
                        <span>{padres.mama}</span>
                    </div>
                    <img className='pie' src={pie} alt='...' />
                </section>
            ) : (
                <div>holi</div>
            )}
        </>
    );
};

export default Padres;