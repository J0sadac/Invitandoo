import { useEffect, useState } from "react";
import Formulario from "./formulario";
import axios from "axios";
import { useParams } from "react-router-dom";
import Novio from "./novio";
import Novia from "./novia";
import Papa from './papa';
import Mama from './mama';
import General from './general';

function Invitados () {
    const [evento, setEvento] = useState();
    const {eventoId} = useParams();

    const getInvitados = async (id) => {
        const res = await axios.get(`https://nueva-invitandodb.onrender.com/evento/${id}`);
        setEvento(res.data);
    };

    useEffect(() => {
        getInvitados(eventoId);
    }, [eventoId]);

    const valorInicial = {
        mesa: '',
        invitado: '',
        pase: '',
        infantes: 0,
        telefono: '',
        asistir: 'pendiente',
        de: ''
    };

    const [nuevoInvitado, setNuevoInvitado] = useState(valorInicial);

    const capturarDatos = (e) => {
        const {name, value} = e.target;
        setNuevoInvitado({...nuevoInvitado, [name]: value})
    };

    const agregarInvitado = async (e) => {
        e.preventDefault();

        const invitadoNuevo = {
            mesa: nuevoInvitado.mesa,
            invitado: nuevoInvitado.invitado,
            pase: nuevoInvitado.pase,
            infantes: nuevoInvitado.infantes,
            telefono: nuevoInvitado.telefono,
            asistir: nuevoInvitado.asistir,
            de: nuevoInvitado.de
        };

        await axios.post(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado`, invitadoNuevo);

        setNuevoInvitado(valorInicial);

        await getInvitados(eventoId);
    };

    const eliminarInvitado = async (id) => {
        await axios.delete(
          `https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${id}`
        );

        await getInvitados(eventoId);
      };

    console.log(evento)

    return(
        <>
            {evento ? (
                <div className="invitados">
                    <div className="fondo"></div>
                    <Formulario 
                        captura={capturarDatos}
                        agregar={agregarInvitado}
                        nuevo={nuevoInvitado}
                    />
                    <General
                        invitados={evento.invitados}
                        id={evento._id}
                        eliminar={eliminarInvitado}
                    />                                        
                    <Novio 
                        invitados={evento.invitados}
                        id={evento._id}
                        eliminar={eliminarInvitado}
                    />
                    <Novia 
                        invitados={evento.invitados}
                        id={evento._id}
                        eliminar={eliminarInvitado}
                    />
                    <Papa 
                        invitados={evento.invitados}
                        id={evento._id}
                        eliminar={eliminarInvitado}                    
                    />
                    <Mama
                        invitados={evento.invitados}
                        id={evento._id}
                        eliminar={eliminarInvitado}
                    />
                </div>
            ):(
                <div className='loading'>
                    <p>Cargando invitados</p>

                    <div className="spinner-border spin" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <p>¡Por favor espere!</p>
                </div>
            )}
        </>
        
    );
};

export default Invitados;