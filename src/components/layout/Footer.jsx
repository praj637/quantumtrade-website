import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--primary-dark);
  color: var(--text-light);
  padding: var(--space-2xl) 0 var(--space-lg);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-lg);
  
  img {
    height: 40px;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0 0.5rem;
    color: var(--text-light);
  }
`;

const FooterDescription = styled.p`
  margin-bottom: var(--space-lg);
  font-size: var(--fs-sm);
  max-width: 300px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`;

const SocialIcon = styled.a`
  color: var(--text-light);
  font-size: 1.25rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;

const FooterHeading = styled.h3`
  font-size: var(--fs-lg);
  margin-bottom: var(--space-md);
  color: var(--text-light);
`;

const FooterLink = styled(Link)`
  color: var(--text-light);
  margin-bottom: var(--space-sm);
  font-size: var(--fs-sm);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;

const ExternalLink = styled.a`
  color: var(--text-light);
  margin-bottom: var(--space-sm);
  font-size: var(--fs-sm);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: var(--space-lg);
  margin-top: var(--space-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--fs-xs);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-lg);
  padding-right: var(--space-lg);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/src/assets/new-logo-white.svg" alt="QuantumTrade Logo" />
            <h2>QuantumTrade</h2>
          </FooterLogo>
          <FooterDescription>
            Advanced trading bot solutions powered by cutting-edge algorithms and machine learning technology.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="mailto:info@quantumtrade.com">
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <ExternalLink href="/blog">Blog</ExternalLink>
          <ExternalLink href="/careers">Careers</ExternalLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Product</FooterHeading>
          <FooterLink to="/features">Features</FooterLink>
          <FooterLink to="/pricing">Pricing</FooterLink>
          <ExternalLink href="/documentation">Documentation</ExternalLink>
          <ExternalLink href="/releases">Release Notes</ExternalLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Legal</FooterHeading>
          <ExternalLink href="/privacy">Privacy Policy</ExternalLink>
          <ExternalLink href="/terms">Terms of Service</ExternalLink>
          <ExternalLink href="/security">Security</ExternalLink>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} QuantumTrade Solutions. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;