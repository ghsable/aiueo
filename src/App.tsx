import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function App({ products }: {products: any}) {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
        <ProductTable products={products}/>
    </div>
  );
}

export default App;
