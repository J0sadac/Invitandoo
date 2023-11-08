import React from 'react';
import cancion from '../../images/XV años - Jimena/Taylor Swift - You Belong With Me.mp3';

class ReproductorDeCancion extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
      }
    
      componentDidMount() {
        // Establecer el volumen al 50% cuando el componente se monta
        this.audioRef.current.volume = 0.75;
      }

    render() {
      return (
        <div className='container-reproductor shadow'>
            <div className='reproductor'>
                <h3 className='title'>¡MI CANCION!</h3>
                <audio controls ref={this.audioRef} autoPlay>
                    <source src={cancion} type="audio/mpeg" />
                </audio>
            </div>
        </div>
      );
    }
  }
  
  export default ReproductorDeCancion;
  