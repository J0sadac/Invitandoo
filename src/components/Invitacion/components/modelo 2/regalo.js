function Regalo ({regalo}){

    return(
        <div className='regalo shadow'>
            <h3 className='titulo'>Mesa de regalos</h3>
            <img className='icono img-fluid' src={regalo.icono} alt='...' />
            <p className='codigo'>{regalo.modalidad}: {regalo.codigo}</p>
        </div>
    );
};

export default Regalo;
