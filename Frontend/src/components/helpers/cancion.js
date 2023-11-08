import React, { useEffect, useRef } from 'react';
import cancion from '../../images/XV años - Jimena/Taylor Swift - You Belong With Me.mp3';

const ReproductorDeCancion = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Iniciar la reproducción automática cuando el componente se monta
    audioRef.current.play();
  }, []); // El segundo argumento de useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  return (
    <div className='container-reproductor shadow'>
      <div className='reproductor'>
        <h1 className='title'>¡MI CANCIÓN!</h1>
        <audio controls ref={audioRef}>
          <source src={cancion} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default ReproductorDeCancion;
