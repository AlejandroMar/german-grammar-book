import React from "react"
import { Link } from "gatsby"
import style from "./nested-nav-bar.module.css"
import Accordion from "../accordion/accordion"

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

const RenderNavLinks = ({ item, location }) => {
  return item.items ? (
    <>
      <Accordion content={item} location={location} />
    </>
  ) : (
    <NavLink item={item} location={location} />
  )
}

const NestedNavBar = ({ content, location }) => {
  return Array.isArray(content) ? (
    content.map((item, i) => (
      <RenderNavLinks item={item} key={i} location={location} />
    ))
  ) : (
    <RenderNavLinks item={content} location={location} />
  )
}

export default NestedNavBar
