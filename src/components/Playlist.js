import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className="Playlist">
      <input
        type="text"
        value={playlistName}
        readOnly
      />
      <TrackList tracks={playlistTracks} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;