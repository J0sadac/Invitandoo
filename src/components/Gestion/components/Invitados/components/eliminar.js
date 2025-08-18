import axios from "axios";
import { useParams } from "react-router-dom";

import basura from '../../../icons/eliminar.png';

function Eliminar ({cerrar, setRecargar, seleccionar, noti}) {
    const {eventoId} = useParams();

    const activarNot = (tipo) => {
        noti(tipo);

        setTimeout(() => {
            noti(null)
        }, 2000)
    }

    const eliminarInvitado = async (id) => {
        await axios.delete(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${id}`);

        setRecargar(prev => !prev);
        activarNot('eliminado')
        cerrar();
    };

    return(
        <div className="ventana shadow-sm">
            <div className="eliminar">
                <div className="pregunta">
                    <img src={basura} alt="icono eliminar" />
                    <div>
                        <span>¿Realmente quieres eliminar a</span>
                        <span>{seleccionar.invitado}</span>
                        <span>de tu lista de invitados?</span>
                    </div>
                </div>

                <div className="botones">
                    <button onClick={() => cerrar()}>CANCELAR</button>
                    <button className="confirmar" onClick={() => eliminarInvitado(seleccionar._id)}>ELIMINAR</button>
                </div>
            </div>
        </div>
    );
};

export default Eliminar;