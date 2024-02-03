import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/tools/navbar';

import Main from '../components/main';
import Invitaciones from '../components/Invitacion/invitaciones';
import MiEvento from '../components/Mi Evento/miEvento';
import AgregarDatos from '../components/Mi Evento/components/agregarDatos';

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/evento/:eventoId/invitado/:invitadoId' element={<Invitaciones />} />
                <Route exact path='/mi-evento' element={<MiEvento />} />
                <Route exact path='/mi-evento/editar/:eventoId' element={<AgregarDatos />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;