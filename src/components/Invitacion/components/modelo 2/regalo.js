function Regalo ({regalo}){

    return(
        <div className='regalo shadow'>
            <h3 className='titulo'>Mesa de regalos</h3>
            <a href={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/${regalo[0].codigo}`}>
                <img className='icono img-fluid' src={regalo[0].icono} alt='...' />
                <p className='codigo'>{regalo[0].modalidad}: {regalo[0].codigo}</p>
            </a>
        </div>
    );
};

export default Regalo;
