import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import confirmado from '../../../icons/confirmado.png';
import pendiente from '../../../icons/pendiente.png';
import declinado from '../../../icons/declinado.png';
import opciones from '../../../icons/opciones.png';
import mostrarMas from '../../../icons/mostrarMas.png';
import mostrarMenos from '../../../icons/mostrarMenos.png';

import Opciones from './opciones';

function Lista ({datos, recargarLista, setRecargarLista}) {
    const {eventoId} = useParams();

    const [listaInvitados, setListaInvitados] = useState([]);
    const [comprimir, setComprimir] = useState({});
    const [opcionesAbiertas, setOpcionesAbiertas] = useState(null);    

    const desplegar = (letra) => {
        setComprimir(prev => ({
            ...prev,
            [letra] : !prev[letra]
        }))
    };

    const toggleOpciones = (id) => {
        setOpcionesAbiertas(prevId => prevId === id ? null : id);
    };

    useEffect(() => {
        const getListaInvitados = async (id) => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/invitados/${id}`);

                const listaOrdenada = res.data.sort((a, b) =>
                    a.invitado.trim().toLocaleLowerCase('es').localeCompare(
                        b.invitado.trim().toLocaleLowerCase('es'),
                        'es',
                        { sensitivity: 'base', ignorePunctuation: true }
                    )
                );

                setListaInvitados(listaOrdenada);

                let total = 0;
                let confirmados = 0;
                let pendientes = 0;
                let declinados = 0;

                for(let invitado of listaOrdenada){
                    const pases = parseInt(invitado.pase || 0);
                    const infantes = parseInt(invitado.infantes || 0);
                    const sumaTotal = pases + infantes;

                    total += sumaTotal;

                    if(invitado.asistir === 'confirmado') confirmados += sumaTotal;
                    if(invitado.asistir === 'pendiente') pendientes += sumaTotal;
                    if(invitado.asistir === 'rechazado') declinados += sumaTotal;
                }

                datos({
                    total,
                    confirmados,
                    pendientes,
                    declinados
                })

            }catch(error){
                console.error('Error al obtener la lista de invitados:', error);
                setListaInvitados([]);
            }
        };

        getListaInvitados(eventoId);
    }, [eventoId, datos, recargarLista]);

    const ordAlf = useMemo(() => {
        const agrupacion = {};

        listaInvitados.forEach(inv => {
            const letra = inv.invitado.trim().charAt(0).toUpperCase();

            if(!agrupacion[letra]){
                agrupacion[letra] = []
            }

            agrupacion[letra].push(inv);
        });

        return agrupacion;
    }, [listaInvitados]);

    useEffect(() => {
        const estadoInicial = {};
        for (let letra of Object.keys(ordAlf)) {
            estadoInicial[letra] = true;
        }
        setComprimir(estadoInicial);
    }, [ordAlf]);

    return(
        <div className="lista">
            {Object.keys(ordAlf).sort().map(letra => (
                <div key={letra} className="seccion">
                    <div className='encabezado'>
                        <span className="letra">{letra}</span>

                        <div className='linea'></div>

                        <button className='comprimir' onClick={() => desplegar(letra)}>
                            {comprimir[letra]? (
                                <img src={mostrarMenos} alt='mas' />
                            ):(
                                <img src={mostrarMas} alt='mas' />
                            )}
                        </button>
                    </div>

                    {comprimir[letra] && ordAlf[letra].map(invitado => (
                        <div className='contenedor' key={invitado._id}>
                            {invitado.asistir === 'confirmado' && <img className="icon" src={confirmado} alt="Confirmado" />}
                            {invitado.asistir === 'pendiente' && <img className="icon" src={pendiente} alt="Pendiente" />}
                            {invitado.asistir === 'rechazado' && <img className="icon" src={declinado} alt="Declinado" />}
                            
                            <span className="nombre">{invitado.invitado}</span>

                            <button className="opciones-btn" onClick={() => toggleOpciones(invitado._id)}>
                                <img className='icon' src={opciones} alt='opciones' />
                            </button>

                            {opcionesAbiertas === invitado._id && (
                                <Opciones 
                                    onClose={() => setOpcionesAbiertas(null)}
                                    recargar={setRecargarLista}
                                    invitado={invitado._id}
                                />
                            )}

                        </div>
                    ))}
                </div>
            ))}
        </div>

    )
};

export default Lista;