import { useState } from "react";

import Invitados from "./components/Invitados/invitados";
import Mesas from "./components/Mesas/mesas";

import logo from './icons/icono-cian.png';

function Gestion (){
    const [activo, setActivo] = useState('invitados');
 

    return(
        <section id="gestion" className="gestion">
            <div className="secciones">
                <button className={`boton ${activo === 'invitados' && 'activo'}`}
                    onClick={() => setActivo('invitados')}
                >
                    INVITADOS
                </button>
                <button className={`boton ${activo === 'mesas' && 'activo'}`}
                    onClick={() => setActivo('mesas')}
                >
                    MESAS
                </button>
            </div>

            {activo === 'invitados' && (
                <Invitados />
            )}

            {activo === 'mesas' && (
                <Mesas />
            )}

            <img className="logo" src={logo} alt="logotipo Invitandoo" />
        </section>
    )
}

export default Gestion;