import React from 'react';
import Track from './Track';

function TrackList({ tracks }) {
  return (
    <div className="TrackList">
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default TrackList;
