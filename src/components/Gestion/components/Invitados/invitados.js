import { useState } from 'react';
import mas from '../../icons/mas.png';
import Agregar from './components/agregar';
import Lista from './components/lista';

function Invitados () {
    const [mostrarForm, setMostrarForm] = useState(false)
    const [estadisticas, setEstadisticas] = useState({
        total: 0,
        confirmados: 0,
        pendientes: 0,
        declinados: 0
    })

    const [invitados, setInvitados] = useState(false);

    const abrirForm = () => setMostrarForm(true);
    const cerrarForm = () => setMostrarForm(false)

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

            <button className="agregar-btn" onClick={abrirForm}>
                <div className='icono'>
                    <img src={mas} alt='agregar' />
                </div>

                <p>AGREGAR INVITADO</p>
            </button>

            {mostrarForm && (
                <Agregar 
                   cerrar={cerrarForm}
                   recargarLista={setInvitados}  
                />
            )}

            <Lista 
                datos={setEstadisticas}
                recargarLista={invitados}
                setRecargarLista={setInvitados}
            />
        </div>
    )
}

export default Invitados;