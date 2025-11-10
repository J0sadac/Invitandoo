import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import close from "../../../../multimedia/herramientas/x-lg.svg";
import open from "../../../../multimedia/herramientas/soundwave.svg";
import play from "../../../../multimedia/herramientas/play.png";
import pause from "../../../../multimedia/herramientas/pause.png";

const Cancion = forwardRef(({ url }, ref) => {
  const [ventana, setVentana] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    playSong() {
      setVentana(false); // cierra la ventana
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    },
    closeWindow() {
      setVentana(false); // 👈 función separada para cerrar sin reproducir
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const puerta = (estado) => setVentana(estado);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleClickContainer = (event) => {
    if (event.target.closest(".cerrar") || event.target.closest(".contenido")) return;
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
                  <img className="icono" src={isPlaying ? pause : play} alt="..." />
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
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

export default Cancion;
