import React from 'react';

import FormularioDatos from './components/iniciarEvento';

const MiEvento = function(){

    return(
        <div className="contenedor-miEvento">
    
            <div className='formularios'>
                <FormularioDatos />
            </div>
            
        </div>
    )
}

export default MiEvento;