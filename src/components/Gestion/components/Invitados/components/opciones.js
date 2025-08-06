import { useParams } from 'react-router-dom';

import ver from '../../../icons/ver.png';
import copiar from '../../../icons/copiar.png';
import iconoEliminar from '../../../icons/eliminar.png';
import CopyToClipboard from 'react-copy-to-clipboard';

function Opciones ({invitado, abrir, select}) {
    const {eventoId} = useParams();

    const eliminar = () => {
        select(invitado);
        abrir('eliminar');
    };

    return(
        <div className="opciones shadow-sm">
            <button >
                <img className="iconoVer" src={ver} alt="ver" />
                <span>Ver invitación</span>
            </button>

            <CopyToClipboard text={`https://invitandoo.com/evento/${eventoId}/invitado/${invitado._id}`}>
                <button>
                    <img className="iconoCop" src={copiar} alt="copiar" />
                    <span>Copiar</span>
                </button>
            </CopyToClipboard>

            <button onClick={eliminar}>
                <img className="iconoEli" src={iconoEliminar} alt="ver" />
                <span>Eliminar</span>
            </button>
        </div>
    )
};

export default Opciones;