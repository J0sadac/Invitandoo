import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AgregarDatos = function(){
    const {eventoId} = useParams();
    const [evento, setEvento] = useState();

    useEffect(() => {

        const getInvitacion = async () => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/`);

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

            <div className="datos">

            </div>
        </div>
    )
}

export default AgregarDatos;