import React, { useEffect } from "react"
import SideBar from "./side-bar"

const Layout = ({ children }) => {
  return (
    <div>
      <aside>
        <SideBar />
      </aside>

      <main style={{ marginLeft: "16rem", padding: "2rem" }}>{children}</main>
    </div>
  )
}

export default Layout
