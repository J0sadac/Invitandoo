import Modelo1 from './invitacion - modelo 1';
import Modelo2 from './invitacion - modelo 2';
import Modelo3 from './invitacion - modelo 3';

import loading from '../../multimedia/herramientas/gif-loading.gif'

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
        <>
            {evento?.modelo === 1 ? (
                <Modelo1 
                    evento = {evento}
                />
            ) : evento?.modelo === 2 ? (
                <Modelo2 
                    evento = {evento}
                />
            ) : evento?.modelo === 3 ? (
                <Modelo3 
                    evento = {evento}
                    festejado={evento.datos.festejado}
                />
            ) : (
                <section id='loading' className='loading'>
                    <img className='gif' src={loading} alt='loading...' />
                </section>
            )}
        </>
    );
};

export default Invitaciones;