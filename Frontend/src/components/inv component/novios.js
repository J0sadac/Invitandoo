function Novios({nombres, imagen}){

    return(
        <div className='container-nov shadow'>
          <h3>Nuestra boda</h3>

          <div>
            <div className='img-nov shadow'>
              <img src={imagen[1]} alt='...' />
            </div>
            
            <div className="nombre-nov">
              <p>{nombres.novia} & {nombres.novio}</p>
              
            </div>

            <div className='img-nov shadow'>
              <img src={imagen[0]} alt='...' />
            </div>
          </div>
        </div>
    )
};

export default Novios;