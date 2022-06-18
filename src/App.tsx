import React from 'react';
import logo from './logo.svg';
import './App.css';
import StandardImageList from './StandardImageList';
import CustomizedInputBase from './CustomizedInputBase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomizedInputBase />
        <StandardImageList />
      </header>
    </div>
  );
}

export default App;
