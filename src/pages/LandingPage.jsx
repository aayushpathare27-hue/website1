import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const ContentContainer = styled.main`
  padding: 60px 80px;
  flex: 1;
`;

const SectionDivider = styled.h2`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 40px 0 24px 0;
  color: #000000;
  border-bottom: 2px solid #000000;
  padding-bottom: 8px;
  width: fit-content;
`;

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: #e5e5e5; /* Creates clean minimalist line dividers between products */
  padding: 1px;
  width: 100%;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

// Complete Local Catalog Array (Prices in Indian Rupees)
const initialProducts = [
  { id: 1, ref: 'P1', category: 'Audio', title: 'Quantum Wireless Earbuds', price: 16500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
  { id: 2, ref: 'P2', category: 'Peripherals', title: 'K3 Mechanical Keyboard', price: 12500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500' },
  { id: 3, ref: 'P3', category: 'Photography', title: 'X-T4 Mirrorless Camera', price: 108000.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500' },
  { id: 4, ref: 'P4', category: 'Wearables', title: 'Horizon Smartwatch', price: 24900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  { id: 5, ref: 'P5', category: 'Audio', title: 'Aura Portable Speaker', price: 10900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500' },
  { id: 6, ref: 'P6', category: 'Computing', title: 'Slate Minimalist Tablet', price: 49900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500' },
  { id: 7, ref: 'P7', category: 'Lighting', title: 'Aero Desk Ambient Beam', price: 7500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500' },
  { id: 8, ref: 'P8', category: 'Audio', title: 'Studio Monitor Pro Headphones', price: 28900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500' },
  { id: 9, ref: 'P9', category: 'Peripherals', title: 'Precision Ergonomic Mouse', price: 8500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500' },
  { id: 10, ref: 'P10', category: 'Storage', title: 'Titanium 2TB External SSD', price: 18500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500' },
  { id: 11, ref: 'P11', category: 'Peripherals', title: 'Ultra-Wide 34" Monitor', price: 58000.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500' },
  { id: 12, ref: 'P12', category: 'Office', title: 'Minimalist Walnut Desk Mat', price: 5500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1632292224971-0d45778bd364?w=500' },
  { id: 13, ref: 'P13', category: 'Gaming', title: 'Pro Streamer Microphone', price: 14900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500' },
  { id: 14, ref: 'P14', category: 'Wearables', title: 'Biometric Tracker Ring', price: 21000.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500' },
  { id: 15, ref: 'P15', category: 'Photography', title: 'Carbon Fiber Travel Tripod', price: 15500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500' },
  { id: 16, ref: 'P16', category: 'Office', title: 'Ergonomic Task Chair Blueprint', price: 38000.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500' },
  { id: 17, ref: 'P17', category: 'Audio', title: 'Hi-Fi Desktop Amplifier', price: 23500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1558089687-f282ffcbd1d5?w=500' },
  { id: 18, ref: 'P18', category: 'Bags', title: 'Waterproof Tech Backpack', price: 13500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' },
  { id: 19, ref: 'P19', category: 'Storage', title: 'Aluminum Desktop Docking Hub', price: 9900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500' },
  { id: 20, ref: 'P20', category: 'Gaming', title: 'Analog Flight Controller Joystick', price: 19500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500' },
  { id: 21, ref: 'P21', category: 'Lighting', title: 'Smart Modular Wall Panels', price: 16500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=500' },
  { id: 22, ref: 'P22', category: 'Photography', title: 'Cinema Lens Prime 35mm', price: 75000.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500' },
  { id: 23, ref: 'P23', category: 'Office', title: 'MagSafe Vertical Stand', price: 3900.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500' },
  { id: 24, ref: 'P24', category: 'Bags', title: 'Minimalist Leather Tech Organizer', price: 6500.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=500' },
  { id: 25, ref: 'P25', category: 'Computing', title: 'Mechanical Macro Pad', price: 7200.00, freeShipping: true, imgUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500' }
];

export default function LandingPage() {
  const [products, setProducts] = useState(initialProducts);

  // Directly pushes items submitted from the navbar plus form into local state array
  const handleAddNewItem = (newItem) => {
    setProducts((prevItems) => [...prevItems, newItem]);
  };

  return (
    <PageWrapper>
      {/* Navbar with working dropdown product addition capability */}
      <Navbar onAddItem={handleAddNewItem} />
      
      <ContentContainer>
        <HeroSection />
        
        <SectionDivider>Our Catalog</SectionDivider>
        
        <GridContainer>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridContainer>
      </ContentContainer>
      
      <Footer />
    </PageWrapper>
  );
}