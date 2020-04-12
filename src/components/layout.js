import React, { useEffect } from "react"
import SideBar from "./side-bar"

const Layout = props => {
  return (
    <div>
      <aside>
        <SideBar location={props.location} />
      </aside>

      <main style={{ marginLeft: "16rem", padding: "2rem" }}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout
