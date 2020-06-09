import React, { useState, createContext } from 'react';
import NavHamburger from './nav-hamburger';
import styled, { withTheme, css } from 'styled-components';
import getSideBarData from '../../hooks/getSideBarData';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

export const NavBarContext = createContext(null);

const NavbarNav = styled(List)`
  //list-style: none;
  display: flex;
  flex-direction: column;
  // min-height: 100vh;
  overflow: hidden;
  ${props => props.theme.breakpoints.down('md')} {
    display: none;
    ${props => {
      if (props.openNavbar) {
        return css`
          display: flex;
        `;
      }
    }}
  }
`;

const NavBar = styled(Box)`
  background-color: ${({ theme }) => theme.palette.common.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  z-index: 0;
  overflow: auto;
  ${props => props.theme.breakpoints.down('md')} {
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
  }
`;

// necesito poner index en el folder de cualquier menu que sea nesteado
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
    <NavBar component="nav" className="navBar" openNavbar={openNavbar}>
      <NavHamburger openNavbarNav={openNavbarNav} />
      {/* nav root is the ul tag */}
      <NavbarNav className="navBarNav" openNavbar={openNavbar}>
        <NavBarContext.Provider value={openNavbarNav}>
          <NestedNavBar
            content={sideBarData.allMenuLink.edges}
            location={props.location}
          />
        </NavBarContext.Provider>
      </NavbarNav>
    </NavBar>
  );
};

export default withTheme(SideBar);
