import React from "react"
import { Link } from "gatsby"
import style from "./nested-nav-bar.module.css"
import Accordion from "../accordion/accordion"

const NavLink = ({ item, openNavbarNav }) => {
  return (
    <li className={style.navItem}>
      <Link
        to={item.path}
        className={style.navLink}
        activeStyle={{ color: "purple" }}
        onClick={openNavbarNav}
      >
        {item.name}
      </Link>
    </li>
  )
}

const RenderNavLinks = ({ item, location, openNavbarNav }) => {
  return item.items ? (
    <>
      <Accordion content={item} location={location} />
    </>
  ) : (
    <NavLink item={item} location={location} openNavbarNav={openNavbarNav} />
  )
}

const NestedNavBar = ({ content, location, openNavbarNav }) => {
  return Array.isArray(content) ? (
    content.map((item, i) => (
      <RenderNavLinks
        item={item}
        key={i}
        location={location}
        openNavbarNav={openNavbarNav}
      />
    ))
  ) : (
    <RenderNavLinks
      item={content}
      location={location}
      openNavbarNav={openNavbarNav}
    />
  )
}

export default NestedNavBar
