import { useState, useEffect } from 'react';
import Modal from './modal'; // Importa el componente Modal que contiene el reproductor de canciones

function AlertaReproductor() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 3000); // Espera 3 segundos antes de mostrar el modal

    return () => clearTimeout(timeout);
  }, []);  

  return (
    <div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default AlertaReproductor;
