import React from "react"
import { Link } from "gatsby"

import style from "./nested-nav-bar.module.css"
import Accordion from "./accordion"

const NavLink = ({ item }) => {
  return (
    <li className={style.navItem}>
      <Link
        to={item.path}
        className={style.navLink}
        activeStyle={{ color: "purple" }}
      >
        {item.name}
      </Link>
    </li>
  )
}

const renderNavLinks = (item, i) => {
  return item.items ? (
    <>
      <Accordion content={item} />
    </>
  ) : (
    <NavLink item={item} />
  )
}

const NestedNavBar = ({ content }) => {
  return Array.isArray(content)
    ? content.map((item, i) => renderNavLinks(item, i))
    : renderNavLinks(content)
}

export default NestedNavBar
