import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/helpers/navbar';

import Main from '../components/main';
import Invitaciones from '../components/invitaciones';

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />
                <Route exact path='/invitado' element={<Invitaciones />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Router;