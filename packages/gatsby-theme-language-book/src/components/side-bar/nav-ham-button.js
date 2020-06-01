import React from 'react'

const NavHamButton = ({ openNavbarNav, style }) => (
  <button type="button" onClick={openNavbarNav} className={style.navBarButton}>
    <span></span>
    <span></span>
    <span></span>
  </button>
)
export default NavHamButton
