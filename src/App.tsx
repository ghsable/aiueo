import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import StandardImageList from './StandardImageList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
        <StandardImageList />
    </div>
  );
}

export default App;
