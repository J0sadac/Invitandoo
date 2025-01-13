import { Link } from "react-router-dom";

function Regalo ({regalo}){

    return(
        <Link className='regalo shadow' to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/${regalo[0].codigo}`}>
            <h3 className='titulo'>Mesa de regalos</h3>
            <div className="contenido">
                <img className='icono img-fluid' src={regalo[0].icono} alt='...' />
                <p className='codigo'>{regalo[0].modalidad}: {regalo[0].codigo}</p>
            </div>

            <p className="anuncio">¡Haz Click!</p>
        </Link>
    );
};

export default Regalo;
