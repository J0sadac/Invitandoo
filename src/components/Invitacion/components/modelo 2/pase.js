
function Pase ({invitado}) {

    return(
        <div className="pase shadow">
            <p className="titulo">
                Invitado:
            </p>
            <p className="invitado">{invitado.invitado}</p>
            <p>Adultos: {invitado.pase}</p>
            <p>Niños: {invitado.infantes}</p>
        </div>
    );
};

export default Pase;