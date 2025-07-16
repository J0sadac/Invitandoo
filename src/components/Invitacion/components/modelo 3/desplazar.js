import { useState, useEffect } from 'react';
import flecha from '../../../../multimedia/herramientas/arrow-up.png';

function Desplazar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div className="desplazar">
                <p>¡Desliza para ver más!</p>
                <img className='icono' src={flecha} alt='...' />
            </div>
        )
    );
}

export default Desplazar;
