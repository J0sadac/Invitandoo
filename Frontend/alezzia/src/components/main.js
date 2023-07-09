import Navbar from './helpers/navbar';
import Tarjeta from './helpers/tarjeta';
import Carrusel from './helpers/carrusel';
import About from './helpers/about';

function main (){

    return(
        <div>
            <Navbar />

            <Carrusel />

            <About />

            <div class="tarjetas">
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
                <Tarjeta />
            </div>
        </div>
    );
}

export default main;

// "npm start" para arrancar React.js