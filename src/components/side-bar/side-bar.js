import React, { useState, useEffect } from "react"
import style from "./side-bar.module.css"
import sideBarData from "../../data/sideBarData.yaml"
import NestedNavBar from "../nested-nav-bar/nested-nav-bar"

const SideBar = props => {
  const [openNavbar, setopenNavbar] = useState(false)

  const openNavbarNav = () => {
    console.log("hello")
    setopenNavbar(!openNavbar)
  }

  return (
    <nav className={`${style.navbar} ${openNavbar ? style.openNav : ""}`}>
      <button
        type="button"
        onClick={openNavbarNav}
        className={style.navBarButton}
      >
        {openNavbar ? "close" : "open"}
      </button>
      <ul className={`${style.navbarNav}`}>
        <NestedNavBar
          content={sideBarData}
          location={props.location}
          openNavbarNav={openNavbarNav}
        />
      </ul>
    </nav>
  )
}

export default SideBar
