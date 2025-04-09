import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const mockTracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      uri: "spotify:track:123abc"
    },
    {
      id: 2,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      uri: "spotify:track:456def"
    },
    {
      id: 3,
      name: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      uri: "spotify:track:789ghi"
    }
  ];
  

  const filteredTracks = mockTracks.filter(track =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return; // Já está na playlist
    }
    setPlaylistTracks(prev => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(t => t.id !== track.id));
  };


  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    console.log("Saving to Spotify:", playlistName, trackUris);
  
    // Resetar o estado
    setPlaylistName("Nova Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="MainContainer">
        <SearchResults tracks={filteredTracks} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>

    
  );
}

export default App;
