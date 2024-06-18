import adorno from '../../../../multimedia/herramientas/adorno-bajo.png';

function Frases ({evento, fondo}){

    return(
        <>
        {evento === 'XV Años' ? (
            <section className="frases">
                <img className="fondo" src={fondo.url} alt="..." />
                <div className="frase">
                    <p className="titulo">
                        Andrea
                    </p>
                    <p className="contenido">
                        Me emociona llegar a mis XV años
                        rodeada del amor de mi familia y amigos,
                        me encantará celebrar contigo este dia.
                    </p>
                </div>
                <img className="adorno" src={adorno} alt='...' />
                <div className="frase">
                    <p className="contenido">
                        Andrea, debes de estar segura de que este dia no solo
                        es importante para ti, sino tambien para nosotros,
                        pues desde que llegaste hiciste que la familia sea 
                        mucho mejor de lo que ya era, y totalmente perfecta.
                        Sabemos que estos son tus XV años, eso es significado
                        de que ya eres grande y que has crecido rapidamente, 
                        nosotros somos las personas mas orgullosas por eso.
                        Te queremos mucho Andrea, la pasaras increible. Te 
                        amamos, tu familia y tus padres...
                    </p>
                    <p className="titulo">
                        Yoana y Benito
                    </p>
                </div>
            </section>
        ): evento === 'Boda' ? (
            <div>
                
            </div>
        ): (
            <div></div>
        )}
        </>
    )
}

export default Frases