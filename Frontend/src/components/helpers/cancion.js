import React from 'react';
import cancion from '../../images/Boda - Ana y Angel/Sugar - Maroon 5.mp3';

class ReproductorDeCancion extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
      }
    
      componentDidMount() {
        // Establecer el volumen al 50% cuando el componente se monta
        this.audioRef.current.volume = 0.2;
      }

    render() {
      return (
        <div className='container-reproductor shadow'>
            <div className='reproductor'>
                <h1 className='title'>¡NUESTRA CANCIÓN!</h1>
                <audio controls ref={this.audioRef} autoPlay>
                    <source src={cancion} type="audio/mpeg" />
                </audio>
            </div>
        </div>
      );
    }
  }
  
  export default ReproductorDeCancion;
  