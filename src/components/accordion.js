import React, { useState } from "react"
import { Link } from "gatsby"
import style from "./accordion.module.css"
import ListRoot from "./list-root"

const Accordion = ({ content }) => {
  const [closeAccordion, setcloseAccordion] = useState(true)

  const expandAccordion = () => {
    setcloseAccordion(!closeAccordion)
  }

  console.log("content: ", content.path)

  return (
    <>
      <li className={style.navItem}>
        <Link
          to={content.path}
          onClick={expandAccordion}
          activeStyle={{ color: "purple" }}
          className={style.navLink}
        >
          {content.name}
        </Link>
      </li>
      <ListRoot
        content={content.items}
        className={`${closeAccordion ? style.accordion : ""} ${
          style.accordionNav
        }`}
      />
    </>
  )
}

export default Accordion
