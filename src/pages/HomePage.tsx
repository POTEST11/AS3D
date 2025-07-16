// HomePage.tsx
import { useRef } from "react";
import "./styles/HomePage.css";
import NavBar from "../components/NavBar";

function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = 300;

    if (direction === "left") {
      if (container.scrollLeft === 0) {
        // Rebota al final
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        // Rebota al inicio
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="home-page">
      <NavBar />

      <div className="Contenedor-Populares">
        <div className="textos">
          <h2>Más populares</h2>
          <p>Los diseños que más veces han sido guardados por los usuarios.</p>
        </div>

        <div className="carousel-wrapper">
          <div className="arrow left" onClick={() => scroll("left")}>
            &#10094;
          </div>

          <div className="Tarjetas" ref={carouselRef}>
            {[...Array(10)].map((_, i) => (
              <div className="tarjeta" key={i}>
                <p>Diseño {i + 1}</p>
              </div>
            ))}
          </div>

          <div className="arrow right" onClick={() => scroll("right")}>
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
