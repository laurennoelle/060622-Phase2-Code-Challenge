import React, {useState} from "react";

function Planeteer( {planet} ) {
  const [isBio, setIsBio] = useState(true)

 
  function handleClick(planet) {
    //click on image
    //toggle the bio to the quote in the card
    //change state and assign to a variable, ternary statement
    setIsBio(!isBio) 
  }
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planet.pictureUrl}
          alt={planet.name}
          className="card__image"
          key={planet.id}
          onClick={() => handleClick(planet)}
        />
        <div className="card__content">
          <div className="card__title">{planet.name}</div>
          <p className="card__text">{isBio ? planet.bio : planet.quote}</p>
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
