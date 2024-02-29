import Iframe from "react-iframe";

function Ubicacion (){

    return(
        <div className="ubicacion shadow">
            <h3 className="titulo">Ubicacion GPS</h3>
           <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.093899537754!2d-93.10990428942583!3d16.722165983989544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd80d6729f065%3A0x88db41d4e5b35481!2sRestaurante%20las%20Pichanchas%20Mirador!5e0!3m2!1ses-419!2smx!4v1709226466973!5m2!1ses-419!2smx"
            className="direccion" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></Iframe>

           
        </div>
    );
};

export default Ubicacion;