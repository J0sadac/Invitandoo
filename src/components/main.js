import { useEffect, useState } from 'react';
import axios from 'axios';
import Tarjeta from './tools/tarjeta';

function Main (){
    const [evento, setEvento] = useState();

    useEffect (() =>{
        const getEventos = async () =>{
            try{
                const res = await axios.get('https://nueva-invitandodb.onrender.com/eventos');

                setEvento(res.data);
            }catch(err){
                console.log(err);
            };
        };

        getEventos();
    }, []);

    const filtro = evento?.filter((e) => (
        e.multimedia?.preportada.length !== 0 &&
        e.datos?.festejado !== 'null' &&
        e?.evento !== 'null' &&
        e?.invitados?.invitado !== 'null' 
        )); 

    return(
        <div className='contenedor-main'>
            {filtro? (
                <div className='contenedor-tarjeta'>
                    {filtro.map((e, index) => (
                        <Tarjeta 
                            key= {index}
                            carousel= {e.multimedia.preportada}
                            evento = {e}
                            festejado= {e.datos.festejado}
                            tipoDeEvento= {e.evento}
                        />
                    ))}
                </div>
            ):(
                <div className='loading'>
                    <p>Cargando menu principal</p>

                    <div className="spinner-border spin" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    <p>¡Por favor espere!</p>
                </div>
            )}
        </div>
    );
}

export default Main;

// "npm start" para arrancar React.js