import React from 'react';
import logo from './logo.svg';
import './App.css';
import StandardImageList from './StandardImageList';
import CustomizedInputBase from './CustomizedInputBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomizedInputBase />
        <Stack spacing={2}>
          <Button variant="contained">Hello World</Button>
        </Stack>
        <StandardImageList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
