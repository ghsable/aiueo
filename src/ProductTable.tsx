import React from 'react';
import ProductValue from './ProductValue';
import PRODUCTS from './data/PRODUCTS.json';

function ProductTable() {
  return (
    <div className="ProductTable">
      <ProductValue PRODUCTS={PRODUCTS} />
    </div>
  );
}

export default ProductTable;