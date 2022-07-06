import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { Products } from './data/Products';
import { HandleFilterTextChange } from './HandleFilterTextChange';

function App({ products }: { products: Array<Products> }) {
  const [filterText, setFilterText] = useState('');
  const handleFilterTextChange: HandleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          filterText={filterText}
          handleFilterTextChange={handleFilterTextChange}
        />
      </header>
      <ProductTable products={products} filterText={filterText} />
    </div>
  );
}

export default App;
