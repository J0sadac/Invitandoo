import Portada from "./portada";
import Beneficios from "./beneficios";
import Inspiracion from "./inspiracion";
import Paquete from "./paquetes";
import Footer from "./footer";
import Planeacion from "./planeacion";

function Home() {

    return (
        <div className="home">
            <Portada />
            <Beneficios />
            <Planeacion />
            <Inspiracion />
            <Paquete />
            <Footer />
        </div>
    );
}

export default Home;
