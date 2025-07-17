// HomePage.tsx
import { useRef } from "react";
import "./styles/HomePage.css";
import backgroundImage from "../assets/FondoHomePage.png";

function HomePage() {
  const popularesRef = useRef<HTMLDivElement>(null);
  const impresionesRef = useRef<HTMLDivElement>(null);
  const asthreeDRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = popularesRef.current;
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

  const scroll2 = (direction: "left" | "right") => {
    const container = impresionesRef.current;
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

  const scroll3 = (direction: "left" | "right") => {
    const container = asthreeDRef.current;
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
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="contenedor">
        <div className="textos">
          <h2>Más populares</h2>
          <p>
            Los diseños que más veces han sido guardados por nuestros clientes.
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="arrow left" onClick={() => scroll("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>

          <div className="Tarjetas" ref={popularesRef}>
            {[...Array(10)].map((_, i) => (
              <div className="tarjeta" key={i}>
                <p>Diseño {i + 1}</p>
              </div>
            ))}
          </div>

          <div className="arrow right" onClick={() => scroll("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="contenedor">
        <div className="textos">
          <h2>Top de impresiones</h2>
          <p>Los diseños más fabricados en nuestra tienda.</p>
        </div>

        <div className="carousel-wrapper">
          <div className="arrow left" onClick={() => scroll2("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>

          <div className="Tarjetas" ref={impresionesRef}>
            {[...Array(10)].map((_, i) => (
              <div className="tarjeta" key={i}>
                <p>Diseño {i + 1}</p>
              </div>
            ))}
          </div>

          <div className="arrow right" onClick={() => scroll2("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="contenedor">
        <div className="textos">
          <h2>AsThreeD's</h2>
          <p>Diseñado por nuestra tienda, en stok y listo para enviar.</p>
        </div>

        <div className="carousel-wrapper">
          <div className="arrow left" onClick={() => scroll3("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>

          <div className="Tarjetas" ref={asthreeDRef}>
            {[...Array(10)].map((_, i) => (
              <div className="tarjeta" key={i}>
                <p>Diseño {i + 1}</p>
              </div>
            ))}
          </div>

          <div className="arrow right" onClick={() => scroll3("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
