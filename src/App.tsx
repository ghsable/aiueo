import React from 'react';
import './App.css';
import Stack from 'react-bootstrap/Stack';
import StandardImageList from './StandardImageList';
import SearchBar from './SearchBar';

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
