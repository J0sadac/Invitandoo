
function Pase ({invitado}) {

    return(
        <div className="pase shadow">
            <div className="invitado">
                <span className="titulo">
                    Invitado:
                </span>
                <span className="nombre">{invitado.invitado}</span>
            </div>

            {invitado.mesa && (
                <div className="mesa">
                    <span className="titulo">Mesa:</span>
                    <span>{invitado.mesa}</span>
                </div>
            )}
            
            <div className="pase">
                <span className="titulo">Pase</span>
                <span>Adultos: {invitado.pase}</span>
                <span>Niños: {invitado.infantes}</span>
            </div>
        </div>
    );
};

export default Pase;