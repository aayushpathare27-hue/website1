import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  position: relative; /* Essential for positioning our dropdown portal frame */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 1px;
  span { color: #ff3b30; }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #666666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover { color: #000000; }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;

// Minimalist clickable tracking text or icon symbols
const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const PlusButton = styled(IconButton)`
  font-size: 22px;
  font-weight: 300;
  color: #000000;
  margin-right: -4px; /* Perfectly balances the spacing alongside the search loop */
`;

// Minimalist absolute popover container box
const FormDropdown = styled.div`
  position: absolute;
  top: 75px;
  right: 80px;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 24px;
  width: 280px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormTitle = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #e5e5e5;
  font-size: 13px;
  outline: none;
  
  &:focus {
    border-color: #000000;
  }
`;

const SubmitItemButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;

  &:hover {
    background-color: #ff3b30; /* Shifts to brand signature accent red on hover */
  }
`;

export default function Navbar({ onAddItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [itemNumber, setItemNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !itemNumber) return alert('Please complete all form fields.');

    // Construct a newly structured item object structure matching the store data system
    const newItem = {
      id: Date.now(),
      ref: `P${itemNumber}`,
      category: 'Custom Entry',
      title: name,
      price: parseFloat(price) || 0.00,
      freeShipping: true,
      imgUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500' // Default minimalist engineering blueprint image placeholder
    };

    // Safely execute callback payload distribution route
    if (onAddItem) {
      onAddItem(newItem);
    }

    // Reset layout system state parameters back to factory fresh state defaults
    setName('');
    setPrice('');
    setItemNumber('');
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <Logo>KAIROS<span>.</span></Logo>
      <NavLinks>
        <Link>Shop</Link>
        <Link>Collections</Link>
        <Link>Journal</Link>
        <Link>Support</Link>
        <Link style={{ color: '#999', fontSize: '12px' }}>VIEW CODE</Link>
      </NavLinks>
      <NavIcons>
        {/* New item generation switch right on the plus side of searching symbol */}
        <PlusButton onClick={() => setIsOpen(!isOpen)} title="Add Custom Production Item">+</PlusButton>
        <IconButton>🔍</IconButton>
        <IconButton>🛒</IconButton>
      </NavIcons>

      {isOpen && (
        <FormDropdown>
          <FormTitle>Deploy New Custom Item</FormTitle>
          <InputField 
            type="text" 
            placeholder="Item Reference Number (e.g. 7, 8)" 
            value={itemNumber}
            onChange={(e) => setItemNumber(e.target.value)}
          />
          <InputField 
            type="text" 
            placeholder="Product Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField 
            type="number" 
            placeholder="Price ($)" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <SubmitItemButton onClick={handleSubmit}>Inject Product</SubmitItemButton>
        </FormDropdown>
      )}
    </NavContainer>
  );
}