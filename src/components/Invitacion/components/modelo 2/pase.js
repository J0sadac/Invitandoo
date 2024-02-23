
function Pase ({invitado}) {

    return(
        <div className="pase shadow">
            <p>
                Invitado:
            </p>
            <p className="invitado">{invitado.invitado}</p>
            <p>Pase para {invitado.pase}</p>
            <p>Niños: {invitado.infantes}</p>
        </div>
    );
};

export default Pase;