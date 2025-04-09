import React from 'react';

function Track({ track, onAdd, onRemove, isRemoval }) {
  const handleAdd = () => onAdd && onAdd(track);
  const handleRemove = () => onRemove && onRemove(track);

  return (
    <div className="Track">
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
      {isRemoval
        ? <button onClick={handleRemove}>-</button>
        : <button onClick={handleAdd}>+</button>
      }
    </div>
  );
}


export default Track;
