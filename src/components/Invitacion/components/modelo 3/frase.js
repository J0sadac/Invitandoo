import adorno from '../../../../multimedia/herramientas/adorno-bajo.png';

function Frases ({evento, fondo}){

    return(
        <>
        {evento === 'XV Años' && (
            <section className="frases">
                {/* colocar fondo predeterminado */}
                <img className="fondo" src={fondo.url} alt="..." />

                <div className="frase">
                    <p className="titulo">
                        Andrea:
                    </p>
                    <p className="contenido">
                        Me emociona llegar a mis XV años
                        rodeada del amor de mi familia y amigos,
                        me encantará celebrar contigo este dia.
                    </p>
                    <p className="contenido">
                        Hoy es un dia especial para mi,
                        porque puedo ver una nueva estapa de mi vida.
                    </p>
                    <p className="contenido">
                        Llena de retos y experiencias que me harán madurar
                        para que me convierta en la mujer con la que sueño ser.
                    </p>
                    <p className="contenido">
                        La vida esta llena de ciclos y uno de ellos acaba de terminar.
                        Ahora debo recordar con alegria lo que dejé y empezar 
                        a planear lo que voy a ser en el futuro.  
                    </p>
                    <p className="contenido">
                        Quiero dar gracias a Dios porque hasta hoy él me a cuidado
                        y protegido.
                    </p>
                    <p className="contenido">
                        En cada paso que he dado, él siempre ha estado
                        allí, y con confianza puedo decir que no importa
                        lo que pase, porque se que él estará para 
                        cuidarme y protegerme.
                    </p>
                </div>
                <img className="adorno" src={adorno} alt='...' />
            </section>
        )}
        </>
    )
}

export default Frases