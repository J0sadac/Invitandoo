function Padrinos({padres}){

    return(
        <div className='container-padres shadow'>
            <div className='contenido'>
                    <h3 className='title'>
                        ¡Nuestos amados padres!
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
        </div>
    )
}

export default Padrinos;