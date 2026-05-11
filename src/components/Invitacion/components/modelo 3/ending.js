import React from 'react';

function Ending ({fondo}) {

  return (
        <section className="ubicacionCel">
            <img loading="lazy" className="fondoCel" src={fondo.url} alt="..." />
        </section>
  );
}

export default Ending;
