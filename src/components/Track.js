import React from 'react';

function Track({ track, onAdd, isRemoval }) {
      const handleAdd = () => onAdd(track);
    
      return (
        <div className="Track">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
          {!isRemoval && <button onClick={handleAdd}>+</button>}
        </div>
      );
    }
    

export default Track;
