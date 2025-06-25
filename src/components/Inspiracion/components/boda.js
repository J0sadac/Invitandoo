import { useEffect, useState } from "react";
import axios from 'axios';


function Boda(){
    const [data, setData] = useState([]);

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

    console.log(data);

    return(
        <div className="ejemplos">
            <div className="botones">
                <button>CONTACTANOS</button>
                <button>XV AÑOS</button>
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
                    <div className="invitacion" key={index}>
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