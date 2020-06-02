import React, { useState } from 'react';
import NavHamburger from './nav-hamburger';
import styled, { withTheme, css } from 'styled-components';
import NavbarRoot from './navbar-root';
import getSideBarData from '../../hooks/getSideBarData';

const NavBar = styled.nav`
  background-color: ${props => props.theme.colorPrimary};
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  z-index: 0;
  overflow: auto;
  @media only screen and (max-width: ${props => props.theme.mq.xl}) {
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
  // this query will give only three levels of recursion
  // if in need of more levels add another to the query
  const sideBarData = getSideBarData();

  console.log('here the props: ', props);

  const [openNavbar, setopenNavbar] = useState(false);

  const openNavbarNav = () => {
    setopenNavbar(!openNavbar);
  };

  return (
    <NavBar className="navBar" openNavbar={openNavbar}>
      <NavHamburger openNavbarNav={openNavbarNav} />
      {/* nav root is the ul tag */}
      <NavbarRoot
        openNavbar={openNavbar}
        sideBarData={sideBarData}
        location={props.location}
        openNavbarNav={openNavbarNav}
      />
    </NavBar>
  );
};

export default withTheme(SideBar);
