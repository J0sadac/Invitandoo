import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Whatsapp from '../../../../multimedia/herramientas/whatsapp.png';

function Confirmacion({ invitadoId, eventoId, fondo, contacto, pase }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalConfirmacion, setModalConfirmacion] = useState(false);

    const pases = pase;

    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        setCantidad(pases);
    }, [pases]);

    const handleConfirmarAsistencia = async () => {
        try {

            await axios.put(
                `https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}/editar`,
                {
                    asistir: 'confirmado',
                    pase: cantidad
                }
            );

            setModalConfirmacion(false);

            setModalMessage('¡Gracias por confirmar! Tu presencia es muy importante para nosotros. Tus lugares ya están reservados de forma exacta, te agradecemos respetar el número de pases de tu invitación. ¡Te esperamos pronto!');

            setModalVisible(true);

        } catch (error) {

            console.error(error);

            setModalConfirmacion(false);
            setModalMessage('Ocurrió un error al confirmar la asistencia.');
            setModalVisible(true);

        }
    };

    const handleRechazarAsistencia = async () => {

        try {

            await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}/editar`, {
                asistir: 'rechazado'
            });

            setModalMessage(
                'Lamentamos que no puedas asistir a este evento. ¡Esperamos verte en el siguiente!'
            );

            setModalVisible(true);

        } catch (error) {

            setModalMessage('Error rechazando la asistencia.');
            setModalVisible(true);

        }

    };

    return (
        <section className="confirmacion no-imprimir">

            {fondo?.url && (
                <img
                    loading="lazy"
                    className="fondo"
                    src={fondo.url}
                    alt="..."
                />
            )}

            <span className="titulo">
                ¡Queremos celebrar contigo!
            </span>

            <div className="contConfirmar">

                <p>
                    ¡Para nosotros es de vital importancia que confirmes tu asistencia!
                </p>

                <div className="botones">
                    <button
                        className="si"
                        onClick={() => setModalConfirmacion(true)}
                    >
                        Asistiré
                    </button>

                    <button
                        className="no"
                        onClick={handleRechazarAsistencia}
                    >
                        No asistiré
                    </button>
                </div>

            </div>

            {modalVisible && (
                <div
                    className="alerta"
                    onClick={() => setModalVisible(false)}
                >
                    <div className="contenido">
                        <p>{modalMessage}</p>
                    </div>
                </div>
            )}

            {modalConfirmacion && (

                <div
                    className="alerta"
                    onClick={() => setModalConfirmacion(false)}
                >

                    <div
                        className="contenido confirmar-personas"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <p>
                            Por favor, confirma cuantos lugares reservamos para ti.
                        </p>

                        <div className="contador">

                            <button
                                onClick={() =>
                                    setCantidad(prev => Math.max(prev - 1, 1))
                                }
                            >
                                <p>-</p>
                            </button>

                            <span className="cant">
                                {cantidad}
                            </span>

                            <button
                                onClick={() =>
                                    setCantidad(prev => Math.min(prev + 1, pases))
                                }
                            >
                                <p>+</p>
                            </button>

                        </div>

                        <button
                            className="confirmar"
                            onClick={handleConfirmarAsistencia}
                        >
                            Confirmar
                        </button>

                    </div>

                </div>

            )}

            {contacto?.nombre && (

                <div className="whatsapp shadow">

                    <p>También puedes confirmar por WhatsApp</p>

                    <p className="planner">
                        {contacto.nombre}
                    </p>

                    <a href={`https://wa.me/${contacto.telefono}`}>
                        <img
                            src={Whatsapp}
                            className="icono"
                            alt="WhatsApp"
                        />
                    </a>

                </div>

            )}

        </section>
    );

}

export default Confirmacion;