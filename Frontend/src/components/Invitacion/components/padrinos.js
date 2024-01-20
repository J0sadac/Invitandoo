function Padrinos({padrinos}){

  return (
    <div className='container-padrinos shadow'>
      <div className='contenido'>
          <h3 className='title'>¡Mis padrinos!</h3>
          <div>
            {padrinos.map((padrino, index) => (
              <div key={index} className='padrinoDe shadow'>
                <h3 className='de'>Padrino de {padrino.de}</h3>
                <p className='padrino'>{padrino.padrino}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Padrinos;