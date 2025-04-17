import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'var(--background)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px var(--shadow)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0 0.5rem;
    color: ${props => props.scrolled ? 'var(--primary)' : 'var(--text-light)'};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--background);
    box-shadow: 0 4px 6px var(--shadow);
    padding: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  font-weight: 500;
  position: relative;
  color: ${props => props.scrolled ? 'var(--text-dark)' : 'var(--text-light)'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--secondary);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    color: var(--text-dark);
  }
`;

const NavButton = styled(Link)`
  background-color: var(--secondary);
  color: var(--text-light);
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
    color: var(--text-light);
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.scrolled ? 'var(--text-dark)' : 'var(--text-light)'};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavInner>
        <Logo scrolled={scrolled}>
          <img src="/src/assets/new-logo.svg" alt="Quantum Trade Solutions Logo" />
          <h1>Quantum Trade Solutions</h1>
        </Logo>
        
        <MenuButton scrolled={scrolled} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" active={isActive('/')} scrolled={scrolled}>Home</NavLink>
          <NavLink to="/features" active={isActive('/features')} scrolled={scrolled}>Features</NavLink>
          <NavLink to="/pricing" active={isActive('/pricing')} scrolled={scrolled}>Pricing</NavLink>
          <NavLink to="/about" active={isActive('/about')} scrolled={scrolled}>About</NavLink>
          <NavLink to="/contact" active={isActive('/contact')} scrolled={scrolled}>Contact</NavLink>
          <NavButton to="/checkout">Get Started</NavButton>
        </NavLinks>
      </NavInner>
    </NavbarContainer>
  );
};

export default Navbar;