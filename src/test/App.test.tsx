import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import PRODUCTS from '../data/PRODUCTS.json';

test('renders learn react link', () => {
  render(<App products={ PRODUCTS } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
