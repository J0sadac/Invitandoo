import { useNavigate, useParams } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

import ver from '../../../icons/ver.png';
import copiar from '../../../icons/copiar.png';
import iconoEliminar from '../../../icons/eliminar.png';

function Opciones ({invitado, abrir, setSelect, setNoti}) {
    const {eventoId} = useParams();
    const navigate = useNavigate();

    const activar = (tipo) => {
        setNoti(tipo);

        setTimeout(() => {
            setNoti(null)
        }, 2000)
    };

    const eliminar = () => {
        setSelect(invitado);
        abrir('eliminar');
    };

    return(
        <div className="opciones">
            <div className='contOp shadow'>
                <button onClick={() => (navigate(`/evento/${eventoId}/invitado/${invitado._id}`))}>
                    <img className="iconoVer" src={ver} alt="ver" />
                    <span>Ver invitación</span>
                </button>

                <CopyToClipboard text={`https://invitandoo.com/evento/${eventoId}/invitado/${invitado._id}`}>
                    <button onClick={() => activar('copiado')}>
                        <img className="iconoCop" src={copiar} alt="copiar" />
                        <span>Copiar enlace</span>
                    </button>
                </CopyToClipboard>

                <button onClick={eliminar}>
                    <img className="iconoEli" src={iconoEliminar} alt="ver" />
                    <span>Eliminar</span>
                </button>
            </div>
        </div>
    )
};

export default Opciones;