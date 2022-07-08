import React from "react";

function SearchBar( {searchPlanet} ) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
