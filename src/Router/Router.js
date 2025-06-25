import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/tools/navbar';

import Main from '../components/main';
import Invitaciones from '../components/Invitacion/invitaciones';

import Invitados from '../components/Administrar/components/invitados/invitados';
import Administrar from '../components/Administrar/components/datos/evento';
import Modelo3 from '../components/Invitacion/invitacion - modelo 3';
import Inspiracion from '../components/Inspiracion/inspiracion';

//la ruta "principal" de las invitaciones esta en el .js: src/components/invitacion/invitaciones.js
//ahi tenemos un if donde se enseña el modelo de invitacion que se haya escogido, y guardado en la base de datos 

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/evento/:eventoId/invitado/:invitadoId' element={<Invitaciones />} />
                
                <Route exact path='/invitados/:eventoId' element={<Invitados />} />
                <Route exact path='/Administrar/:eventoId' element={<Administrar />} />
                <Route exact path='/prototipo/modelo3' element={<Modelo3 />} />

                <Route exact path='/eventos/clase' element={<Inspiracion />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;