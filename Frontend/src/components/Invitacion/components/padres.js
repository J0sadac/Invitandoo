function Padrinos({padres}){

    return(
        <div className='container-padres shadow'>
            <div className='contenido'>
                    <h3 className='title'>
                        ¡Mis amados padres!
                    </h3>
    
                    <div className='padres shadow'>
                        <p className='padre'>
                            {padres.papa}
                        </p>
                        <p className='y'> & </p>
                        <p className='padre'> 
                            {padres.mama}
                        </p>
                    </div>  
                </div>
        </div>
    )
}

export default Padrinos;