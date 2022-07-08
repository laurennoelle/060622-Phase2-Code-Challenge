import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer( {planeteers}) {
  const cards = planeteers.map((planet) => (
  <Planeteer planet={planet} key={planet.id} />
  ));
  
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlaneteersContainer;
