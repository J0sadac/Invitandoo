function Regalo ({regalo}){

    return(
        <div className='regalo shadow'>
            <h3 className='titulo'>Mesa de regalos</h3>
            <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51385935">
                <img className='icono img-fluid' src={regalo.icono} alt='...' />
                <p className='codigo'>{regalo.modalidad}: {regalo.codigo}</p>
            </a>
        </div>
    );
};

export default Regalo;
