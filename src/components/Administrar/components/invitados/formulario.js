
import { useState } from "react";

function Formulario ({agregar, captura, nuevo}) {
    const [desplegar, setDesplegar] = useState(false); 

    return(
        <div className='formulario shadow-lg'>
            <h3 className="titulo" onClick={() => setDesplegar(!desplegar)}>Agregar invitados</h3>
            <div className={`${desplegar ? 'abierto' : 'cerrado'}`}>
                <form className="captura" onSubmit={agregar}>
                    <div className='dato'>
                        <label>Nombre del invitado:</label>
                            
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Ingresa el nombre del invitado'
                        required
                        name='invitado'
                        value={nuevo.invitado}
                        onChange={captura}
                        />
                    </div>

                    <div className='dato'>
                        <label>Mesa:</label>
                            
                        <input
                        type= 'number'
                        className='form-control'
                        placeholder='Asigna una mesa'
                        name='mesa'
                        value={nuevo.mesa}
                        onChange={captura}
                        />
                    </div>

                    <div className='dato'>
                        <label>Pase:</label>
                            
                        <input
                        type= 'number'
                        className='form-control'
                        placeholder='¿Para cuantas personas?'
                        name='pase'
                        value={nuevo.pase}
                        onChange={captura}
                        />
                    </div>

                    <div className='dato'>
                        <label>Niños:</label>
                            
                        <input
                        type= 'number'
                        className='form-control'
                        placeholder='¿Cuantos niños van?'
                        name='infantes'
                        value={nuevo.infantes}
                        onChange={captura}
                        />
                    </div>

                    <div className='dato'>
                        <label>Telefono:</label>
                            
                        <input
                        type= 'number'
                        className='form-control'
                        placeholder='Agregue un numero telefonico'
                        name='telefono'
                        value={nuevo.telefono}
                        onChange={captura}
                        />
                    </div>

                    <div className='dato'>
                            <label>De:</label>
                            <select
                                className='form-control'
                                name='de'
                                value={nuevo.de}
                                onChange={captura}
                            >
                                <option value='' disabled>De quien es el invitado?</option>
                                <option value='Novio'>Novio</option>
                                <option value='Novia'>Novia</option>
                                <option value='Mama'>Mamá</option>
                                <option value='Papa'>Papá</option>
                                <option value='Quinceañera'>Quinceañera</option>
                            </select>
                        </div>

                    <button className='enviar'>Agregar invitado</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;