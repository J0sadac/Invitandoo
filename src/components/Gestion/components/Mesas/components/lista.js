import Opciones from './opciones';

import completa from '../../../icons/confirmado.png';
import pendiente from '../../../icons/pendiente.png';
import declinado from '../../../icons/declinado.png';
import mostarMenos from '../../../icons/mostrarMenos.png';
import mostrarMas from '../../../icons/mostrarMas.png';
import opciones from '../../../icons/opciones.png';

import { useState, useEffect} from 'react';


function Lista ({lista, abrir, setSeleccionar}) {
    const [opcionAbt, setOpcionAbt] = useState(null);
    const [comprimir, setComprimir] = useState({});

    const desplegar = (mesa) => {
        setComprimir((prev) => ({
            ...prev,
            [mesa] : !prev[mesa]
        }))
    }

    const opcionPerm = (id) => {
        setOpcionAbt(idAnt => idAnt === id ? null : id)
    }

     useEffect(() => {
        const estadoInicial = {};
        for (let mesa of Object.keys(lista)) {
            estadoInicial[mesa] = true;
        }

        setComprimir(estadoInicial);

    }, [lista]);

    return(
        <div className="lista">
            {Object.entries(lista).map(([mesa, invitados]) => {

                const totalInv = invitados.reduce((acc, inv) =>
                    acc + inv.pase + inv.infantes, 0
                );

                const confirmados = invitados.reduce((acc, inv) => {
                    if(inv.asistir === 'confirmado'){
                        return acc + inv.pase + inv.infantes;
                    }

                    return acc;
                }, 0)
                
                return(
                    <div key={mesa} className="seccion">
                        <div className="encabezado headMesas">
                            {mesa >= 1 ? (
                                <div className="letra">Mesa {mesa}</div>
                            ):(
                                <div className="letra">{mesa}</div>
                            )}

                            <div>{confirmados}/{totalInv}</div>

                            {confirmados === totalInv ? (
                                <img src={completa} className="icono" alt='Mesa completa'/>
                            ):(
                                <img src={pendiente} className="icono" alt='Mesa pendiente'/>
                            )}

                            <div className="linea"></div>

                            <button className='comprimir' onClick={() => desplegar(mesa)}>
                                {comprimir[mesa]? (
                                    <img src={mostarMenos} alt='mas' />
                                ):(
                                    <img src={mostrarMas} alt='mas' />
                                )}
                            </button>
                        </div>

                        {comprimir[mesa] &&
                            invitados.map((inv) => (
                                <div className="contentMesas">
                                    <div className='contenido'>
                                        <span className='invitado'>{inv.invitado}</span>
                                        <div className='datos'>
                                            <span>
                                                {inv.pase > 0 ? inv.pase : 0}
                                                {inv.pase === 1 ? (<span> adulto</span>):(
                                                    <span> adultos</span>
                                                )}
                                            </span>
                                            <span>
                                                {inv.infantes > 0 ? inv.infantes : 0}
                                                {inv.infantes === 1 ? (<span> niño</span>):(
                                                    <span> niños</span>
                                                )}
                                            </span>
                                            {inv.asistir === 'confirmado' && (<img src={completa} alt='confirmado'/>)}
                                            {inv.asistir === 'pendiente' && (<img src={pendiente} alt='pendiente'/>)}
                                            {inv.asistir === 'rechazado' && (<img src={declinado} alt='declinado'/>)}
                                        </div>
                                    </div>

                                    <button className='opciones-btn' onClick={() => opcionPerm(inv._id)}>
                                        <img className='icon' src={opciones} alt="opciones" />
                                    </button>
                                    
                                    {opcionAbt === inv._id && (
                                        <Opciones 
                                            abrirVent={abrir}
                                            invitado={inv}
                                            selecto={setSeleccionar}
                                        />
                                    )}
                                </div>
                        ))}
                    </div>
                )
            })}
        </div>
    );
};

export default Lista;