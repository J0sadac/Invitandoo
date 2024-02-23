
function Padres ({padres}){

    return(
        <div className="padres shadow">
            <h3>Nuestros padres</h3>
            <div className="contenedor">
                <p className="titulo">Padres del novio</p>

                <div className="papas shadow">
                    <span>{padres[0].papa}</span>
                    <span>y</span>
                    <span>{padres[0].mama}</span>
                </div>
            </div>

            <div className="contenedor">
                <p className="titulo">Padres de la novia</p>

                <div className="papas shadow">
                    <span>{padres[1].papa}</span>
                    <span>y</span>
                    <span>{padres[1].mama}</span>
                </div>
            </div>
        </div>
    );
};

export default Padres;