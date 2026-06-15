import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px; /* Creates clean minimalist divider lines between card objects */
  background-color: #e5e5e5; /* The border line background */
  padding: 1px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const productsData = [
  { id: 1, ref: 'P1', category: 'Audio', title: 'Quantum Wireless Earbuds', price: 199.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
  { id: 2, ref: 'P2', category: 'Peripherals', title: 'K3 Mechanical Keyboard', price: 149.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500' },
  { id: 3, ref: 'P3', category: 'Photography', title: 'X-T4 Mirrorless Camera', price: 1299.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500' },
  { id: 4, ref: 'P4', category: 'Wearables', title: 'Horizon Smartwatch', price: 299.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  { id: 5, ref: 'P5', category: 'Audio', title: 'Aura Portable Speaker', price: 129.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500' },
  { id: 6, ref: 'P6', category: 'Computing', title: 'Slate Minimalist Tablet', price: 599.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500' }
];

export default function ProductGrid() {
  return (
    <GridContainer>
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridContainer>
  );
}