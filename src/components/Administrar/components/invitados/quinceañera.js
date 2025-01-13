import { useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";

import enlace from '../../../../multimedia/herramientas/exportar.png'
import copiar from '../../../../multimedia/herramientas/copiar.png';
import listo from '../../../../multimedia/herramientas/copiado.png';
import borrar from '../../../../multimedia/herramientas/eliminar.png'

function General ({invitados, id, eliminar}) {
    const [visualizar, setVisualizar] = useState(true);
    const [alerta, setAlerta] = useState(Array(invitados.length).fill(false));
    const [copiado, setCopiado] = useState(Array(invitados.length).fill(false));

    const confirmar = (index) => {
        setCopiado((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
        setTimeout(() => {
            setCopiado((prevState) => {
                const newState = [...prevState];
                newState[index] = false;
                return newState;
            });
        }, 1000);
    };    

    const abrir = (index) => {
        setAlerta((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };   

    const cerrarAlerta = (index) => {
        setAlerta((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    const filtro = (categoria) => {
        return invitados.filter((invitado) => invitado.de === categoria);
    }

    const invitadosFiltrados = filtro('Quinceañera');

    if (invitadosFiltrados.length === 0) {
        return null; // Si no hay invitados después de aplicar el filtro, no muestra nada
    }

    return (
        <div className="lista">
            <h3 className="titulo" onClick={() => setVisualizar(!visualizar)}>Invitados de la Quinceañera</h3>
            <div className={`${visualizar ? 'contenido' : 'cerrado'}`}>
                {invitadosFiltrados.map((invitado, index) => (
                    <div key={invitado._id} className="seccion">
                        <span className="invitado">{invitado.invitado}</span>
                        <button className="boton">
                            <Link to={`/evento/${id}/invitado/${invitado._id}`}>
                                <img className="icono" src={enlace} alt="..." />
                            </Link>
                        </button>
                        <button
                            className={`boton ${copiado[index] ? "copiado" : ""}`}
                            onClick={() => confirmar(index)}
                        >
                            <CopyToClipboard
                                text={`https://invitandoo.com/evento/${id}/invitado/${invitado._id}`}
                            >
                                {copiado[index] ? (
                                    <img className="icono" src={listo} alt="..." />
                                ) : (
                                    <img className="icono" src={copiar} alt="..." />
                                )}
                            </CopyToClipboard>
                        </button>
                        <button
                            className="boton eliminar"
                            onClick={() => abrir(index)}
                        >
                            <img className="icono" src={borrar} alt="..." />
                        </button>

                        <div className={`${alerta[index] ? 'alerta' : 'cerrado'}`}>
                            <div className="contenedor">
                                <div className="mensaje">
                                    <span>¿Seguro que quiere eliminar a: </span>
                                    <span>{invitado.invitado}</span>
                                    <span>de su lista de invitados?</span>
                                </div>
                                <div className="botones">
                                    <button className="eliminar" onClick={() => {
                                        eliminar(invitado._id);
                                        cerrarAlerta(index); 
                                    }}>
                                        Eliminar
                                    </button>

                                    <button className="cancelar" onClick={() => setAlerta((prevState) => {
                                        const newState = [...prevState];
                                        newState[index] = false;
                                        return newState;
                                    })}>
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default General;