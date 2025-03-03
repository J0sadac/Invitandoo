import colgante from '../../../../multimedia/herramientas/flor colgante.gif';
import negro from '../../../../multimedia/herramientas/flor adorno negra.gif';
import pie from '../../../../multimedia/herramientas/flor de pie.gif';
import rip from '../../../../multimedia/herramientas/rip.svg';
import mascaraTop from '../../../../multimedia/herramientas/mascara veneciaga 2.png';
import mascaraBttm from '../../../../multimedia/herramientas/mascara veneciaga.png';
//import ripWhite from '../../../../multimedia/herramientas/cruzar.png';

function Padres ({evento, datos, fondo, festejado}){

    return(
        <>
            {evento === 'Boda' && (
                <section className={festejado === 'Leonel y Denisse' ? 'padres leo' : 'padres imprimir'}>
                    {fondo?.url && (
                        <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                    )}

                    {festejado !== 'Alejandra & Alexander' ? (
                        <img loading='lazy' className='colgante' src={colgante} alt='...' />
                    ):(<></>)}
                    
                    {festejado !== 'Miguel Ángel & Montserrat' && (
                        <p className='titulo'>Nuestros padres</p>
                    )}
                    
                    <div className='contenedor'>
                        <p>Padres de la Novia</p>
                        <span>{datos.padres[1].papa}</span>
                        <span>
                            {datos.padres[1].mama} 
                            {datos.festejado === 'Kristopher & Cristina' && (<img loading='lazy' src={rip} alt='...' />)}
                            {datos.festejado === 'Esteban y Adriana' && (<img loading='lazy' src={rip} alt='...' />)}
                            {datos.festejado === 'Consuelo & Andrés' && (<img loading='lazy' src={rip} alt='...' />)}
                        </span>                
                    </div>

                    <div className='contenedor'>
                        <p>Padres del Novio</p>
                        <span>
                            {datos.padres[0].papa}
                            {datos.festejado === 'Leonel y Denisse' && (<img loading='lazy' src={rip} alt='...' />)}
                            {datos.festejado === 'Belén & Osmar' && (<img loading='lazy' src={rip} alt='...' />)}
                        </span>
                        <span>
                            {datos.padres[0].mama}
                            {datos.festejado === 'Consuelo & Andrés' && (<img loading='lazy' src={rip} alt='...' />)}
                        </span>
                    </div>

                    {festejado !== 'Alejandra & Alexander' ? (
                        <img loading='lazy' className='pie' src={pie} alt='...' />
                    ):(
                        <></>
                    )}
                </section>
            )}

            {evento === 'XV Años' && (
                <section className="padres xv">
                    {fondo?.url && (
                        <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
                    )}

                    <div className='contenedor'>
                        <span>
                            Es un honor para mí invitarte a celebrar la dicha de mis XV años, 
                            en compañía de
                        </span>
                    </div>

                    {datos.padres[0]?.papa? (
                        <>
                            <p className='titulo'>Mis amados padres</p>
                            <div className='contenedor'>
                                <span className='padre'>{datos.padres[0].mama}</span>
                                <span className='padre'>&</span>
                                <span className='padre'>{datos.padres[0].papa}</span>
                                {festejado === 'Génesis Kamila Toledo Rincón' && (
                                    <>
                                        <span className='padre'>&</span>
                                        <span className='padre'>Raúl Gomez Gomez</span>
                                    </>
                                )}
                                {festejado === 'Vanya Huerta Ortiz' && (
                                    <>
                                        <span className='padre'>&</span>
                                        <span className='padre'>Jhonatan Alejandro Huerta Constantino <img loading='lazy' src={rip} alt='...' /></span>
                                    </>
                                )}
                            </div>
                        </>
                    ):(
                        <>
                            <p className='titulo-mama'>Mi amada madre</p>
                            <div className='contenedor'>
                                <span className='mama'>{datos.padres[0].mama}</span>
                            </div>
                        </>
                    )}

                    {festejado === 'Danna Paola Huerta' ? (
                        <div className='iconos'>
                            <img loading='lazy' className='icono top' src={mascaraTop} alt='...' />
                            <img loading='lazy' className='icono bttm' src={mascaraBttm} alt='...' />      
                        </div>
                    ):(
                        <img loading='lazy' className='pie' src={negro} alt='...' />
                    )}
                </section>
            )}
        </>
    );
};

export default Padres;