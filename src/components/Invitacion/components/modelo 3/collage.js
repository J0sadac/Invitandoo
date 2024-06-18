

function Collage ({img}) {

    return(
        <section className="collage">
            <p className="titulo">Collage</p>
            <div className='contenedor'>
                <img className="img uno" src={img} alt="..." />
                <img className="img dos" src={img} alt="..." />
                <img className="img tres" src={img} alt="..." />
                <img className="img cuatro" src={img} alt="..." />
                <img className="img cinco" src={img} alt="..." />
                <img className="img seis" src={img} alt="..." />
            </div>
        </section>
    );
};

export default Collage;