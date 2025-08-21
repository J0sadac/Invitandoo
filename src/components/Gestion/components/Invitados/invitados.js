import { useEffect, useState } from 'react';

import Agregar from './components/agregar';
import Lista from './components/lista';
import Eliminar from './components/eliminar';
import Notificaciones from './components/notificaciones';

import mas from '../../icons/mas.png';

function Invitados ({listaInvitados, setRecargado}) {
    const [visible, setVisible] = useState(null); //permite activar una ventana emergente
    const [noti, setNoti] = useState(null); //activa notificaciones de retroalimentacion para el usuario
    const [select, setSelect] = useState(null); //hook para mantener seleccionado el id de un invitado
    const [estadisticas, setEstadisticas] = useState({
        total: 0,
        confirmados: 0,
        pendientes: 0,
        declinados: 0
    });

    useEffect(() => { //funcion para obtener las estadisticas del evento
        let total = 0;
        let confirmados = 0;
        let pendientes = 0;
        let declinados = 0;

        for(let invitado of listaInvitados){
            const pases = parseInt(invitado.pase || 0);
            const infantes = parseInt(invitado.infantes || 0);
            const sumaTotal = pases + infantes;
    
            total += sumaTotal;
    
            if(invitado.asistir === 'confirmado') confirmados += sumaTotal;
            if(invitado.asistir === 'pendiente') pendientes += sumaTotal;
            if(invitado.asistir === 'rechazado') declinados += sumaTotal;
        }

        setEstadisticas({
            total,
            confirmados,
            pendientes,
            declinados
        });

    }, [listaInvitados])

    const abrirVentana = (ventana) => setVisible(ventana);
    const cerrarVentana = () => setVisible(null);

    return(
        <div className="administrar">
            <div className="estadisticas">
                <div className="datos">
                    <div className="categoria">
                        Total
                    </div>
                    <div className="dato">
                        {estadisticas.total}
                    </div>
                </div>

                <div className="datos">
                    <div className="categoria">
                        Confirmados
                    </div>
                    <div className="dato">
                        {estadisticas.confirmados}
                    </div>
                </div>

                <div className="datos">
                    <div className="categoria">
                        Pendientes
                    </div>
                    <div className="dato">
                        {estadisticas.pendientes}
                    </div>
                </div>

                <div className="datos">
                    <div className="categoria">
                        Declinados
                    </div>
                    <div className="dato">
                        {estadisticas.declinados}
                    </div>
                </div>
            </div>

            <button className="agregar-btn" onClick={() => abrirVentana('agregar')}>
                <div className='icono'>
                    <img src={mas} alt='agregar' />
                </div>

                <p>AGREGAR INVITADO</p>
            </button>

            {visible === 'agregar' && (
                <Agregar 
                   cerrar={cerrarVentana}
                   setRecargar={setRecargado} 
                />
            )}

            {visible === 'eliminar' && (
                <Eliminar 
                    setRecargar={setRecargado}
                    cerrar={cerrarVentana}
                    seleccionar={select}
                    setNotifi={setNoti}
                />
            )}

            {noti && (
                <Notificaciones 
                    tipo={noti}
                />
            )}

            <Lista 
                abrirVent = {abrirVentana}
                setSeleccionar = {setSelect}
                setNotifi= {setNoti}
                lista={listaInvitados}
            />
        </div>
    )
}

export default Invitados;