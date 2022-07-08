import React from "react";

function SearchBar( {searchPlanet, onSearchChange} ) {
  // function handleSearchChange(event) {
  //   onSearchChange(event.target.value);
  // }

  return (
    <div className="search">
      <input type="text" className="searchTerm" value={searchPlanet} onChange={onSearchChange}/>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
