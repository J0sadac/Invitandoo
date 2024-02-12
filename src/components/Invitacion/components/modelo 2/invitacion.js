
function Invitacion (){

    return(
        <div className="invitacion shadow">
            <div className="fecha">
                <p>06 Abril 2024</p>
            </div>
            <div className="direccion">
                <p>Pichanchas mirador.</p>
                <p>Carr. Tuxtla Villaflores Km. 2, Ejido de, 29089 Copoya, Chis.</p>
                <p>Tuxtla Gutierrez, Chiapas, México</p>
            </div>
            <div className="contador">
                <div className="tiempo shadow">
                    <span className="segundero">
                        56
                    </span>
                    <span>
                        DIAS
                    </span>
                </div>
                <div className="tiempo shadow">
                    <span className="segundero">
                        20
                    </span>
                    <span>
                        HRS
                    </span>
                </div>
                <div className="tiempo shadow">
                    <span className="segundero">
                        59
                    </span>
                    <span>
                        MNTS
                    </span>
                </div>
                <div className="tiempo shadow">
                    <span className="segundero">
                        30
                    </span>
                    <span>
                        SEG
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Invitacion;