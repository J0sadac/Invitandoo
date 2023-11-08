import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/helpers/navbar';

import Main from '../components/main';
import Invitaciones from '../components/invitaciones';
import Confirmaciones from '../components/confirmaciones';

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/invitacion/:anfitrion/:invitadoId' element={<Invitaciones />} />
                <Route exact path='/invitaciones' element={<Invitaciones />} />
                <Route exact path='/confirmaciones' element={<Confirmaciones />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;