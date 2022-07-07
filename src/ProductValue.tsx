import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { Products } from './data/Products';

function ProductValue({ product }: { product: Products }) {
  return (
    <ImageListItem>
      <img
        src={`${product.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${product.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={product.title}
        loading="lazy"
      />
    </ImageListItem>
  );
}

export default ProductValue;
