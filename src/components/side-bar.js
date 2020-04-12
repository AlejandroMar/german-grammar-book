import React from "react"
import style from "./side-bar.module.css"
import sideBarData from "../data/sideBarData.yaml"
import NestedNavBar from "./nested-nav-bar"

class SideBar extends React.Component {
  render() {
    return (
      <nav className={style.navbar}>
        <ul className={style.navbarNav}>
          <NestedNavBar content={sideBarData} />
        </ul>
      </nav>
    )
  }
}

export default SideBar
