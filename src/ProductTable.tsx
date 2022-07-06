import React, { ReactElement } from 'react';
import ProductValue from './ProductValue';
import ImageList from '@mui/material/ImageList';
import { Products } from './data/Products';

function ProductTable({
  products,
  filterText
}: {
  products: Array<Products>;
  filterText: string;
}) {
  const filterProducts: Array<ReactElement> = [];
  products.forEach((product: Products, i: number) => {
    if (filterText === ' ' || product.title.indexOf(filterText) === -1) {
      return;
    }
    filterProducts.push(<ProductValue product={product} key={i} />);
  });

  return (
    <div className="ProductTable">
      <ImageList
        cols={7}
        rowHeight={200}
        gap={2}
        sx={{
          width: 1000,
          height: 'auto',
          mt: 12
        }}
        variant={'standard'}
      >
        {filterProducts}
      </ImageList>
    </div>
  );
}

export default ProductTable;
