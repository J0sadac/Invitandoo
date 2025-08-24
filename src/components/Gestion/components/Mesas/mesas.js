import { useState } from "react";

import Eliminar from "../Invitados/components/eliminar";
import Estadisticas from "./components/estadisticas";
import Lista from "./components/lista";
import Notificaciones from "../Invitados/components/notificaciones";
import Editar from "./components/editar";
import Cambiar from "./components/cambiar";

function Mesas({listaInvitados, setRecargado}){
    const [ventana, setVentana] = useState(null);
    const [seleccionado, setSeleccionado] = useState(null); //ID del invitado que se esta editando
    const [notifi, setNotifi] = useState(null);

    const mesasDivididas = (invitados) => {
        const mesas = {}

        invitados.forEach(invitado => {
            const numMesa = invitado.mesa || 'Sin mesa';

            if(!mesas[numMesa]){
                mesas[numMesa] = []
            }

            mesas[numMesa].push(invitado)
        });

        return mesas;
    }
    const listaDeMesas = mesasDivididas(listaInvitados);
    
    const abrirVent = (vent) => setVentana(vent);
    const cerrarVent = () => setVentana(null);



    return(
        <section className="administrar">
            <Estadisticas 
                mesas={listaDeMesas}
            />

            <Lista 
                lista={listaDeMesas}
                abrir={abrirVent}
                setSeleccionar={setSeleccionado}

            />

            {notifi && (
                <Notificaciones 
                    tipo={notifi}
                />
            )}

            {ventana === 'eliminar' && (
                <Eliminar 
                    seleccionar={seleccionado}
                    cerrar={cerrarVent}
                    setNotifi={setNotifi}
                    setRecargar={setRecargado}
                />
            )}

            {ventana === 'editar' && (
                <Editar 
                    cerrar={cerrarVent}
                    seleccionar={seleccionado}
                    setRecargar={setRecargado}
                    setNoti={setNotifi}
                />
            )}

            {ventana === 'cambiar' &&(
                <Cambiar 
                    cerrar={cerrarVent}
                    seleccionar={seleccionado}
                    mesas={listaDeMesas}
                    setRecargar={setRecargado}
                    setNoti={setNotifi}
                />
            )}
        </section>
    );
};

export default Mesas;