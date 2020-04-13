import React from "react"
import SideBar from "../side-bar/side-bar"
import style from "./layout.module.css"
const Layout = props => {
  return (
    <div>
      <aside>
        <SideBar location={props.location} />
      </aside>

      <main className={style.layoutMain}>{props.children}</main>
    </div>
  )
}

export default Layout
