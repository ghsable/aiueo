import React from 'react';
import ProductValue from './ProductValue';
import ImageList from '@mui/material/ImageList';
import { Products } from './data/PRODUCTS';

function ProductTable({ products, filterText }: { products: Array<Products>, filterText: string }) {
  const filterProducts: any[] = [];
  products.map((product: Products, i: number) => {
    if (product.title.indexOf(filterText) === -1) {
      return;
    }
    filterProducts.push(
      <ProductValue
        product={ product }
        key={ i }
      />
    );
  });

  return (
    <div className="ProductTable">
      <ImageList sx={{ width: 1000, height: 850 }} cols={ 7 } rowHeight={ 230 }>
        { filterProducts }
      </ImageList>
    </div>
  );
}

export default ProductTable;
