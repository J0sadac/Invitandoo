import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../components/main';
import Invitaciones from '../components/Invitacion/invitaciones';

//Eliminar de aqui
import Invitados from '../components/Administrar/components/invitados/invitados';
import Administrar from '../components/Administrar/components/datos/evento';
import NavBar from '../components/navbar';
//hasta aqui

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
                <Route exact path='/evento/:eventoId' element={<Invitaciones />} />
                
                <Route exact path='/invitados/:eventoId' element={<Invitados />} />
                <Route exact path='/Administrar/:eventoId' element={<Administrar />} />
    

                <Route exact path='/inspiracion' element={<Inspiracion />}> 
                    <Route path="boda" element={<Boda />} />
                    <Route path="xv" element={<Xv />} />
                </Route>

                <Route exact path='evento/123/gestion' element={<Gestion />}>
                
                </Route>
            </Routes>

        </BrowserRouter>
    );
};

export default Router;