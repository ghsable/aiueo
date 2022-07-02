import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function App({ products }: { products: any }, { filterText = 'B' }: { filterText: string }) {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          filterText={ filterText }
        />
      </header>
        <ProductTable
          products={ products }
          filterText={ filterText }
        />
    </div>
  );
}

export default App;
