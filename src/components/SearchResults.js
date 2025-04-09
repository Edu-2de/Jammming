import React from 'react';
import TrackList from './TrackList';

function SearchResults({ tracks, onAdd }) {
      return (
        <div className="SearchResults">
          <h2>Resultados da Busca</h2>
          <TrackList tracks={tracks} onAdd={onAdd} isRemoval={false} />
        </div>
      );
    }
    

export default SearchResults;