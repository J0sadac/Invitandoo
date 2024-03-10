import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function NuevoInvitado () {
    const eventoId = useParams();

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
    }

    return(
        <div className="formulario card-body"> 
            <form onSubmit={agregarInvitado}>
                <h2 className="titulo"> Agregar un nuevo invitado</h2>

                <div className='dato'>
                    <label>Nombre del invitado:</label>
                        
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Ingresa el nombre del invitado'
                    required
                    name='invitado'
                    value={nuevoInvitado.invitado}
                    onChange={capturarDatos}
                    />
                </div>

                <div className='dato'>
                    <label>Mesa:</label>
                        
                    <input
                    type= 'number'
                    className='form-control'
                    placeholder='Asigna una mesa'
                    name='mesa'
                    value={nuevoInvitado.mesa}
                    onChange={capturarDatos}
                    />
                </div>

                <div className='dato'>
                    <label>Pase:</label>
                        
                    <input
                    type= 'number'
                    className='form-control'
                    placeholder='¿Para cuantas personas?'
                    name='pase'
                    value={nuevoInvitado.pase}
                    onChange={capturarDatos}
                    />
                </div>

                <div className='dato'>
                    <label>Niños:</label>
                        
                    <input
                    type= 'number'
                    className='form-control'
                    placeholder='¿Cuantos niños van?'
                    name='infantes'
                    value={nuevoInvitado.infantes}
                    onChange={capturarDatos}
                    />
                </div>

                <div className='dato'>
                    <label>Telefono:</label>
                        
                    <input
                    type= 'number'
                    className='form-control'
                    placeholder='Agregue un numero telefonico'
                    name='telefono'
                    value={nuevoInvitado.telefono}
                    onChange={capturarDatos}
                    />
                </div>

                <div className='dato'>
                        <label>De:</label>
                        <select
                            className='form-control'
                            name='de'
                            value={nuevoInvitado.de}
                            onChange={capturarDatos}
                        >
                            <option value='' disabled>De quien es el invitado?</option>
                            <option value='Novio'>Novio</option>
                            <option value='Novia'>Novia</option>
                            <option value='Mama'>Mamá</option>
                            <option value='Papa'>Papá</option>
                        </select>
                    </div>

                <button className='btn btn-dark form-control'>Agregar invitado</button>
            </form>
        </div>
    );
};

export default NuevoInvitado;