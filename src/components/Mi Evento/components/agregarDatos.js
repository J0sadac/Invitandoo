import { useParams } from "react-router-dom";
import Invitacion from "./editarInvitacion";
import { useEffect, useState } from "react";
import axios from "axios";

const AgregarDatos = function(){
    const {eventoId} = useParams();
    const [evento, setEvento] = useState();

    useEffect(() => {

        const getInvitacion = async () => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/mi-evento/${eventoId}`);

                setEvento(res.data);
            }catch(err){
                console.log(err);
            }
        };

        getInvitacion();

    }, [eventoId])

    console.log(evento)

    return(
        <div className="contenedor-editarEvento">
            <div className="formulario">

            </div>

            <div className="invitacion">
                {evento? (
                    <Invitacion 
                            inv={evento.invitacion}
                    />
                ) : (
                    <div className='loading'>
                        <p>Cargando invitación</p>

                        <div className="spinner-border spin" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>

                        <p>¡Por favor espere!</p>
                    </div>
                )}
            </div> 

            <div className="datos">

            </div>
        </div>
    )
}

export default AgregarDatos;