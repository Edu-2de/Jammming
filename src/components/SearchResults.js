import React from 'react';
import TrackList from './TrackList';

function SearchResults({ tracks }) {
  return (
    <div className="SearchResults">
      <h2>Resultados da Busca</h2>
      <TrackList tracks={tracks} />
    </div>
  );
}

export default SearchResults;