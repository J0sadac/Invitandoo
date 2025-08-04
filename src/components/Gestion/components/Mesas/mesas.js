import { useState } from "react";
import Lista from "./components/lista";

function Mesas(){
    const [estadisticas, setEstadisticas] = useState({
        total: 0,
        completas: 0,
        pendientes: 0
    })

    return(
        <section className="administrar">
            <div className="estadisticas">
                <div className="datos">
                    <div className="categoria">
                        Total
                    </div>
                    <div className="dato">
                        {estadisticas.total}
                    </div>
                </div>

                <div className="datos">
                    <div className="categoria">
                        Confirmados
                    </div>
                    <div className="dato">
                        {estadisticas.completas}
                    </div>
                </div>

                <div className="datos">
                    <div className="categoria">
                        Pendientes
                    </div>
                    <div className="dato">
                        {estadisticas.pendientes}
                    </div>
                </div>
            </div>

            <Lista 
                estadisticas={setEstadisticas}
            />
        </section>
    );
};

export default Mesas;