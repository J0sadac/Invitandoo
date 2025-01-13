function Padrinos({padres, tipoDeEvento}){

    return(
        <div className='container-padres shadow'>
            {tipoDeEvento === 'XV Años' ? (
                <div className='contenido'>
                    <div className="xv">
                        <h3 className='title'>
                            ¡Mis amados padres!
                        </h3>
        
                        <div className='padres shadow'>
                            <p className='padre'>
                                {padres[0].papa}
                            </p>
                            <p className='y'> & </p>
                            <p className='padre'> 
                                {padres[0].mama}
                            </p>
                        </div> 

                        <div className="mensaje">
                            <p>
                                Amados padres, su amor y apoyo en mis XV años 
                                significaron el mundo para mi. 
                                Gracias por ser mis pilares 
                                y hacer de mi día un sueño hecho realidad.
                            </p>
                        </div>
                    </div> 
                </div>
            ): tipoDeEvento === 'Boda' ? (
                <div className='contenido'>
                    <div className="novios">
                        <h3 className="title">Padres del novio</h3>

                        <div className='padres shadow'>
                            <p className='padre'>
                                {padres[0].papa}
                            </p>
                            <p className='y'> & </p>
                            <p className='padre'> 
                                {padres[0].mama}
                            </p>
                        </div> 
                    </div>

                    <div className="novios">
                        <h3 className="title">Padres de la novia</h3>

                        <div className='padres shadow'>
                            <p className='padre'>
                                {padres[1].papa}
                            </p>
                            <p className='y'> & </p>
                            <p className='padre'> 
                                {padres[1].mama}
                            </p>
                        </div> 
                    </div> 

                    <div className="mensaje">
                        <p>
                            Amados padres, su amor y apoyo en nuestra boda 
                            significaron el mundo para nosotros. 
                            Gracias por ser nuestros pilares 
                            y hacer de nuestro día un sueño hecho realidad.
                        </p>
                    </div>
                </div>
            ): (
                <div>

                </div>
            )}
        </div>
    )
}

export default Padrinos;