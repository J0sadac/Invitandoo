
function Imagen({frase, portada}){

    return(
        <div className='imagen' style={{ backgroundImage: `url(${portada[1].url})`}}>
            <p className='frase'>
                {frase[0]}
            </p>
        </div>
    );
};

export default Imagen;