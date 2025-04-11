import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './Spotify';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Nova Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prev => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(t => t.id !== track.id));
  };

  const savePlaylist = async () => {
    const trackUris = playlistTracks.map(track => track.uri);
    await Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName("Nova Playlist");
    setPlaylistTracks([]);
  };

  const handleSearch = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming <span role="img" aria-label="headphone">🎧</span></h1>
        <p>Monte sua playlist personalizada e salve direto no Spotify</p>
      </header>
      <main className="MainContainer">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
        <div className="ContentWrapper">
          <SearchResults tracks={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </main>
      <footer className="App-footer">
        <p>Jammming &copy; 2025 - Criado com React & Spotify API</p>
      </footer>
    </div>
  );
}

export default App;