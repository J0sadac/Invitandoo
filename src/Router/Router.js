import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from '../components/navbar';
import Main from '../components/main';

import Invitaciones from '../components/Invitacion/invitaciones';

import Inspiracion from '../components/Inspiracion/inspiracion';
import Boda from '../components/Inspiracion/components/boda';
import Xv from '../components/Inspiracion/components/xv';

import Gestion from '../components/Gestion/gestion';

const Router = () => {

    return(
        <BrowserRouter>
        
            <NavBar />
            
            <Routes>                
                <Route exact path='/' element={<Main />} />

                <Route exact path='/evento/:eventoId/invitado/:invitadoId' element={<Invitaciones />} />

                <Route exact path='/evento/:eventoId/gestion' element={<Gestion />} />

                <Route exact path='/inspiracion' element={<Inspiracion />}> 
                    <Route path="boda" element={<Boda />} />
                    <Route path="xv" element={<Xv />} />
                </Route>                
            </Routes>

        </BrowserRouter>
    );
};

export default Router;