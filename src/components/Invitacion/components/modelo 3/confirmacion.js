
function Confirmacion () {

    return(
        <section className="confirmacion">
            <span className="titulo">Por favor, confirma tu asistencia</span>

            <div className="confirmar">
                <p>¡Para nosotros es de vital importancia que confirmes tu asistencia!</p>
                <div className="botones">
                    <button className="si">Asistiré</button>
                    <button className="no">No asistiré</button>
                </div>
            </div>
        </section>
    );
};

export default Confirmacion;