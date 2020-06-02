import cx from 'classnames'
import React, { useState } from 'react'
import NavHamButton from './nav-ham-button'
import style from './side-bar.module.css'
import { NavBarRoot } from './nav-bar-root'
import getSideBarData from '../../hooks/getSideBarData'

const SideBar = props => {
  // this query will give only three levels of recursion
  // if in need of more levels add another to the query
  const sideBarData = getSideBarData()

  const [openNavbar, setopenNavbar] = useState(false)

  const openNavbarNav = () => {
    setopenNavbar(!openNavbar)
  }

  return (
    <nav className={cx(style.navbar, openNavbar ? style.openNav : '')}>
      <NavHamButton openNavbarNav={openNavbarNav} style={style} />
      {/* nav root is the ul tag */}
      <NavBarRoot
        sideBarData={sideBarData}
        location={props.location}
        openNavbarNav={openNavbarNav}
      />
    </nav>
  )
}

export default SideBar
