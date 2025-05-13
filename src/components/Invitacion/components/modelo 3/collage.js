import React from 'react';

// Función para dividir el array en sub-arrays de tamaño `size`
const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
};

function Collage({ galeria, fondo }) {
    const chunkedGaleria = chunkArray(galeria, 4);

    return (
        <section className="collage">
            <p className="titulo">Collage</p>
            {fondo?.url && (
                <img loading='lazy' className="fondo" src={fondo.url} alt="..." />
            )}

            <div className='contenedor'>
                {chunkedGaleria.map((chunk, index) => (
                    <div className="column" key={index}>
                        {chunk.map((img, idx) => (
                            <img loading='lazy' className="img" src={img.url} alt="..." key={idx} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Collage;
