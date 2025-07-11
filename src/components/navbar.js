import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [currentSection, setCurrentSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let closestSection = "";
      let minDistance = Infinity;

      const offset = 70; // Altura del navbar (ajústalo si cambia)

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < minDistance && rect.top <= offset + 20) {
          minDistance = distance;
          closestSection = section.id;
        }
      });

      if (closestSection && closestSection !== currentSection) {
        setCurrentSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // primera detección

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  const getNavbarClass = () => {
    switch (currentSection) {
      case "portada":
        return "navbar claro";
      case "beneficios":
        return "navbar oscuro";
      case "planeacion":
        return "navbar secundario";
      case "inspiracion":
        return "navbar oscuro";
      case "paquetes":
        return "navbar claro";
      case "invitaciones":
        return "navbar oscuro";
      case "gestion":
        return "navbar oscuro";
      default:
        return "navbar claro";
    }
  };

  const changePage = (ruta) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`${ruta}`);
  };

  return (
    <section className={getNavbarClass()}>
      <h2 onClick={() => changePage("/")} className="titulo">
        Invitandoo
      </h2>
    </section>
  );
}

export default Navbar;
