import React, { useState } from 'react';
import axios from 'axios';
import Whatsapp from '../../../../multimedia/herramientas/whatsapp.png';

function Confirmacion({ invitadoId, eventoId, fondo, contacto, pase}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalConfirmacion, setModalConfirmacion] = useState(false);

    const pases = 4; // temporal, luego lo recibimos por props
    const [cantidad, setCantidad] = useState(1);

    // const handleConfirmarAsistencia = async () => {
    //     try {
    //         await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}/editar`, {
    //             asistir: 'confirmado'
    //         });
    //         setModalMessage('¡Gracias por confirmar tu asistencia! Nos vemos pronto');
    //         setModalVisible(true);
    //     } catch (error) {
    //         setModalMessage('Error confirmando la asistencia.');
    //         setModalVisible(true);
    //     }
    // };

    const handleRechazarAsistencia = async () => {
        try {
            await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}/editar`, {
                asistir: 'rechazado'
            });
            setModalMessage('Lamentamos que no puedas asistir a este evento ¡esperamos verte en el siguiente!');
            setModalVisible(true);
        } catch (error) {
            setModalMessage('Error rechazando la asistencia.');
            setModalVisible(true);
        }
    };

    console.log('Los invitados confirmados son: ' + pase)

    return (
        <section className="confirmacion no-imprimir">
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}

            <span className="titulo">Por favor, confirma tu asistencia</span>
            <div className="contConfirmar">
                <p>¡Para nosotros es de vital importancia que confirmes tu asistencia!</p>
                <div className="botones">
                    <button className='si' onClick={() => setModalConfirmacion(true)}>Asistiré</button>
                    <button className='no' onClick={handleRechazarAsistencia}>No asistiré</button>
                </div>
            </div>

            {modalVisible && (
                <div className="alerta" onClick={() => setModalVisible(false)}>
                    <div className="contenido">
                        <p>{modalMessage}</p>
                    </div>
                </div>
            )}

            {modalConfirmacion && (
                <div className="alerta" onClick={() => setModalConfirmacion(false)}>
                    <div className="contenido confirmar-personas" onClick={(e)=>e.stopPropagation()}>
                        <p>Por favor, confirma cuántas personas van a asistir</p>
                        <div className="contador">
                            <button onClick={() => setCantidad(prev => Math.max(prev - 1, 1))}>−</button>
                            <span>{cantidad}</span>
                            <button onClick={() => setCantidad(prev => Math.min(prev + 1, pases))}><span>+</span></button>
                        </div>
                        <button className='confirmar' onClick={() => {console.log('Personas: ',cantidad);}}>Confirmar</button>
                    </div>
                </div>
            )}

            {contacto?.nombre && (
                <div className="whatsapp shadow">
                    <p>Tambien puedes confirmar por Whatsapp</p>
                    <p className='planner'>{contacto.nombre}</p>
                    <a href={`https://wa.me/${contacto.telefono}`}><img src={Whatsapp} className='icono' alt="..." /></a>
                </div>
            )}
        </section>
    );
}

export default Confirmacion;
