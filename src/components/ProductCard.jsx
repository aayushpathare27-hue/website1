import React, { useState } from 'react';
import styled from 'styled-components';

const CardFrame = styled.div`
  border: 1px solid #e5e5e5;
  padding: 24px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const RefTag = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
  font-family: monospace;
  font-size: 11px;
  color: #999;
  border: 1px solid #eee;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
`;

const ImageContainer = styled.div`
  background-color: #f7f7f7;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  mix-blend-mode: multiply;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Category = styled.span`
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin: 0 0 12px 0;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const FreeShipping = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #b0b0b0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background-color: ${props => props.$isAdded ? '#00cc66' : '#fff'};
  color: ${props => props.$isAdded ? '#fff' : '#000'};
  border: 1px solid ${props => props.$isAdded ? '#00cc66' : '#000'};
  padding: 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto;

  &:hover {
    background-color: ${props => props.$isAdded ? '#00cc66' : '#000'};
    color: #fff;
  }
`;

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleCartClick = () => {
    setAdded(true);
    // Automatically revert the button click option state after 1.5 seconds
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <CardFrame>
      <RefTag>{product.ref}</RefTag>
      <ImageContainer>
        <ProductImage src={product.imgUrl} alt={product.title} />
      </ImageContainer>
      <Category>{product.category}</Category>
      <Title>{product.title}</Title>
      <PriceRow>
        <Price>${product.price.toFixed(2)}</Price>
        {product.freeShipping && <FreeShipping>Free Shipping</FreeShipping>}
      </PriceRow>
      <AddToCartButton $isAdded={added} onClick={handleCartClick}>
        {added ? 'ADDED ✓' : 'ADD TO CART +'}
      </AddToCartButton>
    </CardFrame>
  );
}