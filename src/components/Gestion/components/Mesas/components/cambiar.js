import axios from 'axios';

import completa from '../../../icons/confirmado.png';
import pendiente from '../../../icons/pendiente.png';
import declinados from '../../../icons/declinado.png';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cambiar({cerrar, seleccionar, mesas, setRecargar, setNoti}){
    const {eventoId} = useParams();
    const timeoutRef = useRef(null);
    const [invCambio, setInvCambio] = useState();
    const [mesaOriginal, setMesaOriginal] = useState();

    useEffect(() => {
        if(seleccionar){
            setInvCambio(seleccionar);
            setMesaOriginal(seleccionar.mesa);
        }
    }, [seleccionar]);

    const datosMesas = (invitados) => {
        let total = 0;
        let confirmados = 0;
        let pendientes = 0;
        let rechazados = 0;

        invitados.forEach(inv => {
            const conteo = (inv.pase || 0) + (inv.infantes || 0);
            total += conteo

            if(inv.asistir === 'confirmado') confirmados += conteo;
            else if(inv.asistir === 'pendiente') pendientes += conteo;
            else if(inv.asistir === 'rechazado') rechazados += conteo; 
        });

        return { total, confirmados, pendientes, rechazados };
    }

    const cambiarDeMesa = async (mesaSelect) => {
        if(!invCambio) return;
        
        try{
            const datos = {mesa: mesaSelect};

            await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${seleccionar._id}/editar`, 
                datos
            );

            setInvCambio(prev => ({ ...prev, mesa: mesaSelect }));

            setRecargar(prev => !prev);

            timeoutRef.current = setTimeout(() => {
                cerrar();
                activarNot('editado');
            }, 15000)

        }catch(err){

        }  
    }

    const activarNot = (tipo) => {
        setNoti(tipo);

        setTimeout(() => {
            setNoti(null)
        }, 2000)
    }

    const cierreManual = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null
        }

        if(invCambio.mesa !== mesaOriginal){
            activarNot('editado');
        }

        cerrar();
    }

    console.log(invCambio)

    return(
        <div className="ventana">
            <div className="cambiar">
                <button className="btnCerrar" onClick={cierreManual}>X</button>

                <p className="titulo">Mover invitado</p>

                {invCambio && (
                    <div className='invCambiar'>
                        <span>{invCambio.invitado}</span>
                        <div className='invDatos'>
                            <span>{invCambio.pase} {invCambio.pase !== 1 ? 'adultos' : 'adulto'}</span>
                            {invCambio.infantes > 0 && (
                                <span>{invCambio.infantes} {invCambio.infantes !== 1 ? 'niños' : 'niño'}</span>
                            )}
                        </div>
                    </div>
                )}

                <div className="cambios">
                    {Object.keys(mesas).map((mesa, index) => {
                        const { total, confirmados, pendientes, rechazados } = datosMesas(mesas[mesa]);

                        return(
                            <div key={index} 
                                className={`mesa shadow-sm ${mesa === String(invCambio?.mesa) ? 'origen' : ''}`} 
                                onClick={() => cambiarDeMesa(mesa)}
                            >
                                {mesa > 0 ? (
                                    <span>Mesa {mesa}</span>
                                ):(
                                    <span>{mesa}</span>
                                )}
                                <div className='datos'>
                                    <div className='dato total'>
                                        <span>{total}</span>
                                        <span>Total</span>
                                    </div>
                                    <div className='dato'>
                                        <span>{confirmados}</span>
                                        <img className='icon' src={completa} alt='completa' />
                                    </div>
                                    <div className='dato'>
                                        <span>{pendientes}</span>
                                        <img className='icon' src={pendiente} alt='completa' />
                                    </div>
                                    <div className='dato'>
                                        <span>{rechazados}</span>
                                        <img className='icon' src={declinados} alt='completa' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

export default Cambiar;