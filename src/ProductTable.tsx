import React from 'react';
import ProductValue from './ProductValue';
import itemData from './data/itemData.json';

function ProductTable() {
  return (
    <div className="ProductTable">
      <ProductValue itemData={itemData} />
    </div>
  );
}

export default ProductTable;
