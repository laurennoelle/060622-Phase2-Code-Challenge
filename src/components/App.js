import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = 'http://localhost:8003/planeteers'

function App() {
  
  const [planeteers, setPlaneteers] = useState([]);
  const [searchPlanet, setSearchPlanet] = useState("")

  // const planeteertoDisplay = planet

  // .filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetch(API)
      .then(res => res.json()) 
      .then(setPlaneteers);
  }, []);

    function onSearchChange(event) {
      setSearchPlanet(event.target.value)
    }
    
    const searchedPlaneteers = planeteers.filter((planet) => planet.bio.toLowerCase().includes(searchPlanet) || planet.name.toLowerCase().includes(searchPlanet))

  return (
    <div>
      <Header />
      <SearchBar searchPlanet={searchPlanet} onSearchChange={onSearchChange}/>
      <RandomButton />
      <PlaneteersContainer planeteers={searchedPlaneteers}/>
    </div>
  );
}

export default App;
