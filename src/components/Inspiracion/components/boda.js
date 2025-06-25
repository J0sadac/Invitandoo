import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Boda(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const changePage = (ruta) =>{
        navigate(`/inspiracion/${ruta}`)
    };

    useEffect(() => {
        const getEventos = async () => {
            try{
                const res = await 
                axios.get('https://nueva-invitandodb.onrender.com/eventos/boda');

                setData(res.data);
            }catch(err){
                console.log(err)
            };
        };

        getEventos();
    }, []);

    return(
        <div className="ejemplos">
            <div className="botones">
                <button>CONTÁCTANOS</button>
                <button onClick={() => changePage('xv')}>XV AÑOS</button>
            </div>

            <div className="anuncio">
                <p className="encabezado">¿Te vas a casar?</p>
                <p className="texto">
                    Descubre diseños que capturan 
                    la esencia del amor y la celebración, 
                    perfectos para hacer tu día especial inolvidable.
                </p>
            </div>

            <div className="galeria">
                {data.map((dato, index) => (
                    <div 
                        className="invitacion" 
                        key={index}
                        onClick={() => (
                            navigate(`/evento/${dato.id}/invitado/${dato.invitado}`)
                        )}
                    >
                        <img 
                            className="preportada" 
                            src={dato.multimedia.preportada[0].url} 
                            alt={dato.datos.festejado} 
                        />

                        <p className="festejado">{dato.datos.festejado}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boda;