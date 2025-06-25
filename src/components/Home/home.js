import Portada from "./components/portada";
import Beneficios from "./components/beneficios";
import Inspiracion from "./components/inspiracion";
import Paquete from "./components/paquetes";
import Footer from "../footer";
import Planeacion from "./components/planeacion";

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
