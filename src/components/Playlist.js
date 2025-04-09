import React from 'react';
import TrackList from './TrackList';

function Playlist({ playlistName, setPlaylistName, playlistTracks }) {
  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="Playlist">
      <input
        type="text"
        value={playlistName}
        onChange={handleNameChange}
      />
      <TrackList tracks={playlistTracks} isRemoval={true} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;