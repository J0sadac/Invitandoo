import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Editar ({cerrar, seleccionar, setRecargar}) {
    const {eventoId} = useParams();

    const estadoActual={
            invitado: '',
            mesa: '',
            pase: '',
            infantes: '',
            telefono: '',
            asistir: 'pendiente',
            de: ''
    };

    const [invEditado, setInvEditado] = useState(estadoActual);

    useEffect(() => {
        if(seleccionar){
            setInvEditado(seleccionar)
        }
    }, [seleccionar])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvEditado((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const editarInvitado = async (e) => {
        e.preventDefault();

        const datos = {
            invitado: invEditado.invitado,
            mesa: invEditado.mesa,
            pase: invEditado.pase,
            infantes: invEditado.infantes,
            telefono: invEditado.telefono,
            asistir: invEditado.asistir,
            de: invEditado.de
        };

        await axios.put(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado/${seleccionar._id}/editar`, datos);

        setInvEditado(estadoActual);
        setRecargar(prev => !prev);
        cerrar();
    }


    return(
        <div className='ventana'>
            <div className="agregar">
                <p className="titulo">Editar invitado</p>

                <button className="cerrar" onClick={cerrar}>X</button>

                <form className="formulario" onSubmit={editarInvitado}>
                    <label className="formTitulo">Invitado:</label>
                    <input
                        type="text"
                        placeholder="Nombre del invitado"
                        name="invitado"
                        required
                        value={invEditado.invitado}
                        onChange={handleChange}
                        className="dato"
                    />

                    <label className="formTitulo">Mesa:</label>
                    <input
                        type="number"
                        placeholder="Mesa"
                        name="mesa"
                        value={invEditado.mesa}
                        onChange={handleChange}
                        className="dato"
                    />

                    <label className="formTitulo">Adultos:</label>
                    <input
                        type="number"
                        placeholder="Pase para adultos"
                        name="pase"
                        value={invEditado.pase}
                        onChange={handleChange}
                        className="dato"
                    />

                    <label className="formTitulo">Niños:</label>
                    <input
                        type="number"
                        placeholder="Pase para niños"
                        name="infantes"
                        value={invEditado.infantes}
                        onChange={handleChange}
                        className="dato"
                    />

                    <label className="formTitulo">Telefono:</label>
                    <input
                        type="number"
                        placeholder="Telefono"
                        name="telefono"
                        value={invEditado.telefono}
                        onChange={handleChange}
                        className="dato"
                    />

                    <button className="boton">GUARDAR</button>
                </form>
            </div>
        </div>
    );
};

export default Editar