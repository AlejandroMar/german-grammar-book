import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import style from "./accordion.module.css"
import ListRoot from "./list-root"

const Accordion = props => {
  const [openAccordion, setopenAccordion] = useState(false)

  const expandAccordion = () => {
    setopenAccordion(!openAccordion)
  }

  useEffect(() => {
    if (
      props.location &&
      String(props.location.pathname).includes(props.content.path)
    ) {
      //TODO: try to be more specific qith the matching
      //console.log(props.location.pathname)
      //console.log(props.content)
      expandAccordion(!openAccordion)
    }
  }, [])

  return (
    <>
      <li className={style.navItem}>
        <Link
          to={props.content.path}
          onClick={expandAccordion}
          activeStyle={{ color: "purple" }}
          className={style.navLink}
        >
          {props.content.name}
        </Link>
      </li>
      {openAccordion && (
        <ListRoot
          content={props.content.items}
          className={`${style.accordionNav}`}
        />
      )}
    </>
  )
}

export default Accordion
