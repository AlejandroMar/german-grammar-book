import React from 'react';
import style from './side-bar.module.css';

const NavHamburger = ({ openNavbarNav }) => (
  <div onClick={openNavbarNav} className={style.navBarButton}>
    <span>{''}</span>
    <span>{''}</span>
    <span>{''}</span>
  </div>
);
export default NavHamburger;
