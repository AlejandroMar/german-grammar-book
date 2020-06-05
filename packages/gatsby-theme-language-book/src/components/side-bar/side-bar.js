import React, { useState } from 'react';
import NavHamburger from './nav-hamburger';
import styled, { withTheme, css } from 'styled-components';
import getSideBarData from '../../hooks/getSideBarData';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';

const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
   @media only screen and (max-width: ${({ theme }) => theme.mq.xl}) {
    display: none;
    ${props => {
      if (props.openNavbar) {
        return css`
          display: flex;
        `;
      }
    }}
`;

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.theme_colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  z-index: 0;
  overflow: auto;
  @media only screen and (max-width: ${({ theme }) => theme.mq.xl}) {
    position: static;
    width: 100%;
    height: 8vh;
    ${props => {
      if (props.openNavbar) {
        return css`
          height: 100vh;
        `;
      }
    }}
`;

const SideBar = props => {
  console.log('props: ', props);
  // this query will give only three levels of recursion
  // if in need of more levels add another to the query
  const sideBarData = getSideBarData();

  const [openNavbar, setopenNavbar] = useState(false);

  const openNavbarNav = () => {
    setopenNavbar(!openNavbar);
  };

  return (
    <NavBar className="navBar" openNavbar={openNavbar}>
      <NavHamburger openNavbarNav={openNavbarNav} />
      {/* nav root is the ul tag */}
      <NavbarNav className="navBarNav" openNavbar={openNavbar}>
        <NestedNavBar
          content={sideBarData.allMenuLink.edges}
          location={props.location}
          openNavbarNav={openNavbarNav}
        />
      </NavbarNav>
    </NavBar>
  );
};

export default withTheme(SideBar);
