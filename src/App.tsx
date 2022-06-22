import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
        <ProductTable />
    </div>
  );
}

export default App;
