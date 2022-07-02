import React from 'react';
import ProductValue from './ProductValue';

function ProductTable({ products }: {products: any}) {
  return (
    <div className="ProductTable">
      <ProductValue products={products} />
    </div>
  );
}

export default ProductTable;
