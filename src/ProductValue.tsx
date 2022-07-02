import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ProductValue({ PRODUCTS }: {PRODUCTS: any}) {
  return (
    <ImageList sx={{ width: 1000, height: 850 }} cols={7} rowHeight={230}>
      {PRODUCTS.map((product: any) => (
        <ImageListItem key={product.img}>
          <img
            src={`${product.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${product.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={product.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductValue;
