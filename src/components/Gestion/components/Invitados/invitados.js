import { useState } from 'react';

import mas from '../../icons/mas.png';

import Agregar from './components/agregar';
import Lista from './components/lista';
import Eliminar from './components/eliminar';
import Notificaciones from './components/notificaciones';

function Invitados ({listaInvitados}) {
    const [visible, setVisible] = useState(null)
    const [noti, setNoti] = useState(null)

    const [estadisticas, setEstadisticas] = useState({
        total: 0,
        confirmados: 0,
        pendientes: 0,
        declinados: 0
    })

    const [invitados, setInvitados] = useState(false);
    const [select, setSelect] = useState(null)

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
                   recargarLista={setInvitados}  
                />
            )}

            {visible === 'eliminar' && (
                <Eliminar 
                    setRecargarLista={setInvitados}
                    cerrar={cerrarVentana}
                    seleccionar={select}
                    noti={setNoti}
                />
            )}

            {noti && (
                <Notificaciones 
                    tipo={noti}
                />
            )}

            <Lista 
                datos={setEstadisticas}
                recargarLista={invitados}
                abrirVent = {abrirVentana}
                setSeleccionar = {setSelect}
                notificacion= {setNoti}
            />
        </div>
    )
}

export default Invitados;