import marco from '../../../../multimedia/herramientas/marco dorado.svg';

function Portada({tipoDeEvento, imgPortada, festejado, novios}){

    return(
      <div className='container-portada shadow'>
      {tipoDeEvento === 'XV Años' ? (
        <div className='portada-xv'>
              <div className='evento'>
                <h4 className='te-invito'>Te invito a</h4>
                <div className='mis'>
                  <h4>mis</h4>
                  <h3>{tipoDeEvento}</h3>
                  <h4 className='anios'>años</h4>
                </div>
              </div>
              <div className='festejada'>
                <div className='img-portada shadow'>
                  <img src={imgPortada[0].url} alt='...' />
                  <img src={marco} className='img-superpuesta' alt='...' />
                </div>
                
                <div className="nombre-portada">
                  <p>{festejado}</p>
                </div>
              </div>
          </div>
      ) : tipoDeEvento === 'Boda' ? (
        <div className='portada-boda'>
          <div className='head'>
            <h4 className='titulo'> Te invitamos a nuestra</h4>
            <h4 className='subtitulo'>{tipoDeEvento}</h4>
          </div>
          <div className='body'>
            {imgPortada && imgPortada.length > 0 &&(
              <div className='img'>
                <img src={imgPortada[1].url} alt='novia' />
                <img src={marco} className='marco' alt='...' />
              </div>
            )}
            <div className='nombres'>
              <p>{novios.novio}</p>
              <p>&</p>
              <p>{novios.novia}</p>
            </div>
            {imgPortada && imgPortada.length > 0 &&(
              <div className='img'>
                <img src={imgPortada[0].url} alt='novia' />
                <img src={marco} className='marco' alt='...' />
              </div>
            )}
          </div>
        </div>
      ) : tipoDeEvento === 'Cumpleaños' ? (
        <div>
          Seccion de cumpleaños
        </div>
      ) : tipoDeEvento === 'Bautizo' ? (
        <div>
          Seccion de bautizo
        </div>
      ) : (
        <div>
          Estructura por default
        </div>
      )}
      </div>
    )
};

export default Portada;