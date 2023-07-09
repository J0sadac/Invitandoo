import ImgEquipo from "../../images/equipo alezzia.jpg"

function about (){

    return(
        <div class="about-container">
            <img src={ImgEquipo} class="img-about object-fit-lg-contain" alt="Equipo Alezzia" />

            <div class="text-about">
                <h4>Equipo Alezzia!</h4>
                <p>
                    Somos una empresa dedicada a la organizacion y gestion de eventos, como XV años, cumpleaños,
                    bautizos, pero nuestro fuerte es la planeacion de bodas!

                    <br /> <br />

                    Somos un equipo que tiene como prioridad que ustedes, anfitriones, disfruten plenamente el evento
                    y que puedan disfrutarlo por completo, despues de todo, el que lo hace unico y especial ¡eres tu!
                </p>
            </div>
        </div>
    )
}

export default about;