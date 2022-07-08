import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer( {planeteers, toggle}) {
  const cards = planeteers.map((planet) => (
  <Planeteer planet={planet} key={planet.id} handleClick={toggle}/>
  ));
  
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlaneteersContainer;
