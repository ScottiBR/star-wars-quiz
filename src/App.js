import React, { useState } from "react";
import Planets from "./pages/Planet";
import PlanetContext from "./context/PlanetContext";
import Start from "./assets/svg/start.svg";
export default function App() {
  const [planetInfo, setPlanetInfo] = useState({});
  const [showPlanets, setShowPlanets] = useState(false);
  const [startFired, setStartFired] = useState(false);
  const handleNextPlanet = () => {
    setShowPlanets(false);
    const randomPlanet = Math.ceil(Math.random() * 60 + 1);
    getPlanet(randomPlanet);
  };
  async function getPlanet(planetId) {
    const response = await fetch(`https://swapi.co/api/planets/${planetId}`);
    const planet = await response.json();
    setPlanetInfo(planet);
    setShowPlanets(true);
  }

  const handleStartButton = () => {
    setStartFired(true);
    handleNextPlanet();
  };
  return (
    <PlanetContext.Provider
      value={{ planetInfo, handleNextPlanet, showPlanets }}
    >
      <div className="container">
        {startFired ? (
          <Planets />
        ) : (
          <img className="start" src={Start} onClick={handleStartButton} />
        )}
      </div>
    </PlanetContext.Provider>
  );
}
