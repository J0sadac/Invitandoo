import axios from 'axios';
import { useParams } from 'react-router-dom';

import ver from '../../../icons/ver.png';
import copiar from '../../../icons/copiar.png';
import eliminar from '../../../icons/eliminar.png';

function Opciones ({recargar, invitado}) {
    const {eventoId} = useParams();

    const eliminarInvitado = async (id) => {
        await axios.delete(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${id}`);

        recargar(prev => !prev)
    }

    return(
        <div className="opciones shadow-sm">
            <button>
                <img className="iconoVer" src={ver} alt="ver" />
                <span>Ver invitación</span>
            </button>
            <button>
                <img className="iconoCop" src={copiar} alt="ver" />
                <span>Copiar</span>
            </button>
            <button onClick={() => eliminarInvitado(invitado)}>
                <img className="iconoEli" src={eliminar} alt="ver" />
                <span>Eliminar</span>
            </button>
        </div>
    )
};

export default Opciones;