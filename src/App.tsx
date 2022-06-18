import React from 'react';
import './App.css';
import StandardImageList from './StandardImageList';
import CustomizedInputBase from './CustomizedInputBase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomizedInputBase />
        <StandardImageList />
      </header>
    </div>
  );
}

export default App;
