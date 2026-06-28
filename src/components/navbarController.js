import { useLocation } from 'react-router-dom';
import NavBar from './navbar';

function NavbarController() {
    const location = useLocation();

    const esInvitacion =
        /^\/evento\/[^/]+\/invitado\/[^/]+$/.test(location.pathname);

    return !esInvitacion ? <NavBar /> : null;
}

export default NavbarController;