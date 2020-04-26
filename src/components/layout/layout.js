import React from "react"
import SideBar from "../side-bar/side-bar"
import style from "./layout.module.css"
import { Helmet } from "react-helmet"

const Layout = props => {
  return (
    <>
      <Helmet title="spanisch-online" defer={false}>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <aside>
        <SideBar location={props.location} />
      </aside>

      <main className={style.layoutMain}>{props.children}</main>
    </>
  )
}

export default Layout
