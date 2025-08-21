import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Agregar({cerrar, setRecargar}) {
  const {eventoId} = useParams();

  const estadoInicial = {
    invitado: '',
    mesa: '',
    pase: '',
    infantes: '',
    telefono: '',
    asistir: 'pendiente',
    de: ''
  };

  const [nuevoInvitado, setNuevoInvitado] = useState(estadoInicial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoInvitado((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarInvitado = async (e) => {
    e.preventDefault();

    const datos = {
      invitado: nuevoInvitado.invitado,
      mesa: nuevoInvitado.mesa,
      pase: nuevoInvitado.pase,
      infantes: nuevoInvitado.infantes,
      telefono: nuevoInvitado.telefono,
      asistir: nuevoInvitado.asistir,
      de: nuevoInvitado.de
    };

    await axios.post(`https://nueva-invitandodb.onrender.com/evento/${eventoId}/invitado`, datos);

    setNuevoInvitado(estadoInicial);
    setRecargar(prev => !prev);
  };

  return (
    <div className='ventana'>
      <div className="agregar">
        <p className="titulo">Nuevo invitado</p>

        <button className="cerrar" onClick={cerrar}>X</button>

        <form className="formulario" onSubmit={agregarInvitado}>
          <input
            type="text"
            placeholder="Nombre del invitado"
            name="invitado"
            required
            value={nuevoInvitado.invitado}
            onChange={handleChange}
            className="dato"
          />

          <input
            type="number"
            placeholder="Mesa"
            name="mesa"
            value={nuevoInvitado.mesa}
            onChange={handleChange}
            className="dato"
          />

          <input
            type="number"
            placeholder="Pase para adultos"
            name="pase"
            value={nuevoInvitado.pase}
            onChange={handleChange}
            className="dato"
          />

          <input
            type="number"
            placeholder="Pase para niños"
            name="infantes"
            value={nuevoInvitado.infantes}
            onChange={handleChange}
            className="dato"
          />

          <input
            type="number"
            placeholder="Telefono"
            name="telefono"
            value={nuevoInvitado.telefono}
            onChange={handleChange}
            className="dato"
          />

          <select
            className="dato select"
            name="de"
            value={nuevoInvitado.de}
            onChange={handleChange}
          >
            <option value="" disabled>
              ¿De quien es el invitado?
            </option>
            <option value="Novio">Novio</option>
            <option value="Novia">Novia</option>
            <option value="Mama">Mamá</option>
            <option value="Papa">Papá</option>
            <option value="Quinceañera">Quinceañera</option>
          </select>

          <button className="boton">AGREGAR INVITADO</button>
        </form>
      </div>
    </div>
  );
}

export default Agregar;