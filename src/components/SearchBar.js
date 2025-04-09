import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
      return (
        <div>
          <input
            type="text"
            placeholder="Search for a song or artist"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button">Search</button>
        </div>
      );
    }
    
export default SearchBar;

