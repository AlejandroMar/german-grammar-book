import style from './side-bar.module.css'
import NestedNavBar from '../nested-nav-bar/nested-nav-bar'
import React from 'react'

export const NavBarRoot = ({ location, openNavbarNav, sideBarData }) => (
  <ul className={`${style.navbarNav}`}>
    <NestedNavBar
      content={sideBarData.allMenuLink.edges}
      location={location}
      openNavbarNav={openNavbarNav}
    />
  </ul>
)
