import React from 'react';
import TrackList from './TrackList';

function SearchResults({ tracks, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <TrackList tracks={tracks} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

    

export default SearchResults;