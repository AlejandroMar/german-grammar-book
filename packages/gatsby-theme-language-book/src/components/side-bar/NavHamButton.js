import React from 'react'

export default function NavHamButton({ openNavbarNav, style }) {
  return (
    <button
      type="button"
      onClick={openNavbarNav}
      className={style.navBarButton}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
