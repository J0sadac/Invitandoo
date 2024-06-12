
function MensajeDos ({evento, fondo}){

    return(
        <>
            {evento === 'Boda' ? (
                <section className="mensajedos">
                    <p>
                        Estos momentos se vuelven eternos al compartirlos con ustedes.
                    </p>
                </section>
            ) : evento === 'XV Años' ? (
                <section className="mensajedos">
                    {fondo?.url && (
                        <img className='fondo' src={fondo.url} alt='...' />
                    )}
                    <p>
                        Estos momentos se vuelven eternos al compartirlos con ustedes.
                    </p>
                </section>
            ):(<div>
                    holi
                </div>)}
        </>
    );
};

export default MensajeDos;