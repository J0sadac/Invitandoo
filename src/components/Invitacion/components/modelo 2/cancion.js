import { useState, useRef, useEffect } from "react";
import close from "../../../../multimedia/herramientas/x-lg.svg";
import open from "../../../../multimedia/herramientas/soundwave.svg";
import play from "../../../../multimedia/herramientas/play.png";
import pause from "../../../../multimedia/herramientas/pause.png";

function Cancion({ url }) {
  const [ventana, setVentana] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  //const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const puerta = (estado) => {
    setVentana(estado);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // const handleVolumeChange = (e) => {
  //   const volume = e.target.value;
  //   audioRef.current.volume = volume;
  //   setVolume(volume);
  // };

  const handleProgressChange = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleClickContainer = (event) => {
    if (
      event.target.closest(".cerrar") ||
      event.target.closest(".contenido")
    ) {
      return;
    }
    setVentana(false);
  };

  return (
    <div className="reproductor">
      <div className={`${ventana ? "cancion" : "cerrado"}`} onClick={handleClickContainer}>
        <div className="contenedor">
          <button className="cerrar" onClick={() => puerta(false)}>
            <img src={close} alt="..." className="icono" />
          </button>
          <div className="contenido">
            <p>¡Dale play!</p>
            <audio ref={audioRef} src={url} />
            <div className="controles">
              <div className="progreso">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleProgressChange}
                />
              </div>
              
              <div className="tiempo-control">
                <span>{formatTime(currentTime)}</span>
                
                <button onClick={togglePlay} className="play-pause">
                  {isPlaying ? (
                    <img className="icono" src={pause} alt="..." onClick={() => puerta(false)} />
                  ):(
                    <img className="icono" src={play} alt="..." onClick={() => puerta(false)}/>
                  )}
                </button>

                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${ventana === false ? "puerta" : "cerrado"}`}>
        <button className="abrir" onClick={() => puerta(true)}>
          <img src={open} alt="..." className="icono" />
        </button>
      </div>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

export default Cancion;
