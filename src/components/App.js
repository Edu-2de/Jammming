import React from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
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

  return (
    <div className="App">
      <h1>Jammming 🎧</h1>
      <SearchBar />
      <SearchResults tracks={mockTracks} />
    </div>
  );
}

export default App;
