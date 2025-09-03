import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./Details.css";
import "swiper/css";
import "swiper/css/pagination";

import CharacterDetails from "../../components/CardCharacter/CardCharacter";
import LeyendaDetails from "../../components/CardLegend/CardLegend";

import legends from "../../data/legends";  
import characters from "../../data/character";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Estado inicial desde location.state
  const [currentData, setCurrentData] = useState({
    personaje: location.state?.personaje || null,
    leyenda: location.state?.leyenda || null,
  });

  // Estado para saber en qué slide estamos (0 = personaje, 1 = leyenda)
  const [activeIndex, setActiveIndex] = useState(0);

  if (!currentData.personaje && !currentData.leyenda) {
    return <p>No se encontró información</p>;
  }

  // 🔄 función de reroll
  const handleReroll = () => {
    if (activeIndex === 0) {
      // 🔹 Reroll SOLO personaje
      const randomChar = characters[Math.floor(Math.random() * characters.length)];
      setCurrentData((prev) => ({
        ...prev,
        personaje: randomChar,
      }));
    } else {
      // 🔹 Reroll SOLO leyenda
      const randomLegend = legends[Math.floor(Math.random() * legends.length)];
      setCurrentData((prev) => ({
        ...prev,
        leyenda: randomLegend,
      }));
    }
  };

  return (
    <div className="details-container">
      <div style={{ padding: 24 }}>
        <Swiper
          modules={[Pagination]}
          pagination={{ el: ".my-pagination", clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 👈 Detecta el slide actual
        >
          {currentData.personaje && (
            <SwiperSlide>
              <CharacterDetails personaje={currentData.personaje} />
            </SwiperSlide>
          )}
          {currentData.leyenda && (
            <SwiperSlide>
              <LeyendaDetails
                leyenda={currentData.leyenda}
                personaje={currentData.personaje}
              />
            </SwiperSlide>
          )}
        </Swiper>

        <div className="my-pagination"></div>

        <div className="buttons">
          <button className="btn" onClick={() => navigate("/")}>
            Volver al Home
          </button>
          <button className="btn" onClick={handleReroll}>
            Reroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
