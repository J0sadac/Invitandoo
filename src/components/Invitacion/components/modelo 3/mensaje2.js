import fondo from '../../../../multimedia/fondos/Fondo-negro.png';

function MensajeDos ({evento}){

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
                    <img className="fondo" src={fondo} alt="..." />
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