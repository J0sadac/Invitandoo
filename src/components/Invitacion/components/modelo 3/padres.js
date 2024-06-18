import colgante from '../../../../multimedia/herramientas/flor colgante.gif';
import negro from '../../../../multimedia/herramientas/flor adorno negra.gif';
import pie from '../../../../multimedia/herramientas/flor de pie.gif';
import rip from '../../../../multimedia/herramientas/rip.svg';

function Padres ({evento, padres, fondo}){

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
                    {fondo?.url && (
                        <img className='fondo' src={fondo.url} alt='...' />
                    )}

                    <div className='contenedor'>
                        <span>
                            Es un honor para mí invitarte a celebrar la dicha de mis XV años, 
                            en compañía de
                        </span>
                    </div>
                    <p className='titulo'>Mis amados padres</p>
                    <div className='contenedor'>
                        <span className='padre'>{padres.mama}</span>
                        <span className='padre'>&</span>
                        <span className='padre'>{padres.papa}</span>
                    </div>
                    <img className='pie' src={negro} alt='...' />
                </section>
            ) : (
                <div>holi</div>
            )}
        </>
    );
};

export default Padres;