function Novios({nombres, imagen}){

    return(
        <div className='container-nov shadow'>
        <div className='img-nov shadow'>
          <img src={imagen[1]} alt='...' />
        </div>
        
        <p>{nombres.novia}</p>
        <p>&</p>
        <p>{nombres.novio}</p>

        <div className='img-nov shadow'>
          <img src={imagen[0]} alt='...' />
        </div>
        </div>
    )
};

export default Novios;