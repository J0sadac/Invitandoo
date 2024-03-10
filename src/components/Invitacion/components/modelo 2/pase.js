
function Pase ({invitado}) {

    return(
        <div className="pase shadow">
            <div className="invitado">
                <p className="titulo">
                    Invitado:
                </p>
                <span className="nombre">{invitado.invitado}</span>
            </div>

            {invitado.mesa? (
                <div className="mesa">
                    <span className="titulo">Mesa:</span>
                    <span>{invitado.mesa}</span>
                </div>
            ):(
                <>
                </>
            )}
            <div className="pase">
                <span className="titulo">Pase para:</span>
                <span>{invitado.pase} adultos y {invitado.infantes} niños</span>
            </div>
        </div>
    );
};

export default Pase;