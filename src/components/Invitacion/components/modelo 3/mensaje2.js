
function MensajeDos ({evento, fondo, festejado}){

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
                    {festejado === 'Danna Paola Huerta Pantoja.' ? (
                        <p>
                            Quiero agradecer especialmente a mis queridos
                            abuelitos por ser mi fuente de amor y sabiduría.
                            Su presencia en mi vida a sido un regalo invaluable
                            que atesoro con todo mi corazón.
                        </p>
                    ):(
                        <p>
                            Estos momentos se vuelven eternos al compartirlos con ustedes.
                        </p>
                    )}
                </section>
            ):(<div>
                    holi
                </div>)}
        </>
    );
};

export default MensajeDos;