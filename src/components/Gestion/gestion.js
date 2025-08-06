import { useEffect, useState } from "react";
import axios from "axios";

import Invitados from "./components/Invitados/invitados";
import Mesas from "./components/Mesas/mesas";

import logo from './icons/icono-cian.png';
import { useParams } from "react-router-dom";

function Gestion (){
    const {eventoId} = useParams();
    const [listaDeInvitados, setListaDeInvitados] = useState([])
    const [activo, setActivo] = useState('invitados');

    useEffect(() => {
        const getInvitados = async (id) => {
            const res = await axios.get(`https://nueva-invitandodb.onrender.com/invitados/${id}`)
    
            setListaDeInvitados(res.data)
        }
    
        getInvitados(eventoId);
    }, [eventoId]) 

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
                <Invitados 
                    listaInvitados={listaDeInvitados}
                />
            )}

            {activo === 'mesas' && (
                <Mesas 
                    invitados={listaDeInvitados}
                />
            )}

            <img className="logo" src={logo} alt="logotipo Invitandoo" />
        </section>
    )
}

export default Gestion;