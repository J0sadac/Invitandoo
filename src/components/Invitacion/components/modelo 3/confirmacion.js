import React, { useState } from 'react';
import axios from 'axios';

//import fondo from '../../../../multimedia/fondos/fondo rojo.png';
import Whatsapp from '../../../../multimedia/herramientas/whatsapp.png';

function Confirmacion({ invitadoId, eventoId, fondo, contacto}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleConfirmarAsistencia = async () => {
        try {
            await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}/editar`, {
                asistir: 'confirmado'
            });
            setModalMessage('¡Gracias por confirmar tu asistencia! Nos vemos pronto');
            setModalVisible(true);
        } catch (error) {
            setModalMessage('Error confirmando la asistencia.');
            setModalVisible(true);
        }
    };

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

    return (
        <section className="confirmacion no-imprimir">
            {fondo?.url && (
                <img loading='lazy' className='fondo' src={fondo.url} alt='...' />
            )}
            <span className="titulo">Por favor, confirma tu asistencia</span>
            <div className="confirmar">
                <p>¡Para nosotros es de vital importancia que confirmes tu asistencia!</p>
                <div className="botones">
                    <button className='si' onClick={handleConfirmarAsistencia}>Asistiré</button>
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

            {contacto?.nombre && (
                <div className="whatsapp shadow">
                    <>
                        {contacto.nombre === 'Corenia Roldán' ? (
                            <p>Tambien puedes confirmar por Whatsapp con mi linda madre</p>
                        ):(
                            <p>Tambien puedes confirmar por Whatsapp con nuestro event planner</p>
                        )}
                    </>
                    <p className='planner'>{contacto.nombre}</p>
                    <a href={`https://wa.me/${contacto.telefono}`}><img src={Whatsapp} className='icono' alt="..." /></a>
                </div>
            )}
        </section>
    );
}

export default Confirmacion;
