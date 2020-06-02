import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import React from 'react';
import styled, { css } from 'styled-components';

const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
   @media only screen and (max-width: ${props => props.theme.mq.xl}) {
    display: none;
    ${props => {
      if (props.openNavbar) {
        return css`
          display: flex;
        `;
      }
    }}
`;

const NavbarRoot = ({ location, openNavbarNav, sideBarData, openNavbar }) => (
  <NavbarNav className={`${style.navbarNav}`} openNavbar={openNavbar}>
    <NestedNavBar
      content={sideBarData.allMenuLink.edges}
      location={location}
      openNavbarNav={openNavbarNav}
    />
  </NavbarNav>
);
export default NavbarRoot;
