import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/tools/navbar';

import Main from '../components/main';
import InvitacionesModelo1 from '../components/Invitacion/invitaciones - modelo 1';
import InvitacionesModelo2 from '../components/Invitacion/invitaciones - modelo 2';
import MiEvento from '../components/Mi Evento/miEvento';
import AgregarDatos from '../components/Mi Evento/components/agregarDatos';

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/evento/:eventoId/invitado/:invitadoId' element={<InvitacionesModelo1 />} />
                <Route exact path='/evento/modelo2' element={<InvitacionesModelo2 />} />
                <Route exact path='/mi-evento' element={<MiEvento />} />
                <Route exact path='/mi-evento/editar/:eventoId' element={<AgregarDatos />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;