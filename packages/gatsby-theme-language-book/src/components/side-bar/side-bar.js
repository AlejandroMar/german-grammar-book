import cx from 'classnames';
import React, { useState } from 'react';
import NavHamburger from './nav-hamburger';
import style from './side-bar.module.css';
import NavbarRoot from './navbar-root';
import getSideBarData from '../../hooks/getSideBarData';

const SideBar = props => {
  // this query will give only three levels of recursion
  // if in need of more levels add another to the query
  const sideBarData = getSideBarData();

  const [openNavbar, setopenNavbar] = useState(false);

  const openNavbarNav = () => {
    setopenNavbar(!openNavbar);
  };

  return (
    <nav className={cx(style.navbar, openNavbar ? style.openNav : '')}>
      <NavHamburger openNavbarNav={openNavbarNav} />
      {/* nav root is the ul tag */}
      <NavbarRoot
        sideBarData={sideBarData}
        location={props.location}
        openNavbarNav={openNavbarNav}
      />
    </nav>
  );
};

export default SideBar;
