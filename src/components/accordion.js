import React from "react"
import { Link } from "gatsby"
import style from "./accordion.module.css"

const Accordion = ({ links }) => {
  return (
    <>
      <ul className={style.navbarNav}>
        {links.map(link => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Accordion
