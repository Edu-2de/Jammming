import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for a song or artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={() => onSearch(searchTerm)}>
        Search
      </button>
    </div>
  );
}


    
export default SearchBar;

