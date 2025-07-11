

function Planeacion(){
    const pasos = [
        {
          titulo: "Planeación",
          contenido: "Aquí nos contarás todo sobre tu evento. Fecha, lugar, temática y cada detalle que nos permitirá hacer la invitación perfecta para ti."
        },
        {
          titulo: "Creación",
          contenido: "Diseñaremos tu invitación con todo lo importante y el toque de tu personalidad para asegurar que tus seres queridos esten en el gran dia."
        },
        {
          titulo: "Entrega",
          contenido: "Tus invitados pueden acceder a la invitación desde cualquier dispositivo, en cualquier lugar del mundo, sin complicaciones."
        },
        {
            titulo: "Gestión",
            contenido: "Nuestras invitaciones estan diseñadas para proporcionar toda la información necesaria de manera clara y atractiva, facilitando una confirmacion rapida por parte de tus invitados."
        }
      ];

    return(
        <section id="planeacion" className="planeacion">
            <div className="encabezado">
                <h2 className="titulo">¿Cómo trabajamos?</h2>
                <p className="parrafo">
                    En Invitandoo, queremos transformar la planificación de eventos y cómo se disfrutan, 
                    por eso te ofrecemos herramientas para que puedas crear momentos inolvidables.
                </p>
            </div>

            <div className="flujo">
                {pasos.map((step, index)=>(
                    <div key={index} className="contenedor">
                        <p className="titulo">{step.titulo}</p>
                        <p className="parrafo">{step.contenido}</p>
                    </div>
                ))}
            </div>

            <button className="contacto">CONTACTO</button>
        </section>
    )
}

export default Planeacion;