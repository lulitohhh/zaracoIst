import "./Home.css";
import { useNavigate } from "react-router";
import StartButton from "../../components/startButton/StartButton";
import { useState } from "react";
import characters from "../../data/character";
import legends from "../../data/legends";
import PulseLoader from "react-spinners/PulseLoader";

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);

    setTimeout(() => {
      const personaje = getRandomItem(characters);
      const leyenda = getRandomItem(legends);

      navigate("/details", {
        state: { personaje, leyenda },
      });
    }, 2500);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">ZARACO</h1>

      <p className="home-subtitle">
        Al presionar el botón se seleccionarán aleatoriamente un personaje y una leyenda. 
      </p>

      {!loading ? (
        <StartButton label="Descubrir" onClick={handleStart} />
      ) : (
        <PulseLoader  color="#ebdebbff" size={15} margin={4} speedMultiplier={0.8}/>
      )}
    </div>
  );
};

export default Home;


