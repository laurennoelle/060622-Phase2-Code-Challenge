import React from "react";

function Planeteer( {planet, handleClick} ) {
  return (
    <li className="cards__item">
      <div className="card">
        {/* key={planet.id}
        onClick={() => handleClick(planet)} */}
        <img
          src={planet.pictureUrl}
          alt={planet.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planet.name}</div>
          <p className="card__text">{planet.bio}</p>
          <div className="card__detail">
            <p>{planet.twitter}</p>
            <p>
              {planet.fromUSA ? "USA-based" : "Working overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
