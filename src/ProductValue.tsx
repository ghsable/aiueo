import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ProductValue({ PRODUCTS }: {PRODUCTS: any}) {
  return (
    <ImageList sx={{ width: 1000, height: 850 }} cols={7} rowHeight={230}>
      {PRODUCTS.map((item: any) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProductValue;
