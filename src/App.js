import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const mockTracks = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours"
    },
    {
      id: 2,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia"
    },
    {
      id: 3,
      name: "Peaches",
      artist: "Justin Bieber",
      album: "Justice"
    }
  ];

  const filteredTracks = mockTracks.filter(track =>
    track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Jammming 🎧</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResults tracks={filteredTracks} />
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
    </div>

    
  );
}

export default App;
