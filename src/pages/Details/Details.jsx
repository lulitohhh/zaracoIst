import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import "./Details.css"
import "swiper/css";
import "swiper/css/pagination";

import CharacterDetails from "../../components/CardCharacter/CardCharacter";
import LeyendaDetails from "../../components/CardLegend/CardLegend";

import legends from "../../data/legends";  // 👈 asegúrate de importar tu array
import characters from "../../data/character"; // 👈 idem para personajes

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { personaje, leyenda } = location.state || {};

  if (!personaje && !leyenda) {
    return <p>No se encontró información</p>;
  }

  // 🔄 función de reroll
 const handleReroll = () => {
  const randomChar = characters[Math.floor(Math.random() * characters.length)];
  const randomLegend = legends[Math.floor(Math.random() * legends.length)];

  // ✅ siempre mandamos los dos al estado
  navigate("/details", {
    state: {
      personaje: randomChar,
      leyenda: randomLegend,
    },
  });
};

  return (
    <div className="details-container">
      <div style={{ padding: 24 }}>
        <Swiper
          modules={[Pagination]}
          pagination={{ el: ".my-pagination", clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {personaje && (
            <SwiperSlide>
              <CharacterDetails personaje={personaje} />
            </SwiperSlide>
          )}
          {leyenda && (
            <SwiperSlide>
              <LeyendaDetails leyenda={leyenda} personaje={personaje} />
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
