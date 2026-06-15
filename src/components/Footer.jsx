import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000000; /* Dark premium black background */
  border-top: 1px solid #1a1a1a;
  padding: 80px 80px 40px 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  @media (max-width: 768px) {
    padding: 60px 40px 30px 40px;
  }
`;

const UpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const BrandColumn = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #ffffff; /* Crisp white logo */
  span { color: #ff3b30; }
`;

const BrandText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #b3b3b3; /* Silver-gray readability text */
`;

const LinksColumnsContainer = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColumnHeading = styled.h4`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff; /* Clear white headings */
  margin-bottom: 4px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #a3a3a3;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff; /* Bright white hover interaction */
  }
`;

const NewsletterColumn = styled.div`
  max-width: 300px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  border-bottom: 2px solid #ffffff; /* White input accent track */
  padding-bottom: 6px;
  margin-top: 16px;
`;

const EmailInput = styled.input`
  border: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
  outline: none;
  color: #ffffff;

  &::placeholder {
    color: #666666;
  }
`;

const SubmitButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #00cc66; /* Glowing neon green arrow pointer */
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

const LowerFooter = styled.div`
  border-top: 1px solid #1a1a1a;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

const LegalText = styled.span`
  font-size: 12px;
  color: #666666;
`;

const MicroBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CatalogInfo = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: #a3a3a3;
`;

const Badge = styled.div`
  background-color: #00cc66; /* Vibrant high-contrast badge background */
  color: #000000; /* Dark black badge text */
  font-size: 11px;
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <UpperFooter>
        <BrandColumn>
          <Logo>KAIROS<span>.</span></Logo>
          <BrandText>
            Precision hardware instruments engineered for creators who insist on uncompromising performance and detail.
          </BrandText>
        </BrandColumn>

        <LinksColumnsContainer>
          <LinkColumn>
            <ColumnHeading>Products</ColumnHeading>
            <FooterLink>Audio</FooterLink>
            <FooterLink>Peripherals</FooterLink>
            <FooterLink>Photography</FooterLink>
            <FooterLink>Wearables</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnHeading>Company</ColumnHeading>
            <FooterLink>Our Journal</FooterLink>
            <FooterLink>Manifesto</FooterLink>
            <FooterLink>Support Center</FooterLink>
            <FooterLink>Contact</FooterLink>
          </LinkColumn>
        </LinksColumnsContainer>

        <NewsletterColumn>
          <ColumnHeading>Updates</ColumnHeading>
          <BrandText style={{ marginTop: '12px' }}>
            Subscribe to receive information regarding new production drops.
          </BrandText>
          <InputGroup>
            <EmailInput type="email" placeholder="Your email address" />
            <SubmitButton>→</SubmitButton>
          </InputGroup>
        </NewsletterColumn>
      </UpperFooter>

      <LowerFooter>
        <LegalText>© 2026 KAIROS Electronics. All rights reserved.</LegalText>
        <MicroBranding>
          <CatalogInfo>/ 01 — CATALOG</CatalogInfo>
          <Badge>
            
          </Badge>
        </MicroBranding>
      </LowerFooter>
    </FooterContainer>
  );
}