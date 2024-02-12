import liverpool from '../../../../multimedia/herramientas/liverpool.png';

function Regalo (){

    return(
        <div className='regalo shadow'>
            <h3 className='titulo'>Mesa de regalos</h3>
            <img className='icono img-fluid' src={liverpool} alt='...' />
            <p className='codigo'>Codigo liverpool: 51385935</p>
        </div>
    );
};

export default Regalo;
