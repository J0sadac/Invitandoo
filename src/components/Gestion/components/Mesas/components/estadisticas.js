import { useEffect, useState } from "react";

function Estadisticas({mesas}) {
    const [estadisticas, setEstadisticas] = useState({
        total: 0,
        completas: 0,
        pendientes: 0
    })

    useEffect(() => {
        const totalDeMesas = Object.keys(mesas).length;
        let completas = 0;
        let pendientes = 0;

        Object.values(mesas).forEach((invitados) => {
            const confirmados = invitados.every(inv => inv.asistir === 'confirmado');

            if(confirmados){
                completas++;
            }else{
                pendientes++;
            }
        })

        setEstadisticas({
            total: totalDeMesas,
            completas,
            pendientes
        })
    }, [mesas])

  return (
    <div className="estadisticas">
      <div className="datos">
        <div className="categoria">Total</div>
        <div className="dato">{estadisticas.total}</div>
      </div>

      <div className="datos">
        <div className="categoria">Confirmados</div>
        <div className="dato">{estadisticas.completas}</div>
      </div>

      <div className="datos">
        <div className="categoria">Pendientes</div>
        <div className="dato">{estadisticas.pendientes}</div>
      </div>
    </div>
  );
}

export default Estadisticas;
