import React, { useContext } from "react";
import PlanetContext from "../context/PlanetContext";

export default function Planet() {
  const { planetInfo } = useContext(PlanetContext);
  const { name, population, climate, terrain, films } = planetInfo;
  return (
    <div className="planet">
      {name ? (
        <>
          <div className="planet-container">
            <h1>{name}</h1>
          </div>
          <div className="planet-info">
            <h3>
              Population<small> {population}</small>
            </h3>
            <h3>
              Climate<small> {climate}</small>
            </h3>
            <h3>
              Terrain<small> {terrain}</small>
            </h3>
          </div>
          <div className="planet-films">
            {films && (
              <h3>
                Films<small> {films.length}</small>
              </h3>
            )}
          </div>
        </>
      ) : (
        <div className="loader-container">
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}
