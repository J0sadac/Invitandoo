import { useMemo, useState } from 'react';

import confirmado from '../../../icons/confirmado.png';
import pendiente from '../../../icons/pendiente.png';
import declinado from '../../../icons/declinado.png';
import opciones from '../../../icons/opciones.png';
import mostrarMas from '../../../icons/mostrarMas.png';
import mostrarMenos from '../../../icons/mostrarMenos.png';

import Opciones from './opciones';

function Lista({ abrirVent, setSeleccionar, setNotifi, lista }) {
  const [comprimir, setComprimir] = useState({});
  const [opcionesAbiertas, setOpcionesAbiertas] = useState(null);

  const ordAlf = useMemo(() => {
    const agrupacion = {};

    [...lista]
      .sort((a, b) =>
        a.invitado.trim().toLocaleLowerCase('es').localeCompare(
          b.invitado.trim().toLocaleLowerCase('es'),
          'es',
          { sensitivity: 'base', ignorePunctuation: true }
        )
      )
      .forEach(inv => {
        const letra = inv.invitado.trim().charAt(0).toUpperCase();
        if (!agrupacion[letra]) agrupacion[letra] = [];
        agrupacion[letra].push(inv);
      });

    return agrupacion;
  }, [lista]);

  const inicializarComprimir = (letra) => {
    if (!(letra in comprimir)) {
      setComprimir(prev => ({ ...prev, [letra]: true }));
    }
  };

  const desplegar = (letra) => {
    setComprimir(prev => ({
      ...prev,
      [letra]: !prev[letra]
    }));
  };

  const toggleOpciones = (id) => {
    setOpcionesAbiertas(prevId => (prevId === id ? null : id));
  };

  const iconosEstado = {
    confirmado,
    pendiente,
    rechazado: declinado
  };

  return (
    <div className="lista">
      {Object.keys(ordAlf).sort().map(letra => {
        inicializarComprimir(letra);
        return (
          <div key={letra} className="seccion">
            <div className="encabezado">
              <span className="letra">{letra}</span>

              <div className="linea"></div>

              <button className="comprimir" onClick={() => desplegar(letra)}>
                <img
                  src={comprimir[letra] ? mostrarMenos : mostrarMas}
                  alt="toggle"
                />
              </button>
            </div>

            {comprimir[letra] &&
              ordAlf[letra].map(invitado => (
                <div className="contenedor" key={invitado._id}>
                  {iconosEstado[invitado.asistir] && (
                    <img
                      className="icon"
                      src={iconosEstado[invitado.asistir]}
                      alt={invitado.asistir}
                    />
                  )}

                  <span className="nombre">{invitado.invitado}</span>

                  <button
                    className="opciones-btn"
                    onClick={() => toggleOpciones(invitado._id)}
                  >
                    <img className="icon" src={opciones} alt="opciones" />
                  </button>

                  {opcionesAbiertas === invitado._id && (
                    <Opciones
                      onClose={() => setOpcionesAbiertas(null)}
                      invitado={invitado}
                      abrir={abrirVent}
                      setSelect={setSeleccionar}
                      setNoti={setNotifi}
                    />
                  )}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
