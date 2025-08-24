import adorno from '../icons/curva vertical.png';

function Paquete(){
    const paquete =[
        {
            paquete: "Basico",
            precio: '$1,000 / mx',
            caracteristicas: [
                {
                    caracteristica: "Detalles de tu evento",
                    descripcion: "Motivo, fecha, direccion, padres y padrinos."
                },
                {
                    caracteristica: "Mesa de regalos",
                    descripcion: "Enlaces e informacion adicional."
                },
                {
                    caracteristica: "Personalización",
                    descripcion: "Nombres y frases de agradecimiento."
                },
                {
                    caracteristica: "Multimedia",
                    descripcion: "Galeria de fotos."
                },
                {
                    caracteristica: "Asesoria",
                    descripcion: "Tecnica y de diseño."
                }
            ]
        },
        {
            paquete: "Estandar",
            precio: '$3,000 / mx',
            caracteristicas: [
                {
                    caracteristica: "Basico",
                    descripcion: "Todo lo que incluye nuestro paquete basico."
                },
                {
                    caracteristica: "Itinerario",
                    descripcion: "Los sucesos mas importantes de tu evento, minuto por minuto."
                },
                {
                    caracteristica: "Multimedia",
                    descripcion: "Collage de fotos, musíca ¡agrega tu canción favorita!"
                },
                {
                    caracteristica: "Linea del tiempo",
                    descripcion: "Cuentale a tus invitados la historia que hay detras de ese gran dia."
                },
                {
                    caracteristica: "Administración",
                    descripcion: "Aplicación web, para administración de invitados, confirmación y pases."
                }
            ]
        },
        {
            paquete: "Premium",
            precio: '$4,000 / mx',
            caracteristicas: [
                {
                    caracteristica: "Basico + Estandar",
                    descripcion: "Nuestro paquete mas completo."
                },
                {
                    caracteristica: "Multimedia",
                    descripcion: "Agrega videos y las imagenes que quieras."
                },
                {
                    caracteristica: "Administración",
                    descripcion: "Codigo QR, recepción en tiempo real."
                }
            ]
        }
    ]

    return(
        <section id='paquetes' className="paquetes">
            <h2 className="titulo">Paquetes</h2>
            <p className="subtitulo">Encuentra el paquete se que adapte a tu evento. Hagamos especial tu gran dia.</p>

            <img src={adorno} className='icono' alt='...' />

            <div className='packs'>
                {paquete.map((item, index) => (
                    <div key={index} className="contenedor">
                        <div className='encabezado'>
                            <p className='paquete'>{item.paquete}</p>
                            <p className='precio'>{item.precio}</p>
                        </div>

                        {item.caracteristicas.map((char, indx) => (
                            <div key={indx} className='contenido'>
                                <p className='caracteristicas'>{char.caracteristica}</p>
                                <p className='descripcion'>{char.descripcion}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Paquete;