// Navigation.js
import React from 'react';
import styled from 'styled-components';


const Navigation = () => {
    return (
      <NavContainer>
        <NavLink href="/">
          <img src="logo.png" alt="Explore Maths with Mukul Logo" />
        </NavLink>
        <ul>
          {navigationLinks.map((link) => (
            <NavLink key={link.name} href={link.url}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </NavContainer>
    );
  };
  

const navigationLinks = [
    { name: 'Home', url: '/' },
    { name: 'Categories', url: '/categories' },
    { name: 'Videos', url: '/videos' },
    { name: 'Practice', url: '/practice' },
    { name: 'Forum', url: '/forum' },
    { name: 'About', url: '/about' },
  ];
  const NavContainer = styled.nav`
  background-color: #007bff; /* Primary blue */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 5px 10px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f1f5f8; /* Lighter blue on hover */
  }
`;

const LogoImage = styled.img`
height: 50px;
margin-right: 15px;
`;

export default Navigation;