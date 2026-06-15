import React, { useState } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const Tag = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  color: #000000;
  margin: 0 0 30px 0;
  span { color: #ff3b30; }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
`;

const PrimaryButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 18px 32px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextButton = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid #000;
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const MetricsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const MetricBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricValue = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const MetricLabel = styled.span`
  font-size: 10px;
  color: #999;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 5px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardFrame = styled.div`
  border: 1px solid #e5e5e5;
  padding: 40px;
  background-color: #fff;
  position: relative;
  max-width: 500px;
  width: 100%;
`;

const ReferenceTag = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-family: monospace;
  font-size: 11px;
  color: #999;
  border: 1px solid #eee;
  padding: 4px 8px;
`;

const ImageContainer = styled.div`
  background-color: #f7f7f7;
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const ProductImage = styled.img`
  max-width: 85%;
  height: auto;
  mix-blend-mode: multiply;
`;

const InteractiveRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StockIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Dot = styled.span`
  height: 6px;
  width: 6px;
  background-color: #00cc66;
  border-radius: 50%;
`;

const SelectionGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const OptionButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${props => props.$isSelected ? '2px solid #000' : '1px solid #ccc'};
  background-color: ${props => props.$colorCode};
  cursor: pointer;
  padding: 0;
  transform: ${props => props.$isSelected ? 'scale(1.15)' : 'scale(1)'};
  transition: all 0.15s ease-in-out;
`;

const heroVariants = [
  { id: 'w', name: 'Pure White', hex: '#f3f3f3', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
  { id: 'b', name: 'Matte Black', hex: '#1a1a1a', url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500' }
];

export default function HeroSection() {
  const [selected, setSelected] = useState(heroVariants[0]);

  return (
    <HeroContainer>
      <LeftColumn>
        <Tag>New / Winter 2026 Drop</Tag>
        <Heading>Engineered for the <span>obsessed.</span></Heading>
        <Description>
          Precision-built electronics for people who notice the details. No filler. No noise. Just instruments that perform.
        </Description>
        <ButtonGroup>
          <PrimaryButton>SHOP THE DROP ➔</PrimaryButton>
          <TextButton>READ THE SPEC</TextButton>
        </ButtonGroup>
        <MetricsContainer>
          <MetricBox><MetricValue>24</MetricValue><MetricLabel>Hour Delivery</MetricLabel></MetricBox>
          <MetricBox><MetricValue>01</MetricValue><MetricLabel>Year Warranty</MetricLabel></MetricBox>
          <MetricBox><MetricValue>∞</MetricValue><MetricLabel>Returns</MetricLabel></MetricBox>
        </MetricsContainer>
      </LeftColumn>

      <RightColumn>
        <CardFrame>
          <ReferenceTag>{selected.name.toUpperCase()} / KRS-001</ReferenceTag>
          <ImageContainer>
            <ProductImage src={selected.url} alt={selected.name} />
          </ImageContainer>
          <InteractiveRow>
            <StockIndicator><Dot /> In Stock</StockIndicator>
            <SelectionGroup>
              {heroVariants.map(variant => (
                <OptionButton 
                  key={variant.id}
                  $colorCode={variant.hex}
                  $isSelected={selected.id === variant.id}
                  onClick={() => setSelected(variant)}
                />
              ))}
            </SelectionGroup>
          </InteractiveRow>
        </CardFrame>
      </RightColumn>
    </HeroContainer>
  );
}