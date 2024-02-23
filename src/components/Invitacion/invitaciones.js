import Modelo1 from './invitacion - modelo 1';
import Modelo2 from './invitacion - modelo 2';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Invitaciones (){
    const {eventoId, invitadoId} = useParams();
    const [evento, setEvento] = useState();

    useEffect(() => {
        const getInvitacion = async () => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`)

                setEvento(res.data);
            }catch(err){
                console.log(err)
            }
        };

        getInvitacion();

    }, [eventoId, invitadoId]);

    console.log(evento);

    return(
        <div>
            {evento?.modelo === 1 ? (
                <Modelo1 />
            ) : evento?.modelo === 2 ? (
                <Modelo2 />
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
    );
};

export default Invitaciones;