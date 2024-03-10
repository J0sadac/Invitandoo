import Iframe from "react-iframe";

function Ubicacion ({gps}){

    return(
        <div className="ubicacion shadow">
            <h3 className="titulo">Ubicacion GPS</h3>
           <Iframe src={gps}
            className="direccion"  
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></Iframe>
        </div>
    );
};

export default Ubicacion;