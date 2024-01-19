import React, { useState } from 'react';
import axios from 'axios';

const FormularioDatos = function(){
    
    const valorInicial = {
        evento: '',
        festejado: '',
        fecha: '',
        ciudad: 'Tuxtla Gutierrez, Chiapas, México',
        direccion: ''    
    };

    const [eventoNuevo, setEventoNuevo] = useState(valorInicial);

    const capturarDatos = (e) => {
        const {name, value} = e.target;
        setEventoNuevo({...eventoNuevo, [name]: value})
    };

    const guardarDatos = async (e) => {
        e.preventDefault();

        const nuevoEvento = {
            evento: eventoNuevo.evento,
            festejado: eventoNuevo.festejado,
            fecha: eventoNuevo.fecha,
            ciudad: eventoNuevo.ciudad,
            direccion: eventoNuevo.direccion
        };

        await axios.post('https://nueva-invitandodb.onrender.com/evento', nuevoEvento)

        setEventoNuevo({...valorInicial});
    }

    return(
        <div className='card formulario shadow'>
            <div className='card-body'>
                <form onSubmit={guardarDatos}>
                    <h2 className='titulo'>Crear un nuevo evento</h2>

                    <div className='dato'>
                        <label>Evento:</label>
                        <select
                            className='form-control'
                            required
                            name='evento'
                            value={eventoNuevo.evento}
                            onChange={capturarDatos}
                        >
                            <option value='' disabled>Selecciona tu evento</option>
                            <option value='Boda'>Boda</option>
                            <option value='XV Años'>XV Años</option>
                            <option value='Cumpleaños'>Cumpleaños</option>
                        </select>
                    </div>

                    <div className='dato'>
                        <label>Festejado:</label>
                        
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Ingresa el nombre de la persona a festejar'
                        required
                        name='festejado'
                        value={eventoNuevo.festejado}
                        onChange={capturarDatos}
                        />
                    </div>

                    <div className='dato'>
                        <label>Fecha:</label>
                        
                        <input
                        type='datetime-local'
                        className='form-control'
                        placeholder='Selecciona el dia del evento'
                        required
                        name='fecha'
                        value={eventoNuevo.fecha}
                        onChange={capturarDatos}
                        />
                    </div>

                    <div className='dato'>
                        <label>Ciudad:</label>
                        
                        <input
                        type='text'
                        className='form-control'
                        placeholder='ingresa la ciudad del evento'
                        required
                        name='ciudad'
                        value={eventoNuevo.ciudad}
                        onChange={capturarDatos}
                        />
                    </div>

                    <div className='dato'>
                        <label>Direccion:</label>
                        
                        <input
                        type='text'
                        className='form-control'
                        placeholder='ingresa la direccion del salon'
                        required
                        name='direccion'
                        value={eventoNuevo.direccion}
                        onChange={capturarDatos}
                        />
                    </div>

                    <button className='btn btn-dark form-control'>Guardar Evento</button>
                </form>
            </div>
        </div>
    )
}

export default FormularioDatos;