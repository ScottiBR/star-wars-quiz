import React, { useState } from "react";
import Planets from "./pages/Planet";
import PlanetContext from "./context/PlanetContext";
import Start from "./assets/svg/start.svg";
export default function App() {
  const [planetInfo, stePlanetInfo] = useState({});

  const handleNextPlanet = () => {
    const randomPlanet = Math.ceil(Math.random() * 60 + 1);
    getPlanet(randomPlanet);
  };
  async function getPlanet(planetId) {
    const response = await fetch(`https://swapi.co/api/planets/${planetId}`);
    const planet = await response.json();
    stePlanetInfo(planet);
  }

  return (
    <PlanetContext.Provider value={{ planetInfo, handleNextPlanet }}>
      <div className="container">
        {Object.values(planetInfo).length ? (
          <Planets />
        ) : (
          <img className="start" src={Start} onClick={handleNextPlanet} />
        )}
      </div>
    </PlanetContext.Provider>
  );
}
