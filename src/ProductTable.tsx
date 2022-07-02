import React from 'react';
import ProductValue from './ProductValue';
import ImageList from '@mui/material/ImageList';

function ProductTable({ products, filterText }: { products: any , filterText: string }) {
  return (
    <div className="ProductTable">
      <ImageList sx={{ width: 1000, height: 850 }} cols={7} rowHeight={230}>
        {products.map((product: any, i: number) => {
          if (product.title.indexOf(filterText) === -1) {
            return;
          }
          <ProductValue
            product={product}
            key={i}
          />
        })}
      </ImageList>
    </div>
  );
}

export default ProductTable;
