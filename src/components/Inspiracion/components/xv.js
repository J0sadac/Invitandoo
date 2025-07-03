import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Xv(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const changePage = (ruta) =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/inspiracion/${ruta}`)
    };

    useEffect(() => {
        const getEventos = async () => {
            try{
                const res = await 
                axios.get('https://nueva-invitandodb.onrender.com/eventos/xv');

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
                <button onClick={() => changePage('boda')}>BODA</button>
            </div>

            <div className="anuncio">
                <p className="encabezado">Hazlo a tu estilo</p>
                <p className="texto">
                    Refleja la alegria y emoción de este momento
                    especial. Explora nuestros diseños que
                    harán que tu celebración sea
                    única y memorable.
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

export default Xv;