import React, { useContext } from "react";
import PlanetContext from "../context/PlanetContext";

export default function Planet() {
  const { planetInfo, handleNextPlanet, showPlanets } = useContext(
    PlanetContext
  );
  const { name, population, climate, terrain, films } = planetInfo;

  return (
    <div className="planet">
      {showPlanets ? (
        <div className="planet__container">
          <div className="planet__name">{name && <h1>{name}</h1>}</div>
          <div className="planet__info">
            {population && (
              <h3>
                Population:
                <small>
                  {population.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                </small>
              </h3>
            )}
            {climate && (
              <h3>
                Climate:<small> {climate}</small>
              </h3>
            )}
            {terrain && (
              <h3>
                Terrain:<small> {terrain}</small>
              </h3>
            )}
          </div>
          <div className="planet__films">
            {films && <p>Featured in {films.length} films</p>}
          </div>
          <div className="planet__button">
            <button className="button__next" onClick={handleNextPlanet}>
              NEXT
            </button>
          </div>
        </div>
      ) : (
        <p className="planet__loading">Loading</p>
      )}
    </div>
  );
}
