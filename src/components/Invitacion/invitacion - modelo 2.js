import Portada from './components/modelo 2/portada';
import Invitacion from './components/modelo 2/invitacion';
import Padres from './components/modelo 2/padres';
import Pase from './components/modelo 2/pase';
//import Itinerario from './components/modelo 2/itinerario';
//import Vestimenta from './components/modelo 2/vestimenta';
import Regalo from './components/modelo 2/regalo';
import Imagen from './components/modelo 2/imagen';
import Reproductor from '../tools/cancion/alertaReproductor';
import Confirmacion from './components/modelo 2/confirmacion';
import Ubicacion from './components/modelo 2/ubicacion';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Invitaciones () {
    const {eventoId, invitadoId} = useParams();
    const [evento, setEvento] = useState();

    useEffect(() => {
        const getInvitacion = async () => {
            try{
                const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${invitadoId}`);

                setEvento(res.data);
            }catch(err){
                console.log(err);
            }
        }

        getInvitacion();
    }, [eventoId, invitadoId]);

    return(
        <>
            {evento ? (
                <div className='modeloDos'>
                    <div className='fondo' style={{ backgroundImage: `url(${evento.multimedia.fondo.url})`}}></div>
                    <Reproductor />

                    <Portada 
                        novios = {evento.datos.novios}
                        portada = {evento.multimedia.carousel}
                    />
                    <Padres 
                        padres = {evento.datos.padres}
                    />
                    {/* <Itinerario 
                        itinerario = {evento.itinerario}
                    /> */}
                    <Invitacion 
                        lugar = {evento.datos.lugar}
                        fecha = {evento.datos.fecha}
                    />
                    <Pase 
                        invitado = {evento.invitados}
                    />
                    {/* <Vestimenta 
                        vestimenta = {evento.vestimenta}
                    /> */}
                    <Regalo 
                        regalo={evento.mesaDeRegalos[0]}
                    />
                    <Confirmacion />
                    <Ubicacion />
                    <Imagen 
                        frase = {evento.frases}
                    />
                </div>
            ):(
                <div className='loading'>
                    <p>Cargando invitación</p>

                    <div className="spinner-border spin" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <p>¡Por favor espere!</p>
                </div>
            )}
        </>
    )
}

export default Invitaciones;