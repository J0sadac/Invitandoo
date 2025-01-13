import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import flecha from '../../../../multimedia/herramientas/ordenar-abajo.svg';
import confirmado from '../../../../multimedia/herramientas/comprobado.svg';
import rechazado from '../../../../multimedia/herramientas/rechazado.svg';
import pendiente from '../../../../multimedia/herramientas/pendiente.svg';

function Administrar() {
    const { eventoId } = useParams();
    const [evento, setEvento] = useState({ invitados: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getInvitacion = async () => {
            try {
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${eventoId}`);
                setEvento(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getInvitacion();
    }, [eventoId]);

    const agruparPorMesa = (invitados) => {
        return invitados.reduce((mesas, invitado) => {
            const mesa = invitado.mesa;
            if (!mesas[mesa]) {
                mesas[mesa] = [];
            }
            mesas[mesa].push(invitado);
            return mesas;
        }, {});
    };

    const contenido = agruparPorMesa(evento.invitados);

    if (loading) {
        return (
            <div className='loading'>
                <p>Cargando invitación</p>
                <div className="spinner-border spin" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>¡Por favor espere!</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='error'>
                <p>Error al cargar la invitación: {error}</p>
            </div>
        );
    }

    return (
        <section className='gestion'>
            <div className="fondo"></div>
            {Object.keys(contenido).map(mesa => {
                const invitados = contenido[mesa];
                const confirmados = invitados.filter(inv => inv.asistir === 'confirmado');
                const totalConfirmados = confirmados.reduce((total, inv) => total + inv.pase + inv.infantes, 0);
                const totalPases = invitados.reduce((total, inv) => total + inv.pase + inv.infantes, 0);

                return (
                    <div key={mesa}>
                        <div className={`${totalConfirmados === totalPases ? 'mesa completa' : 'mesa pendiente'}`}>
                            <div className="encabezado">
                                <span className="titulo">Mesa {mesa}</span>
                                <span className="cantidad">{totalConfirmados}/{totalPases}</span>
                                <img className="icono" src={flecha} alt="..." />
                            </div>
                            {invitados.map((inv) => (
                                <div key={inv._id} className='contenido'>
                                    <span className='invitado'>{inv.invitado}</span>
                                    <span className='pase'>
                                        {inv.pase} {inv.pase === 1 ? 'adulto' : 'adultos'}
                                    </span>
                                    <span className='pase'>
                                        {inv.infantes} {inv.infantes === 1 ? 'niño' : 'niños'}
                                    </span>
                                    {inv.asistir === 'confirmado' ? (
                                        <div className='asistencia'>
                                            <img className='icono' src={confirmado} alt='...' />
                                        </div>
                                    ) : inv.asistir === 'rechazado' ? (
                                        <div className='asistencia'>
                                            <img className='icono' src={rechazado} alt='...' />
                                        </div>
                                    ) : (
                                        <div className='asistencia'>
                                            <img className='icono' src={pendiente} alt='...' />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Administrar;