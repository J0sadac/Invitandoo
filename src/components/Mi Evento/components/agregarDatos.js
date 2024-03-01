import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import ListaDeInvitados from "./listaInvitados";
import NuevoInvitado from "./nuevoInvitado";

const AgregarDatos = function(){
    const {eventoId} = useParams();
    const [evento, setEvento] = useState();

    useEffect(() => {

        const getInvitacion = async () => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${eventoId}`);

                setEvento(res.data);
            }catch(err){
                console.log(err);
            }
        };

        getInvitacion();

    }, [eventoId]);

    return(
        <div>
            {evento ? (
            <div className="contenedor-editarEvento">
                <div className="card shadow caja">
                    <NuevoInvitado />
                </div>
    
                <div className="card shadow caja">
                    <ListaDeInvitados 
                        invitados = {evento.invitados}
                        eventoId = {evento._id}
                    />
                </div>
            </div>
            ) : (
                <div className='loading'>
                    <p>Cargando pantalla de administrador</p>

                    <div className="spinner-border spin" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <p>¡Por favor espere!</p>
                </div>
            )}
        </div>
    )
}

export default AgregarDatos;