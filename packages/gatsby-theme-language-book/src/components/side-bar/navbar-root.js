import style from './side-bar.module.css';
import NestedNavBar from '../nested-nav-bar/nested-nav-bar';
import React from 'react';

const NavbarRoot = ({ location, openNavbarNav, sideBarData }) => (
  <ul className={`${style.navbarNav}`}>
    <NestedNavBar
      content={sideBarData.allMenuLink.edges}
      location={location}
      openNavbarNav={openNavbarNav}
    />
  </ul>
);
export default NavbarRoot;
