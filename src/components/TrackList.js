import React from 'react';
import Track from './Track';

function TrackList({ tracks, onAdd, isRemoval }) {
  return (
    <div className="TrackList">
      {tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
}

    

export default TrackList;
